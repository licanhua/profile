module.exports = {
    siteMetadata: {
        title: `Canhua's Blog`,
        author: {
          name: `Canhua Li`,
          summary: `who lives and works in Seattle building useful things.`,
        },
        description: `A starter blog demonstrating what Gatsby can do.`,
        siteUrl: `https://gatsbystarterblogsource.gatsbyjs.io/`,
        social: {
          twitter: `licanhua`,
        },
        showThemeLogo: true,
        formspreeEndpoint:"https://formspree.io/f/{your-id}",
      },
    plugins: [
      {
        resolve: "@wkocjan/gatsby-theme-intro",
        options: {
            theme: "blue",
            basePath: "/",
            contentPath: "content/profile",
            showThemeLogo: true,
            formspreeEndpoint:"https://formspree.io/f/{your-id}"
        },
      },
    ],
  }