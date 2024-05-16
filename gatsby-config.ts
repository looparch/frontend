import type { GatsbyConfig } from "gatsby";
import dotenv from 'dotenv'
import fs from 'fs'
import path from 'path'
import { createHash } from 'crypto'

dotenv.config({
  path: `.env.${process.env.NODE_ENV}`,
})

// Contentful
let contentfulConfig

try {
  contentfulConfig = require(`./.contentful`)
} catch (_) {
  contentfulConfig = {
    spaceId: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
    downloadLocal: true,
  }
} finally {
  const { spaceId, accessToken } = contentfulConfig

  if (!spaceId || !accessToken) {
    throw new Error(
      `Contentful SpaceId and DeliveryToken need to be provided.`
    )
  }
}

const algoliaSearchQuery = fs.readFileSync(path.resolve(__dirname, 'src/queries/indexedProductsQuery.graphql'), 'utf8')
const queries = [
  {
    query: algoliaSearchQuery,
    queryVariables: {},
    transformer: async ({ data }: any) => {
      const products = await data.directus.products.map((product: any) => {
        const hash = createHash('sha256').update(JSON.stringify(`${product.slug}${product.date_updated}${product.description}`)).digest('hex')
        return {
          id: product.id,
          title: product.title,
          tags: product.tags,
          designer: product.designer,
          description: product.description,
          is_new: product.is_new,
          image_thumbnail: {
            imageFile: product.image_thumbnail.imageFile,
          },
          manufacturer: {
            title: product.manufacturer.title,
            slug: product.manufacturer.slug,
          },
          slug: product.slug,
          internal: {
            contentDigest: hash,
          },
        }
      })

      return products
    },
    settings: {},
    mergeSettings: false,
  }
]

const config: GatsbyConfig = {
  flags: {
    FAST_DEV: true,
    PARALLEL_SOURCING: true,
  },
  siteMetadata: {
    title: `Loop Architectural Materials`,
    description: `Design & technical partner to the Arizona Architecture and Design community, Loop Architectural Materials represents leading brands in contract furniture, acoustics, and architectural/interior design finishes.`,
    image: `/images/loop_icon.png`,
    siteUrl: `https://looparch.com`,
    instagramUrl: `https://www.instagram.com/looparch/`,
    linkedInUrl: `https://www.linkedin.com/company/loop-architectural-materials/`,
    publisher: `Loop Architectural Materials`,
    version: `1.0.3`,
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    `gatsby-plugin-postcss`,
    {
      resolve: `gatsby-source-contentful`,
      options: contentfulConfig,
    },
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `https://looparch.com`,
      },
    },
    {
      resolve: `@directus/gatsby-source-directus`,
      options: {
        url: `http://localhost:8055`,
        auth: {
          token: process.env.DIRECTUS_TOKEN,
        },
      }
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images-contentful`,
            options: {
              maxWidth: 800,
              linkImagesToOriginal: false,
              withWebp: true,
            }
          }
        ]
      }
    },
    `gatsby-plugin-image`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Loop Architectural Materials`,
        short_name: `Loop`,
        start_url: `/`,
        background_color: `#F3F8F1`,
        theme_color: `#83B668`,
        icon: `src/images/loop_icon.png`,
        icon_options: {
          purpose: `any maskable`,
        },
        display: `standalone`,
      }
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`, {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `./src/images/`
      },
      __key: `images`
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: `pages`,
        path: `./src/pages/`
      },
      __key: "pages"
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: [`${process.env.GA_MEASUREMENT_ID}`],
        pluginConfig: {
          head: true
        }
      }
    },
    {
      resolve: 'gatsby-plugin-algolia',
      options: {
        appId: process.env.ALGOLIA_APP_ID,
        apiKey: process.env.ALGOLIA_API_KEY,
        indexName: process.env.ALGOLIA_INDEX_NAME,
        queries,
        chunkSize: 10000,
        settings: {},
        mergeSettings: false,
        concurrentQueries: false,
        dryRun: false,
        continueOnFailure: false,
        algoliasearchOptions: undefined,
      }
    },
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
                site_url: siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allContentfulBlogPost } }: any) => {
              return allContentfulBlogPost.edges.map((edge: any) => {
                return Object.assign(
                  {},
                  {
                    title: edge.node.title,
                    description: `<img src="https:${edge.node.heroImage.file.url}"><br /><br />${edge.node.childContentfulBlogPostBodyTextNode.childMarkdownRemark.excerpt}`,
                    date: edge.node.publishDate,
                    url: `${site.siteMetadata.siteUrl}/announcements/${edge.node.slug}`,
                    guid: `${site.siteMetadata.siteUrl}/announcements/${edge.node.slug}`,
                    custom_elements: [
                      {
                        'content:encoded':
                          edge.node.childContentfulBlogPostBodyTextNode
                            .childMarkdownRemark.html,
                      },
                    ],
                  }
                )
              })
            },
            query: `
              {
                allContentfulBlogPost(sort: {publishDate: DESC}) {
                  edges {
                    node {
                      title
                      slug
                      publishDate
                      heroImage {
                        file {
                          url
                        }
                      }
                      childContentfulBlogPostBodyTextNode {
                        childMarkdownRemark {
                          excerpt
                          html
                        }
                      }
                    }
                  }
                }
              }
            `,
            output: '/rss.xml',
            title: 'Loop Architectural Materials',
          },
        ],
      },
    },
  ]
};

export default config;
