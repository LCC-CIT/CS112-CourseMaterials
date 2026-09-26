---
title: Custom Chatbot
description: How to create a custom chatbot with Microsoft Copilot Studio
keywords: AI, chatbot, copilot studio
generator: Typora
author: Brian Bird
---

<h1>Creating a Custom Chatbot</h1>

**CS123, Intro to AI**

| Topics                                                       |                                              |
| ------------------------------------------------------------ | -------------------------------------------- |
| Overview of AI                                               | Neural networks and deep learning            |
| AI Problem Solving Revisited<br />Machine Learning&mdash;Part 1<br />Applications of AI | Generative AI +Prompt engineering            |
| Machine Learning&mdash;Part 2                                | RAG &  <mark>Custom chatbot creation</mark>  |
| History of AI + Midterm                                      | Social and ethical issues of AI  <br />Final |



<h2>Contents</h2>

[TOC]

## Copilot Studio

Full details on creating a custom GPT chatbot using [Microsoft Copilot Studio](https://copilotstudio.microsoft.com) are provided in the [Microsoft documentation for Copilot Studio](https://www.microsoft.com/en-us/microsoft-copilot/microsoft-copilot-studio).  

There are essentially two ways a chatbot created in Copilot Studio can generate answers:

- **Topics**: This approach is based on using keywords in the user's query to trigger topics that have branching conversation flows that follow a decision tree (remember this from symbolic logic?)

- **Generative**: An LLM is used with RAG to generate responses to the user's queries.

## Tips

### Generative AI Responses

- To get your copilot to use generative AI to respond, go to Settings, Generative AI, and click the radio button labeled "Generative (preview)" 

- In order to get the copilot to use my web site, in "Overview" I had to turn off "Allow the AI to use its own general knowledge (preview)".

### Greeting

The initial greeting comes from the topic: "conversation start". You can edit it in "conversation flow".

### Authentication

Click on the "Settings" button, "Security", "Authentication". These are the options

- No authentication: *This is the reccomended option for our class assignment.*

- Authenticate with Microsoft

  If you want to use OneDrive as a knowledge source, you have to use this option, which uses *Microsoft Entra ID*[^1],  but, then you won't be able to publish to a web site!
  
- Authenticate manually

### Knowledge Sources

Click on the  "Add Knowledge" button, there will be two options, choose "Featured". The sources shown here are sources that don *not* require a special *enterprise data connection*:

- Public web sites (must be indexed by Bing)  
  - You can see if the site you want to use is indexed by Bing by using the `site:` search operator. For example, in the Bing search bar type:
     `site:yourdomain.com`
    This will show all the pages from your site that have been indexed.
- Files
- OneDrive folders&mdash;Requires Microsoft Entra ID (Teams and Office 365)



#### Index for Searching

All knowledge source depend on the source for searching. This means the files need to have their content indexed. It happens different ways in different knowledge sources:

- Web site: your site needs to be indexed by Bing. This can take days (or more) and depends on getting your site ready according to the [Bing Webmaster](https://www.bing.com/webmasters) requirements.
- Files: will be made searchable by Dataverse.
- OneDrive: Will be indexed by OneDrive almost immediately after upload.

#### Document Types for Files

- Markdown and html  
  These files could be in one of three knowledge sources: web site, files, or OneDrive.
  - In a web site: just html will be indexed, citations (links in the response) open as a web page. 
  - In files: (stored in Dataverse) both will be indexed, citations open as text only.
  - In OneDrive: neither will be indexed
  
- PDF and Word
  - PDFs and Word docs get indexed everywhere
  - PDF citations open as documents, Word docs get downloaded instead of opening
  
- Excel and .csv
  - Both can be searched and understood when uploaded as files.
  

###  Publishing to a Web Site

You can publish your chatbot in many different ways as can be seen on the "Channels" page for your chatbot. To put your chatbot on a web page you have two options:

- Custom website: This option will provide you with code that you can put on your own web site to embed the chatbot on a page.
- Demo website: This option will create a web page that is hosted by Microsoft and that contains your chatbot. You can share the link with anyone so they can use your chatbot.

## References

- [Sign up for a free trial](https://learn.microsoft.com/en-us/microsoft-copilot-studio/sign-up-individual) (no credit card required) 
- [Quickstart: Create and deploy a chatbot](https://learn.microsoft.com/en-us/microsoft-copilot-studio/fundamentals-get-started?tabs=web) 
- [Add Knowledge to your copilots](https://learn.microsoft.com/en-us/microsoft-copilot-studio/knowledge-copilot-studio) 
- [Generative AI in Microsoft Copilot Studio](https://learn.microsoft.com/en-us/microsoft-copilot-studio/nlu-gpt-overview)




---

[![Creative Commons License](https://i.creativecommons.org/l/by-sa/4.0/88x31.png)](http://creativecommons.org/licenses/by-sa/4.0/) Intro to AI lecture notes by [Brian Bird](https://profbird.dev), written in <time>2024</time>, are licensed under a [Creative Commons Attribution-ShareAlike 4.0 International License](http://creativecommons.org/licenses/by-sa/4.0/).  

---

Note: Microsoft Copilot with GPT-4 was used to draft parts of these notes. 
[^1]: Microsoft Entra ID, formerly known as Azure Active Directory, is a cloud-based identity and access management system used by Microsoft Teams, Azure, Microsoft 365, and other Microsoft products and services.



