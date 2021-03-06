module.exports = {
    siteMetadata: {
      title: `SOS`,
      author: {
        name: `Scott Smith`,
        summary: `Take a picture, it'll last longer`,
      },
      description: `A photo blog`,
      siteUrl: `https://blog.scottosmith.net`,
      social: {
        twitter: ``,
      },
    },
    plugins: [
      {
        resolve: `gatsby-source-filesystem`,
        options: {
          path: `${__dirname}/content/blog`,
          name: `blog`,
        },
      },
      {
        resolve: `gatsby-plugin-sharp`,
        options: {
          defaultQuality: 90
        }
      },
      {
        resolve: `gatsby-transformer-remark`,
        options: {
          plugins: [
            {
              resolve: `gatsby-remark-responsive-iframe`,
              options: {
                wrapperStyle: `margin-bottom: 1.0725rem`,
              },
            },
            `gatsby-remark-prismjs`,
            `gatsby-remark-copy-linked-files`,
            `gatsby-remark-smartypants`,
          ],
        },
      },
      `gatsby-plugin-feed`,
      {
        resolve: `gatsby-plugin-manifest`,
        options: {
          name: `SOS`,
          short_name: `SOS`,
          start_url: `/`,
          background_color: `#000000`,
          theme_color: `#663399`,
          display: `minimal-ui`
        },
      },
      `gatsby-plugin-react-helmet`,
      {
        resolve: `gatsby-plugin-typography`,
        options: {
          pathToConfigModule: `src/utils/typography`,
        },
      },
    ],
  }
  