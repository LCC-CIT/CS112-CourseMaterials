// Minimal SVG renderer for a graphology graph, used when sigma.js can't start
// because the browser has no WebGL. It reads the same node and edge attributes
// sigma uses (x, y, size, color, label, hidden) and redraws when the graph changes.
// No zoom or pan: the whole graph is always fitted to the container.
// options.guides (optional): function returning { xs, ys, clip } guide lines in graph
// coordinates (clip, if set, is { x0, x1, y0, y1 }: where the lines start and stop).
"use strict";

window.createSvgRenderer = function (graph, container, options) {
    const NS = "http://www.w3.org/2000/svg";
    const PADDING = 30;
    const opts = Object.assign({ labelSize: 12, edgeLabelSize: 11, font: "monospace", edgeLabelColor: "#555" }, options);

    container.innerHTML = "";
    const svg = document.createElementNS(NS, "svg");
    svg.setAttribute("width", "100%");
    svg.setAttribute("height", "100%");
    svg.style.display = "block";
    container.appendChild(svg);

    function el(name, attrs, text) {
        const node = document.createElementNS(NS, name);
        for (const [k, v] of Object.entries(attrs)) node.setAttribute(k, v);
        if (text !== undefined) node.textContent = text;
        return node;
    }

    let pending = false;
    function schedule() {
        if (pending) return;
        pending = true;
        requestAnimationFrame(draw);
    }

    function draw() {
        pending = false;
        const width = container.clientWidth;
        const height = container.clientHeight;
        svg.setAttribute("viewBox", `0 0 ${width} ${height}`);
        svg.replaceChildren();
        if (graph.order === 0) return;

        // Fit every node (hidden ones included, like sigma) into the container, keeping the aspect ratio.
        let minX = Infinity, maxX = -Infinity, minY = Infinity, maxY = -Infinity;
        graph.forEachNode((_, a) => {
            minX = Math.min(minX, a.x); maxX = Math.max(maxX, a.x);
            minY = Math.min(minY, a.y); maxY = Math.max(maxY, a.y);
        });
        const dx = maxX - minX || 1;
        const dy = maxY - minY || 1;
        const scale = Math.min((width - 2 * PADDING) / dx, (height - 2 * PADDING) / dy);
        const offX = (width - dx * scale) / 2;
        const offY = (height - dy * scale) / 2;
        const toScreen = (a) => ({
            x: offX + (a.x - minX) * scale,
            y: offY + (maxY - a.y) * scale, // graph y points up, screen y points down
        });

        const guideLayer = el("g", {});
        const edgeLayer = el("g", {});
        const nodeLayer = el("g", {});
        const labelLayer = el("g", { "font-family": opts.font });
        svg.append(guideLayer, edgeLayer, nodeLayer, labelLayer);

        // Optional dashed vertical guide lines at the given graph x positions.
        if (opts.guides) {
            const g = opts.guides();
            const px = (gx) => toScreen({ x: gx, y: minY }).x;
            const py = (gy) => toScreen({ x: minX, y: gy }).y;
            const left = g.clip ? px(g.clip.x0) : 0;
            const right = g.clip ? px(g.clip.x1) : width;
            const top = g.clip ? py(g.clip.y1) : 0;
            const bottom = g.clip ? py(g.clip.y0) : height;
            const line = (x1, y1, x2, y2) => guideLayer.appendChild(el("line", {
                x1, y1, x2, y2,
                stroke: "#c9d3df", "stroke-width": 1, "stroke-dasharray": "5 5",
            }));
            g.xs.forEach((gx) => line(px(gx), top, px(gx), bottom));
            g.ys.forEach((gy) => line(left, py(gy), right, py(gy)));
        }

        graph.forEachEdge((_, a, source, target, sa, ta) => {
            if (a.hidden || sa.hidden || ta.hidden) return;
            const p = toScreen(sa);
            const q = toScreen(ta);
            edgeLayer.appendChild(el("line", {
                x1: p.x, y1: p.y, x2: q.x, y2: q.y,
                stroke: a.color || "#ccc",
                "stroke-width": a.size || 1,
            }));
            if (a.label) {
                labelLayer.appendChild(el("text", {
                    x: (p.x + q.x) / 2, y: (p.y + q.y) / 2,
                    "font-size": opts.edgeLabelSize,
                    fill: opts.edgeLabelColor,
                    "text-anchor": "middle",
                    "dominant-baseline": "middle",
                    stroke: "#fff", "stroke-width": 3, "paint-order": "stroke",
                }, a.label));
            }
        });

        graph.forEachNode((_, a) => {
            if (a.hidden) return;
            const p = toScreen(a);
            const r = a.size || 5;
            nodeLayer.appendChild(el("circle", { cx: p.x, cy: p.y, r, fill: a.color || "#999" }));
            if (a.label) {
                labelLayer.appendChild(el("text", {
                    x: p.x + r + 3, y: p.y,
                    "font-size": opts.labelSize,
                    fill: "#000",
                    "dominant-baseline": "middle",
                    stroke: "#fbfdff", "stroke-width": 3, "paint-order": "stroke",
                }, a.label));
            }
        });
    }

    ["nodeAdded", "edgeAdded", "nodeDropped", "edgeDropped", "cleared",
        "nodeAttributesUpdated", "edgeAttributesUpdated"].forEach((evt) => graph.on(evt, schedule));
    window.addEventListener("resize", schedule);
    schedule();

    // Same shape as the bit of the sigma API the page uses.
    return { getCamera: () => ({ setState() {} }) };
};
