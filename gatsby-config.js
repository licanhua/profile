module.exports = {
    pathPrefix: `/profile`,
    siteMetadata: {
        title: `Canhua's Blog`,
        author: {
          name: `Canhua Li`,
          summary: `who lives and works in Seattle building useful things.`,
        },
        description: `A starter blog demonstrating what Gatsby can do.`,
        siteUrl: `https://licanhua.github.io/profile`,
        social: {
          twitter: `licanhua`,
        }
      },
    plugins: [
      {
        resolve: "@wkocjan/gatsby-theme-intro",
        options: {
            theme: "blue",
            basePath: "/",
            contentPath: "content/profile",
            showThemeLogo: false,
            formspreeEndpoint:"https://formspree.io/f/{your-id}"
        },
      },
    ],
  }