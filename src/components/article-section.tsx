import * as React from 'react'
import usePublishedArticles from '../hooks/use-published-blog-posts'
import { IGatsbyImageData, GatsbyImage } from 'gatsby-plugin-image'
import { Link } from 'gatsby'
import CardTitleDescription from './card-title-description'

type ArticleProps = {
  id: string
  title: string
  slug: string
  heroImage: {
    gatsbyImageData: IGatsbyImageData
  }
  description: {
    childMarkdownRemark: {
      html: string
      excerpt: string
    }
  }
  body: {
    childMarkdownRemark: {
      html: string
      excerpt: string
    }
  }
}

export default function ArticleSection() {
  const articles = usePublishedArticles()
  return (
    <section className="bg-yellow-50 home-section">
      <h2 className="text-yellow-900">Announcements</h2>
      <article className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4 md:gap-4">
        {articles.map((item: ArticleProps) => {
          return (
            <CardTitleDescription
              key={item.id}
              link={`/blogPosts/${item.slug}`}
              gatsbyImage={item.heroImage.gatsbyImageData}
              title={item.title}
              description={item.body.childMarkdownRemark.excerpt}
            />
          )
        })}
      </article>
    </section>
  )
}
