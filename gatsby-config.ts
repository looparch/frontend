import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  flags: {
    PRESERVE_FILE_DOWNLOAD_CACHE: true,
    // DETECT_NODE_MUTATIONS: true,
    LAZY_IMAGES: true,
  },
  siteMetadata: {
    title: `Loop Architectural Materials`,
    siteUrl: `https://looparch.com`
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    "gatsby-plugin-postcss",
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        "trackingId": "267250995"
      }
    },
    {
      resolve: '@directus/gatsby-source-directus',
      options: {
        url: 'http://looparch.test:8055',
        auth: {
          token: 'MLVe5QBmJl2XfvEobTHfwWyz_dqobTBw'
        }
      }
    },
    "gatsby-plugin-image",
    "gatsby-plugin-sitemap",
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        "icon": "src/images/icon.png"
      }
    },
    "gatsby-plugin-mdx",
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
