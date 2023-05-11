import type { GatsbyConfig } from "gatsby";
import dotenv from 'dotenv'

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

const config: GatsbyConfig = {
  flags: {
    FAST_DEV: true,
    // PARALLEL_SOURCING: true,
  },
  siteMetadata: {
    title: `Loop Architectural Materials`,
    description: `Design & technical partner to the Arizona Architecture and Design community, Loop Architectural Materials represents leading brands in contract furniture, acoustics, and architectural/interior design finishes.`,
    image: `/images/loop_icon.png`,
    siteUrl: `https://looparch.com`,
    instagramUrl: `https://www.instagram.com/looparch/`,
    linkedInUrl: `https://www.linkedin.com/company/loop-architectural-materials/`,
    publisher: `Loop Architectural Materials`,
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    `gatsby-plugin-postcss`,
    // {
    //   resolve: 'gatsby-plugin-google-analytics',
    //   options: {
    //     "trackingId": "267250995"
    //   }
    // },
    {
      resolve: `gatsby-source-contentful`,
      options: contentfulConfig,
    },
    {
      resolve: `@directus/gatsby-source-directus`,
      options: {
        url: `http://looparch.test:8055`,
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
              wrapperStyle: `border: 1px solid #221a11; margin-bottom: 1rem;`,
            }
          }
        ]
      }
    },
    `gatsby-plugin-offline`,
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
      resolve: 'gatsby-plugin-meilisearch',
      options: {
        host: process.env.MEILISEARCH_HOST,
        apiKey: process.env.MEILISEARCH_ADMIN_KEY,
        indexes: [
          {
            indexUid: `all_products`,
            transformer: (data: any) =>
              data.directus.products.map((product: any) => ({
                id: product.id,
                title: product.title,
                designer: product.designer,
                description: product.description,
                slug: `/${product.manufacturer.slug}/${product.slug}`,
                manufacturer: product.manufacturer.title,
                tags: product.tags,
                image: product.image_thumbnail.imageFile.childImageSharp.gatsbyImageData,
              })),
              query: `
                query IndexedProductsQuery {
                  directus {
                    products: Products(
                      filter: {status: {_eq: "published"}}
                      sort: "title"
                      limit: -1
                    ) {
                      id
                      title
                      designer
                      description
                      slug
                      tags
                      manufacturer {
                        title
                        slug
                      }
                      image_thumbnail {
                        id
                        imageFile {
                          childImageSharp {
                            gatsbyImageData
                          }
                        }
                      }
                    }
                  }
                }
              `
          }
        ]
      },
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
                    url: `${site.siteMetadata.siteUrl}/articles/${edge.node.slug}`,
                    guid: `${site.siteMetadata.siteUrl}/articles/${edge.node.slug}`,
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
                allContentfulBlogPost(sort: {order: DESC, fields: publishDate}) {
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
