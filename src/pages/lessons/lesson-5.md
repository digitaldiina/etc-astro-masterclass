---
uid: lesson-5
title: Lesson 5 - Add layout
description: How to add reusable layouts to your Astro project.
language: en
topic: howto
date: 2024-06-02
author: Bergfrid Dias
layout: ../../layouts/MarkdownLayout.astro
---

## Objectives

* Refactor common elements into a generic page layout.

## Requirements

* You have completed lessons 1, 2, and 4.
* You have started the dev server (npm run dev).

## BaseLayout.astro

1. Create folder *src/layouts/*.

1. In the new folder, create a file named *BaseLayout.astro* (src/layouts/BaseLayout.astro).

1. Copy **all lines** from *src/pages/index.astro* to *BaseLayout.astro*.

1. Replace the contents of *index.astro* with the following:

```astro
---
import BaseLayout from '../layouts/BaseLayout.astro';
---
<BaseLayout>
  <h2>My conference subtitle</h2>
</BaseLayout>
```

1. In your browser, check the result.

    HINT: nothing changed!

1. In *BaseLayout.astro*, add a `<slot />` element just above the footer. Then recheck the results.

## JavaScript variables and Astro props

1. In *index.astro*, add the following at the end of the frontmatter:

    ```javascript
    const pageTitle = "Astro Masterclass";
    ```

1. In *index.astro*, change `<BaseLayout>` to the following:

    ```astro
    <BaseLayout pageTitle={pageTitle}>
    ```

1. In *BaseLayout.astro*, add the following to the frontmatter:

    ```javascript
    const { pageTitle } = Astro.props;
    ```

1. In *Baselayout.astro*, change the `<h1>` element to:

    ```astro
    <h1>{pageTitle}</h1>
    ```

1. Check the result.

## Extra: change *about.astro* to use BaseLayout

## Markdownlayout.astro

1. In the *layouts* folder, create a new file named *MarkdownLayout.astro*.

1. Copy the following code into the new file:

```astro
---
const { frontmatter } = Astro.props;
---

<h1>{frontmatter.title}</h1>
<p>Written by {frontmatter.author}</p>
<slot />
```

1. In *src/pages*, create a file named *sample-article.md*.

1. Copy the following code into the new file:

```markdown
---
uid: sample-article
title: Sample article
description: Elit anim officia deserunt esse nulla proident elit exercitation irure mollit dolor.
language: en
topic: concept
date: 2024-06-05
author:  Workshop participant
---

Mollit et minim nisi nisi nisi cillum et. Aute incididunt ullamco cupidatat irure exercitation deserunt dolor.
```

1. In your browser, go to `http://localhost:4321/sample-article`. What does it look like?

1. Add the following line to the **Markdown frontmatter** of *sample-article.md*:

```md
layout: ../layouts/MarkdownLayout.astro
```

1. Check the result.

## Optional code check-in
