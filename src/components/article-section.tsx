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
  body: {
    childMarkdownRemark: {
      html: string
    }
  }
}

export default function ArticleSection() {
  const articles = usePublishedArticles()
  return (
    <section className="bg-yellow-50 home-section">
      <h2 className="mb-6 text-3xl font-bold text-yellow-900">
        Recent Announcements
      </h2>
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
                <div className="absolute inset-0 z-10 bg-[#000000] opacity-50" />
                <div className="absolute grid grid-rows-2 z-20 mx-auto h-full w-full text-2xl font-bold leading-[1] text-white ">
                  <h3 className="p-9">{item.title}</h3>
                  <div
                    className="text-base font-normal p-9 place-self-end justify-self-start"
                    dangerouslySetInnerHTML={{
                      __html: item.description.childMarkdownRemark.html,
                    }}
                  />
                </div>
              </div>
            </Link>
          )
        })}
      </article>
    </section>
  )
}
