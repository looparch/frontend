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

const IndexSectionArticles = () => {
  const articles = usePublishedArticles().slice(3, 6)
  return (
    <div className="shadow-2xl home-section shadow-loop-600">
      <div className="px-6 mx-auto max-w-7xl lg:px-8">
        <div className="grid max-w-2xl grid-cols-1 mx-auto gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
            <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
                Announcements
              </h2>
              <Link to="/announcements" className="h-full button">View all →</Link>
            </div>
          </div>
          <article className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3 md:gap-4">
            {articles.map((item: ArticleProps) => {
              return (
                <CardTitleDescription
                  key={item.id}
                  link={`/announcements/${item.slug}`}
                  gatsbyImage={item.heroImage.gatsbyImageData}
                  title={item.title}
                  description={item.body.childMarkdownRemark.excerpt}
                />
              )
            })}
          </article>
        </div>
      </div>
    </div>
  )
}

export default IndexSectionArticles
