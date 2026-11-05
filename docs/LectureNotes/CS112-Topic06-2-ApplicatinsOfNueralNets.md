---
title: Neural Nets
description: Artificial Neural Networks
keywords: AI, ML, ANN
generator: Typora
author: Brian Bird
---

<h1>Applications of ANNs</h1>

**CS112, Intro to AI**

<h2>Table of Contents</h2>

[TOC]



## The End of the AI Winter

The *AI winter* was a long stretch, from the late 1970s into the early 1990s, when disappointing results led to deep cuts in AI funding and interest (see [History of AI Part 2](CS112-Topic04-1-History.html)).

Neural nets survived in a few research labs, and three things came together around 2010 to bring them back. First, there was **data**: ImageNet, released in 2009, gave researchers millions of labeled photos to train on. Second, there was **computing power**: graphics cards (GPUs), built for video games, turned out to be very good at the math ANNs need, so training that once took months now took days. Third, there were **better training methods**, building on the backpropagation work of Hinton and others. In 2012, a CNN called AlexNet won the ImageNet contest by a wide margin, and researchers and companies took notice. Funding poured back into AI, and the field has been in "summer" ever since.

## What ANNs Made Possible

Once ANNs could be trained on large amounts of data, problems that had resisted AI for decades began to fall. Before generative AI, these ANNs mostly *recognized* and *predicted*:

- **Recognizing images**: tagging people in photos, unlocking a phone with your face, and reading handwriting and street signs.
- **Understanding speech**: ANN-based voice assistants and automatic captions understood spoken language far better than the early command-and-control assistants did.
- **Translating languages**: Google Translate switched to neural networks in 2016, and the quality jumped noticeably.
- **Driving**: self-driving cars use ANNs to recognize pedestrians, lane lines, and traffic signals.
- **Playing games**: AlphaGo's 2016 win over Go champion Lee Sedol, a feat experts had expected to be years away.
- **Medicine and science**: ANNs help find tumors in medical scans, and AlphaFold predicts the 3D shapes of proteins, a problem that had stumped biologists for 50 years. Because a protein's shape determines what it does, AlphaFold's predictions, now freely available for more than 200 million proteins, speed up drug design and disease research, and its creators shared the 2024 Nobel Prize in Chemistry.

The next step was ANNs that *create*: generating realistic faces, images, and text. That is generative AI, which starts with GANs (covered below) and continues in later topics.

<img src="Images/Waymo_Self_Driving_Car_in_West_Miami.jpg" alt="A Waymo self-driving car" style="zoom:25%;" />

*A Waymo self-driving car. Photo: Phillip Pessar, [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/), via [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Waymo_Self_Driving_Car_in_West_Miami.jpg).*

<img src="Images/AlphaFold_predicted_structure_of_human_G3BP1.png" alt="Predicted 3D structure of a protein" style="zoom:50%;" />

*A protein structure predicted by AlphaFold. Public domain, via [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:AlphaFold_predicted_structure_of_human_G3BP1.png).*

## Convolutional Neural Networks (CNN)

When we tried to assign weights to an ANN that classified happy and sad faces, we discovered that the ANN had difficulty with:

- Different sizes of faces
- Faces that were positioned higher or lower in the input grid
- Features (mouth size and position) that varied from face to face

CNNs resolves these problems and more using a *convolution operation*. This operation involves sliding a filter  over the input data and performing element-wise multiplication followed by a sum. This process helps in extracting features from the input.

Here is a simplified description of the process (provided by MS Copilot):

> Think of an image as a large field of different colored flowers. Now, suppose you want to identify patterns or features in this field, like areas of certain colors or color combinations.
>
> The convolution operation is like using a small magnifying glass to look at one small area of the field at a time. This magnifying glass is what we call a "filter" or "kernel" in a Convolutional Neural Network (CNN).
>
> As you move the magnifying glass across the field (or the image), you're focusing on one small area at a time. For each area, you're asking, "What's interesting here?" The answer could be "a lot of red flowers," "mostly blue flowers," "a mix of red and blue flowers," and so on. These are the "features" that the filter is learning to recognize.
>
> The interesting thing is, you use the same magnifying glass (the same filter) to look at the entire field. This means you're looking for the same kind of features everywhere in the image. This is what gives CNNs their power: they can recognize the same features no matter where they appear in the image.
>
> In summary, the convolution operation in a CNN is like using a magnifying glass to systematically scan across an image, looking for interesting features one small area at a time.

### History of CNN Development

Convolutional Neural Networks (CNNs) were first developed and used in the 1980s. The foundational work was done by Kunihiko Fukushima and Yann LeCun. 

Yann LeCun, in 1989, proposed a neural network architecture known as LeNet-5. This was the first successful implementation of a network that utilized the backpropagation algorithm for training, which is a standard method for training CNNs today. LeNet-5 was used for digit recognition tasks.

The significant breakthrough in the field of CNNs came in 2012 with the development of AlexNet by Alex Krizhevsky. AlexNet significantly outperformed previous image recognition algorithms and won the 2012 ImageNet contest with 85% accuracy. 

## Generative Adversarial Networks (GAN)

In this technique, two networks compete against each other. One of the networks is trained to generate images like the ones in the training data&mdash;it is called the generative network. The other network’s task is to evaluate images generated by the first network to see how well they correspond to real images from the training data – this one is called the adversarial network. These two combined then make up a generative adversarial network or a GAN.



## Reference

### Related Lecture Notes

[History of AI Part 2](CS112-Topic04-1-History.html)&mdash;the AI winter, Hinton, ImageNet, LeCun, GANs, and AlphaGo.

### Papers and Articles

Krizhevsky, A., Sutskever, I., & Hinton, G. (2012). [ImageNet Classification with Deep Convolutional Neural Networks](https://papers.nips.cc/paper/2012/hash/c399862d3b9d6b76c8436e924a68c45b-Abstract.html). *NeurIPS 25*.&mdash;The AlexNet paper.

LeCun, Y., Bengio, Y., & Hinton, G. (2015). [Deep learning](https://www.nature.com/articles/nature14539). *Nature, 521*, 436&ndash;444.&mdash;Overview written by the three pioneers.

### Interactive Web Pages

[CNN Explainer](https://poloclub.github.io/cnn-explainer/)

[Designed to Deceive: Do These People Look Real to You?](https://www.nytimes.com/interactive/2020/11/21/science/artificial-intelligence-fake-people-faces.html)&mdash;Kashmir Hill and Jeremy White, New York Times, Nov. 21, 2020.  
In this interactive demo, notice that the slider features correspond to the features used when training the GAN.



---

[![Creative Commons License](https://i.creativecommons.org/l/by-sa/4.0/88x31.png)](http://creativecommons.org/licenses/by-sa/4.0/) Intro to AI lecture notes by [Brian Bird](https://profbird.dev), written in 2024, revised in <time>2026</time>, are licensed under a [Creative Commons Attribution-ShareAlike 4.0 International License](http://creativecommons.org/licenses/by-sa/4.0/). 

*Note: GPT-4 and GPT-4o were used to draft some parts of these notes.*