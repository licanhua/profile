---
title: Setup my blog website with Gatsby and deploy the website to GitHub Pages
date: "2021-11-30T23:12:03.284Z"
description: "Deplay Gatsby to GitHub Pages"
tags: ["Gatsby", "Blog", "GitHub Pages"]

---
As a developer, I want to host my own blogs. Since my code is in GitHub, I would like to hosting my blog on GitHub pages too. I used [hexo](https://hexo.io/), and I want to try something new. There is a good discuss on [cra-vs-next-js-vs-gatsby](https://coffeencoding.com/cra-vs-next-js-vs-gatsby/), and finally start it with gatsby.

# Setup Gatsby CLI
```
npm install -g gatsby-cli
```

# Create the blog project
```
npx gatsby blog https://github.com/gatsbyjs/gatsby-starter-blog
```

# Change profile-pic.png
Replace src\images\profile-pic.png with your profile pic.

# Change your personal info
Open gatsby-config.js and change the details of your personal info

# Update content/blog
Replace content/blog with your first blog

# Verify your blog change
Start the dev site and go to http://localhost:8000/ to see your blog.
```
npm run start
```

# 