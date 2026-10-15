---
title: Bayes Applications
description: Applications using Bayes rule
keywords: Bayes
generator: Typora
author: Brian Bird
---

<h1>Bayes' Rule</h1>

<h2>Table of Contents</h2>

[TOC]

## Review

### What is Bayes Rule

Bayes Rule is a probability theorem that describes a way to update the odds of a prediction (hopefully to make it better) when given new evidence. It is written mathematically like this:
$$
posteriorOdds = priorOdds \times likelihoodRatio
$$

where:

- ***posteriorOdds*** is the updated odds that the event will happen, after seeing the evidence.

- ***likelihoodRatio*** is where the new evidence comes in. It is the ratio of two  probabilities:

  - $$
    likelihoodRatio = \frac{P_{\text{observation when event}}}{P_{\text{observation when no event}}}
    $$

    where:

    - ***event*** is occurrences of the thing we are predicting.
    - ***observation*** is some evidence that corresponds to an occurrence of the thing we are predicting (the event).

- ***priorOdds*** is the original odds that the thing being predicted (the event) would happen.



## Reference

[Thomas Bayes](https://en.wikipedia.org/wiki/Thomas_Bayes)&mdash;Wikipedia

[Bayes' Rule - Explained for Beginners](https://www.freecodecamp.org/news/bayes-rule-explained/)&mdash;FreeCodeCamp

[An Intuitive (and Short) Explanation of Bayes’ Theorem](https://betterexplained.com/articles/an-intuitive-and-short-explanation-of-bayes-theorem/)&mdash;Better Explained

[Naive Bayes classification](https://course.elementsofai.com/3/3)&mdash;Elements of AI, Part 1: Introduction to AI, "Real world AI". MiniLearn. 2024.

[^1]: [Number of Days per Month/Year with Rainfall](https://www.weather.gov/media/pqr/climate/ClimateBookEugene/pg78.pdf)&mdash;National Weather Service

---

[![Creative Commons License](https://i.creativecommons.org/l/by-sa/4.0/88x31.png)](http://creativecommons.org/licenses/by-sa/4.0/) Intro to AI lecture notes by [Brian Bird](https://profbird.dev), written in <time>2024</time>, revised in 2026 are licensed under a [Creative Commons Attribution-ShareAlike 4.0 International License](http://creativecommons.org/licenses/by-sa/4.0/). 

*MS Copilot GPT-4 was used to draft parts of these notes, Claude Opus 5.5 was used for checking and revisions.*

---