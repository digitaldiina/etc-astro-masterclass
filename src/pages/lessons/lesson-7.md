---
uid: lesson-7
title: Lesson 7 - Add more languages
description: How to make your Astro site multilingual.
language: en
topic: howto
date: 2024-06-02
author: Bergfrid Dias
layout: ../../layouts/MarkdownLayout.astro
---

Internationalization (i18n) Routing API uses middleware that runs after other middleware and page route rendering have run

* default language
* user's preferred language (from browser)
* fallback language per language
* verifying that a localized URL corresponds to a valid route
* astro:i18n helper functions

Both a default language (defaultLocale) and a list of all supported languages (locales) must be specified in an i18n configuration object.

## Objectives

* Set up locales in *pages/*.
* Add German and Norwegian translation.

## Requirements

* An Astro project
  * You have completed lessons 1, 2, 4, and 5.
* You have started the dev server (npm run dev)

## Set up i18n defaultLocale and locales

1. In *astro.config.mjs*, add a config section for i18n:

```javascript
import { defineConfig } from "astro/config"
export default defineConfig({
  i18n: {
    defaultLocale: "en",
    locales: ["de", "en", "no"],
  }
})
```

```javascript
  i18n: {
    defaultLocale: "en",
    locales: ["de", "en", "no"],
    routing: {
        prefixDefaultLocale: false
    }
  }
```

## Create folders for each locale

Remember that each astro and md file under *pages* automatically becomes a page on your website! (file-based routing)

1. In *src/pages*, create a folder for each locale:

    * src
      * pages
        * about.astro
        * index.astro
        * de
          * about.astro
          * index.astro
        * no
          * about.astro
          * index.astro

**TIP:** The localized folders don't need to be direct subfolders of *pages*.

### Want to use a prefix for the defaultLocale?

* `prefixDefaultLocale: false` (default) - as above
* `prefixDefaultLocale: true` - create folder for the defaultLocale too. BUT, there must always be a toplevel index.astro!
  * This automatically sets `redirectToDefaultLocale` = true (but you can opt out and keep 1 common landing page)

* src
  * pages
    * index.astro
    * en
      * about.astro
      * index.astro
    * de
      * about.astro
      * index.astro
    * no
      * about.astro
      * index.astro

## How to use i18n URLs

```astro
---
import { getRelativeLocaleUrl } from 'astro:i18n';

// defaultLocale is "en"
const aboutURL = getRelativeLocaleUrl("de", "about");
---

<a href="/get-started/">Herzlich willkommen!</a>
<a href={getRelativeLocaleUrl('de', 'lessons')}>Lektionen</a>
<a href={aboutURL}>ETC</a>
```

## redirectToDefaultLocale

Should / (home) redirect to `/<defaultLocale>` ?

## fallback

"instead of displaying a 404 page, you can redirect a user from one locale to another on a per-language basis"

```javascript
    fallback: {
      fr: "es"
    }
```

"Astro will ensure that a page is built in src/pages/fr for every page that exists in src/pages/es/. If the page does not already exist, then a page with a redirect to the corresponding es route will be created."

## Extra: Language sub-folders in a content collection

When you query this collection (docs), you’ll be able to filter the result by language using the file path.

* src
  * content
  * docs
    * en
    * no
    * de
