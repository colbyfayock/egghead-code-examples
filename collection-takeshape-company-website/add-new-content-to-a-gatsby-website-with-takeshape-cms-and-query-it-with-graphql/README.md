[![TakeShape](https://img.shields.io/badge/cms-takeshape-brightgreen.svg?logoWidth=14&logo=data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAA4CAYAAACohjseAAABG2lUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4KPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iWE1QIENvcmUgNS41LjAiPgogPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIi8+CiA8L3JkZjpSREY+CjwveDp4bXBtZXRhPgo8P3hwYWNrZXQgZW5kPSJyIj8+Gkqr6gAAAYFpQ0NQc1JHQiBJRUM2MTk2Ni0yLjEAACiRdZHPK0RRFMc/BtEYzZRZKNRLw8qIURMbZSSUpDHKr83MMz/U/Hi99yTZKtspSmz8WvAXsFXWShEpWVhZExum5zyjZpI5t3PP537vPad7zwVHJK1mjJoeyGRNPTwaUmbn5pW6Z5y04cFLS1Q1tKGpqQkq2scdVXa88du1Kp/71xqW4oYKVfXCg6qmm8JjwhOrpmbztrBXTUWXhE+Fu3S5oPCtrceK/GJzsshfNuuR8DA4PMJKsoxjZaym9IywvBxfJr2i/t7Hfokrnp2Zltgu3opBmFFCKIwzwjBBehmQOYifAN2yokJ+z0/+JDnJVWXWWENnmSQpTLpEXZHqcYkJ0eMy0qzZ/f/bVyPRFyhWd4Wg9smy3jqgbgsKecv6PLSswhFUP8JFtpSfO4D+d9HzJc23D+4NOLssabEdON+E5gctqkd/pGpxRyIBryfQOAdN1+BcKPbsd5/je4isy1ddwe4edMp59+I3T6Zn2yrilxMAAAAJcEhZcwAACxMAAAsTAQCanBgAAAJVSURBVGiB7dm/b9NAGMbx70uBMnRhQyA6VMzsiBWJFQYWdthYEP9CN2aG8FdApQpYEBM7A0JCLDCwMVAJIUA8HeIrruPE97O2gx8pSi6SL+/Hd7F9NkyZMuW/jaTLku72XUeRVLhPmude3/VkTQOntUIuwa0HsgM3bqQnLjvSJD3I1Vkjb8zsnWtIugPsuGbtvf55E9it2vfN7GlyFZ57NDTPJJ2JqGUr+0gWwO1JOhtZSxOYjDzdaD8Hfif09xV4ZGa/JF0CrgMb1e9s1F719g8zm63ocyaJ6Ona2FvnozpZ7HNb/geUL7Xt2kYwbSRzAwNxIcA4ZE5gBC4UGI7MBYzExQCDkKdiQU0c8Jp/57nSmfkik4E94Fy8kEnAHnEuncho4ABwLiuRUcAB4VyWIoOBA8S5tCKDgAPGuSwgvYEjwLkcQ3oBR4RzOUI2VxMLkXSRceFcZpL++ozgN+Bj6WoK5AB43wk0s5/ALeBl8ZLy5QC4aWZvvf6DI0Me4SDgKDoS5DEcBJ4HB45cwEHElcxAka04iLwWHRhyKQ4SVhMDQa7EQeJ6sGdkJw4yrOh7QnrhINM9mRNGeuMgExBODBmEA4rc+D0n6UWB24bfJV2LKSgrMALpA4zDMX8+qFr7FWkPX/bN7IlDAlc8tvljZh+qbbaYT8N6wqdlPZ57OSQPowqhdQSjR64kMBrZAKbjmK/oH6d20pILkrbN7LP7QtJt4EbHdu7Badq07CPyP/BkGble4oEcL85lBXL8OJcW5PrgXGrI9cO5VMirfdcxZcqUcjkEtBb8Ina+cYEAAAAASUVORK5CYII=&longCache=true&colorB=5edeb3&colorA=5539d2&style=for-the-badge)](https://www.takeshape.io/)

# Gatsby TakeShape Startup Starter

Integrate TakeShape CMS using a ready to go TakeShape project!

This starter is based on the Startup example that you can choose when creating a new project in the TakeShape CMS.

## 🚀 Quick start

1.  **Create a Gatsby site.**

    Use the [Gatsby CLI](https://www.gatsbyjs.org/docs/gatsby-cli/) to create a new site, specifying the default starter.

    ```shell
    # create a new Gatsby site using the default starter
    gatsby new my-startup-project https://github.com/colbyfayock/gatsby-starter-takeshape-startup
    cd my-startup-project/
    ```

    Note: you must have the Gatsby CLI installed. [Learn how to install the Gatsby CLI](https://www.gatsbyjs.org/docs/gatsby-cli/#how-to-use-gatsby-cli).

1.  **Create a new TakeShape project.**

    [Sign up for a free TakeShape account](https://app.takeshape.io/signup) and [create a project](https://app.takeshape.io/projects) using the "Shape Startup" template.

    [https://app.takeshape.io/signup](https://app.takeshape.io/signup)

1.  **Create an environment file.**

    Inside `my-startup-project`, create a new file called `.env`. In this file, you want to include 2 enviornment files that you will use to add your TakeShape project ID and access key.

    ```shell
    # Inside .env
    TAKESHAPE_PROJECT="[TakeShape Project ID]"
    TAKESHAPE_API_KEY="[TakeShape API Access Key]"
    ```

    [Learn how to create an API key](https://www.takeshape.io/docs/creating-an-api-key/).

1.  **Start developing.**

    Start it up.

    ```shell
    gatsby develop
    ```

1.  **Start editing!**

    Your site is now running at `http://localhost:8000`!

    _Note: You'll also see a second link: _`http://localhost:8000/___graphql`_. This is a tool you can use to experiment with querying your data. Learn more about using this tool in the [Gatsby tutorial](https://www.gatsbyjs.org/tutorial/part-five/#introducing-graphiql)._

    Open the `my-default-starter` directory in your code editor of choice and edit `src/pages/index.js`. Save your changes and the browser will update in real time!

## 🧐 What's inside?

A quick look at the top-level files and directories you'll see in a Gatsby project.

    .
    ├── node_modules
    ├── src
    ├── static
    ├── .gitignore
    ├── gatsby-config.js
    ├── gatsby-node.js
    ├── LICENSE
    ├── package.json
    ├── README.md
    └── yarn.lock

1.  **`/node_modules`**: This directory contains all of the modules of code that your project depends on (npm packages) are automatically installed.

1.  **`/src`**: This directory will contain all of the code related to what you will see on the front-end of your site (what you see in the browser) such as your site header or a page template. `src` is a convention for “source code”.

1.  **`/static`**: This directory will constain static assets including favicon image files and a `humans.txt` file that you can update for your project.

1.  **`.gitignore`**: This file tells git which files it should not track / not maintain a version history for.

1.  **`gatsby-config.js`**: This is the main configuration file for a Gatsby site. This is where you can specify information about your site (metadata) like the site title and description, which Gatsby plugins you’d like to include, etc. (Check out the [config docs](https://www.gatsbyjs.org/docs/gatsby-config/) for more detail).

1.  **`gatsby-node.js`**: This file is where Gatsby expects to find any usage of the [Gatsby Node APIs](https://www.gatsbyjs.org/docs/node-apis/) (if any). These allow customization/extension of default Gatsby settings affecting pieces of the site build process.

1.  **`LICENSE`**: This starter is licensed under the MIT license.

1. **`package.json`**: A manifest file for Node.js projects, which includes things like metadata (the project’s name, author, etc). This manifest is how npm knows which packages to install for your project.

1. **`README.md`**: A text file containing useful reference information about your project.

1. **`yarn.lock`** (See `package.json` above, first). This is an automatically generated file based on the exact versions of your npm dependencies that were installed for your project. **(You won’t change this file directly).**

## 💫 Deploy

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/colbyfayock/gatsby-starter-takeshape-startup)

[![Deploy with ZEIT Now](https://zeit.co/button)](https://zeit.co/import/project?template=https://github.com/colbyfayock/gatsby-starter-takeshape-startup)

After deploying to your preferred tool - you will need to set your 2 environment variables:
* `TAKESHAPE_PROJECT`: This is your TakeShape project ID
* `TAKESHAPE_API_KEY`: This is your API key associated with your account
