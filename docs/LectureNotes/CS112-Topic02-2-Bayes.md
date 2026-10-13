---
title: Bayes
description: An explanation of Bayes' rule.
keywords: Bayes, prior odds, posterior odds, likelihood
generator: Typora
author: Brian Bird
---

<h1>Bayes' Rule</h1>

<h2>Table of Contents</h2>

[TOC]

## Introduction

*Bayes’ Rule* is a theorem in probability and statistics that describes a way to update the probabilities of predictions when given new evidence. It’s named after Thomas Bayes, who provided the first mathematical formulation of the rule in the eighteenth century (1763).

At its core, Bayes’ Rule is about learning from experience. It provides a mathematical framework for applying new evidence (a new *likelihood*) to our prior beliefs and predictions (*prior odds*). It is used in a wide range of disciplines, including medicine, psychology, and artificial intelligence.

### Odds vs. Probabilities

These are different ways of representing the  chance of something happening.

#### Probability

This is written as a <u>fraction</u> or a <u>percent</u> representing the number of times a thing happens divided by the total number of occurrences. 

> **Example: throwing a die**
> The probability of rolling a 6 (or any specific number) is **1/6** or **about 16.7%**.

#### Odds

This is another way of representing the same thing, but we write the <u>ratio</u> of the number of times a thing happens to the number of times it doesn't happen. 

> **Example: throwing a die**
> For the example above, we would write the odds as: **1:5 (one to five)**.

### Converting odds to probabilities

To turn odds of A:B into a probability, divide the first number by the sum of both numbers: 
A / (A + B). 

> **Examples:**
>
> - For the die, odds of 1:5 become 1 / (1 + 5) = 1/6. 
> - For the rain example below, odds of 146:219 become 146 / (146 + 219) = 146/365, or 0.40 (40%). 

To go the other way, compare the chance that the thing happens to the chance that it doesn't: a probability of 0.40 gives odds of 0.40:0.60, which is the same as 2:3.

## Prior odds

**Definition**
Assessment of odds before adding new information. In other words, records of past events were used to calculate the odds.

> **Example: predicting rain**  
> The <u>odds</u> of rain on any given day in Eugene[^1] are **146:219**. 
> This is based on <u>past rainfall records</u>.

### Likelihood ratio

**Definition**
The probability of the *observation* in the case of the *event* of interest divided by the probability of the observation in the case of no event.

$$
likelihoodRatio = \frac{P_{\text{observation when event}}}{P_{\text{observation when no event}}}
$$

where:

- *Event* is the thing we are trying to predict.  
  In our example: rain.
- *Observation* is the evidence we can see that helps us predict the event.  
  In our example: clouds in the morning.

The likelihood ratio is where the new information comes in. It is a second set of probabilities that gives us new information that will improve the accuracy of predictions.

> **Example: predicting rain** 
> The new information is: how often there are clouds in the morning on days when it rains, compared to days when it doesn't.
>
> (This is not real data and is different from the example in *Elements of AI*.)
>
> - On rainy days, there were clouds in the morning 7 out of 9 times. P<sub>observation when event</sub> = 7/9.
> - On dry days, there were clouds in the morning 1 out of 9 times. P<sub>observation when no event</sub> = 1/9.
>
> **Likelihood ratio** for morning clouds:  **7/9 &divide; 1/9 = 7**
> (Numbers with the same denominators were chosen so the math would be easy, but the denominators don't have to be the same.)

### Posterior odds

**Definition**
This is the end result. The new odds that are calculated after the new information (likelihood) has been added.

**Bayes' Formula:**

$$
posteriorOdds = priorOdds \times likelihoodRatio
$$

**Example: predicting rain**
146:219 * 7 = 1022:219 
(82.4% probability).  
To multiply odds by a number, multiply only the first number of the odds. 
(You could also simplify 146:219 to about 2:3 first, which gives 14:3 odds of rain, still an 82.4% probability.)  
The odds of rain on days it is cloudy in the morning are about **14:3**.



## A Sentiment Analysis Example

One application of a *naïve Bayes classifier* might be to analyze the sentiment of online blog and forum posts. For example, LCC might want to evaluate public opinion about the college by analyzing blog and forum posts to see how many posts express an overall positive opinion and how many are negative.

### Training

Before using the AI software system to do sentiment analysis, the system has to be trained.

#### Labeling

The first step is collecting training data. This can be done by scraping posts off the public internet and having a human read each of them and label them as positive or negative. Let's say we got 50 negative and 100 positive.

#### Calculating Likelihood Values

Next, the number of times each word appears in each category of post would be counted (this is called word *frequency*). Here are a few of the words and their frequencies:

| Word        | Negative frequency | Positive frequency |
| ----------- | ------------------ | ------------------ |
| fine        | 10                 | 50                 |
| disappoint  | 70                 | 12                 |
| fun         | 15                 | 60                 |
| smart       | 5                  | 40                 |
| frustrate   | 85                 | 5                  |
| Total words | 500                | 1000               |

Next we calculate the likelihood values for posts with negative sentiment. Here the *event* is a post having negative sentiment, and the *observation* is a word appearing in the post.

To calculate the likelihood value, we need two probabilities for each word:

- The probability of the word appearing in a negative post: negFreq / negTotal
- The probability of the word appearing in a positive post: posFreq / posTotal

We calculate likelihood values for each of the words using this formula:

$$
likelihood = \frac{negFreq / negTotal} {posFreq / posTotal}
$$

Here are the results:  
(Reminder, we are calculating the likelihood that a particular word indicates a post with negative sentiment.)

| Word       | Likelihood                    |
| ---------- | ----------------------------- |
| fine       | 10/500 &divide; 50/1000 = 0.40   |
| disappoint | 70/500  &divide; 12/1000 = 11.67 |
| fun        | 15/500  &divide; 60/1000 = 0.50  |
| smart      | 5/500  &divide; 40/1000 = 0.25   |
| frustrate  | 85/500  &divide; 5/1000 = 34.00  |

#### Setting a Decision Threshold

We also need a rule for deciding when a post counts as negative. The simplest rule is: if the posterior odds of negative sentiment are greater than 1 (a probability above 50%), classify the post as negative; otherwise classify it as positive. (A different threshold could be chosen by testing the classifier on the training data, but let's keep this simple.)

### Inference

*Inference* is the term we use to describe the process of making decisions based on the training. In this case, we want to make decisions based on the *posterior odds* of a post having negative sentiment, which are calculated using the formula below.

The prior odds come from the training data: 50 negative posts to 100 positive posts, which is 50:100 = 1:2, or 0.5. (As a probability, that's 1/3.)

$$
posteriorOdds = priorOdds \times likelihood_1 \times likelihood_2 \times...\times likelihood_n
$$

This is called *naive* Bayes because it treats each word as independent evidence, ignoring how words relate to each other. That simplification is what lets us just multiply the likelihoods together.
Let's say we want to do inference on two new posts. The posts have these words (as well as others) in them:

- Post 1: *blah blah <u>fine</u> blah <u>disappoint</u> blah <u>smart</u> blah blah.*
  - Posterior odds of negative sentiment: 0.5 x 0.4 x 11.67 x 0.25 = 0.58 (about a 37% chance)
  - 0.58 < 1 so this will be classified as positive.
- Post 2: *blah <u>disappoint</u> blah blah <u>fun</u> blah blah <u>frustrate</u>.*
  - Posterior odds of negative sentiment: 0.5 x 11.67 x 0.5 x 34 = 99.19 (about a 99% chance)
  - 99.19 > 1 so this will be classified as negative.
  
  

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