import * as React from 'react'
import { graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import Layout from '../components/layout'
import ArticleHero from '../components/article-hero'
import type { IArticle } from '../types'

type DataProps = {
  data: {
    article: IArticle
  }
}

const Article = ({ data: { article } }: DataProps) => {
  console.log(article)
  return (
    <Layout>
      <>
        <ArticleHero {...article}/>
        <h1>
          {article.title} - {article.id}
        </h1>
        <div>
          <GatsbyImage image={article.heroImage.gatsbyImageData} alt="hello" />
        </div>
        <div
          dangerouslySetInnerHTML={{
            __html: article.body.childMarkdownRemark.html,
          }}
        ></div>
        <div>{article.body_markdown}</div>
      </>
    </Layout>
  )
}

export default Article

export const pageQuery = graphql`
  query ArticleById($id: String!) {
    article: contentfulBlogPost(id: { eq: $id }) {
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
