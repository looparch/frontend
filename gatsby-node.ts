import path from 'path'
import { GatsbyNode } from "gatsby";
import { copyLibFiles } from '@builder.io/partytown/utils'

export const onPreBuild: GatsbyNode['onPreBuild'] = async () => {
  await copyLibFiles(path.join(__dirname, 'static', '~partytown'))
}

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
  },
  blogPosts: {
    nodes: [{
      id: string,
      title: string,
      slug: string,
    }]
  },
}

export const createPages: GatsbyNode['createPages'] = async ({ graphql, actions }) => {
  const { createPage, createSlice } = actions
  const manufacturerTemplate = path.resolve(`src/templates/manufacturer.tsx`)
  const productTemplate = path.resolve(`src/templates/product.tsx`)
  const blogPostTemplate = path.resolve(`src/templates/blog-post.tsx`)
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
      }
      blogPosts: allContentfulBlogPost(sort: {publishDate: DESC}) {
        nodes {
          id
          title
          slug
        }
      }
    }
  `)

  createSlice({
    id: "navbar",
    component: path.resolve("./src/components/navbar.tsx"),
  })

  createSlice({
    id: "footer",
    component: path.resolve("./src/components/footer.tsx"),
  })

  createSlice({
    id: "search",
    component: path.resolve("./src/components/meilisearch.tsx"),
  })

  // Create a page for each manufacturer
  result.data?.directus.Manufacturers.forEach(async (manufacturer) => {
    createPage({
      path: `/${manufacturer.slug}`,
      component: manufacturerTemplate,
      context: {
        id: manufacturer.id,
      }
    })

    // Create a page for each manufacturer product
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

  // Create a page for each blog post
  result.data?.blogPosts.nodes.forEach(async (blogPost) => {
    createPage({
      path: `/blogPosts/${blogPost.slug}`,
      component: blogPostTemplate,
      context: {
        id: blogPost.id
      }
    })
  })
}
