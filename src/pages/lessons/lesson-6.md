---
uid: lesson-6
title: Lesson 6 - Add Markdown content collection
description: How to add a Markdown content collection in Astro.
language: en
topic: howto
date: 2024-06-02
author: Bergfrid Dias
layout: ../../layouts/MarkdownLayout.astro
---

In lessons 1-5, we've used Astro's built-in file-based routing and the *src/pages* folder.
This lesson introduces **dynamic routing** and the *src/content* folder.

## Objectives

* Add a docs collection with Markdown content.

## Requirements

* An Astro project.
  * You have completed lessons 1, 2, 4, and 5. Then create test data yourself.
  * Or, you can fork a sample project and use that codebase locally.
* You have started the dev server (npm run dev).

### Continue from lesson 5

1. Create folder *src/content/*.

1. In the new folder, create a subfolder named *docs*.

1. In *docs*, create 3 new .md files (docs-1.md, docs-2.md, docs-3.md).

1. Copy the following code to each Markdown file. Then adjust the uid and title values so the number matches the filename.

    ```md
    ---
    uid: docs-concept-1
    title: Concept 1
    description: Elit anim officia deserunt esse nulla proident elit exercitation irure mollit dolor.
    language: en
    topic: concept
    date: 2024-06-05
    author: Workshop participant
    ---

    Elit anim officia deserunt esse nulla proident elit exercitation irure mollit dolor. Mollit et minim nisi nisi nisi cillum et.

    Aute incididunt ullamco cupidatat irure exercitation deserunt dolor. Ullamco dolor quis adipisicing sint laboris nisi. Esse labore exercitation aute ipsum deserunt eu voluptate pariatur fugiat commodo aute anim.
    ```

### Fork and download a sample project

Create a fork of the repository into your own GitHub account by using the GitHub website.

1. Go to the [repository's GitHub page](https://github.com/digitaldiina/etc-astro-masterclass) and click the **Fork** button on the upper right.

2. If you are prompted, select your GitHub account tile as the destination where the fork should be created.

Your fork is referenced through your personal GitHub user account, such as `github.com/<github-username>/etc-astro-masterclass`.

1. Run the **clone** command, by providing the repository name. Cloning downloads (clone) the repository on your local computer.

    **Using a fork:**

    ```sh
    git clone https://github.com/<github-username>/etc-astro-masterclass.git
    ```

The clone command runs and downloads a copy of the repository files from GitHub into a new folder on the local disk. This may take a few minutes, depending on the repository size.

You can now explore the folder to see the structure.

## Set up TypeScript

Unless you chose strict TypeScript when installing Astro, you need to update the configuration before we use collections.

1. Open *tsconfig.json* in VS Code. The file is located at the top-level of your Astro project.

1. Replace the entire contents of the file with this code:

    ```json
    {
      "extends": "astro/tsconfigs/base",
      "compilerOptions": {
        "strictNullChecks": true,
        "allowJs": true
      }
    }
    ```

1. In *src/content/*, create a new file named *config.ts*.

1. Add the following contents to the file:

    ```typescript
    // Import utilities from `astro:content`
    import { z, defineCollection } from "astro:content";
    // Define a `type` and `schema` for each collection
    const docsCollection = defineCollection({
        type: 'content',
        schema: z.object({
          uid: z.string(),
          title: z.string(),
          description: z.string(),
          author: z.string(),
          topic: z.string().optional(),
          language: z.string().optional(),
          date: z.date().optional(),
        })
    });
    // Export a single `collections` object to register your collection(s)
    export const collections = {
      docs: docsCollection,
    };
    ```

[Using Zod](https://docs.astro.build/en/guides/content-collections/#defining-datatypes-with-zod)

1. Tell Astro about the new collection (in your VS Code terminal):

    1. Stop the Astro dev server: `Ctrl + C` and type `Y`.
    1. Run command `npx astro sync`.
    1. Restart the dev server: `npm run dev`.

## Generate pages from the docs collection

1. In *src/pages/*, create a new folder named *docs*.

1. In the new folder, create a new file named *\[...slug\].astro* (src/pages/docs/\[...slug\].astro).

1. Copy the following code into the special Astro page:

    ```astro
    ---
    import { getCollection } from 'astro:content';
    import MarkdownLayout from '../../layouts/MarkdownLayout.astro';
    
    export async function getStaticPaths() {
      const docEntries = await getCollection('docs');
          return docEntries.map(entry => ({
        params: { slug: entry.slug }, props: { entry },
      }));
    }

    const { entry } = Astro.props;
    const { Content } = await entry.render();
    ---
    <MarkdownLayout frontmatter={entry.data}>
      <Content />
    </MarkdownLayout>
    ```

1. If you moved a Markdown page from *pages/* to *content/*, remove the line that adds the Astro `layout` property from the frontmatter. They look something like this:

    ```markdown
    layout: ../../layouts/MarkdownLayout.astro
    ```

## Create a page that lists all docs

1. In *src/pages/docs/* create a file named *index.astro*.

1. Copy the following code into the new page:

```astro
---
import BaseLayout from '../../layouts/BaseLayout.astro'
const pageTitle = "The docs collection";
---
<BaseLayout pageTitle={pageTitle}>
  <p>Markdown pages in my docs collection</p>
  <ul>
    <li><a href="../../content/docs/concept-1/">Page 1</a></li>
    <li><a href="../../content/docs/concept-2/">Page 2</a></li>
    <li><a href="../../content/docs/concept-3/">Page 3</a></li>
  </ul>
</BaseLayout>
```

## Extra: Create JavaScript that builds the list automatically

## Version control

Now's a good time to commit your changes to Git.

Astro stores content collection metadata in a special folder called *.astro*. You might want to add it to your *.gitignore* file.
