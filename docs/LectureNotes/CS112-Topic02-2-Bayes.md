---
title: Bayes
description: An explanation of Bayes' rule.
keywords: Bayes, prior odds, posterior odds, likelihood
generator: Typora
author: Brian Bird
---

<h1>Bayes' Rule</h1>

**CS123, Intro to AI**

| Weeks                              |                                                     |
| ---------------------------------- | --------------------------------------------------- |
| 1. Overview of AI                  | 6. Neural networks, deep learning and Generative AI |
| 2. History and applications of AI  | 7. Prompt engineering                               |
| 3. Bayes Rule and Machine Learning | 8. Custom chatbot creation                          |
| 4. More Machine Learning           | 9. Social and ethical issues of AI                  |
| 5. Midterm                         | 11. Final                                           |



<h2>Table of Contents</h2>

[TOC]

# What's Due This Week

- Answer week 3 lecture questions (for online students): Sunday
- Exercises based on Elements of AI, Ch. 3: Sunday
- Quiz over the lectures: Sunday
- Your report on AI applications in your field of interest: Sunday

# Bayes' Rule

*Bayes’ Rule* is a theorem in probability and statistics that describes a way to update the probabilities of predictions when given new evidence. It’s named after Thomas Bayes, who provided the first mathematical formulation of the rule in the eighteenth century (1763).

At its core, Bayes’ Rule is about learning from experience. It provides a mathematical framework for integrating new evidence (a new *likelihood*) into our prior beliefs and predictions (*prior odds*). It is used in a wide range of disciplines, including medicine, psychology, and artificial intelligence.

## Odds vs. Probabilities

These are different ways of representing the concpet&mdash;the chances of something happening.

### Probability

This is written as a fraction or a percent representing the the number of times a thing happens divided by the total number of occurance. For thowing a die, the probability of rolling a 6 (or any specific number) is 1/6 or about 16.7%.

### Odds

This is another way of representing the same thing, but we write the ratio the number of times a thing happens to the number of times it doesn't happen. For the example above, we would write the odds as: 1:5 (one to five).

## Prior odds

**Definition**
Assessment of odds before adding new information. In other words, records of past events were used to calculate the odds.

**Example**  
The odds of rain on any given day in Eugene[^1] are 146:219. This is based on past rainfall records.

## Likelihood ratio

**Definition**
The probability of the *observation* in the case of the *event* of interest divided by the probability of the observation in the case of no event, where:

- *Observation* is an actual occurrence of the thing being predicted.  
  In our example: rain.
- *Event* is the indicator that the observation will happen.  
  In our example: clouds.

The likelihood ratio is where the new information comes in. It is a second set of probabilities that gives us new information that will improve the accuracy of predictions.

**Example**  
The new information is: the probability that clouds in the morning predict rain later in the day.

(This is not real data and is different from the example in the book)

- Odds of rain after morning clouds are 7:2  
   (7 out of 9 out of nine times when it's cloudy, it rains).
- Odds of rain after a clear sky in the morning are 1:8  
  (1 out of 9 times it's not cloudy it rains).

Likelihood of rain on days it is cloudy is:  7/9 &divide; 1/9 = 7
(I chose the odds to have the same denominators so that the math would be easy, but the denominators don't have to be the same.)

## Posterior odds

**Definition**
This is the end result. The new odds that are calculated after the new information (liklihood) has been added.

Bayes' Formula:
posteriorOdds = priorOdds * likelihoodRatio

**Example**
146:219 * 7 = 1022:219 or (82.4% chance). 
This is the odds of rain on days it is cloudy in the morning.



# A Sentiment Analysis Example

One application of the Bayes categorization methodology might be to analyze the sentiment of online blog and forum posts. For example, LCC might want to evaluate public opinion about the college by analyzing blog and forum posts to see how many express an overall positive opinion and how many are negative.

## Training

Before using the AI software system to do sentiment analysis, the system has to be trained.

### Labeling

First the sentiment evaluation system needs to be trained. This can be done by scraping posts off the public internet, have a human read each of them and label them as positive or negative. Let's say we got 50 negative and 100 positive.

### Calculating Likelihood Values

Next, the number of times each word appears in each category of post would be counted (this is called word *frequency*). Here are a few of the words and their frequencies:

| Word        | Negative frequency | Positive frequency |
| ----------- | ------------------ | ------------------ |
| fine        | 10                 | 50                 |
| disappoint  | 70                 | 12                 |
| fun         | 15                 | 60                 |
| smart       | 5                  | 40                 |
| frustrate   | 85                 | 5                  |
| Total words | 500                | 1000               |

Next we calculate the likelihood values for posts with negative sentiments. 

To calculate the likelihood value, we need two probabilities for each word:

- The probability the event (word) correctly predicts the observation (positive sentiment).
-  The probability the observation (positive sentiment) occurs without the event (word).

 We calculate likelihood values for each of the words using this formula;
$$
likelihood = \frac{negFreq / negTotal} {posFreq / posTotal}
$$
Here are the results:  
(Reminder, we are calculating the likelihood that a particular word indicates a post with negative sentiment.)

| Word       | Likelihood                    |
| ---------- | ----------------------------- |
| fine       | 10/500 &div; 50/1000 = 0.40   |
| disappoint | 70/500  &div; 12/1000 = 11.67 |
| fun        | 15/500  &div; 60/1000 = 0.50  |
| smart      | 5/500  &div; 40/1000 = 0.25   |
| frustrate  | 85/500  &div; 5/1000 = 34.00  |

### Setting a Decision Threshold

Next we would calculate the odds of each post having negative sentiment. In other words we would do *inference* on our training data. Let's say these were the average of the posterior probabilities for each type of post:  
(We'd actually want to look at standard deviations, etc. as well. But let's keep this simple.)

- Posts with negative sentiment: 125
- Posts with positive sentiment: 25

We might then decide that 75 is the threshold value for deciding the sentiment of a post.

## Inference

*Inference* is the term we use to describe the process of making decisions based on the training. In this case, we want to make decisions based on *posterior odds* (in the form of a probability) which are calculated using the formula below. We are assuming the prior odds (odds of a post having negative sentiment) are 1:1 or a probability of 0.5.
$$
probability = prior \times liklihood_1 \times likelihood_2 \times...\times likelihood_n
$$
Let's say we want to do inference on two new posts. The posts have these words (as well as others) in them:

- Post 1: *blah blah <u>fine</u> blah <u>disappoint</u> blah <u>smart</u> blah blah.*
  - Probability of negative sentiment: 0.5 x 0.4 x 11.67 x 0.5 = 1.16
  - 1.16 < 75 so this will be classified as positive.
- Post 2: *blah <u>disappoint</u> blah blah <u>fun</u> blah blah <u>frustrate</u>.*
  - Probability of negative sentiment: 0.5 x 11.67 x 0.5 x 34 = 99.19
  - 99.9 > 75 so this will be classified as negative.



# Reference

[Thomas Bayes](https://en.wikipedia.org/wiki/Thomas_Bayes)&mdash;Wikipedia

[Bayes' Rule - Explained for Beginners](https://www.freecodecamp.org/news/bayes-rule-explained/)&mdash;FreeCodeCamp

[An Intuitive (and Short) Explanation of Bayes’ Theorem](https://betterexplained.com/articles/an-intuitive-and-short-explanation-of-bayes-theorem/)&mdash;Better Explained

[Naive Bayes classification](https://course.elementsofai.com/3/3)&mdash;Elements of AI, Part 1: Introduction to AI, "Real world AI". MiniLearn. 2024.

[^1]: [Number of Days per Month/Year with Rainfall](https://www.weather.gov/media/pqr/climate/ClimateBookEugene/pg78.pdf)&mdash;National Weather Service

---

[![Creative Commons License](https://i.creativecommons.org/l/by-sa/4.0/88x31.png)](http://creativecommons.org/licenses/by-sa/4.0/) Intro to AI lecture notes by [Brian Bird](https://profbird.dev), written in <time>2024</time>, are licensed under a [Creative Commons Attribution-ShareAlike 4.0 International License](http://creativecommons.org/licenses/by-sa/4.0/). 

MS Copilot GPT-4 was used to draft parts of these notes.