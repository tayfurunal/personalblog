module.exports = {
  siteMetadata: {
    siteTitle: `Tayfur Ünal`,
    siteTitleAlt: `Tayfur Ünal- Software Developer`,
    siteUrl: `https://tayfurunal.com`,
    siteDescription: `Tayfur | Software Developer in Istanbul`,
    siteLanguage: `tr`,
    author: `@tayfurunal`,
    externalLinks: [
      {
        name: `Twitter`,
        url: `https://twitter.com/tayfurunal`,
      },
      {
        name: `GitHub`,
        url: `https://www.github.com/tayfurunal/`,
      },
      {
        name: `LinkedIn`,
        url: `https://www.linkedin.com/in/tayfurunal/`,
      },
    ],
    navigation: [
      {
        title: `Blog`,
        slug: `/blog`,
      },
      {
        title: `About`,
        slug: `/about`,
      },
    ],
  },
  plugins: [
    {
      resolve: `@lekoarts/gatsby-theme-minimal-blog`,
      options: {},
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Tayfur Ünal`,
        short_name: `tayfurunal`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#424242`,
        display: `minimal-ui`,
        icon: `static/favicon-32x32.png`,
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-netlify`,
  ],
};
