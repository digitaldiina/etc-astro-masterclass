---
uid: lesson-4
title: Lesson 4 - Create your first component
description: How to create your first Astro component.
language: en
topic: howto
date: 2024-06-02
author: Bergfrid Dias
layout: ../../layouts/MarkdownLayout.astro
---

## Objectives

* Create an Astro component that displays navigation links and replace existing HTML with it.

## Requirements

* You have created an Astro project (lesson 1) and have added about.astro page.
* You have started the dev server (npm run dev).

## Add top navigation

1. Create folder *src/components/*.

1. In the new folder, create a new file named *Navigation.astro*.

1. In *Navigation.astro*, add your links:

    ```html
    <a href="/">Home</a>
    <a href="/about/">About</a>
    ```

1. In *index.astro*, add the following line to the **frontmatter** (somewhere between the code fences):

    ```javascript
    import Navigation from '../components/Navigation.astro';
    ```

1. Then, replace the existing navigation links with the component you imported:

    ```astro
    <Navigation />
    ```

1. Check the result in your browser.

    HINT: It should look like before.

1. Do the same in *about.astro* (and other Astro pages you've created). Check the result.

1. In *Navigation.astro*, add one more link, for example:

    ```html
    <a href="#">API</a>
    ```

    TIP: `<a href="#">` adds a link but it doesn't go anywhere. Use it as a placeholder while constructing the site - you don't need to have all content ready yet.

## Add a footer

1. In the component folder, create a new file named *Footer.astro* (src/components/Footer.astro).

1. Copy the following code into the new file:

    ```html
    <footer>
      <p>Evolution of TC | Astro masterclass</p>
      <p><a href="https://docs.astro.build/">Astro docs</a></p>
    </footer>
    <style>
      footer {
        display: flex;
        gap: 1rem;
        margin-top: 2rem;
      }
    </style>
    ```

1. In *index.astro*, add this line between the code fences:

    ```javascript
    import Footer from '../components/Footer.astro';
    ```

1. Still in *index.astro*, insert `<Footer />` just before the closing `</body>` tag. Like this:

    ```astro
        <Footer />
      </body>
    </html>
    ```

1. Import and add the component in your other Astro pages and check the result.

## Extra: nesting components

1. Create a new `<Header />` component.

1. Wrap the navigation component in a header like this:

```astro
---
import Navigation from './Navigation.astro';
---

<header>
  <nav>
    <Navigation />
  </nav>
</header>
```

1. Where you use `<Navigation />`, replace it with the new component.

## Source control

If your project uses Git, whether local-only or connected to GitHub, you may want to commit your changes at the end of each lesson.

If you completed lesson 3, visit your Netlify website after pushing to GitHub.
