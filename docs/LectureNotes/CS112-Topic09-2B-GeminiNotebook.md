---
title: Gemini Notebook
description: How Gemini Notebook (formerly NotebookLM) uses RAG, and how to share a notebook
keywords: AI, chatbot, RAG, Gemini Notebook, NotebookLM
generator: Typora
author: Brian Bird
---

<h1>Creating a Gemini Notebook Chatbot</h1>

**CS112, Intro to AI**

<h2>Contents</h2>

[TOC]

## Overview

### Objectives

Understand:

- What a Gemini Notebook is
- How a Gemini Notebook uses Retrieval-Augmented Generation (RAG)
- How a Gemini Notebook differs from a Gemini Gem

Learn how to:

- Create a notebook and add sources to it
- Ask questions and check the citations in the answers
- Share a notebook so others can chat with it

### What is a Gemini Notebook?

Gemini Notebook (originally named *NotebookLM*, where "LM" stands for *language model*) is a Google AI tool for working with your own documents. You create a *notebook*, add *sources* to it (documents, web pages, videos, and so on), and then chat with an AI that answers using those sources.

You can use it at [notebook.google.com](https://notebook.google.com). Some help pages and links still use the old name, NotebookLM.

Since April 2026, the Gemini app also has *notebooks*. A notebook created in the Gemini app and one created in Gemini Notebook are the same notebook: a source you add in one shows up in the other. Notebooks in the Gemini app were released first to paid plans, and they aren't available to users under 18 or to work and school (Google Workspace) accounts.

### Examples of Notebooks

- **Course Study Guide**&mdash;Add the lecture notes, the textbook chapters, and the syllabus for a course, then ask questions while studying for a test.
- **Employee Handbook Helper**&mdash;Add a company's policy documents so employees can ask questions like "How many vacation days do I get?"
- **Research Assistant**&mdash;Add a set of research papers and ask the notebook to compare their findings.
- **Product Support Bot**&mdash;Add the user manuals for a product and share the notebook with customers.

### Gemini Notebook vs. Gemini Gem

Both tools let you give Gemini your own files, and both use RAG, but they are built for different jobs (see [Creating a Gemini Gem Chatbot](CS112-Topic09-2A-GeminiGemChatbot.html)):

| Feature                    | Gemini Gem                                                   | Gemini Notebook                                              |
| -------------------------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| **Main purpose**           | A custom assistant with a persona and instructions           | Answering questions about a collection of sources            |
| **Instructions**           | The core of a Gem (persona, tone, task)                      | Optional; the sources are the core                           |
| **Knowledge**              | Up to 10 files                                               | 50 sources per notebook on a free plan, more on paid plans   |
| **General knowledge**      | Uses Gemini's general knowledge and web search freely        | Answers from your sources                                    |
| **Citations**              | Not always                                                   | Answers cite the sources they used                           |
| **Extra outputs**          | Chat only                                                    | Audio and Video Overviews, mind maps, study guides, flashcards, quizzes |

## How a Gemini Notebook Uses RAG

A Gemini Notebook is a clear example of *Retrieval-Augmented Generation* (RAG). Instead of relying on what the LLM learned during training, it *retrieves* passages from your sources and uses them to *ground* (base) its answer.

### The Steps

Google hasn't published exactly how Gemini Notebook works inside, but it follows the general RAG pattern described in [Retrieval-Augmented Generation](CS112-Topic09-1-RAG.html):

1. **Adding sources (indexing):** When you add a source, Gemini Notebook reads it and breaks it into smaller passages. It turns each passage into a list of numbers (an *embedding*) that represents its meaning, and stores these so it can search them later. This happens once, when the source is added.
2. **Asking a question (retrieval):** When you ask a question, your question is also turned into an embedding. The notebook finds the passages whose meaning is closest to your question. This is searching by *meaning*, not just by matching keywords, so a question about "time off" can find a passage about "vacation days."
3. **Writing the answer (generation):** The retrieved passages, your question, and the recent conversation are sent to the Gemini LLM. The LLM is told to write an answer using only those passages.
4. **Citing the sources:** The answer includes numbered citations. Clicking a citation shows the passage in the source that the answer came from. (For a very short source, the citation points to the whole source instead of a passage.)

### Choosing Which Sources to Use

Every source has a checkbox in the **Sources** panel. Only checked sources are searched. Unchecking sources is a way to focus the notebook on one document, or to compare what different documents say.

### Grounding

According to the Gemini Notebook help pages, the notebook answers questions using the information in your sources, and if the answer isn't in your sources, it won't give one. This is the main reason to use a notebook instead of a general chatbot:

- **Fewer hallucinations:** The LLM is limited to the passages it was given, so it is much less likely to make up an answer.
- **Answers you can check:** The citations let you verify every claim against the original text.
- **Up-to-date and private knowledge:** The notebook can answer questions about documents the LLM was never trained on, such as your own class notes.

Grounding reduces errors, but it doesn't eliminate them. The LLM can still misread a passage or combine two passages incorrectly, so check the citations for anything important.

> **Note:** Notebooks used inside the *Gemini app* can use Gemini's web search and other tools along with your sources. When you want answers that come only from your sources, use Gemini Notebook at notebook.google.com.

### What About the Context Window?

A long list of sources can add up to millions of words, which is far more than an LLM's *context window* (the amount of text it can consider at once). RAG solves this problem: only the passages that are relevant to the question are sent to the LLM, not the whole notebook.

## How to Make a Notebook

1. Go to [notebook.google.com](https://notebook.google.com) and sign in with a Google Account.
2. Click **Create new notebook** (or **New notebook**).
3. Add your sources (see below).
4. Ask questions in the **Chat** panel.

### Adding Sources

You can add these kinds of sources:

- **Files:** PDF, Word (.docx), PowerPoint (.pptx), text, Markdown, CSV, ePub, images, and audio files (such as MP3 and WAV)
- **Google Drive:** Google Docs, Slides (up to 100 slides), and Sheets
- **Web sites:** Paste a URL and the notebook imports the text of the page
- **YouTube videos:** Paste the URL of a public video
- **Copied text:** Paste text directly into the notebook

You can also have the notebook search the web or your Google Drive for sources on a topic and suggest ones to add. *Fast Research* does a quick search, and *Deep Research* (for users 18 and older) does a longer, more thorough one.

### Limits

| Constraint                 | Limit                                                        |
| -------------------------- | ------------------------------------------------------------ |
| **Sources per notebook**   | 50 on a free plan; 100 to 600 on paid plans                  |
| **Size of each source**    | Up to 500,000 words, or 200 MB for an uploaded file          |
| **Pages**                  | No page limit (the word limit applies)                       |

Copy-protected PDFs can't be imported, and Google Sheets have a lower size limit. Limits change often; see the [Gemini Notebook FAQ](https://support.google.com/notebooklm/answer/16269187?hl=en) for the current numbers.

### Keeping Sources Up to Date

Sources added from Google Drive are updated automatically every few minutes when the original file changes. You can also open the source and click **Click to sync with Google Drive** to update it right away. Uploaded files and web pages are copies, so you have to remove them and add them again to update them.

## Sharing a Notebook

To share a notebook, open it and click **Share** in the upper right corner. Only the notebook's owner, or someone with *editor* access, can share it.

### Sharing with Specific People

In the Share window, enter the email addresses of the people you want to share with and choose their role:

- **Viewer:** Can chat with the notebook and read its sources and notes, but can't change them.
- **Editor:** Can add and remove sources and notes, and share the notebook with others.

A personal Google Account can share a notebook with up to 50 people this way.

### Sharing with a Link

Under **Notebook Access**, choose one of these options:

- **Restricted:** Only the people you have added by email can open the notebook. Choosing this turns off link sharing, and links you sent before stop working.
- **Anyone with a link:** Anyone who has the link and a Google Account can open the notebook. The notebook won't show up in search results.
- **Public:** Anyone can open the notebook, and it may show up in search results.

Then click **Copy link** and **Save**. Send the link to the people you want to use the notebook, or post it on a web page.

### Chat View

Instead of **Copy link**, you can click **Copy link to chat view**. People who use this link see only the chat, not the sources or the other notebook features. This is the best choice when you want your notebook to act like a chatbot for other people.

Chat view hides the sources but doesn't stop people from seeing them. Anyone with the link can still get to the sources, so **don't put anything private in a notebook you share**.

### Things to Know About Sharing

- People you share with see your changes to the notebook right away; you don't need to send a new link.
- Public link sharing (**Anyone with a link** and **Public**) works only with personal Google Accounts. It is turned off for work and school (Google Workspace Enterprise and Education) accounts, so use a personal account to make a notebook for the public.
- Owners with a paid plan can see how many people use a shared notebook and how many questions they ask.

## References

[Gemini Notebook](https://notebook.google.com)&mdash;The Gemini Notebook web app

[Frequently asked questions](https://support.google.com/notebooklm/answer/16269187?hl=en)&mdash;Gemini Notebook help page

[Create a notebook](https://support.google.com/notebooklm/answer/16206563?hl=en)&mdash;Gemini Notebook help page, includes sharing with specific people

[Add or discover new sources](https://support.google.com/gemininotebook/answer/16215270?hl=en)&mdash;Gemini Notebook help page

[Learn about Gemini Notebook's plans](https://support.google.com/notebooklm/answer/16213268?hl=en)&mdash;Gemini Notebook help page with limits for each plan

[Use public notebooks and featured notebooks](https://support.google.com/gemininotebook/answer/16322204)&mdash;Gemini Notebook help page on sharing with a link

[Try notebooks in Gemini to easily keep track of projects](https://blog.google/innovation-and-ai/products/gemini-app/notebooks-gemini-notebooklm/)&mdash;Google blog, April 2026

---

[![Creative Commons License](https://i.creativecommons.org/l/by-sa/4.0/88x31.png)](http://creativecommons.org/licenses/by-sa/4.0/) Intro to AI lecture notes by [Brian Bird](https://profbird.dev), written in <time>2026</time>, are licensed under a [Creative Commons Attribution-ShareAlike 4.0 International License](http://creativecommons.org/licenses/by-sa/4.0/).

---

Note: Claude Opus 5.5 was used to draft parts of these notes.
