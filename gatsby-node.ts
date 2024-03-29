import path from 'path'
import { GatsbyNode } from 'gatsby';
// import { copyLibFiles } from '@builder.io/partytown/utils'

// export const onPreBuild: GatsbyNode['onPreBuild'] = async () => {
//   await copyLibFiles(path.join(__dirname, 'static', '~partytown'))
// }

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

// @ts-ignore
export const createPages: GatsbyNode['createPages'] = async ({ graphql, actions }) => {
  const { createPage, createSlice, createRedirect } = actions
  const manufacturerTemplate = path.resolve(`src/templates/manufacturer.tsx`)
  const productTemplate = path.resolve(`src/templates/product.tsx`)
  const blogPostTemplate = path.resolve(`src/templates/announcement.tsx`)
  const result = await graphql(`
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
    component: path.resolve("./src/components/algolia-search.tsx"),
  })

  // Create a page for each manufacturer
  // @ts-ignore
  result.data?.directus.Manufacturers.forEach(async (manufacturer: any) => {
    createPage({
      path: `/${manufacturer.slug}`,
      component: manufacturerTemplate,
      context: {
        id: manufacturer.id,
      }
    })

    createRedirect({
      fromPath: `/manufacturers/${manufacturer.slug}`,
      toPath: `/${manufacturer.slug}`,
    })

    // Create a page for each manufacturer product
    manufacturer.products.forEach(async (product: any) => {
      createPage({
        path: `/${manufacturer.slug}/${product.slug}`,
        component: productTemplate,
        context: {
          id: product.id,
        }
      })

      createRedirect({
        fromPath: `/manufacturers/${manufacturer.slug}/${product.slug}`,
        toPath: `/${manufacturer.slug}/${product.slug}`,
      })
    })
  })

  // Create a page for each blog post
  // @ts-ignore
  result.data?.blogPosts.nodes.forEach(async (blogPost: any) => {
    createPage({
      path: `/announcements/${blogPost.slug}`,
      component: blogPostTemplate,
      context: {
        id: blogPost.id
      }
    })

    createRedirect({
      fromPath: `/articles/${blogPost.slug}`,
      toPath: `/announcements/${blogPost.slug}`,
    })
  })
}
