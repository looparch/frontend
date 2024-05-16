import * as React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import BlogPostHero from '../components/blog-post-hero'
import type { IBlogPost } from '../types'
import { SEO } from '../components/seo'

type DataProps = {
  data: {
    blogPost: IBlogPost
  }
  location: {
    pathname: string
  }
}

const BlogPost = ({ data: { blogPost } }: DataProps) => {
  return (
    <Layout>
      <>
        <BlogPostHero {...blogPost} />
        <div
          className="max-w-3xl px-4 mx-auto my-8 text-lg prose prose-img:p-0 text-dark-text md:px-0"
          dangerouslySetInnerHTML={{
            __html: blogPost.body.childMarkdownRemark.html,
          }}
        ></div>
      </>
    </Layout>
  )
}

export default BlogPost

export const Head = ({ data: { blogPost }, location }: DataProps) => (
  <SEO title={`${blogPost.title}`} pathname={location.pathname} />
)

export const pageQuery = graphql`
  query BlogPostById($id: String!) {
    blogPost: contentfulBlogPost(id: { eq: $id }) {
      id
      title
      slug
      heroImage {
        gatsbyImageData(width: 1200, height: 400)
      }
      body {
        childMarkdownRemark {
          html
        }
      }
      description {
        childMarkdownRemark {
          html
        }
      }
      tags
    }
  }
`
