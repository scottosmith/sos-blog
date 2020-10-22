module.exports = {
    siteMetadata: {
      title: `SOS`,
      author: {
        name: `Scott Smith`,
        summary: `Take a picture, it'll last longer`,
      },
      description: `My playground`,
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
        resolve: `gatsby-transformer-remark`,
        options: {
          plugins: [
            {
              resolve: `gatsby-remark-images`,
              options: {
                maxWidth: 1800,
              },
            },
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
      {
        resolve: `gatsby-plugin-sharp`,
        options: {
          defaultQuality: 100
        }
      },
      `gatsby-transformer-sharp`,
      {
        resolve: `gatsby-plugin-google-analytics`,
        options: {
          //trackingId: `ADD YOUR TRACKING ID HERE`,
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
      // this (optional) plugin enables Progressive Web App + Offline functionality
      // To learn more, visit: https://gatsby.dev/offline
      // `gatsby-plugin-offline`,
    ],
  }
  