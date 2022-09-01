import type { GatsbyNode } from 'gatsby'
import path from 'path'

type Manufacturer = {
  id: string
  title: string
  slug: string
}

type Product = {
  id: string
  title: string
  slug: string
}

export const createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const manufacturerTemplate = path.resolve(`src/templates/manufacturer.tsx`)
  const result = await graphql(`
    query AllManufacturers {
      directus {
        Manufacturers(filter: {status: {_eq: "published"}}) {
          id
          title
          slug
        }
      }
    }
  `)

  result.data.directus.Manufacturers.forEach((manufacturer: Manufacturer) => {
    createPage({
      path: `/${manufacturer.slug}`,
      component: manufacturerTemplate,
      context: {
        id: manufacturer.id
      }
    })
  })
}
