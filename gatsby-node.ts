import path from 'path'
import fs from 'fs/promises'
import { GatsbyNode } from "gatsby";

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
  articles: {
    nodes: [{
      id: string,
      title: string,
      slug: string,
    }]
  }
}

export const createPages: GatsbyNode['createPages'] = async ({ graphql, actions }) => {
  const { createPage, createSlice } = actions
  const manufacturerTemplate = path.resolve(`src/templates/manufacturer.tsx`)
  const productTemplate = path.resolve(`src/templates/product.tsx`)
  const articleTemplate = path.resolve(`src/templates/article.tsx`)
  const blogPostTemplate = path.resolve(`src/templates/blog-post.tsx`)
  const svgLogoTemplate = path.resolve(`src/templates/svg-logo.tsx`)
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
          image_logo_dark {
            id
            imageFile {
              publicURL
            }
          }
        }
      }
      blogPosts: allContentfulBlogPost(sort: {publishDate: ASC}) {
        nodes {
          id
          title
          slug
        }
      }
      articles: allContentfulArticle(sort: {publishDate: ASC}) {
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

  // Create a page for each article
  // result.data?.articles.nodes.forEach(async (article) => {
  //   createPage({
  //     path: `/articles/${article.slug}`,
  //     component: articleTemplate,
  //     context: {
  //       id: article.id
  //     }
  //   })
  // })
}
