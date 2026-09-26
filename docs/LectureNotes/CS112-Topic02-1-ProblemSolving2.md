---
title: Problem Solving
description: Solving problems with AI
keywords: AI, state, state-space, transition, game tree, minimax
generator: Typora
author: Brian Bird
---

<h1>Problem Solving Revisited</h1>

**CS123, Intro to AI**

| Topics                            |                                 |
| --------------------------------- | ------------------------------- |
| Overview of AI                    | Generative AI                   |
| AI Problem Solving                | Prompt engineering              |
| Machine Learning                  | Custom chatbot creation         |
| Neural networks and deep learning | Social and ethical issues of AI |



<h2>Table of Contents</h2>

[TOC]

# Introduction

## What's Happening

- Exercises for Ch. 2, "Problem Solving" in *Elements of AI*
- Lecture Q and A forum for online students
- Lecture quiz for everyone.

Next week the first project will be due.

# Problem Solving

This is based on Ch. 2 of *Elements of AI*

## Search and Problem Solving

Many problems can be thought of as search problems. We normally think of searching as a way to solve problems like finding a web site, finding a book in a library, or finding a product in an online store. But search can also be used to find the shortest route on a road map or the best sequence of moves to win a game.

The kinds of problems we solve with AI can be classified according to the problem's *environment[^1]* One way of classifying environments is by number of *agents*[^2]

Two types of search problems (there are more than two) are:

- Problems with only one agent&mdash;a route finding problem is an example.
- Problems with two agents&mdash;a two-player game is an example.

### Single-Agent Problems

Just one agent (would be person if it wasn't AI) is making decisions.

**River Crossing Problems**

If you search the internet you will find a lot of different logic puzzles involving getting things (or people, animals or other entities) across a river. These are examples of *single agent* problems since there is only one agent (you, the problem solver) directing the action. 

They are search problems since you search the *state-space*[^3] to find the minimum number of *transitions*[^4] between states that will solve the problem.

- Ch.2 of *Elements of AI* describes the "Chicken, feed, and fox" problem.
- Look at a solution to  the [Zombies and humans river crossing problem](https://lcc-cit.github.io/CS123-CourseMaterials/LectureNotes/Topic-01-4-ZombieCrossingSolution.html).
  - **Breadth-First Search (BFS)**: This algorithm is one way of solving this problem without trying all the combinations of legal transitions. It explores all possible states level by level. It starts from the initial state and explores all possible moves, then moves to the next level of states. BFS guarantees finding the shortest path (minimum number of river crossings) to the goal state because it explores all nodes at the present depth level before moving on to nodes at the next depth level.


### Two-Agent Problems

Two agents are making decisions. It could be two AI systems or an AI system and a human.

**Game Playing Problems**

Two-player games are examples of *two-agent* problems.

- Ch. 2 of Elements of AI describes making a game tree for tic-tac toe that can be searched using the *minimax algorithm*[^5] in order to find winning moves.
- These [notes from the Australian National University](https://gitlab.cecs.anu.edu.au/pages/2021-S1/courses/comp1100/lectures/09-2-Game_Trees.pdf) describe making a game tree for the game of nim, assigning values to nodes, and searching the tree for winning moves.

**Real World Problems**

- Autonomous Vehicles: In scenarios where two drivers of two vehicles need to interact, such as at an intersection or during lane changes.
- Customer Service: AI chatbots can interact with human customers to resolve issues, answer questions, and provide support.
- Collaborative Robotics: In manufacturing or warehouse settings, AI-powered robots can work alongside human workers or other robots to complete tasks.

#### Game/Search Trees

[See the tictactoe search tree in Elements of AI, Ch. 2](https://course.elementsofai.com/2/3)

#### MiniMax Algorithm

The minimax algorithm is a recursive (repetative) decision-making algorithm used in two-player zero-sum games, where one player’s gain is the other player’s loss. The goal is to <u>min</u>imize the <u>max</u>imum possible loss for a worst-case scenario (hence “minimax”).

#### Steps of the Minimax Algorithm:

1. **Generate the Game Tree**: Create a tree of all possible moves from the current state to the terminal states (end of the game).
2. **Evaluate Terminal States**: Assign a value to each terminal state based on the outcome:
   - Positive value for a win.
   - Negative value for a loss.
   - Zero for a draw.
3. **Backpropagate Values**:  
   Starting from the terminal nodes, the algorithm moves up the tree, level by level, to the root. At each level, it applies the minimax decision rule:
   - **Maximizing Player’s Turn**: Choose the value from the move with the highest value from the child nodes.
   - **Minimizing Player’s Turn**: Choose the value from the move with the lowest value from the child nodes.



# Reference

- [Elements of AI](https://www.elementsofai.com/)&mdash;The University of Helsinki and MinnaLearn, 2024. 
  Chapter 2 "AI Problem Solving"
- [Understand Types of Environments in Artificial Intelligence](https://www.aitude.com/understand-types-of-environments-in-artificial-intelligence/)&mdash;Sandeep Kumar, 2020.

[^1]: The *environment* of the problem is made up of the things in the world that surrounds the problem.
[^2]: An *agent* is someone or something that is directing the actions.
[^3]: State-space
[^4]: A *transition* is the change from one state to another within the state-space.
[^5]: The *minimax algorithm* is used to search a tree (a type of computer data structure) to find paths through branches with either minim or maximum values.



Note: Microsoft Copilot (GPT 4) was used to draft parts of these notes.

---

[![Creative Commons License](Images/cc-by-sa-88x31.png)](http://creativecommons.org/licenses/by-sa/4.0/) Intro to AI lecture notes by [Brian Bird](https://profbird.dev), written in <time>2024</time>, are licensed under a [Creative Commons Attribution-ShareAlike 4.0 International License](http://creativecommons.org/licenses/by-sa/4.0/). 
