module.exports = {
  siteMetadata: {
    siteTitle: `Dale Blackburn`,
    siteTitleAlt: `Dale Blackburn - Full Stack Developer | Brighton, UK`,
    siteUrl: `https://dakebl.co.uk`,
    siteDescription: `Dale Blackburn | Full Stack Developer based in Brighton, UK.`,
    siteLanguage: `en`,
    author: `@dakebl`,
    externalLinks: [
      {
        name: `Twitter`,
        url: `https://twitter.com/dakebl`
      },
      {
        name: `GitHub`,
        url: `https://www.github.com/dakebl/`
      }
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
        name: `Dale Blackburn`,
        short_name: `dakebl`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#424242`,
        display: `minimal-ui`,
        icon: `static/favicon-32x32.png`
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-netlify`,
  ],
}
