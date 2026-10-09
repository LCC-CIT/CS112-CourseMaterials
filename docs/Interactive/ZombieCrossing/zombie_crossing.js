// Zombie River Crossing solved step by step with Breadth-First Search.
// The page shows only states and the crossings (transitions) between them;
// the search bookkeeping (queue, depth) stays internal.
// graphology holds the state graph; sigma.js renders it.
"use strict";

(function () {
    // Show problems on the page instead of failing silently.
    function showError(message) {
        const box = document.getElementById("graph-container");
        box.innerHTML = `<div class="alert alert-danger m-3">${message}</div>`;
    }

    if (typeof graphology === "undefined" || typeof Sigma === "undefined") {
        showError("The graph libraries (graphology and sigma.js) did not load, so the demo cannot run. " +
            "Try reloading the page, or check whether a browser extension or network filter is blocking scripts.");
        document.querySelectorAll("button").forEach((b) => (b.disabled = true));
        return;
    }

    const Graph = graphology.Graph;
    const SigmaCtor = window.Sigma.Sigma || window.Sigma.default || window.Sigma;

    const COLORS = {
        start: "#2e9e4f",
        current: "#f28c18",
        state: "#3b82f6",
        unsafe: "#dc3545",
        goal: "#e0b100",
        path: "#7c3aed",
        edge: "#b8c2cc",
        edgeRevisit: "#dde3e8",
    };

    const X_SPACING = 3; // "levels" layout: distance between levels (columns)
    const Y_SPACING = 3.5; // "levels" layout: distance between states in the same level
    const GRID_X = 3;    // "grid" layout: distance between columns (humans on right bank)
    const GRID_Y = 2;    // "grid" layout: distance between rows (zombies on right bank)
    const BOAT_SHIFT = 1;   // "grid" layout: boat-on-right states sit a little below boat-on-left ones

    const $ = (id) => document.getElementById(id);
    const els = {
        humans: $("in-humans"),
        zombies: $("in-zombies"),
        capacity: $("in-capacity"),
        speed: $("in-speed"),
        layout: $("in-layout"),
        edgeLabels: $("in-edge-labels"),
        reset: $("btn-reset"),
        step: $("btn-step"),
        valid: $("btn-valid"),
        play: $("btn-play"),
        finish: $("btn-finish"),
        stepText: $("step-text"),
        river: $("river-view"),
        stats: $("stats"),
        log: $("log"),
        solution: $("solution"),
    };

    let cfg;        // { humans, zombies, capacity }
    let loads;      // every boat load that fits: [{ h, z }]
    let search;     // search bookkeeping
    let playTimer = null;

    const graph = new Graph({ type: "undirected" });
    // sigma.js draws with WebGL. If the browser can't start WebGL, fall back to
    // a simpler SVG drawing of the same graph (svg_renderer.js).
    let renderer = null;
    try {
        renderer = new SigmaCtor(graph, $("graph-container"), {
            renderEdgeLabels: true,
            labelRenderedSizeThreshold: 0,
            labelDensity: 5,
            labelGridCellSize: 40,
            labelSize: 12,
            edgeLabelSize: 11,
            labelFont: "Consolas, Menlo, monospace",
            edgeLabelFont: "Consolas, Menlo, monospace",
            defaultEdgeColor: COLORS.edge,
            edgeLabelColor: { color: "#555" },
        });
    } catch (err) {
        console.warn("sigma.js could not start WebGL, using the SVG renderer instead:", err);
        renderer = createSvgRenderer(graph, $("graph-container"), {
            labelSize: 12,
            edgeLabelSize: 11,
            font: "Consolas, Menlo, monospace",
            edgeLabelColor: "#555",
        });
        $("graph-hint").textContent = "WebGL unavailable: simple SVG view (no zoom or pan)";
        $("lock-wrap").hidden = true;
    }

    // Locking stops the graph from zooming or panning (so the page scrolls normally
    // over it). sigma 2.4 has no setting for this, but its mouse and touch handlers
    // ignore input while their `enabled` flag is false.
    function setLocked(locked) {
        if (!renderer || !renderer.getMouseCaptor) return;
        renderer.getMouseCaptor().enabled = !locked;
        renderer.getTouchCaptor().enabled = !locked;
    }
    $("in-lock").addEventListener("change", (e) => setLocked(e.target.checked));
    setLocked($("in-lock").checked);

    function resetCamera() {
        if (renderer) renderer.getCamera().setState({ x: 0.5, y: 0.5, ratio: 1, angle: 0 });
    }

    // ---------- State helpers ----------
    // A state is the number of humans and zombies on the LEFT bank plus the boat side.

    function key(s) {
        return `${s.h},${s.z},${s.boat}`;
    }

    function rightSide(s) {
        return { h: cfg.humans - s.h, z: cfg.zombies - s.z };
    }

    function label(s) {
        const r = rightSide(s);
        const left = `${s.h}H ${s.z}Z`;
        const right = `${r.h}H ${r.z}Z`;
        return s.boat === "L" ? `${left} ⛵│ ${right}` : `${left} │⛵ ${right}`;
    }

    function crossingsText(n) {
        return `${n} crossing${n === 1 ? "" : "s"}`;
    }

    function loadText(load) {
        const parts = [];
        if (load.h) parts.push(`${load.h}H`);
        if (load.z) parts.push(`${load.z}Z`);
        return parts.join(" ");
    }

    // Returns the bank ("left"/"right") where humans get eaten, or null if safe.
    function unsafeBank(s) {
        const r = rightSide(s);
        if (s.h > 0 && s.z > s.h) return "left";
        if (r.h > 0 && r.z > r.h) return "right";
        return null;
    }

    function isGoal(s) {
        return s.h === 0 && s.z === 0 && s.boat === "R";
    }

    function allLoads(capacity) {
        const result = [];
        for (let h = 0; h <= capacity; h++) {
            for (let z = 0; z <= capacity - h; z++) {
                if (h + z >= 1) result.push({ h, z });
            }
        }
        return result;
    }

    // ---------- Graph helpers ----------

    function edgeId(a, b) {
        return a < b ? `${a}|${b}` : `${b}|${a}`;
    }

    function setNodeColor(k, color) {
        if (graph.hasNode(k)) graph.setNodeAttribute(k, "color", color);
    }

    // Grid layout: the start (everyone on the left) is top-left, the goal is bottom-right.
    function gridPosition(s) {
        const r = rightSide(s);
        const shift = s.boat === "R" ? BOAT_SHIFT : 0;
        return { x: r.h * GRID_X, y: -(r.z * GRID_Y + shift) };
    }

    // Levels layout: x is the level (number of crossings from the start). The states
    // in a level (safe and unsafe) are stacked and centered, with a heading above each column.
    // Odd columns sit half a row lower than even ones, so a state's label (which extends to
    // the right) doesn't run into the states in the next column.
    function layoutLevel(depth) {
        const level = search.levels[depth];
        const n = level.length;
        const centered = (n - 1) / 2;
        const stagger = ((depth % 2) * 0.5 - (centered % 1) + 1) % 1;
        level.forEach((k, i) => {
            graph.mergeNodeAttributes(k, { x: depth * X_SPACING, y: (centered - i + stagger) * Y_SPACING });
        });
    }

    // Short headings (the page explains that they count crossings) so neighbors don't overlap.
    function levelHeading(d) {
        return d === 0 ? "Start" : String(d);
    }

    function updateHeadings() {
        const headingIds = [];
        graph.forEachNode((id) => { if (id.startsWith("heading-")) headingIds.push(id); });
        headingIds.forEach((id) => graph.dropNode(id));
        if (els.layout.value !== "levels") return;
        const tallest = Math.max(...search.levels.map((l) => l.length));
        search.levels.forEach((_, d) => {
            graph.addNode(`heading-${d}`, {
                x: d * X_SPACING,
                y: ((tallest - 1) / 2 + 1.5) * Y_SPACING,
                size: 0.1,
                color: "#6c757d",
                label: levelHeading(d),
            });
        });
    }

    // sigma fits the camera to the nodes, not their labels. A hidden node past the
    // right-most column leaves room for its labels and fixes the view size in grid mode.
    const LABEL_ROOM = 2.5;
    function updatePad() {
        const pos = els.layout.value === "levels"
            ? { x: (search.levels.length - 1) * X_SPACING + 2 * LABEL_ROOM, y: 0 }
            : { x: cfg.humans * GRID_X + LABEL_ROOM, y: -(cfg.zombies * GRID_Y + BOAT_SHIFT) };
        if (graph.hasNode("pad")) graph.mergeNodeAttributes("pad", pos);
        else graph.addNode("pad", { ...pos, size: 0, hidden: true });
    }

    function layoutAll() {
        if (els.layout.value === "levels") {
            search.levels.forEach((_, d) => layoutLevel(d));
        } else {
            search.states.forEach((s, k) => graph.mergeNodeAttributes(k, gridPosition(s)));
            search.unsafeStates.forEach((s, k) => graph.mergeNodeAttributes(k, gridPosition(s)));
        }
        $("level-note").hidden = els.layout.value !== "levels";
        updateHeadings();
        updatePad();
        resetCamera();
    }

    // Adds a state (safe or unsafe) to the graph in the column for its level.
    function addStateNode(s, depth, color, nodeLabel, size) {
        const k = key(s);
        if (!search.levels[depth]) search.levels[depth] = [];
        search.levels[depth].push(k);
        graph.addNode(k, { ...gridPosition(s), size, color, label: nodeLabel });
        if (els.layout.value === "levels") {
            layoutLevel(depth);
            updateHeadings();
        }
        updatePad();
    }

    function addTransitionEdge(a, b, load, color, size) {
        const id = edgeId(a, b);
        if (graph.hasEdge(id)) return;
        graph.addUndirectedEdgeWithKey(id, a, b, {
            label: els.edgeLabels.checked ? loadText(load) : "",
            loadText: loadText(load),
            color,
            size,
        });
    }

    // An unsafe state stays on the graph (red) so students can see where the search ran into it.
    function addUnsafeNode(fromKey, s, load) {
        const k = key(s);
        if (!graph.hasNode(k)) {
            addStateNode(s, search.depth.get(fromKey) + 1, COLORS.unsafe, `✗ ${label(s)}`, 8);
            search.unsafe.add(k);
            search.unsafeStates.set(k, s);
        }
        addTransitionEdge(fromKey, k, load, COLORS.unsafe, 1);
    }

    // ---------- Search, one try at a time ----------
    // One step either picks the next state to move from, or tries one boat load from it.

    function resetSearch() {
        stopPlay();
        cfg = {
            humans: clampInput(els.humans, 1, 6),
            zombies: clampInput(els.zombies, 1, 6),
            capacity: clampInput(els.capacity, 1, 4),
        };
        loads = allLoads(cfg.capacity);

        graph.clear();
        const start = { h: cfg.humans, z: cfg.zombies, boat: "L" };
        const startKey = key(start);
        search = {
            startKey,
            queue: [startKey],
            states: new Map([[startKey, start]]),
            parent: new Map(),
            depth: new Map([[startKey, 0]]),
            levels: [],
            unsafe: new Set(),
            unsafeStates: new Map(),
            current: null,
            moveIdx: 0,
            iterations: 0,
            tries: 0,
            done: false,
            goalKey: null,
        };
        addStateNode(start, 0, COLORS.start, label(start), 9);
        resetCamera();

        els.log.innerHTML = "";
        els.solution.className = "small text-muted";
        els.solution.textContent = "Not found yet.";
        if (unsafeBank(start)) {
            search.done = true;
            showStep("exhausted", "The start state is already unsafe (more zombies than humans).", start);
        } else {
            showStep(null, "Press <strong>Step</strong> to begin.", start);
        }
        updateControls();
    }

    function clampInput(input, min, max) {
        let v = parseInt(input.value, 10);
        if (isNaN(v)) v = min;
        v = Math.min(max, Math.max(min, v));
        input.value = v;
        return v;
    }

    function stepOnce() {
        if (search.done) return null;
        search.iterations++;

        // Finished trying every load from the current state: it is no longer the current state.
        if (search.current !== null && search.moveIdx >= loads.length) {
            const k = search.current;
            setNodeColor(k, k === search.startKey ? COLORS.start : COLORS.state);
            search.current = null;
        }

        if (search.current === null) {
            if (search.queue.length === 0) {
                search.done = true;
                return { kind: "exhausted", text: "There are no more states to move from, so every reachable state has been explored. <strong>No solution exists.</strong>" };
            }
            const k = search.queue.shift();
            search.current = k;
            search.moveIdx = 0;
            setNodeColor(k, COLORS.current);
            const s = search.states.get(k);
            return {
                kind: "dequeue",
                text: `Now moving from <span class="mono">${label(s)}</span>, a state that is ${crossingsText(search.depth.get(k))} from the start. Try each possible boat load.`,
                from: s,
            };
        }

        const fromKey = search.current;
        const from = search.states.get(fromKey);
        const load = loads[search.moveIdx++];
        search.tries++;
        const goingRight = from.boat === "L";
        const bank = goingRight ? { h: from.h, z: from.z } : rightSide(from);
        const dirText = goingRight ? "left → right" : "right → left";
        const tryText = `Try sending <strong>${loadText(load)}</strong> ${dirText} from <span class="mono">${label(from)}</span>`;

        if (load.h > bank.h || load.z > bank.z) {
            return {
                kind: "impossible",
                text: `${tryText}: not possible, only ${bank.h}H ${bank.z}Z on the ${goingRight ? "left" : "right"} bank.`,
                from,
            };
        }

        const sign = goingRight ? -1 : 1;
        const to = { h: from.h + sign * load.h, z: from.z + sign * load.z, boat: goingRight ? "R" : "L" };
        const toKey = key(to);
        const bad = unsafeBank(to);

        if (bad) {
            addUnsafeNode(fromKey, to, load);
            return {
                kind: "unsafe",
                text: `${tryText} → <span class="mono">${label(to)}</span>: <strong>unsafe</strong>, zombies outnumber humans on the ${bad} bank.`,
                from, to, bad,
            };
        }

        if (search.states.has(toKey)) {
            addTransitionEdge(fromKey, toKey, load, COLORS.edgeRevisit, 1);
            return {
                kind: "revisit",
                text: `${tryText} → <span class="mono">${label(to)}</span>: legal, but this state was already found.`,
                from, to,
            };
        }

        // A new legal state: record how we got here and remember to move from it later.
        const depth = search.depth.get(fromKey) + 1;
        search.states.set(toKey, to);
        search.parent.set(toKey, { from: fromKey, load, dirText });
        search.depth.set(toKey, depth);
        addStateNode(to, depth, isGoal(to) ? COLORS.goal : COLORS.state, label(to), 9);
        addTransitionEdge(fromKey, toKey, load, COLORS.edge, 2);

        if (isGoal(to)) {
            search.done = true;
            search.goalKey = toKey;
            highlightSolution();
            return {
                kind: "goal",
                text: `${tryText} → <span class="mono">${label(to)}</span>: <strong>goal reached!</strong> Everyone is across in ${depth} crossings.`,
                from, to,
            };
        }

        search.queue.push(toKey);
        return {
            kind: "new",
            text: `${tryText} → <span class="mono">${label(to)}</span>: legal, and a new state (${crossingsText(depth)} from the start).`,
            from, to,
        };
    }

    // ---------- Solution path ----------

    function solutionPath() {
        const steps = [];
        let k = search.goalKey;
        while (search.parent.has(k)) {
            const p = search.parent.get(k);
            steps.unshift({ fromKey: p.from, toKey: k, load: p.load, dirText: p.dirText });
            k = p.from;
        }
        return steps;
    }

    function highlightSolution() {
        const steps = solutionPath();
        steps.forEach((st) => {
            if (st.fromKey !== search.startKey) setNodeColor(st.fromKey, COLORS.path);
            const id = edgeId(st.fromKey, st.toKey);
            graph.setEdgeAttribute(id, "color", COLORS.path);
            graph.setEdgeAttribute(id, "size", 4);
        });
        setNodeColor(search.current, search.current === search.startKey ? COLORS.start : COLORS.path);

        const items = steps.map((st, i) => {
            const to = search.states.get(st.toKey);
            return `<li>Send <strong>${loadText(st.load)}</strong> ${st.dirText} → <span class="mono">${label(to)}</span></li>`;
        });
        els.solution.className = "small";
        els.solution.innerHTML =
            `<p class="mb-1">Shortest solution: <strong>${steps.length} crossings</strong>, found after ${search.tries} tries ` +
            `(${search.states.size} safe states found).</p>` +
            `<p class="mb-1">Start: <span class="mono">${label(search.states.get(search.startKey))}</span></p>` +
            `<ol class="mb-0">${items.join("")}</ol>`;
    }

    // ---------- UI ----------

    const TAGS = {
        dequeue: "moving from",
        impossible: "can't",
        unsafe: "unsafe",
        revisit: "seen",
        new: "new state",
        goal: "goal",
        exhausted: "done",
    };

    function bankHtml(h, z) {
        return "🧑".repeat(h) + (h && z ? "<br>" : "") + "🧟".repeat(z) || "&nbsp;";
    }

    function riverHtml(s, bad) {
        if (!s) return "";
        const r = rightSide(s);
        return (
            `<div class="river${bad ? " unsafe" : ""}">` +
            `<div class="bank${bad === "left" ? " bad" : ""}">${bankHtml(s.h, s.z)}</div>` +
            `<div class="water ${s.boat === "R" ? "right" : ""}">🚣</div>` +
            `<div class="bank${bad === "right" ? " bad" : ""}">${bankHtml(r.h, r.z)}</div>` +
            `</div>`
        );
    }

    function showStep(kind, text, from, to, bad) {
        els.stepText.innerHTML = (kind ? `<span class="tag tag-${kind}">${TAGS[kind]}</span>` : "") + text;
        let html = "";
        if (from) html += `<div class="river-caption">${to ? "From" : "State"}</div>` + riverHtml(from);
        if (to) html += `<div class="river-caption">To</div>` + riverHtml(to, bad);
        els.river.innerHTML = html;

        els.stats.innerHTML =
            (search.current !== null
                ? `Moving from level: <strong>${crossingsText(search.depth.get(search.current))}</strong> · `
                : "") +
            `Tries: <strong>${search.tries}</strong> · ` +
            `Safe states found: <strong>${search.states.size}</strong> · ` +
            `Unsafe states hit: <strong>${search.unsafe.size}</strong>`;
    }

    function logResult(res) {
        const li = document.createElement("li");
        li.innerHTML = `<span class="tag tag-${res.kind}">${TAGS[res.kind]}</span>${res.text}`;
        li.value = search.iterations;
        els.log.prepend(li);
    }

    function apply(res) {
        if (!res) return;
        logResult(res);
        showStep(res.kind, res.text, res.from, res.to, res.bad);
        updateControls();
    }

    function doStep() {
        apply(stepOnce());
    }

    // Keep stepping until a legal crossing (new or already-seen state) is found.
    function doStepToValid() {
        let res;
        do {
            res = stepOnce();
            if (res) logResult(res);
        } while (res && !["new", "revisit", "goal", "exhausted"].includes(res.kind));
        if (res) showStep(res.kind, res.text, res.from, res.to, res.bad);
        updateControls();
    }

    function doFinish() {
        stopPlay();
        let res, last;
        while ((res = stepOnce())) {
            logResult(res);
            last = res;
        }
        if (last) showStep(last.kind, last.text, last.from, last.to, last.bad);
        updateControls();
    }

    function stopPlay() {
        if (playTimer) clearTimeout(playTimer);
        playTimer = null;
        els.play.textContent = "▶ Play";
    }

    function tick() {
        doStep();
        if (search.done) stopPlay();
        else playTimer = setTimeout(tick, 1600 - parseInt(els.speed.value, 10));
    }

    function togglePlay() {
        if (playTimer) {
            stopPlay();
        } else {
            els.play.textContent = "⏸ Pause";
            tick();
        }
    }

    function updateControls() {
        const done = search.done;
        els.step.disabled = done;
        els.valid.disabled = done;
        els.play.disabled = done;
        els.finish.disabled = done;
    }

    els.step.addEventListener("click", doStep);
    els.valid.addEventListener("click", doStepToValid);
    els.play.addEventListener("click", togglePlay);
    els.finish.addEventListener("click", doFinish);
    els.reset.addEventListener("click", resetSearch);
    els.layout.addEventListener("change", layoutAll);
    [els.humans, els.zombies, els.capacity].forEach((input) => input.addEventListener("change", resetSearch));
    els.edgeLabels.addEventListener("change", () => {
        graph.forEachEdge((e, attrs) => {
            graph.setEdgeAttribute(e, "label", els.edgeLabels.checked ? attrs.loadText : "");
        });
    });

    resetSearch();
})();
