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
    Articles: [
      {
        id: string,
        title: string,
        slug: string,
      }
    ]
  }
}

export const createPages: GatsbyNode['createPages'] = async ({ graphql, actions }) => {
  const { createPage } = actions
  const manufacturerTemplate = path.resolve(`src/templates/manufacturer.tsx`)
  const productTemplate = path.resolve(`src/templates/product.tsx`)
  const articleTemplate = path.resolve(`src/templates/article.tsx`)
  const result = await graphql<TypeResult>(`
    query StartupQuery {
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
        Articles(
          filter: {status: {_eq: "published"}}
          sort: "date_updated"
        ) {
          id
          title
          slug
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

  result.data?.directus.Articles.forEach(async (article) => {
    createPage({
      path: `/articles/${article.slug}`,
      component: articleTemplate,
      context: {
        id: article.id
      }
    })
  })
}
