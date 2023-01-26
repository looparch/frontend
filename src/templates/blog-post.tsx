import * as React from 'react'
import { graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import Layout from '../components/layout'
import ArticleHero from '../components/article-hero'
import type { IBlogPost } from '../types'

type DataProps = {
  data: {
    blogPost: IBlogPost
  }
}

const BlogPost = ({ data: { blogPost } }: DataProps) => {
  console.log(blogPost)
  return (
    <Layout>
      <>
        {/* <ArticleHero {...blogPost}/> */}
        <h1>
          {blogPost.title} - {blogPost.id}
        </h1>
        <div>
          <GatsbyImage image={blogPost.heroImage.gatsbyImageData} alt="hello" />
        </div>
        <div
          dangerouslySetInnerHTML={{
            __html: blogPost.body.childMarkdownRemark.html,
          }}
        ></div>
        <div>{blogPost.body_markdown}</div>
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
        gatsbyImageData
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
