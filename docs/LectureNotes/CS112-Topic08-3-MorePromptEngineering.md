---
title: More Prompt Engineering
description: More prompt engineering strategies
keywords: AI
generator: Typora
author: Brian Bird
---

<h1>More Prompt Engineering</h1>

**CS112, Intro to AI**

<h2>Contents</h2>

[TOC]

## Overview

Prompt engineering is the process of designing and refining inputs (prompts) to generative AI systems to improve the accuracy and quality of the generated output.
These notes continue [Prompt Engineering](CS112-Topic08-2-PromptEngineering.html), which covers the components of a good prompt, best practices, and the zero-shot, one-shot, few-shot, chain-of-thought and role prompting strategies.

## More Prompting Strategies

### Data Organization Prompts

- Definition: These prompts ask the model to organize data in a specific format.
- Example: "Create a table with the top 5 highest-grossing movies, their release years, and box office earnings."

Try this one using Gemini and export it to Google Sheets.

### Iterative Refinement

#### Techniques for refining prompts

Iterative refinement is a crucial technique in prompt engineering that involves continuously improving prompts based on feedback and results. Here are some effective techniques for iterative refinement:

##### 1. Generate Multiple Prompt Variations
- **Description**: Start by creating several variations of your prompt to explore different angles and perspectives.
- **Example**: If you're asking for a summary, try different ways of phrasing the request to see which yields the best results.

##### 2. Evaluate and Select
- **Description**: After generating multiple outputs, evaluate them based on clarity, relevance, and coherence. Select the best-performing prompts for further refinement.
- **Example**: Compare the outputs to see which one best meets your criteria and refine that prompt further.

##### 3. Gradual Expansion
- **Description**: Begin with a concise initial prompt that covers the core ideas. Gradually add more details and context to improve the quality of the responses.
- **Example**: Start with "Summarize the article" and expand to "Summarize the article, focusing on the main arguments and supporting evidence."

##### 4. Incorporate Feedback
- **Description**: Use feedback from the model's responses to refine the prompt. Identify areas where the model's output was unclear or off-target and adjust the prompt accordingly.
- **Example**: If the model's response is too vague, add more specific instructions or examples to guide it.

##### 5. Use Step-by-Step Instructions
- **Description**: Break down complex tasks into smaller, manageable steps. This helps the model follow a clear logical sequence.
- **Example**: Instead of asking for a complete analysis, ask for a step-by-step breakdown of the analysis process.

##### 6. Contextual Prompts
- **Description**: Provide additional context to help the model understand the task better. This can include background information, examples, or specific details.
- **Example**: "Given the recent advancements in AI, summarize the key points of the article on AI ethics."

##### 7. Experiment with Different Structures
- **Description**: Try different prompt structures to see which one works best. This can include changing the order of information, using different formats, or varying the level of detail.
- **Example**: Experiment with prompts like "List the main points" versus "Describe the main points in detail."

##### 8. Monitor and Iterate
- **Description**: Continuously monitor the performance of your prompts and iterate based on the results. Keep refining until you achieve the desired output quality.
- **Example**: Regularly review the outputs and make incremental adjustments to improve accuracy and relevance.



## Examples

### LCC Fusion Lab Prompt Library

[Prompt library](https://docs.google.com/spreadsheets/d/1wnHdO_IOPz2FOViICvIti1sxhK4A8vA-rL4oCPVIkuA/edit?gid=964683428#gid=964683428) in the LCC [Fusion Lab](https://inside.lanecc.edu/atc/fusion-lab) 




## References

[Effective Prompts for AI: The Essentials](https://mitsloanedtech.mit.edu/ai/basics/effective-prompts/)—MIT Sloan Teaching, 2023

[Prompt engineering - OpenAI API](https://platform.openai.com/docs/guides/prompt-engineering)—OpenAI, 2023

[Prompt Engineering Best Practices: Tips, Tricks, and Tools](https://www.digitalocean.com/resources/article/prompt-engineering-best-practices)—DigitalOcean, 2023



*MS Copilot with GPT-4 was used to draft parts of these notes and Claude Sonnet 5.5 was used for revisions.*

---

[![Creative Commons License](https://i.creativecommons.org/l/by-sa/4.0/88x31.png)](http://creativecommons.org/licenses/by-sa/4.0/) Intro to AI lecture notes by [Brian Bird](https://profbird.dev), written in <time>2024</time>, are licensed under a [Creative Commons Attribution-ShareAlike 4.0 International License](http://creativecommons.org/licenses/by-sa/4.0/). 



