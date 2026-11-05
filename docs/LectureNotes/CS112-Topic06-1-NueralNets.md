---
title: Neural Nets
description: Artificial Neural Networks
keywords: AI, ML, ANN
generator: Typora
author: Brian Bird
---

<h1>Artificial Neural Netoworks</h1>

**CS112, Intro to AI**

<h2>Table of Contents</h2>

[TOC]

## Description

### Neural Networks in the Brain

<img src="Images/BrainNeuralNetworkAndNeuron.jpg" alt="BrainNeuralNetworkAndNeuron" style="zoom:24%;" />

A biological neural network consists of interconnected neurons that communicate through axons, dendrites and synapses to process and transmit information. The dendrites are inputs to the neuron and the axon is the output of the neuron. The connection points are synapses. This intricate web of connections forms the basis for learning, memory, and thought in living organisms.



## Perceptrons

A perceptron is modeled on a single neuron. 

<img src="Images/general-diagram-of-perceptron-for-supervised-learning_4.webp" alt="general-diagram-of-perceptron-for-supervised-learning_4" style="zoom:75%;" />

( &sum; is a the mathematical symbol for summation&mdash;aka addition.)

#### Mathematical Model

linear combination = intercept + weight1 × input1 + ... + weight6 × input6 (where ... is shorthand notation meaning that the sum includes all the terms from 1 to 6).

- The *weights* are used as multipliers on the *inputs* of the neuron, which are summed.
- The *intercept* term is like the intercept in linear regression. This can be thought of as a fixed additional bias that shifts the output value up or down.

##### Activation Function

Once the linear combination has been calculated, the neuron takes the linear combination and sends it to an activation function. Typical examples of activation functions include:

- Step function: if the value of the linear combination is greater than zero, switch the output to a positive value (ON), otherwise do nothing (OFF)
- Sign function: similar to the step function, but the output will be either +1 or -1.
- Sigmoid (logistic) function: a “soft” version of the step function.

<img src="/home/brianbird/Repos/GitHub/CS212-AiProg1-Repos/CS212-CourseMaterials/docs/LectureNotes/Images/Activation-Functions.png" style="zoom:50%;" />

### Limitations of Perceptrons

Perceptrons seemed to some, like Rosenblatt, the developer of the perceptron (1957), to be the best way to advance the field of AI. But there were obstacles, which were publicized in detail by Minsky (who ironically developed the first neural network in 1951[^1]) and Pappert in their book *Perceptrons* (1969). These were two of the main obstacles:

- Since there was only a single layer of nodes (neurons), they could only do linear classification (much like regression or Bayesian machine learning techniques).
- There was no known way to write an algorithm for automatically setting the optimal weights for the connections.

## Artificial Neural Networks

<img src="Images/ART_Artificial_intelligence_Neural_network_explain.png" alt="ART_Artificial_intelligence_Neural_network_explain" style="zoom:40%;" />

An artificial neural network (ANN) is a model with multiple interconnected "neurons"&mdash;in contrast to the perceptron that has just one artificial neuron. Each "neuron", or *node*, has multiple inputs, but one output. The nodes are arranged in layers and each one is connected to all the others in the next layer. The input layer gets data to be processed, the middle, or *hidden*, layers do the processing and send data to an output layer (which could have more than one node).

### Deep Learning

Techniques were developed to overcome some of the main the limitations identified by Minsky and Pappert.

- **Multiple Layers**: The term “deep” refers to the use of multiple layers in the network&mdash;the *hidden layers*. These layers transform the input data into a more abstract and composite representation that goes beyond simple linear classification.
- **Self-learning**: A number of algorithms were developed to set the weights on the connections in the ANN. One of these was *Hebbian Learning*, named after the psychologist Donald Hebb, it is based on a rule which states that if two neurons fire together, then the connection between them strengthens. This is often summarized as "Cells that fire together, wire together."

### Characteristics of ANNs

- Information processing and storage (memory) both happen in the same place instead of memory and processing happening in different structures.
- Processing is done simultaneously (in parallel) across many neurons instead of sequentially. 

#### Discussion

- How is parallel processing in an ANN done?

  - Parallel processing in digital computers:
    - Time-slice
    - Multiple cores

  - Different types of processing units in consumer PCs:
    - CPU: typically 4 to 16 cores
    - GPU: NVIDIA GPUs can have hundreds or thousands of CUDA (Compute Unified Device Architecture) and Tensor cores.
    - NPU: Typically has 10 to 20 cores.

- Where is data in an ANN stored?

  - In a biological neural network, it is stored in the neurons
  - In an ANN it is ultimately stored in the computer's memory.



### Elements of AI Examples

[Examples in Ch. 5, Section II](https://course.elementsofai.com/5/2)

- Discuss the X and O classifier

  - Are some of the O pixels the same as some of the X pixels[^2]?
  - How would the neurons be connected?
  - Could this be done with a perceptron (or two perceptron's[^3])?

- Discuss the happy or sad face classifier  
  There is an interactive classifier in E of AI and [one made by your instructor](../Exercises/EoAI-Ch5/PerceptronSimulator.html).
  
  - Does it make a difference whether faces are drawn so they fill the whole grid?
  - What if faces have different proportions?
  
  

## Backpropagation

One of the main breakthroughs that led to progress on ANNs was the development of *backpropagation* in 1986 by Geoffrey Hinton, who is often referred to as the "godfather of AI". 

Backpropagation, short for "backward propagation of errors," is an algorithm used to train ANNs by setting the weights on the connections. 

### Backpropagation in a Perceptron

Backpropagation is a method used set the weights and improve accuracy. This is a summary of the steps:

1. **Forward Pass**: The perceptron processes training data to produce an output.
2. **Error Calculation**: The output is compared to the actual target to find the error.
3. **Backward Pass**: The error is used to adjust the weights, reducing the error.

This process repeats until the perceptron's predictions become accurate.



![Perceptron_work](Images/Perceptron_work.webp)

### Backpropagation in an ANN

Here is a simplified summary of the steps in the algorithm:

1. **Forward Propagation**: Training data is passed through the network, from the input layer through the hidden layers to the output layer, to generate a prediction. This process is known as forward propagation.

2. **Compute Loss** (error): The prediction is compared with the actual target value to compute the loss (error). The loss function quantifies how far off the predictions are from the actual target values.

3. **Backward Propagation**: The loss is then propagated back through the network. This involves computing the gradient (slope) of the loss function with respect to the weights and biases in each layer of the network. 

4. **Update Weights and Biases**: The weights and biases of the network are updated in the opposite direction to the gradient (in the opposite direction of the error). This is done to minimize the loss. The size of the update is determined by the learning rate, a hyperparameter that controls how fast the network learns.

5. **Iterative Process**: This process is repeated for many epochs (an epoch is one pass through the entire training dataset) until the network is adequately trained and the loss is minimized.





## Reference

### Articles and Tutorials

[What is a Perceptron: A Beginners Guide for Perceptron](https://www.simplilearn.com/tutorials/deep-learning-tutorial/perceptron)&mdash;Mayank Banoula, SimpliLearn, 2023.

[Deep Learning](https://www.deeplearningbook.org/)&mdash;Ian Goodfellow, Yoshua Bengio, Aaron Courville, MIT Press, 2016

[Neural Networks and Deep Learning](http://neuralnetworksanddeeplearning.com/)&mdash;Michael A. Nielsen, Determination Press, 2015

### Interactive Web Pages

[Tensorflow Playground](http://playground.tensorflow.org/)&mdash;Tinker with a neural network in your browser.

- [Understanding neural networks with TensorFlow Playground](https://cloud.google.com/blog/products/ai-machine-learning/understanding-neural-networks-with-tensorflow-playground)&mdash;Kaz Sato, Google Cloud, 2016.

[Machine Learning Playground](https://ml-playground.com)&mdash;Experiment with multiple ML models

[Perceptron Visualizer](https://perceptrondemo.com/)



[^1]: Marvin Minsky, in collaboration with Dean Edmonds, developed the first artificial neural network in 1951, known as the Stochastic Neural Analog Reinforcement Calculator (SNARC). It was not implemented in software and did not use a computer. Its 40 artificial neurons were built with mechanical and electronic components. It was about the size of a grand piano and included a plugboard for interconnecting the neurons. It was designed for a single task: to learn a path through a maze using Hebbian Learning.

[^2]: The "pixels" that are the same between the X and O should have low weights (or zero weight) since they don't help us distinguish between the X and O.
[^3]: With a single perceptron an output of 0 could indicate an O and an output of 1 could indicate an X, but then what would indicate neither?

---

[![Creative Commons License](https://i.creativecommons.org/l/by-sa/4.0/88x31.png)](http://creativecommons.org/licenses/by-sa/4.0/) Intro to AI lecture notes by [Brian Bird](https://profbird.dev), written in 2024, revised in <time>2026</time>, are licensed under a [Creative Commons Attribution-ShareAlike 4.0 International License](http://creativecommons.org/licenses/by-sa/4.0/). 

*Note: GPT-4 and GPT-4o were used to draft some parts of these notes.*