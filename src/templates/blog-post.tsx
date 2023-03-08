import * as React from 'react'
import { graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import Layout from '../components/layout'
import BlogPostHero from '../components/blog-post-hero'
import type { IBlogPost } from '../types'

type DataProps = {
  data: {
    blogPost: IBlogPost
  }
}

const BlogPost = ({ data: { blogPost } }: DataProps) => {
  return (
    <Layout>
      <>
        <BlogPostHero {...blogPost}/>
        <div
          className="max-w-xl mx-auto font-serif text-lg prose text-dark-text"
          dangerouslySetInnerHTML={{
            __html: blogPost.body.childMarkdownRemark.html,
          }}
        ></div>
        {/* <div>{blogPost.body_markdown}</div> */}
      </>
    </Layout>
  )
}

export default BlogPost

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
