---

title: AI Overview
description: Overview of Artificial Intelligence.
keywords: AI
generator: Typora
author: Brian Bird
---

<h1>Overview of Artificial Intelligence</h1>

**CS123, Intro to AI**

| Topics                            |                                 |
| --------------------------------- | ------------------------------- |
| <mark>Overview of AI</mark>       | Generative AI                   |
| History and application of AI     | Prompt engineering              |
| Machine Learning                  | Custom chatbot creation         |
| Neural networks and deep learning | Social and ethical issues of AI |



<h2>Table of Contents</h2>

[TOC]

# What is AI?

AI, or *Artificial Intelligence*, is a field of computer science that aims to create computer systems capable of doing things that would normally require human intelligence. These things include: thinking, reasoning, learning, using natural language, problem solving, and decision making[^1].

Definitions are essential to understanding, so we should look at the dictionary definition of Intelligence:

## What is intelligence?

> 1) The ability to learn or understand or to deal with new or trying situations.
>    Also : the skilled use of reason.
> 2) The ability to apply knowledge to manipulate one's environment or to think abstractly as measured by objective criteria (such as tests)  
>    &mdash;[Merriam-Webster Dictionary](https://www.merriam-webster.com/dictionary/intelligence)

### Your Turn: How would you define intelligence?

Is your definition different from the dictionary definition?

Later we will discus whether or not current AI systems are really intelligent.

## Tests of Artificial Intelligence

### Reasoning Tests

#### Chess

This has been one of the traditional tests of reasoning. It was a significant milestone in the development of AI when IBM's Deep Blue beat the world champion chess player [cite].

#### Logic Problems

- The traveling salesman

- River crossing problem 
  Three humans and three zombies are on one side of a river. They all need to get to the other side. There is one rowboat.

  - The boat can only carry two of them for each crossing.
  - At least one of them has to be in the boat to row it.
  - Only the boat can be used to cross the river (no wading or swimming).
  - If the zombies on either side of the river outnumber the humans, they will kill them.

  (The traditional problem was about cannibals and missionaries, but that seems a bit inappropriate by todays standards. This version[^2] is the same problem but with different characters.)

##### Your Turn: Try your own logic test

Do you know a good logic puzzle? If not do a web search, or make one up and try it on a GTP chatbot of your choice.

### The Turing Test

This test was proposed by Alan Turing in 1950 in order to answer the question: "can computers think?". Since the meaning of the word think is hard to define, so he proposed a test as a type of definition. In his test, a human evaluator judges a text-only, human language conversation between a human and a machine. If the evaluator can't distinguish the machine from the human, the machine is said to have passed the test. The test doesn't depend on the machine's ability to give correct answers, but on how closely its answers resemble those a human would give. The Turing Test has been influential and widely debated in the philosophy of artificial intelligence.

#### Your Turn: Let's Do the Turning Test

I (your instructor) will play the part of two personas, "A" and "B". Using the Zoom chat, take turns asking questions of A or B. Your instructor will use a chatbot to answer one and will answer the other himself.

### The Octopus Test

The "Octopus Test" proposed by Bender and Koller is a thought experiment in their paper challenging the idea that AI truly understands language. They imagine an AI trained on all texts related to octopuses and what they do but lacks data on their jar-opening ability. If asked about this, the AI wouldn’t be able to provide a correct answer because it hasn’t been trained on that specific piece of information and wouldn't know how to adapt it's knowledge of opening clam shells or other things it knows how to do to opening jars. (A real octopus might be able to experiment and figure out how to open a jar, but not an AI octopus.)

This experiment highlights the limitations of  LLMs (Large Language Models) and emphasizes that these models don’t truly understand language or have knowledge about the world. They can only generate responses based on the patterns they’ve learned from their training data.

# Types of AI

Artificial intelligence is categorized primarily by its scope of capability, ranging from task-specific algorithms to human-level adaptability. While "General AI" and "AGI" are often used interchangeably in casual discussion, technical frameworks distinguish between broad general capabilities and full parity with human cognitive function.

## Narrow AI (Weak AI)

Narrow AI systems are engineered to excel at specific tasks or solve predetermined problems within constrained environments. They cannot transfer their competency to unrelated domains without re-engineering or retraining. Every AI system in deployment today is a form of Narrow AI.

- **Digital Voice Assistants**: Siri, Alexa, and Google Assistant parse natural language queries to trigger specific actions, such as setting timers or retrieving database records.
- **Recommendation Engines**: Platforms like Netflix, Spotify, and Amazon use collaborative filtering to predict user preferences based on past behavior.
- **Computer Vision**: Systems in autonomous vehicles detect lane markings, pedestrians, and obstacles, but cannot repurpose that visual processing logic to interpret an x-ray or play chess.
- **Predictive Modeling**: Meteorology tools process massive datasets to forecast weather patterns within fixed mathematical parameters.

## General AI vs. AGI

While closely related, "General AI" describes a broad category of multi-domain intelligence, whereas "AGI" defines a specific benchmark of human equivalence.

### General AI

General AI refers broadly to machines capable of wide-ranging cognitive flexibility. Rather than being restricted to one domain (area of work). A General AI can learn, reason, synthesize context, and operate across multiple disparate domains without needing custom architecture for each one.

### AGI (Artificial General Intelligence)

AGI represents the theoretical threshold where a machine equals or exceeds human intellect. An AGI would possess:

- **Autonomous Transfer Learning**: Applying insights learned in one abstract field to entirely unrelated problems in another field without human fine-tuning.
- **Common-Sense Reasoning**: Grasping cause-and-effect, social dynamics, and physical reality intuitively[^4] rather than statistically.
- **Self-Directed Adaptability**: Setting novel goals, inventing tools, and acquiring new competencies from scratch just as a human does.

AGI remains entirely theoretical, with no operational examples existing today.

## Where Do Large Language Models (LLMs) Fit?

Systems like ChatGPT, Claude, and Gemini occupy an intermediate space often described as *Broad Narrow AI* or *General-Purpose AI*.

Some would say that the latest models have achieved AGI. Others say they have not becasue they do not possess genuine comprehension, self-awareness, or an internal world model; they generate outputs through statistical pattern matching over vast training data. However, classifying them strictly as traditional Narrow AI understates their versatility. Unlike a dedicated spam filter or chess engine, frontier LLMs handle a diverse array of open-ended tasks—from writing software to translating languages and passing professional exams—serving as a general-purpose interface despite lacking true general intelligence.

*Parts of these notes were drafted with Gemini 3.8 flash.*

# Reference

- *Artificial Intelligence, A Modern Approach*&mdash;2010, 3rd Ed. Pearson

- [Understanding the Different Types of Artificial Intelligence](https://www.ibm.com/blog/understanding-the-different-types-of-artificial-intelligence/)&mdash;IBM

- [The Turing Test](https://en.wikipedia.org/wiki/Turing_test)&mdash;Wikipedia

- [You are Not a Parrot](https://nymag.com/intelligencer/article/ai-artificial-intelligence-chatbots-emily-m-bender.html)&mdash;New York magazine

- [Climbing towards NLU: On Meaning, Form and Understanding in the Age of Data](https://aclanthology.org/2020.acl-main.463.pdf)&mdash;Bender and Koller  
  - [Video and slide presentation by the authors on SlidesLive](https://slideslive.com/38929214/climbing-towards-nlu-on-meaning-form-and-understanding-in-the-age-of-data)

- [To Dissect an Octopus: Making Sense of the Form/Meaning Debate](https://julianmichael.org/blog/2020/07/23/to-dissect-an-octopus.html)&mdash;Juan Michael



[^1]: The definition of *Artificial Intelligence* is not actually agreed upon by computer scientists. The definition given in these notes in my own synthesis of commonly given definitions, such as those listed in Russell and Norvig.
[^2]: The "Humans and Zombies" version of the river crossing problem is from [Humans, Zombies, & Other Problems crossing the river](https://mathcommunities.org/river-crossing-problems/) by Spencer Brown.
[^3]: In "Climbing towards NLU: On Meaning, Form, and Understanding in the Age of Data" Emily M. Bender and Alexander Koller argue that a system trained only on form has a priori no way to learn meaning. They discuss the success of large neural language models on many NLP tasks and the hype that these models are being described as “understanding” language or capturing “meaning”. They argue that a clear understanding of the distinction between form and meaning will help guide the field towards better science around natural language understanding.
[^4]: Intuitively

---

[![Creative Commons License](https://i.creativecommons.org/l/by-sa/4.0/88x31.png)](http://creativecommons.org/licenses/by-sa/4.0/) Intermediate JavaScript Lecture Notes by [Brian Bird](https://profbird.dev), written in <time>2024</time>, revised in 2026 are licensed under a [Creative Commons Attribution-ShareAlike 4.0 International License](http://creativecommons.org/licenses/by-sa/4.0/). 