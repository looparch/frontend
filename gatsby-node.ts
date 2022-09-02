import path from 'path'
import { GatsbyNode } from "gatsby";
import { writeFile } from "fs/promises"

type TypeResult = {
  directus: {
    Manufacturers: [
      {
        id: string,
        title: string,
        slug: string,
        products: [
          {
            id: string,
            title: string,
            slug: string,
          }
        ]
      }
    ]
  }
}

export const createPages: GatsbyNode['createPages'] = async ({ graphql, actions }) => {
  const { createPage } = actions
  const manufacturerTemplate = path.resolve(`src/templates/manufacturer.tsx`)
  const productTemplate = path.resolve(`src/templates/product.tsx`)
  let result
  if (process.env.POPULATE_JSON) {
    result = await graphql<TypeResult>(`
    query AllManufacturers {
      directus {
        Manufacturers(filter: {status: {_eq: "published"}}) {
          id
          title
          slug
          description
          tags
          href
          image_hero {
            id
            imageFile {
              publicURL
              childImageSharp {
                gatsbyImageData(width: 400)
              }
            }
          }
          image_logo_dark {
            id
            imageFile {
              publicURL
            }
          }
          image_logo_light {
            id
            imageFile {
              publicURL
            }
          }
          products(limit: -1) {
            id
            title
            slug
            description
            tags
            href
            image_thumbnail {
              id
              imageFile {
                childImageSharp {
                  gatsbyImageData(width: 300)
                }
              }
            }
            image_primary {
              id
              imageFile {
                childImageSharp {
                  gatsbyImageData(width: 600)
                }
              }
            }
            image_secondary {
              id
              imageFile {
                childImageSharp {
                  gatsbyImageData(width: 600)
                }
              }
            }
            manufacturer {
              id
              slug
              title
            }
          }
        }
      }
    }
  `)
  } else {
    result = await graphql<TypeResult>(`
      query AllJsonManufacturers {
        directus:allManufacturersJson {
          Manufacturers:nodes {
            id
            title
            slug
            products {
              id
              title
              slug
            }
          }
        }
      }
    `)
  }

  result.data?.directus.Manufacturers.forEach(async (manufacturer) => {
    if (process.env.POPULATE_JSON) {
      await writeFile(`src/data/manufacturers/${manufacturer.slug}.json`, JSON.stringify(manufacturer))
    }
    createPage({
      path: `/${manufacturer.slug}`,
      component: manufacturerTemplate,
      context: {
        id: manufacturer.id,
        manufacturer
      }
    })
    manufacturer.products.forEach(async (product) => {
      if (process.env.POPULATE_JSON) {
        await writeFile(`src/data/products/${manufacturer.slug}-${product.slug}.json`, JSON.stringify(product))
      }
      createPage({
        path: `/${manufacturer.slug}/${product.slug}`,
        component: productTemplate,
        context: {
          id: product.id,
          product
        }
      })
    })
  })
}
