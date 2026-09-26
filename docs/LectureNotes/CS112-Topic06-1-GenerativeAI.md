---
title: Gen AI
description: Generative AI
keywords: AI, LLM, GPT
generator: Typora
author: Brian Bird
---

<h1>Generative AI</h1>

**CS123, Intro to AI**

| Topics                                                               |                                              |
| -------------------------------------------------------------------- | -------------------------------------------- |
| Overview of AI                                                       | Neural networks<br />Deep learning           |
| History of AI&mdash;Part 1<br>AI Problem Solving                     | <mark>Generative AI</mark>                   |
| Machine Learning&mdash;Part 1<br />Bayes' Rule                       | Prompt engineering                           |
| Machine Learning&mdash;Part 2<br />Regression and K-Nearest Neighbor | Custom chatbot creation                      |
| History of AI&mdash;Part 2<br />Midterm                              | Social and ethical issues of AI  <br />Final |

<h2>Contents</h2>

[TOC]

## Overview

Generative AI is a subset of machine learning (ML) that is used for creating new content. Generative models use neural networks to generate data based on, but different from, the data they were trained on. 

Generative AI burst onto the public scene on November 30, 2022 when OpenAI released a public demo of ChatGPT.

A Generative Pretrained Transformer (GPT) chatbot, like ChatGPT, works by taking a prompt (often a question) as input, and generating a response (an answer) based on statistical probabilities.

- It is *generative* because it generates some kind of output, like text. 
- It is *pretrained* because it uses a data model that has been trained through machine learning.
- It is a *transformer* because it transforms a sequence of input text into a sequence of output text.

## Large Language Models

A *Large Language Model* (LLM) is a neural network build using *transformer architecture*. Transformer architecture focuses attention on words to weigh their importance in a sentence, allowing the transformer to "understand" context and relationships between the words. LLMs can perform a variety of tasks, such as answering questions, summarizing text, translating languages, and creative writing. 

## Training an LLM

A large language model is trained using unsupervised learning with vast amounts of text data from diverse sources like books, articles, and websites. The model uses this data to learn patterns in language, such as grammar, context, and word associations. The training requires significant computational power and time, often utilizing specialized hardware like GPUs. Throughout training, the model's performance is evaluated and fine-tuned to improve accuracy and relevance. The result is a powerful tool capable of "understanding"[^1] and generating human-like text.

### Parameters

LLM parameters are the numerical values that define the behavior and performance of the model. These parameters include *weights* and *biases*, which are adjusted during training to minimize errors in predictions. The number of parameters in an LLM can range from millions to billions, contributing to the model's ability to generate human-like text. For example, the Llama 3.1 LLM from Meta has 405 billion parameters.

## Using an LLM (Inference)

A GPT chatbot uses the pretrained LLM to predict the most probable output for text input from a user.

The process of generating output is iterative. This is what a chatbot does:

1. Based on a prompt, what are the top few most likely candidates for the first word in the response. Pick one randomly.
2. Based on the prompt plus the words in the response so far, what are a few most likely candidates for the next word in the response, pick one randomly.  
   Repeat #2 until there is a low probability of there being a next word.

### Context Length

The *context length* of a LLM refers to the maximum number of tokens it can process at once. It's like the model's memory or attention span. For example, GPT-3 has a context length of 4,096 tokens, while GPT-4 can handle up to 8,192 tokens, and even up to 32,768 tokens in the extended version&mdash;which is used in Microsoft Copilot. This means the model can consider a larger amount of text when generating responses, which can improve coherence and relevance.

### Tokens

A *token* is a unit of text that the model processes. Tokens can be words, subwords, or even individual characters, depending on the tokenization method used. For example, the sentence "I love AI" might be tokenized into three tokens: "I", "love", and "AI". In more complex cases, words can be broken down into smaller subword tokens, especially for handling rare or compound words. The model uses these tokens to understand and generate text.

### FAQ

- Are my prompts used to train the LLM?

- Is my feedback (thumbs up/down) used to train the LLM?

- Are my prompts kept private?

- Can any of my data get sent to the chatBot server?

- Have any of the current (summer 2024) GPT chatBots attained AGI?
  https://www.tomsguide.com/ai/chatgpt/openai-has-5-steps-to-agi-and-were-only-a-third-of-the-way-there

- What are the top uses for GPT ChatBots?
  
  1. **Customer Support**: Providing instant responses to customer inquiries, troubleshooting issues, and offering product information.
  2. **Content Creation**: Assisting in generating articles, blog posts, social media content, and marketing copy.
  3. **Education**: Offering tutoring, answering questions, and providing explanations on various subjects.
  4. **Personal Assistants**: Managing schedules, setting reminders, and helping with daily tasks.
  5. **Entertainment**: Engaging users with interactive storytelling, games, and creative writing.
  6. **Language Translation**: Translating text between different languages in real-time.
  7. **Mental Health Support**: Offering a listening ear, providing coping strategies, and suggesting resources for mental well-being.
  8. **Research Assistance**: Summarizing articles, extracting key information, and helping with data analysis.

- How do I know if a chatbot is hallucinating?

- What are the limitations of GPT chatbots?
  
  - Date of training
  - Ability to search
  - Ability to cite (or not, or to appear to give sources even though the citations were not the source of the LLM's training.)
  - Ability to make judgments or reccomendations (which is best)

## References

[How Transformers Work: A Detailed Exploration of Transformer Architecture](https://www.datacamp.com/tutorial/how-transformers-work)&mdash;Josep Ferrer, DataCamp, 2024

[Large language model](https://en.wikipedia.org/wiki/Large_language_model)&mdash;Wikipedia

[What are LLM Parameters? Explained Simply](https://deepchecks.com/glossary/llm-parameters)&mdash;DeepChecks.

[AI’s understanding and reasoning skills can’t be assessed by current tests](https://www.sciencenews.org/article/ai-understanding-reasoning-skill-assess)&mdash;Ananya, Science Direct, 2024.

[GPT-4](https://openai.com/index/gpt-4-research/)&mdash;OpenAI

[^1]: LLMs  don't actually "understand" text in the way humans do. Instead, they analyze and process text based on patterns they have learned from training data. They are sophisticated tools that excel at mimicking human-like text but do not possess genuine understanding, comprehension or awareness.

---

[![Creative Commons License](https://i.creativecommons.org/l/by-sa/4.0/88x31.png)](http://creativecommons.org/licenses/by-sa/4.0/) Intro to AI lecture notes by [Brian Bird](https://profbird.dev), written in <time>2024</time>, are licensed under a [Creative Commons Attribution-ShareAlike 4.0 International License](http://creativecommons.org/licenses/by-sa/4.0/). 

---

Note: Microsoft Copilot with GPT-4 was used to draft parts of these notes.
