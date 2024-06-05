---
uid: lesson-8
title: Lesson 8 - Interactivity
description: How to make your site responsive; How to add a dark mode toggle
language: en
topic: howto
date: 2024-06-02
author: Bergfrid Dias
layout: ../../layouts/MarkdownLayout.astro
---

FYI: This lesson uses code examples from the Astro documentation.

## Objectives

* Responsive design
* Show/hide nav on mobile
* Toggle dark mode

## Requirements

* You have completed lessons 1, 2, 4, and 5.
* You have started the dev server (npm run dev).

## Update nav

1. Wrap the links in *Navigation.astro* in a `<div>` like this:

    ```html
    <div class="nav-links">
      <a href="/">Home</a>
      <a href="/about">About</a>
      <a href="#">API</a>
    </div>
    ```

1. Copy the following CSS into *styles/global.css*.

```css
.nav-links {
  width: 100%;
  top: 5rem;
  left: 48px;
  background: #44a2a0;
  display: none;
  margin: 0;
}

.nav-links a {
  display: block;
  text-align: center;
  padding: 10px 0;
  height: 92px;
  min-height: 70px;
  text-decoration: none;
  font-size: 1.2rem;
  font-weight: bold;
  text-transform: uppercase;
  color: #4F4D4E;
}

.nav-links a:hover,
.nav-links a:focus {
  background: #44a2a0;
  color: white;
}

.expanded {
  display: unset;
}

@media screen and (min-width: 636px) {
  .nav-links {
    margin-left: 5em;
    display: block;
    position: static;
    width: auto;
    background: none;
  }

  .nav-links a {
    display: inline-block;
    padding: 15px 20px;
  }
}
```
  
## Create a hamburger menu

1. Create a new component called *Hamburger.astro*.

    ```html
    <div class="hamburger">
      <span class="line"></span>
      <span class="line"></span>
      <span class="line"></span>
    </div>
    ```

1. Add styles.

```css
/* Before .nav-links */
.hamburger {
  padding-right: 20px;
  cursor: pointer;
}

.hamburger .line {
  display: block;
  width: 40px;
  height: 5px;
  margin-bottom: 10px;
  background-color: #44a2a0;
}

/* Inside @media for  small screens */
  .hamburger {
    display: none;
  }
```

## Place component

### For reuse

1. Open *Header.astro*.

1. Import component:

```javascript
import Hamburger from './Hamburger.astro';
```

1. Place menu before `<Navigation />`:

```astro
<Hamburger />
<Navigation />
```

### Or,  on the individual Astro pages

```astro
---
import Navigation from './Navigation.astro';
import Hamburger from './Hamburger.astro';
---

<header>
  <nav>
    <Hamburger />
    <Navigation />
  </nav>
</header>
```

## Create script

### The script tag

1. In *index.astro*, place this `<script>` tag just before the closing `</html>`:

    ```html
    <script>
      document.querySelector('.hamburger').addEventListener('click', () => {
        document.querySelector('.nav-links').classList.toggle('expanded');
      });
    </script>
    ```

1. Check the results.

### Import script (.js)

Now, let's move the script to a file so that we can reuse it.

1. Create a folder named *scripts* (/src/scripts).

1. In *scripts*, create a file named *menu.js* and copy the 3 lines inside the `<script>` tag into the new file.

1. Delete the script tag from *index.astro*.

1. In *Baselayout.astro*, import the script just before the closing `</body>` tag. Like this:

    ```astro
        <Footer />
        <script>
          import "../scripts/menu.js";
        </script>
      </body>
    </html>
    ```

## Extra: Add a dark mode toggle

1. In your components folder, create a file named *DarkModeToggle.astro*.

1. Copy the following code into the new file:

```astro
---
---
<button id="themeToggle">
  <svg width="30px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <path class="sun" fill-rule="evenodd" d="M12 17.5a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zm0 1.5a7 7 0 1 0 0-14 7 7 0 0 0 0 14zm12-7a.8.8 0 0 1-.8.8h-2.4a.8.8 0 0 1 0-1.6h2.4a.8.8 0 0 1 .8.8zM4 12a.8.8 0 0 1-.8.8H.8a.8.8 0 0 1 0-1.6h2.5a.8.8 0 0 1 .8.8zm16.5-8.5a.8.8 0 0 1 0 1l-1.8 1.8a.8.8 0 0 1-1-1l1.7-1.8a.8.8 0 0 1 1 0zM6.3 17.7a.8.8 0 0 1 0 1l-1.7 1.8a.8.8 0 1 1-1-1l1.7-1.8a.8.8 0 0 1 1 0zM12 0a.8.8 0 0 1 .8.8v2.5a.8.8 0 0 1-1.6 0V.8A.8.8 0 0 1 12 0zm0 20a.8.8 0 0 1 .8.8v2.4a.8.8 0 0 1-1.6 0v-2.4a.8.8 0 0 1 .8-.8zM3.5 3.5a.8.8 0 0 1 1 0l1.8 1.8a.8.8 0 1 1-1 1L3.5 4.6a.8.8 0 0 1 0-1zm14.2 14.2a.8.8 0 0 1 1 0l1.8 1.7a.8.8 0 0 1-1 1l-1.8-1.7a.8.8 0 0 1 0-1z"/>
    <path class="moon" fill-rule="evenodd" d="M16.5 6A10.5 10.5 0 0 1 4.7 16.4 8.5 8.5 0 1 0 16.4 4.7l.1 1.3zm-1.7-2a9 9 0 0 1 .2 2 9 9 0 0 1-11 8.8 9.4 9.4 0 0 1-.8-.3c-.4 0-.8.3-.7.7a10 10 0 0 0 .3.8 10 10 0 0 0 9.2 6 10 10 0 0 0 4-19.2 9.7 9.7 0 0 0-.9-.3c-.3-.1-.7.3-.6.7a9 9 0 0 1 .3.8z"/>
  </svg>
</button>

<style>
  #themeToggle {
    border: 0;
    background: none;
  }
  .sun { fill: black; }
  .moon { fill: transparent; }

  :global(.dark) .sun { fill: transparent; }
  :global(.dark) .moon { fill: white; }
</style>
```

1. Place the new component `<DarkModeToggle />` between the hamburger and navigation. Your *Header.astro* should look like this:

```astro
---
import Hamburger from './Hamburger.astro';
import Navigation from './Navigation.astro';
import DarkModeToggle from './DarkModeToggle.astro';
---
<header>
  <nav>
    <Hamburger />
    <DarkModeToggle />
    <Navigation />
  </nav>
</header>
```

1. Check the result in your browser.

1. In *styles/global.css*, add the following dark style (or choose your own):

```css
html.dark {
  background-color: #0d0950;
  color: #fff;
}

.dark .nav-links a {
  color: #fff;
}

```

1. Add client-side interactivity. In *DarkModeToggle.astro*, add the following script tag at the end:

```astro
<script is:inline>
  const theme = (() => {
    if (typeof localStorage !== 'undefined' && localStorage.getItem('theme')) {
      return localStorage.getItem('theme');
    }
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'dark';
    }
      return 'light';
  })();

  if (theme === 'light') {
    document.documentElement.classList.remove('dark');
  } else {
    document.documentElement.classList.add('dark');
  }

  window.localStorage.setItem('theme', theme);

  const handleToggleClick = () => {
    const element = document.documentElement;
    element.classList.toggle("dark");

    const isDark = element.classList.contains("dark");
    localStorage.setItem("theme", isDark ? "dark" : "light");
  }

  document.getElementById("themeToggle").addEventListener("click", handleToggleClick);
</script>
```

1. Check the browser again.

## Optional code check-in
