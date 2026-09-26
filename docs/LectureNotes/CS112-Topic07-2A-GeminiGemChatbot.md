---
title: Custom Gem Chatbot
description: How to create a custom Gemini Gem chatbot
keywords: AI, chatbot, Gemini Gem
generator: Typora
author: Brian Bird
---

<h1>Creating a Gemini Gem Chatbot</h1>

**CS123, Intro to AI**

| Topics                                                       |                                              |
| ------------------------------------------------------------ | -------------------------------------------- |
| Overview of AI                                               | Neural networks and deep learning            |
| AI Problem Solving Revisited<br />Machine Learning&mdash;Part 1<br />Applications of AI | Generative AI +Prompt engineering            |
| Machine Learning&mdash;Part 2                                | RAG &  <mark>Custom chatbot creation</mark>  |
| History of AI + Midterm                                      | Social and ethical issues of AI  <br />Final |



<h2>Contents</h2>

[TOC]

## Overview

### Objectives

Understand:

- What Gems are
- How Gems work

Learn how to:

- Use Gems
- Customize premade Gems
- Write instructions for your own custom Gems.

### What is a Gem?

> Gems are custom versions of Gemini that give you tailored responses. You can customize a premade Gem or you can create a new gem from scratch using instructions you set. You’ll find all your Gems here where you can edit them any time or you can start chatting right now with a premade Gem.&mdash;[Gemini Gem start page](https://gemini.google.com/gems/view).

### Examples of Gems

#### Google Premade Gems

Browse the "Explore Gems" section of the Gemini web page. Here are examples of some of the Gems you will find:

- [Career Guide](https://gemini.google.com/gem/career-guide)&mdash;Get a plan for refining your skills to achieve your career goals.
- [Coding Partner](https://gemini.google.com/gem/coding-partner)&mdash;Assists a programmer with their coding.
- [Chess Champ](https://gemini.google.com/gem/chess-champ)&mdash;Play chess against an LLM.

#### Ideas for Gems You Could Make

- **Meeting Follow-Up & Action Planner**&mdash;Takes raw, unedited meeting notes and turns them into organized summaries with action items.
- **Note Taker for Health Care**&mdash;Takes dictation of patient notes and structures them into SOAP (Subjective, Objective, Assessment, Plan) format.
- **Differentiated Lesson Designer**&mdash;Takes an original assignment and generates modified versions for education.
- **Financial Jargon Explainer**&mdash;When provided with a complex finance term or acronym (e.g., "LTV," "EBITDA," "Zero-Based Budgeting"), it provides a plain-language definition.

### How a Gem Works

A Custom Gem is a specialized, persistent "wrapper" built around the powerful Gemini Large Language Model (LLM). Think of Gemini as the core engine, and the Gem as the personalized dashboard with set instructions.

Gems function using three integrated layers:

1. **The Core Engine (Gemini LLM):** This is the foundation of the Gem's intelligence, trained on massive amounts of data. Without a Gem, you would have to type out longer, more detailed instructions for every query.
2. **The Personalization Layer (The Gem Instrucitons):** This is the critical element. The instructions you write when creating a Gem (defining its Persona, Tone, and Task) are saved as a "Super-Prompt" (aka Gem instructions) and automatically injected into every conversation, forcing Gemini to behave consistently.
3. **The Knowledge Layer (Retrieval-Augmented Generation - RAG):** This layer integrates your custom files without making Gemini memorize them. When you ask a question, the system searches its index of your files, retrieves only the most relevant snippets, and uses that current, specific text to "ground" the AI's response. This ensures the output is factual based on your data. Furthermore, linking to Google Docs/Sheets allows the Gem’s knowledge to update *live* whenever the source document changes.

In essence, a Gem is a highly effective way to package complex instructions and custom data, creating a hyper-specialized version of the powerful Gemini AI engine instantly available for your specific needs.

## How to Make a Custom Gem

You can make a Gem from scratch or modify one that has already been made.

See the Instructions on the Gemini web page.

### Including a Web Search in the Gem Instructions

you **can** instruct a custom Gem to use its web search capability to look for information, and you can mention a specific website.

### 1. You Cannot Force Exclusivity

You can include instructions like:

> "Whenever the user asks a question about current news or market prices, you must <u>first</u> search the web. **Focus your search on information found on `www.example-finance-site.com` or `www.example-news-blog.org` to prioritize those sources.**"

- **What it does:** This provides a strong behavioral constraint for the Gemini model. When it decides to use its Google Search grounding tool (which is how it gets current web data), the model will heavily weigh the specified domains in its search query and information retrieval.
- **What it doesn't do:** You cannot strictly prevent the Gem from bringing up information from other sources if those sources are deemed more relevant or authoritative by the underlying Gemini model/search tool. The Gemini model is designed to provide the best, most comprehensive answer available via Google Search.

### 2. Using Files vs. Web Search

If you want the Gem to *only* use a specific website's data, you often need to consider a different approach:

- **For Static Content:** If the website has a specific document (like a PDF annual report or a detailed guide), it is far more reliable to **download that file** and **upload it** directly to the Gem's "Knowledge" section (up to 10 files). The Gem will then prioritize this uploaded content over general web search for those topics.
- **For Real-Time Content:** If the site content is constantly changing (like stock prices or live news feeds), you **must** rely on the web search instruction, as the file upload method is for static documents.

### Summary

| Goal                                     | Method in Gem Instructions                                   | Reliability                                 |
| ---------------------------------------- | ------------------------------------------------------------ | ------------------------------------------- |
| **Search a Specific Site for Live Data** | "When searching the web for X, prioritize `www.examplesite.com`." | Good, but not 100% exclusive.               |
| **Search the General Web**               | "Always use the web search tool to find current information." | High, uses standard Gemini grounding.       |
| **Use a Specific Document**              | **Upload the document** (PDF, DOCX) to the Gem's Knowledge base. | Highest, it is the primary source of truth. |

## Adding Knowledge

### Upload files or add them from Google Drive

- **File Count Limit:**  You can typically reference up to **10 individual files** as the knowledge source, regardless of whether they are uploaded or linked from Drive.

- **Supported Formats:** Gemini Apps support a broad range of file types for both linking and uploading, including:

  - **Documents/Text:** Google Docs, TXT, DOC, DOCX, PDF, RTF.
  - **Data:** Google Sheets, XLS, XLSX, CSV, TSV.
  - *Note: Other formats like images and videos can be analyzed in a chat session but the core Gem knowledge base focuses on these document and data types.*

  ## Limits for Custom Gem Knowledge Files

  | Constraint                       | Limit                                             | Details                                                      |
  | -------------------------------- | ------------------------------------------------- | ------------------------------------------------------------ |
  | **Files Per Gem**                | Up to **10 files**                                | This is the maximum number of individual files (documents, images, etc.) you can upload directly or link from Google Drive to the Custom Gem's knowledge base. |
  | **File Size (Documents/Images)** | Around **100 MB** per file                        | This is the typical size limit for individual documents, PDFs, and images (or 75MB depending on the specific surface). It aligns with the standard limits for Gemini Apps. |
  | **Document Length**              | Up to **~1,500 pages**                            | The Gemini models (especially Pro/Ultra with the 1 million token context window) can effectively process documents up to this approximate length (e.g., PDFs). |
  | **Supported File Types**         | Standard types like **PDF, DOCX, JPG, PNG**, etc. | The same file types supported in general chats are supported for Gems. |

  ### Advantages of Google Drive Linking

  | Feature             | Google Drive Link                                            | Local File Upload                                            |
  | ------------------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
  | **Content Updates** | **Automatic.** If the source file (e.g., Google Doc/Sheet) is edited in Drive, the Gem instantly accesses the latest version. | **Manual.** The file must be re-uploaded to the Gem every time a change is made to the source. |
  | **Workflow**        | **Seamless.** Directly links files from your existing Workspace, reducing friction (no download/re-upload needed). | Requires intermediate steps of downloading from storage and then uploading to the Gem. |
  | **Security**        | Honors existing Drive access controls. For Workspace users, data is often protected under enterprise compliance standards. | Access is determined by the Gemini platform, not inheriting Workspace-level controls. |
  | **Context**         | Native integration allows for a better understanding of file structure and metadata within the Google Workspace ecosystem. | Provides the AI with the file content only.                  |



## How to Make a Gem Available to Others

1. **Link Sharing:** The primary method is to generate a public link, much like sharing a Google Doc or Drive file.
   - You access your **Gem Manager** on the Gemini web app (`gemini.google.com`).
   - You'll find a **Share** option next to your custom Gem.
   - You can then choose to **Create link** and share that unique URL with anyone.
2. **Access Levels:** When sharing, you typically have control over who can access it:
   - **Anyone with the link (Viewer):** Anyone who has the link can use your Gem, often without needing to sign in to a Google Account.
   - **Public:** In some cases, for personal accounts, you may see an option to make it fully public, allowing anyone to search for and access it on Google.
   - **Specific People:** You can also share it directly via email, granting "Viewer" or even "Editor" permissions if you want someone to collaborate on the instructions.
3. **No Official Central Marketplace (Yet):** As of now, there is no official, built-in "Gem Marketplace" or centralized gallery hosted by Google where you can browse and discover *all* public Gems. You have to share the links directly.
   - However, because Gems can be shared via URL, some third-party communities and developers have started creating unofficial indexes or lists where people voluntarily post their Gem links for others to find (similar to how people used to share long prompts on forums like Reddit).
   
   

---

## Appendix

---

### Template for Prioritizing a Specific Website

Here is a template you can adapt for your Gem's instructions:

#### 1. Establish the Persona and Primary Goal (Sets the foundation)

**Persona:** You are a highly specialized *[Name of Expert/Role, e.g., "Market Analyst for the Tech Industry"]*.

**Primary Goal:** Your sole purpose is to provide timely, accurate, and fact-based answers about *[Specific Topic, e.g., "Company X's stock performance and official product announcements"]*.

#### 2. Set the Web Search Constraint (The Core Rule)

**CRITICAL RULE: Web Search Protocol**

1. You <u>must</u> use your web search tool for any question regarding current information (e.g., "today's price," "latest news," "recent announcements").
2. When performing a web search, you are **strictly required to prioritize and cite sources from the following URL(s):**
   - `https://www.your-target-website.com`
   - `https://www.secondary-source.org` (Optional)
3. **DO NOT** rely on information from general news sites or social media unless the specific website listed above cannot provide an answer.

#### 3. **Define Output and Tone** (Reinforces the professional behavior)

**Output Format & Tone:**

- Your responses must be **professional, objective, and direct**.
- For every piece of current information you provide, you **must include an inline citation** linking to the exact source page from `www.your-target-website.com`.
- If the specific site above provides conflicting information with a general Google Search result, you **MUST** prioritize the information from the target site.

### Why this works:

- **Priority One Directive:** Placing "CRITICAL RULE" and using **bolding** signals to the underlying model that this instruction is a high-priority behavioral constraint.
- **Specific Domain Inclusion:** By including the URL directly in the instruction, the model incorporates that URL into its search queries, which significantly biases the search results toward that domain.
- **Mandatory Citation:** Requiring a citation for every piece of information ensures the Gem is actually using the web search tool and checking its source against your rule.

By structuring your instructions this way, you give the Gem a clear, non-negotiable protocol for how to use its web search capability, making it much more likely to prioritize the information you need.

---

### Concept of Conversational Memory

*Conversational memory* is the history of the conversation. If the conversation goes on for too long, the system must use techniques (like summarizing or dropping older parts of the conversation) to keep the essential *conversational memory* within the *model context* limit.

No, **conversational memory** is related to, but not the same as, **model context** (or context window).

Here is a comparison of the differences between *conversational memory* and *model context* (aka the *context window*).

| **Feature**                        | **What it Is**                                               | **How it's Used in Chatbots**                                |
| ---------------------------------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| **Conversational Memory**          | The **session state**; the historical record of the user's questions and the bot's responses within the current chat session. | It allows the bot to understand follow-up questions without the user having to repeat details, making the dialogue coherent and natural. |
| **Model Context** (Context Window) | The **physical limit** on the amount of text (measured in tokens) the Large Language Model (LLM) can process, hold, and consider at any one time to generate a response. | The chat history (conversational memory) must be continuously compressed and fed into this context window along with the custom instructions and the RAG-retrieved data so the model can generate the next informed reply. |



## References

[Get started with Gems in Gemini Apps](https://support.google.com/gemini/answer/15236321?hl=en&sjid=4226569579723721832-NC&visit_id=638992508112399076-1637983617&ref_topic=15236104&rd=2)&mdash;Gemini help page

[Share a Gem from Gemini Apps](https://support.google.com/gemini/answer/16504957?hl=en&co=GENIE.Platform%3DAndroid)&mdash;Gemini help page

[Gemini News](https://blog.google/products/gemini/)&mdash;The official Gemini blog


---

[![Creative Commons License](https://i.creativecommons.org/l/by-sa/4.0/88x31.png)](http://creativecommons.org/licenses/by-sa/4.0/) Intro to AI lecture notes by [Brian Bird](https://profbird.dev), written in <time>2025</time>, are licensed under a [Creative Commons Attribution-ShareAlike 4.0 International License](http://creativecommons.org/licenses/by-sa/4.0/).  

---

Note: Microsoft Copilot with GPT-4 was used to draft parts of these notes. 
[^1]: Microsoft Entra ID, formerly known as Azure Active Directory, is a cloud-based identity and access management system used by Microsoft Teams, Azure, Microsoft 365, and other Microsoft products and services.



