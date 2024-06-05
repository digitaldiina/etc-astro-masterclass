---
uid: lesson-2
title: Lesson 2 - Create your first page
description: How to create your first Astro page.
language: en
topic: howto
date: 2024-06-02
author: Bergfrid Dias
layout: ../../layouts/MarkdownLayout.astro
---
## Objectives

* Add content to your site.
* Add basic styling.

## Requirements

* You have created an Astro project (lesson 1).
* You have started the dev server (npm run dev).

## Create page about.astro

1. Copy *index.astro* and name it *about.astro*.

1. In your browser, go to `http://localhost:4321/about`.

    HINT: It should look identical to your homepage.

1. Open *about.astro* in the editor and change the `<h1>` text. Check the browser again.

## Add navigation links

Use HTML `<a>` elements to write links relative to the root domain.

1. In *about.astro*, add the following code above `<h1>`:

    ```html
    <a href="/">Home</a>
    <a href="/about/">About</a>
    ```

1. Do the same in *index.astro*.

1. Check the result in your browser.

## Add local styling

1. Copy and add the following code at the bottom of *about.astro*:

    ```html
    <style>
      h1 {
        color: purple;
        font-size: 4rem;
      }
    </style>
    ```

1. Check all pages in your browser.

## Add a global stylesheet

1. Create folder *src/styles/*.

1. In the new folder, create a new file named *global.css* (src/styles/global.css).

1. Copy the following code into the new CSS file:

    ```css
    html {
      background-color: #f1f5f9;
      font-family: sans-serif;
    }
    body {
      margin: 0 auto;
      width: 100%;
      max-width: 120ch;
      padding: 1rem;
      line-height: 1.5;
    }
    h1 {
      margin: 1rem 0;
      font-size: 2.5rem;
    }
    ```

1. In *about.astro*, add the following line to the **frontmatter**:

    ```javascript
    ---
    import '../styles/global.css';
    ---
    ```

1. Check the result in your browser.

    TIP: If you don't want the local style in *about.astro*, delete or comment out the `<style>` tag.

## Extra: create custom 404 page

1. In *src/pages*, create a file named 404.astro.

1. Add a link back to home.

1. Customize and see the results.
