---
uid: lesson-3
title: Lesson 3 - Deploy
description: How to deploy an Astro project to Netlify via GitHub
language: en
topic: howto
date: 2024-06-02
author: Bergfrid Dias
layout: ../../layouts/MarkdownLayout.astro
---

NOTE: This lesson is optional. You can follow all other lessons without putting your project on GitHub.

## Objectives

* Publish your Astro site.

## Requirements

* You have created an Astro project (lesson 1).

* Git is installed in VS Code.

* A GitHub account.

  * [Create free GitHub account](https://github.com/)

* A Netlify account.

  * [Create free Netlify account](https://netlify.com/)

## Create a repository on GitHub

1. Sign in to [GitHub.com](https://github.com/) in a browser and click the + in the upper right of the screen.

1. Choose a repository name.

1. Leave the default values as-is.

1. Click **Create Repository**.

## Add local Astro project to GitHub

NOTE: If you chose *not* to create a Git repository when installing Astro, you need to initialize the repo first.

### Init Git repo

**In VS Code:**

1. Click on the **Source Control** tab (icon with three branches) in the Activity Bar.

1. Click **Initialize Repository**. This runs `git init`.

**Or, in a termninal:**

```sh
cd /path/to/your/project
git init
```

### Push files to GitHub

**In VS Code:**

1. Click the Source Control tab in VS Code. You'll see a list of files that have changed.

1. Click the 3 dots and select **Remote** > **Add Remote**.

1. Select **Add remote from GitHub**.

    NOTE: follow any authentication steps. Then select **Add remote from GitHub** again.

1. Select the repo you just created from the list. If you don't see it, paste the GitHub URL directly.

1. Stage your changes: Click the 3 dots and select **Changes** > **Stage all changes**.

1. Enter a commit message and press **Commit**.

1. Click the **Publish branch** to send the to GitHub.

1. In your browser, verify that your Astro files have been added to your GitHub repo.

**Or, in a termninal:**

```sh
git remote add origin https://github.com/username/repository.git
git add .
git commit -m "Initial commit"
git push -u origin master
```

## Create a Netlify website

1. In your browser, go to `https://app.netlify.com/teams/username`.

1. Click **Add new site** > **Import an existing project**.

1. Connect to a Git provider:

    1. Select **Github**.
    1. Follow the steps to authenticate.
    1. Select your Astro repo from the list.

1. Leave the default values as-is.

1. Click **Deploy site**.

1. Optionally, change the randomly-generated Netlify project name (to change the website's URL).

1. Visit your new site.

CONGRATULATIONS!!

## Troubleshooting

### Message that says you need to install Git

Follow the instructions provided, then reload VS Code.

### Message that says you have no staged commits

Click **Always** and continue.

### Need more help with using Git in VS Code

[Git support](https://code.visualstudio.com/docs/sourcecontrol/overview#_git-support)
