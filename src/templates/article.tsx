import * as React from 'react'
import { graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import Layout from '../components/layout'
import type { IArticle } from '../types'

type DataProps = {
  data: {
    directus: {
      article: IArticle
    }
  }
}

const Article = ({
  data: {
    directus: { article },
  },
}: DataProps) => {
  return (
    <Layout>
      <>
        <h1>
          {article.title} - {article.id}
        </h1>
        <div>
          <GatsbyImage
            image={article.image_hero.imageFile.childImageSharp.gatsbyImageData}
            alt="hello"
          />
        </div>
        <div>{article.body_markdown}</div>
      </>
    </Layout>
  )
}

export default Article

export const pageQuery = graphql`
  query ArticleById($id: ID!) {
    directus {
      article: Articles_by_id(id: $id) {
        id
        title
        slug
        image_hero {
          id
          imageFile {
            childImageSharp {
              gatsbyImageData(width: 1200, height: 300)
            }
          }
        }
        description
        tags
        body
        body_markdown
        tags
      }
    }
  }
`
