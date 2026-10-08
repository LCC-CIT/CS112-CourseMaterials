---
title: Other Types of Symbolic AI
description: Exploring rule-based expert systems, logic programming, knowledge representation, automated planning, and constraint satisfaction in GOFAI.
keywords: Symbolic AI, GOFAI, expert systems, rule-based systems, forward chaining, backward chaining, Prolog, logic programming, semantic networks, frames, automated planning, STRIPS, CSP, neuro-symbolic
generator: Typora
author: Brian Bird
---

<h1>Other Types of Symbolic AI (GOFAI)</h1>

**CS123, Intro to AI**



<h2>Table of Contents</h2>

[TOC]

# Introduction: Beyond State-Space Search

In [Problem Solving Revisited](CS112-Topic02-1-ProblemSolving2.html), we looked at how AI agents can solve problems using **state-space search** (like using Breadth-First Search to solve river-crossing logic puzzles) and **adversarial search** (like using the Minimax algorithm to find optimal moves in game trees for Tic-Tac-Toe and Nim).

Those techniques represent one foundational branch of classical AI. But **Symbolic AI**&mdash;often referred to as **GOFAI** (*Good Old-Fashioned Artificial Intelligence*)[^1]&mdash;encompasses a much wider variety of methods. 

### The Physical Symbol System Hypothesis

In 1976, Turing Award winners Allen Newell and Herbert Simon articulated the philosophy underlying all of symbolic AI:

> *"A physical symbol system has the necessary and sufficient means for general intelligent action."*  
> &mdash; Allen Newell and Herbert A. Simon

Under this hypothesis, thinking is viewed as the formal manipulation of **symbols** according to explicit rules of logic and syntax. Words, numbers, tokens, and data structures stand for objects and ideas in the physical world.

In this set of notes, we will explore the major types of Symbolic AI that go beyond graph-based game search:

1. **Rule-Based Systems & Expert Systems** (Inference engines that think with `IF...THEN` rules)
2. **Formal Logic & Logic Programming** (Prolog and automated theorem proving)
3. **Structured Knowledge Representation** (Semantic Networks, Frames, and Ontologies)
4. **Symbolic Automated Planning** (Formulating sequences of actions with STRIPS)
5. **Constraint Satisfaction Problems (CSPs)** (Solving puzzles by pruning possibilities)
6. **Strengths, Limitations, and the Rise of Neuro-Symbolic AI**

---

# Rule-Based Systems & Expert Systems

During the 1970s and 1980s, the most commercially successful application of symbolic AI was the **Expert System**[^2]. An expert system is an AI program designed to emulate the decision-making ability of a human expert in a specialized domain (such as diagnosing bacterial infections, configuring mainframe hardware, or diagnosing mechanical faults).

```
+--------------------------------------------------------------+
|                     EXPERT SYSTEM                            |
|                                                              |
|  +---------------------+           +----------------------+  |
|  |   Knowledge Base    |           |    Working Memory    |  |
|  |  (Domain Rules:     |           |   (Current Facts &   |  |
|  |   IF ... THEN ...)  |           |     Observations)    |  |
|  +----------+----------+           +----------+-----------+  |
|             |                                 |              |
|             +--------------+   +--------------+              |
|                            |   |                             |
|                            v   v                             |
|                    +-------------------+                     |
|                    | Inference Engine  |                     |
|                    | (Forward/Backward |                     |
|                    |    Chaining)      |                     |
|                    +---------+---------+                     |
+------------------------------|-------------------------------+
                               v
                     Conclusions / Advice
```

### Core Architecture

An expert system typically separates **domain knowledge** from the **reasoning engine**:

1. **Knowledge Base**: Contains declarative domain-specific knowledge, usually structured as a collection of *production rules* (`IF <conditions> THEN <action or conclusion>`).
2. **Working Memory (Fact Base)**: Holds the current facts known to be true about the specific problem instance being evaluated.
3. **Inference Engine**: The algorithm that matches rules against current facts to derive new facts or recommend decisions.
4. **Explanation Facility**: A module that can trace the chain of rules fired to answer user questions like *"Why did you ask for that symptom?"* or *"How did you reach that diagnosis?"*

---

## Production Rules

Production rules take the general form:

$$\text{IF } \langle\text{condition}_1 \land \text{condition}_2 \land \dots\rangle \text{ THEN } \langle\text{conclusion or action}\rangle$$

For example, in an automotive diagnostic system:
- **Rule 1**: `IF engine_turns_over = false AND lights_work = false THEN problem = dead_battery`
- **Rule 2**: `IF engine_turns_over = false AND lights_work = true THEN problem = faulty_starter`
- **Rule 3**: `IF engine_turns_over = true AND fuel_gauge = empty THEN problem = out_of_gas`

---

## Two Directions of Reasoning: Forward vs. Backward Chaining

Inference engines generally operate in one of two fundamental reasoning styles:

### 1. Forward Chaining (Data-Driven Reasoning)

- **How it works**: Starts with known facts in working memory and applies rules to infer new facts. It continues in cycles until no more rules apply or a target conclusion is reached.
- **Direction**: From *data* $\rightarrow$ to *conclusions*.
- **Best used for**: Monitoring, process control, system configuration, and automated synthesis (where you already have lots of incoming sensor data and want to know what it means).

**Example Walkthrough**:
- *Initial Facts*: 
  1. `temperature > 100`
  2. `steam_valve = closed`
- *Rule 10*: `IF temperature > 100 THEN boiler_status = overheating`
- *Rule 11*: `IF boiler_status = overheating AND steam_valve = closed THEN action = sound_evacuation_alarm`
- *Cycle 1*: Rule 10 fires $\rightarrow$ adds new fact `boiler_status = overheating` to Working Memory.
- *Cycle 2*: Rule 11 now matches $\rightarrow$ fires and triggers `action = sound_evacuation_alarm`.

### 2. Backward Chaining (Goal-Driven Reasoning)

- **How it works**: Starts with a hypothesized goal (e.g., *"Does the patient have strep throat?"*) and checks whether the knowledge base supports it. If the rules that conclude this goal require facts that are currently unknown, those conditions become *sub-goals*. The engine recursively attempts to prove the sub-goals or prompts the user for answers.
- **Direction**: From *hypothesis* $\rightarrow$ down to *supporting evidence*.
- **Best used for**: Diagnosis, auditing, troubleshooting, and interactive consultations (where asking the user every possible question would be tedious).

**Comparison at a Glance**:

| Characteristic | Forward Chaining | Backward Chaining |
| :--- | :--- | :--- |
| **Philosophy** | "Here are all the facts; what follows?" | "Here is a hypothesis; what evidence proves it?" |
| **Starting Point** | Observed data / facts | Hypothesized goal |
| **Typical Use** | Real-time monitoring, synthesis, planning | Medical diagnosis, fault isolation, auditing |
| **Efficiency** | Can generate many irrelevant facts | Focuses only on rules relevant to the target goal |

---

## Historic Milestone Expert Systems

- **DENDRAL (1965)**: Developed at Stanford by Edward Feigenbaum, Joshua Lederberg, and Bruce Buchanan. It analyzed chemical mass spectrometry data to identify unknown molecular structures. It was one of the first programs to prove that computers could rival human scientific specialists when armed with domain-specific rules.
- **MYCIN (1976)**: Developed by Edward Shortliffe at Stanford. It diagnosed infectious blood diseases (such as meningitis and bacteremia) and recommended appropriate antibiotic dosages. MYCIN introduced **certainty factors** (a predecessor to probabilistic reasoning) to handle uncertain medical assertions. In clinical evaluations, MYCIN often scored higher in prescribing accuracy than human infectious disease faculty.
- **XCON / R1 (1978)**: Developed by Digital Equipment Corporation (DEC) and John McDermott. It automatically configured complex VAX minicomputer orders based on customer requirements, saving DEC millions of dollars annually.

---

# Logic and Automated Reasoning

Search algorithms explore paths, but formal logic allows machines to perform **sound deductions**&mdash;guaranteeing that if the starting premises are true, any conclusion derived by the system is also undeniably true.

## Propositional Logic vs. First-Order Logic

- **Propositional Logic**: Deals with whole statements (propositions) that are either true or false (e.g., $P \land Q \rightarrow R$). While simple, it cannot talk about individual objects, categories, or relationships.
- **First-Order Predicate Logic (FOL)**: Adds expressive power by introducing:
  - **Constants**: Specific entities (`socrates`, `fido`, `earth`).
  - **Variables**: Placeholders (`X`, `Y`).
  - **Predicates**: Properties or relationships (`Human(X)`, `Mortal(X)`, `Sibling(X, Y)`).
  - **Quantifiers**: Universal ($\forall$, "for all") and Existential ($\exists$, "there exists").

Classic Syllogism in FOL:
$$\forall X \, (\text{Human}(X) \rightarrow \text{Mortal}(X))$$
$$\text{Human}(\text{socrates})$$
$$\therefore \text{Mortal}(\text{socrates})$$

---

## Logic Programming: Prolog

In conventional imperative programming (like Python, C++, or Java), the programmer writes explicit, step-by-step instructions on **how** to solve a problem.

In **Logic Programming**, the programmer specifies **what** is true (facts and rules) in a declarative language, and the language's built-in inference engine determines **how** to answer queries. The primary logic programming language is **Prolog** (*Programming in Logic*), developed by Alain Colmerauer and Philippe Roussel in 1972.

### A Simple Prolog Example

```prolog
% FACTS: Define basic relationships
parent(bob, ann).
parent(bob, pat).
parent(carol, bob).
female(ann).
female(carol).
male(bob).
male(pat).

% RULES: Define logical inferences
mother(M, Child) :- parent(M, Child), female(M).
grandparent(GP, GC) :- parent(GP, P), parent(P, GC).
sister(X, Y) :- parent(P, X), parent(P, Y), female(X), X \= Y.
```

### Interacting with Prolog

A user queries the knowledge base:

```prolog
?- mother(carol, bob).
true.

?- grandparent(carol, ann).
true.

?- grandparent(carol, Who).
Who = ann ;
Who = pat.
```

### How Prolog Thinks

Under the hood, Prolog uses two key symbolic mechanisms:
1. **Unification**: A pattern-matching algorithm that finds variable substitutions that make two logical expressions identical (e.g., matching `parent(carol, P)` against `parent(carol, bob)` binds `P = bob`).
2. **Resolution Refutation with Backtracking**: If Prolog explores a branch of rules that fails to prove the query, it automatically rewinds (backtracks) to try alternate rules or bindings until all possibilities are exhausted.

---

# Knowledge Representation: Networks, Frames, and Ontologies

Writing thousands of standalone `IF...THEN` rules can quickly lead to an unmanageable tangle of code. To organize complex human knowledge more naturally, AI researchers developed structured **Knowledge Representation (KR)** formalisms.

```
       +---------------+
       |    Animal     |
       +-------+-------+
               ^
               | is-a
       +-------+-------+
       |     Bird      | <---+ can-fly (true)
       +-------+-------+
               ^
               | is-a
       +-------+-------+
       |    Penguin    | <---+ can-fly (false - overrides default)
       +-------+-------+
               ^
               | is-a
       +-------+-------+
       |    Tuxedo     |
       +---------------+
```

---

## 1. Semantic Networks

Invented in the late 1960s by Allan Collins and M. Ross Quillian, a **Semantic Network** represents knowledge as a directed graph:
- **Nodes**: Represent concepts, categories, or individual entities.
- **Edges**: Represent labeled semantic relationships (e.g., `is-a`, `has-part`, `color-of`).

### Property Inheritance
One of the key strengths of semantic networks is **inheritance**. If the network knows that:
- `Robin` $\xrightarrow{\text{is-a}}$ `Bird`
- `Bird` $\xrightarrow{\text{has-part}}$ `Wings`

Then any query asking whether a `Robin` has `Wings` can inherit that fact up the taxonomy chain without having to explicitly re-state it for every species of bird.

---

## 2. Marvin Minsky's Frames

In 1974, cognitive scientist Marvin Minsky introduced **Frames**[^3] as a framework for representing common-sense knowledge about stereotyped situations or objects.

A **Frame** is a record-like structure containing named **slots**, where each slot can hold values, references to other frames, or default expectations:

```
Frame: Automobile
  Specialization-of: LandVehicle
  Number-of-Wheels: 4 (default)
  Fuel-Type: Gasoline (default)
  Engine: [Pointer to Engine Frame]
  Driver: [Pointer to Person Frame]
  If-Needed Daemon: Calculate current mileage from odometer
```

### Why Frames Were Revolutionary:
- **Default Values**: Humans assume an automobile has 4 wheels unless told otherwise. Frames captured these common-sense defaults.
- **Procedural Attachments (Daemons)**: Slots can trigger code when accessed (`if-needed`) or updated (`if-added`), enabling reactive behavior.
- **Precursor to Object-Oriented Programming (OOP)**: Frames directly influenced languages like Smalltalk and the class/object models we use today.

---

## 3. Ontologies & Knowledge Graphs

An **Ontology** is a formal, explicit specification of a shared conceptualization within a domain. It specifies:
- The classes of entities that exist.
- The permissible relationships between classes.
- Axioms that constrain how those concepts interact.

### The Cyc Project: Teaching Computers Common Sense
In 1984, computer scientist Douglas Lenat founded the **Cyc Project**[^4]. Lenat observed that AI systems were brilliant at narrow tasks (like chess or spectrometry) but lacked simple common sense&mdash;such as knowing that:
- *When people die, they stay dead.*
- *Parents are older than their biological children.*
- *You cannot be in two places at the same time.*

Over four decades, Cyc researchers manually codified millions of human common-sense rules and concepts into a vast first-order logic ontology (`CycL`).

Today, large-scale semantic networks and ontologies are known as **Knowledge Graphs** (such as the Google Knowledge Graph, Wikidata, and DBpedia), powering semantic search engines and voice assistants.

---

# Symbolic Automated Planning

In standard search (like BFS on the river-crossing puzzle), the computer blindly explores individual state transitions until it stumbles onto the goal.

In **Automated Planning**, an agent reasons about its own intentions and available actions, systematically decomposing a high-level goal into an ordered sequence of actions.

```
       [ Goal: Stack A on B on C ]
                   |
     +-------------+-------------+
     v                           v
Subgoal 1:                  Subgoal 2:
Clear Block B               Place Block A on B
```

---

## The STRIPS Representation

Developed in 1971 by Richard Fikes and Nils Nilsson at SRI International for the Shakey the Robot project, **STRIPS** (*Stanford Research Institute Problem Solver*) represents planning problems using three components for every action:

1. **Preconditions**: Logical facts that must be true in the world before the action can be executed.
2. **Add-List**: Facts that become true as a result of executing the action.
3. **Delete-List**: Facts that are no longer true after executing the action.

### The Classic Blocks World Example

Consider three toy blocks (`A`, `B`, `C`) sitting on a table:

```
Action: Move(Block, From, To)
  Preconditions:
    - Clear(Block)          (Nothing is on top of Block)
    - Clear(To)             (Destination is open)
    - On(Block, From)       (Block is currently sitting on From)
  Delete-List:
    - On(Block, From)
    - Clear(To)
  Add-List:
    - On(Block, To)
    - Clear(From)
```

By working backward from the goal state (e.g., `On(A, B) AND On(B, C)`) toward the start state using **Means-Ends Analysis**, a planning algorithm finds an action whose Add-List satisfies a piece of the goal, and recursively solves any unsatisfied preconditions.

---

## Terry Winograd's SHRDLU (1971)

One of the most famous early demonstrations of symbolic planning and Natural Language Processing was **SHRDLU**, built by Terry Winograd at MIT. 

Users could type conversational English commands to a simulated robot arm in a virtual tabletop world of colored blocks and pyramids:
- **User**: *"Pick up a big red block."*
- **SHRDLU**: *"I don't know which one you mean, the one on the box or the one on the table?"*
- **User**: *"The one on the table."*
- **SHRDLU**: (Plans the sequence: moves the green cone off the red block, grasps the red block, and lifts it) *"OK."*

SHRDLU combined syntax parsing, semantic networks, and STRIPS-style planning, demonstrating how symbolic subsystems could work together coherently.

---

# Constraint Satisfaction Problems (CSPs)

Many complex problems in artificial intelligence are not games or sequential mazes, but rather configuration puzzles. A **Constraint Satisfaction Problem (CSP)**[^5] is formulated using three mathematical elements:

1. **Variables ($X$)**: A set of entities that need values assigned $\{X_1, X_2, \dots, X_n\}$.
2. **Domains ($D$)**: The set of allowable values for each variable $\{D_1, D_2, \dots, D_n\}$.
3. **Constraints ($C$)**: Specific rules that restrict allowable combinations of values.

---

## Classic Examples of CSPs

- **Map Coloring**: Given a map of neighboring territories, assign colors (e.g., Red, Green, Blue) such that no two adjacent territories share the same color.
  - *Variables*: Regions / Countries.
  - *Domain*: `{Red, Green, Blue}`.
  - *Constraint*: $\text{Color}(Region_A) \neq \text{Color}(Region_B)$ for all shared borders.
- **Sudoku**:
  - *Variables*: 81 grid cells.
  - *Domain*: Integers $1$ through $9$.
  - *Constraints*: No duplicate digits in any row, column, or $3 \times 3$ block.
- **Course Scheduling / Timetabling**: Assigning classrooms, timeslots, and instructors without double-booking rooms or scheduling conflicts.

---

## Solving CSPs: Propagation vs. Brute-Force

If you tried to solve an $81$-cell Sudoku puzzle using brute-force search, you would face $9^{81} \approx 1.96 \times 10^{77}$ combinations&mdash;far more states than there are atoms in the observable universe!

CSPs are solved efficiently by combining:
1. **Backtracking Search**: Assigning one variable at a time and backing up as soon as a constraint is violated.
2. **Constraint Propagation (Arc Consistency / AC-3)**: Whenever a variable is assigned a value, immediately filter and eliminate impossible values from the domains of neighboring variables. 

Often, constraint propagation solves large portions of the puzzle deterministically before any guesswork or branching is required.

---

# Strengths, Limitations, and the Modern Era

Symbolic AI dominated artificial intelligence research and commercial applications from the 1950s through the late 1980s. Understanding both its triumphs and its hurdles explains why the field evolved into modern machine learning.

## Strengths of Symbolic AI

1. **Explainability & Transparency ("White Box")**:
   - Every inference made by an expert system or theorem prover has an explicit audit trail. The system can state exactly which rules and facts led to its conclusion. This is invaluable in law, medicine, and aviation safety.
2. **Guaranteed Logical Soundness**:
   - Conclusions derived via formal logic are mathematically guaranteed to be correct, provided the premises and rules are accurate. Unlike Large Language Models (LLMs), symbolic systems do not "hallucinate" incorrect deductions.
3. **Sample Efficiency (Zero Training Data Required)**:
   - A symbolic system does not require billions of training examples or millions of dollars in GPU computing power. A human subject-matter expert can write down 50 rules and immediately produce a functioning system.

---

## The Limitations of Pure GOFAI

Despite its early successes, pure symbolic AI encountered fundamental obstacles that contributed to the "AI Winters":

- **The Knowledge Acquisition Bottleneck**:
  - Human expertise is often intuitive and tacit. It is notoriously difficult for doctors, engineers, or translators to articulate everything they know into thousands of rigid, non-contradictory `IF...THEN` rules.
- **Brittleness**:
  - Symbolic systems function well within their explicitly programmed microworld, but break down catastrophically when encountering noisy data, misspelled input, or edge cases outside their rule base.
- **The Frame Problem & Common Sense**:
  - Describing not only what changes after an action, but explicitly stating what *does not* change, creates massive computational bookkeeping in logic.
- **The Symbol Grounding Problem**[^6]:
  - Coined by philosopher Stevan Harnad: How do abstract symbols inside a computer (like the token `'CHAIR'` or `'APPLE'`) connect to raw sensory perception (like photon wavelengths striking a camera sensor)? Pure symbolic AI struggles with perception, speech recognition, and raw sensor interpretation.

---

## The Modern Resurgence: Neuro-Symbolic AI

Rather than viewing Symbolic AI and Connectionist AI (Neural Networks and Deep Learning) as enemies, modern AI researchers increasingly combine them into **Neuro-Symbolic AI**[^7]:

```
+-------------------------------------------------------------+
|                     NEURO-SYMBOLIC AI                       |
|                                                             |
|  [ Neural Networks / LLMs ]      [ Symbolic Reasoners ]     |
|   - Perception & Vision           - Knowledge Graphs        |
|   - Natural Language Handling     - Logic & Sound Deduction |
|   - Pattern Recognition           - Explicit Constraints    |
|   - Intuition & Probabilities     - Verifiable Explanations |
|            \                             /                  |
|             \                           /                   |
|              v                         v                    |
|        Combined: Reliable, Transparent, Capable AI          |
+-------------------------------------------------------------+
```

Examples of Neuro-Symbolic systems today:
- **LLM Tool Use & Knowledge Retrieval (RAG)**: Pairing language models with structured knowledge graphs and SQL databases so the model reasons over factual data rather than hallucinating.
- **Autonomous Vehicles**: Using neural networks to detect pedestrians, lanes, and cars in video feeds, coupled with symbolic rule systems to enforce strict, unbendable traffic safety laws.
- **Mathematical and Scientific Discovery**: Systems like AlphaGeometry (DeepMind) pair a neural network to suggest intuitive geometric constructions with a symbolic deduction engine to verify formal geometric proofs.

---

# Summary

| Paradigm | How Knowledge is Represented | How Decisions are Made | Classic Examples |
| :--- | :--- | :--- | :--- |
| **State-Space Search** *(Notes Pt. 1)* | States and transitions | Graph search (BFS, DFS, Minimax) | River crossing, Chess, Tic-Tac-Toe |
| **Expert Systems** | Production rules (`IF...THEN`) | Forward / Backward chaining | MYCIN, DENDRAL, XCON |
| **Logic Programming** | Predicates, Horn clauses, facts | Unification, Resolution & Backtracking | Prolog, automated theorem provers |
| **Knowledge Representations** | Semantic networks, Frames, Ontologies | Property inheritance, default slots | Minsky Frames, Cyc, Knowledge Graphs |
| **Automated Planning** | States, Preconditions, Effects | Means-Ends Analysis, goal regression | STRIPS, SHRDLU, Blocks World |
| **Constraint Satisfaction** | Variables, domains, constraints | Constraint propagation (AC-3), backtracking | Sudoku, Map Coloring, Scheduling |
| **Neuro-Symbolic** | Hybrid (Vectors + Symbols) | Neural intuition validated by symbolic rules | AlphaGeometry, Graph-augmented LLMs |

---

# Reference

- [Elements of AI](https://www.elementsofai.com/)&mdash;University of Helsinki and MinnaLearn, 2024. Chapter 2: "AI Problem Solving".
- Russell, Stuart, and Peter Norvig. *Artificial Intelligence: A Modern Approach*. 4th ed., Pearson, 2020. Chapters 7&ndash;11 (Logic, Knowledge Representation, Classical Planning, Constraint Satisfaction).
- Newell, Allen, and Herbert A. Simon. "Computer Science as Empirical Inquiry: Symbols and Search." *Communications of the ACM*, vol. 19, no. 3, 1976, pp. 113&ndash;126.
- Minsky, Marvin. "A Framework for Representing Knowledge." *MIT-AI Laboratory Memo 306*, 1974.
- Buchanan, Bruce G., and Edward H. Shortliffe. *Rule-Based Expert Systems: The MYCIN Experiments of the Stanford Heuristic Programming Project*. Addison-Wesley, 1984.
- Nilsson, Nils J. *The Quest for Artificial Intelligence: A History of Ideas and Achievements*. Cambridge University Press, 2010.
- [Good Old-Fashioned Artificial Intelligence (GOFAI)](https://en.wikipedia.org/wiki/GOFAI)&mdash;Wikipedia.
- [Neuro-symbolic AI](https://research.ibm.com/topics/neuro-symbolic-ai)&mdash;IBM Research.

[^1]: **GOFAI** stands for *Good Old-Fashioned Artificial Intelligence*, a term coined by philosopher John Haugeland in his 1985 book *Artificial Intelligence: The Very Idea*.
[^2]: An **Expert System** is a software system that captures human expertise in a specialized domain using explicit rules and inferencing.
[^3]: A **Frame** is a data structure with slots and fillers for representing stereotyped objects, situations, or concepts.
[^4]: **Cyc** is an artificial intelligence project started in 1984 by Douglas Lenat that attempts to assemble a comprehensive ontology and knowledge base of everyday common-sense knowledge.
[^5]: A **Constraint Satisfaction Problem (CSP)** represents a mathematical problem as a set of variables that must be assigned values satisfying specified constraints.
[^6]: The **Symbol Grounding Problem** asks how meaningless internal symbols acquire intrinsic meaning and connection to real-world sensory experiences.
[^7]: **Neuro-Symbolic AI** combines connectionist neural network architectures with symbolic knowledge representation and reasoning.

---

[![Creative Commons License](https://i.creativecommons.org/l/by-sa/4.0/88x31.png)](http://creativecommons.org/licenses/by-sa/4.0/) Intro to AI lecture notes by [Brian Bird](https://profbird.dev), written in <time>2026</time>, are licensed under a [Creative Commons Attribution-ShareAlike 4.0 International License](http://creativecommons.org/licenses/by-sa/4.0/). 
