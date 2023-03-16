import * as React from 'react'
import usePublishedArticles from '../hooks/use-published-blog-posts'
import Logos from './logos'
import { IGatsbyImageData, GatsbyImage } from 'gatsby-plugin-image'
import { Link } from 'gatsby'

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
    }
  }
}

export default function ArticleSection() {
  const articles = usePublishedArticles()
  return (
    <section className="home-section">
      <h2 className="mb-6 text-3xl font-semibold text-center">Recent Articles</h2>
      <article className="grid grid-cols-1 gap-2 md:grid-cols-3 md:gap-4">
        {articles.slice(3, 7).map((item: ArticleProps) => {
          return (
            <Link
              to={`/blogPosts/${item.slug}`}
              className="grid grid-flow-row"
              key={item.id}
            >
              <div className="relative block mb-2 overflow-hidden bg-gray-100 rounded-lg h-80 group">
                <GatsbyImage
                  image={item.heroImage.gatsbyImageData}
                  alt={`${item.title} Background Image`}
                  className="absolute object-cover object-center w-full h-full transition duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 z-10 opacity-70 bg-gradient-to-t from-[#000000]" />
                <div className="absolute flex z-20 mx-auto items-center justify-center h-full w-full text-xl font-bold leading-[1] text-white text-center">
                  <span className="p-9">{item.title}</span>
                </div>
              </div>
              <div
                className="mb-1 transition duration-200 text-md underline-offset-4 lg:text-md line-clamp-2 text-dark-text group-hover:text-loop-600 group-hover:underline"
                dangerouslySetInnerHTML={{
                  __html: item.description.childMarkdownRemark.html,
                }}
              />
            </Link>
          )
        })}
      </article>
    </section>
  )
}
