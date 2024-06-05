---
uid: lesson-1
title: Lesson 1 - Create a new Astro project
description: How to create a new Astro project.
language: en
topic: howto
date: 2024-06-02
author: Bergfrid Dias
layout: ../../layouts/MarkdownLayout.astro
---

## Objectives

* Create an Astro project and run it on localhost.

## Requirements

* Editor: [Visual Studio Code](https://code.visualstudio.com/)

  * I highly recommend the [official Astro extension](https://marketplace.visualstudio.com/items?itemName=astro-build.astro-vscode)

  * [Alternative editors](https://docs.astro.build/en/editor-setup/)

* Node.js v18.17.1 OR v20.3.0 or higher. Version 19 is not supported!

  * [Downloading and installing Node.js and npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)

* A terminal (command line)

## Launch the Astro set-up wizard

If you've installed Node.js, you should already have npm. Alternatively, use your favorite package manager.

You can run the installer anywhere on your laptop. You don't need to create an empty folder for the project first.

1. Open your terminal.

1. Enter `npm  create astro@latest` and press **Enter**.

1. **dir:** Choose project location:

    * Press **Enter** to accept the suggestion.
    * Or, type a folder name (with path) and press **Enter**.

1. **tmpl:** Use the arrow keys to select `Empty` and press **Enter**.

    NOTE: Feel free to use any template you'd like after this workshop.

1. **ts:** Select `Yes` and `Strict`.

1. **deps:** Select `Yes` and press **Enter**.

1. **git:** You choose!

1. Wait for the wizard to finish. Look for the **Liftoff confirmed** message.

## Open the new Astro project

1. Start VS Code.
1. Go to **File** > **Open folder**.
1. Select the folder you just created.

## Run Astro in dev mode

Astro has a built-in development server. As you build, it will help you preview the site and test the changes.

1. In VS Code, select **Terminal** > **New terminal**.
1. Enter `npm run dev` and press **Enter**.
1. Wait for the **watching for file changes...** message.

## Preview your new website

1. Open your preferred browser.
1. Go to `http://localhost:4321`.

CONGRATULATIONS!!
