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
  const result = await graphql<TypeResult>(`
    query AllManufacturers {
      directus {
        Manufacturers(filter: {status: {_eq: "published"}}) {
          id
          title
          slug
          products(limit: -1) {
            id
            title
            slug
          }
        }
      }
    }
  `)

  result.data?.directus.Manufacturers.forEach(async (manufacturer) => {
    createPage({
      path: `/${manufacturer.slug}`,
      component: manufacturerTemplate,
      context: {
        id: manufacturer.id,
      }
    })
    manufacturer.products.forEach(async (product) => {
      createPage({
        path: `/${manufacturer.slug}/${product.slug}`,
        component: productTemplate,
        context: {
          id: product.id,
        }
      })
    })
  })
}
