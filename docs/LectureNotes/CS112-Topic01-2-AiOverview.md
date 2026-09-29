---
title: AI Overview
description: Overview of Artificial Intelligence.
keywords: AI
generator: Typora
author: Brian Bird
---

<h1>Overview of Artificial Intelligence</h1>

<h2>Part 1</h2>

**CS112, Intro to AI**

<h2>Table of Contents</h2>

[TOC]

# Types of AI

There are two major types of AI: *symbolic AI* and *artificial neural networks* (ANN). There are also hybrid systems that use both symbolic AI and ANNs.

AI can also be categorized into two categories: *narrow AI* and *general AI*.

## Symbolic AI vs. ANNs

### Symbolic AI

- Also known as classical or Good Old Fashioned AI (GOFAI).

- It focuses on processing and manipulating symbols or concepts, rather than numerical data.

- Uses logic-based programming, where rules and algorithms are used to make decisions.

- The decision-making is transparent. The reasoning process can be traced back to the logical rules that were applied.

- Simplified example from the medical field, diagnosing a patient's symptoms:  
  
  ```pseudocode
  IF patient has a fever AND patient has a cough AND patient has difficulty breathing THEN patient may have pneumonia.
  ```

- In "Essentials of AI", you will see an example application of AI for playing tic-tac-toe in which a decision tree is built and an algorithm is used to follow branches of the tree to find moves that will lead to winning the game.
  
  We'll work through a similar example together in the next class.

### Artificial Neural Networks

- Also known as connectionism. 
- A computer model inspired by the structure and function of  neural networks in the brain. It uses a network of connections to map data input data to a desired output.
- Neural networks are built using machine learning, in which they are trained an large amounts of data that contains examples of the things the neural network should recognize and process
- They are not transparent. It is very difficult (if not impossible) to determine which set of connections were followed to reach a given decision.
- Example, image recognition:  
  
  <img src="Images\PigeonNeuralNet.png" alt="PigeonNeuralNet" style="zoom:33%;" />

#### Generative AI

- Can create "original" content such as text, images, video, audio, or software code in response to a user's prompt.

- Uses Deep learning models (LLMs), which work by identifying and encoding the patterns and relationships in huge amounts of data encoded into an ANN.

- Unlike GOFAI, which makes predictions based on data by applying rules, generative AI is trained to create new data using a sophisticated ANN, which means that the process by which it operates is not transparent.
  
  #### GPT Chatbots
  
  A Generative Pretrained Transformer (GPT) chatbot produces a string of output words, based on a prompt by using probability to predict the next most likely word:
  
  - Input: The chatbot receives a user’s prompt or instruction.
  - Tokenization: The AI model breaks apart the input into more manageable tokens (words or parts of words).
  - Probability Calculation: The model calculates the probability of each possible next word (or token) based on the data set it was trained on.
  - Word Selection: The model selects the next word with the highest probability, but with some randomness thrown in to simulate creativity.
  - Response Generation: This process is repeated until a complete response is generated.
  - Output: The generated response is returned to the user.



# Reference

- [Elements of AI](https://www.elementsofai.com/)&mdash;The University of Helsinki and MinnaLearn, 2024
- [Understanding the Different Types of Artificial Intelligence](https://www.ibm.com/blog/understanding-the-different-types-of-artificial-intelligence/)&mdash;IBM



---

[![Creative Commons License](https://i.creativecommons.org/l/by-sa/4.0/88x31.png)](http://creativecommons.org/licenses/by-sa/4.0/) Intro to AI Lecture Notes by [Brian Bird](https://profbird.dev), written in <time>2024</time>, revised in 2026 are licensed under a [Creative Commons Attribution-ShareAlike 4.0 International License](http://creativecommons.org/licenses/by-sa/4.0/). 

---