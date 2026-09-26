---
title: Prompts
description: Prompt Engineering
keywords: AI
generator: Typora
author: Brian Bird
---

<h1>Prompt Engineering</h1>

**CS123, Intro to AI**

| Topics                                                       |                                                 |
| ------------------------------------------------------------ | ----------------------------------------------- |
| Overview of AI                                               | Neural networks and deep learning               |
| AI Problem Solving Revisited<br />Machine Learning&mdash;Part 1<br />Applications of AI | Generative AI + <mark>Prompt engineering</mark> |
| Machine Learning&mdash;Part 2                                | Custom chatbot creation                         |
| History of AI + Midterm                                      | Social and ethical issues of AI  <br />Final    |



<h2>Contents</h2>

[TOC]

## Overview

Prompt engineering is the process of designing and refining inputs (prompts) to generative AI systems to improve the accuracy and quality of the generated output.

## Components of a Good Prompt

A good prompt for AI is most effective if it has:

1. **Clarity**: The prompt should be clear, specific and unambiguous, making it easy for the AI to understand what is being asked.
   - **Example**: Instead of asking “Tell me about AI,” you can ask “Give me a summary of the latest advances in AI.”
2. **Relevance**: use keywords or phrases that are *specific* and *relevant* to your desired response. This helps the AI understand your intent and deliver relevant results.

   - **Example**: Instead of asking: “Tell me about cloud computing”, you can ask  “I’m researching cloud computing trends in the IT industry. Provide recent reports and articles on the topic.”
3. **Conciseness**: A prompt should be as brief as possible while still conveying all necessary information.
4. **Context**: Providing relevant context helps the AI understand the background of the thing you're asking for. 

   - **Example**: “Given the recent advancements in AI, what are the potential ethical concerns?”

   - **Result**: The AI considers the context of recent advancements and addresses relevant ethical concerns.

## Prompting Best Practices

1. **Split Up Complex Tasks**: Break down complex tasks into simpler, manageable subtasks to improve accuracy.
2. **Use Structured Prompts**

   - **Example**: “List the steps to train a neural network: 1. Data collection, 2. Data preprocessing, 3. Model selection, 4. Training, 5. Evaluation.”
   - **Result**: The AI follows the structured format and provides a step-by-step guide.

3. **Provide Examples**:

   - **Example**: “Generate a short story about a robot learning to paint, for example: ‘Once upon a time, in a small workshop, there was a robot named Artie who loved colors…’”

   - **Result**: The AI uses the example to generate a coherent and creative story.

1. **Experiment and Iterate**: Continuously test and refine prompts to find the most effective phrasing and structure.

   ​              

## Prompting Strategies

### Zero-Shot Prompting

**Explanation**: Zero-shot prompting involves giving the AI a task without any prior examples or context. The AI relies on its pre-existing knowledge to generate a response.

**Example**:

- **Prompt**: “Translate ‘Hello, how are you?’ to French.”
- **Response**: “Bonjour, comment ça va?”

### One-Shot Prompting

**Explanation**: One-shot prompting provides the AI with a single example to guide its response. This helps the AI understand the task better. For example:

- **Zero-shot prompt**: “Generate a marketing email.”,

- **One-shot Prompt**: “Generate a marketing email for a new eco-friendly water bottle, highlighting its features. Example: ‘Introducing our latest eco-friendly water bottle! Made from sustainable materials, this bottle is not only durable but also stylish. Perfect for those who care about the environment and want a sleek design.’”

### Few-Shot Prompting

**Explanation**: Few-shot prompting involves giving the AI a few examples to help it understand the task more clearly. This is useful for more complex tasks.

**Example**:

- **One-shot Prompt**: “Generate a name for a new eco-friendly water bottle. Example: ‘EcoSip’”
- **Few-shot Prompt**: "Generate a name for a new eco-friendly water bottle. Examples:

  ‘EcoSip’
  ‘GreenHydrate’
  ‘SustainSip’
  ‘NatureQuench’"

### Chain-of-Thought Prompting

**Explanation**: Chain-of-thought prompting improves reasoning by breaking down complex tasks into a sequence of logical steps, enabling the model to solve problems more effectively.   Each step will take into account the result of the previous step and build on it. 

**Examples**

- Prompt: To solve the equation 2x + 3 = 7, first subtract 3 from both sides, then divide by 2.

  Result: The AI provides a step-by-step solution with the result x = 2.

- Prompt: Solve this word problem step-by-step:  
  There are 12 apples in a basket. John takes 3 apples, and  then Mary takes 4 apples. How many apples are left in the basket?  
  Step 1: What is the starting number of apples?  
  Step 2: How many apples are left after John takes his share?  
  Step 3: How many apples are left after Mary takes her share?  

  Result: The AI provides a step-by-step solution with the result that there are 7 apples left in the basket.

- Write a short fictional story (around 200 words) about a character who 
  finds a mysterious antique key.  Follow these 
  steps:

  1. Imagine the main character – who are they? What is 
     their life like?

  2. Where do they find the key? Describe the setting and 
     how the key appears. 

  3. What makes the key so intriguing? Does it have strange 
     markings? A particular shape?

  4. What does the character decide to do with the key? Do they 
     try to find what it unlocks?

     Result: An interesting story that is composed based on the steps in the prompt.

### Role Prompting

This technique helps guide the AI to respond in a manner consistent with the assigned role, leading to more focused, creative, or empathetic outputs. Here is an example of using the AI as a fitness coach:

- **Prompt**: "As a fitness coach, give me advice on how to start exercising."
- **AI Response**: "Start with light activities like walking, then gradually include more intense exercises. Balance is key for a good fitness routine."



## Examples

### Moodle Quiz Prompt Template

This is a prompt template I use for generating quiz questions for Moodle:

```                
Write 12 multiple-choice questions about ______. 
The questions should focus on concepts and functionality, not facts, not "how to".

Ensure the questions adhere to the following guidelines:
1. If the questions contain special characters such as { or =, they should be escaped as \{ and \=.
2. If the questions include HTML, the < and > characters should be written as &lt; and &gt;.
3. Write the questions in GIFT format for Moodle.
4. Use html for multi-line code snippets in questions. Do not use markdown.
6. Each question should have a title.
7. Provide 5 alternative answers for each question.
8. Order the answers randomly so the right answer isn't always in the same position.
9. Do not include answers like "all of the above" or "none of the above".
10. Do not include questions starting with "how do you.."
11. Do not number the questions.

Here are examples of questions in the GIFT format:

::Bayes' Rule Application:: 
What is the primary purpose of Bayes' Rule in machine learning models?
{
=To update the prior probability distribution based on new data 
~To calculate the likelihood of a hypothesis given new data 
~To predict the class label of a new instance 
~To optimize the model's hyperparameters 
~To evaluate the model's performance
}

::Bayes' Rule Formula::
Which formula correctly represents Bayes' Rule? {
    =posteriorOdds \= priorOdds * likelihoodRatio
    ~posteriorOdds \= priorOdds + likelihoodRatio
    ~posteriorOdds \= priorOdds / likelihoodRatio
    ~posteriorOdds \= priorOdds - likelihoodRatio
    ~posteriorOdds \= priorOdds ^ likelihoodRatio
}
```



### LCC Fusion Lab Prompt Library

[Prompt library](https://docs.google.com/spreadsheets/d/1wnHdO_IOPz2FOViICvIti1sxhK4A8vA-rL4oCPVIkuA/edit?gid=964683428#gid=964683428) in the LCC [Fusion Lab](https://sites.google.com/lanecc.edu/fusionlab/home) 




## References

[Effective Prompts for AI: The Essentials](https://mitsloanedtech.mit.edu/ai/basics/effective-prompts/)—MIT Sloan Teaching, 2023

[Prompt engineering - OpenAI API](https://platform.openai.com/docs/guides/prompt-engineering/prompt-engineering)—OpenAI, 2023

[Prompt Engineering Best Practices: Tips, Tricks, and Tools](https://www.digitalocean.com/resources/article/prompt-engineering-best-practices)—DigitalOcean, 2023

[What is Chain of Thoughts (CoT)?](https://www.ibm.com/topics/chain-of-thoughts)—IBM, 2023

[Comprehensive Guide to Chain-of-Thought Prompting](https://www.mercity.ai/blog-post/guide-to-chain-of-thought-prompting)—Maithili Badhan, Mercity, 2023



---

[![Creative Commons License](https://i.creativecommons.org/l/by-sa/4.0/88x31.png)](http://creativecommons.org/licenses/by-sa/4.0/) Intro to AI lecture notes by [Brian Bird](https://profbird.dev), written in 2024, revised in <time>2025</time> are licensed under a [Creative Commons Attribution-ShareAlike 4.0 International License](http://creativecommons.org/licenses/by-sa/4.0/). 

---

Note: Microsoft Copilot with GPT-4 was used to draft parts of these notes (2024).

