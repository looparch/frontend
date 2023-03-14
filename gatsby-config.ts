import type { GatsbyConfig } from "gatsby";
import dotenv from 'dotenv'

dotenv.config({
  path: `.env.${process.env.NODE_ENV}`,
})

// Contentful
let contentfulConfig

try {
  contentfulConfig = require('./.contentful')
} catch (_) {
  contentfulConfig = {
    spaceId: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
    downloadLocal: false,
  }
} finally {
  const { spaceId, accessToken } = contentfulConfig

  if (!spaceId || !accessToken) {
    throw new Error(
      'Contentful spaceId and the delivery token need to be provided.'
    )
  }
}

const config: GatsbyConfig = {
  flags: {},
  siteMetadata: {
    title: `Loop Architectural Materials`,
    description: `Design & technical partner to the Arizona A+D community, Loop Architectural Materials represents leading brands in contract furniture, acoustics, and architectural/interior design finishes.`,
    image: `/loop_icon.png`,
    siteUrl: `https://looparch.com`,
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    'gatsby-plugin-postcss',
    // {
    //   resolve: 'gatsby-plugin-google-analytics',
    //   options: {
    //     "trackingId": "267250995"
    //   }
    // },
    {
      resolve: 'gatsby-source-contentful',
      options: contentfulConfig,
    },
    {
      resolve: '@directus/gatsby-source-directus',
      options: {
        url: 'http://looparch.test:8055',
        auth: {
          token: 'MLVe5QBmJl2XfvEobTHfwWyz_dqobTBw',
        },
        // dev: {
        //   refresh: 5000,
        // }
      }
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-images-contentful',
            options: {
              maxWidth: 800,
              linkImagesToOriginal: false,
              withWebp: true,
              wrapperStyle: 'border: 1px solid #221a11; margin-bottom: 1rem;',
            }
          }
        ]
      }
    },
    "gatsby-plugin-image",
    "gatsby-plugin-sitemap",
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        "icon": "src/images/loop_icon.png"
      }
    },
    // "gatsby-plugin-mdx",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp", {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "images",
        "path": "./src/images/"
      },
      __key: "images"
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "pages",
        "path": "./src/pages/"
      },
      __key: "pages"
    },
  ]
};

export default config;
