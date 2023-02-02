import React from 'react'
import { GatsbyImage } from 'gatsby-plugin-image'
import { IArticle } from '../types/IArticle'
import { Link } from 'gatsby'

type DataProps = {
  articles: Array<IArticle>
}

export default function IndexCarousel({ articles }: DataProps) {
  return (
    <div className="h-[50vh]">
      {articles.map((article, index) => {
        return (
          <div
            className="relative grid content-center h-full grid-cols-1 overflow-hidden justify-items-center"
            key={index}
          >
            <div className="absolute w-full h-full">
              <GatsbyImage
                image={article.heroImage.gatsbyImageData}
                className="object-cover w-full h-full"
                alt=""
              />
            </div>
            <div className="absolute inset-0 z-10 h-full opacity-70 bg-gradient-to-t from-black"></div>
            <div className="z-30 p-8 text-white lg:p-60">
              <Link to={`articles/${article.slug}`}>
                <h2 className="text-6xl font-bold leading-tight">
                  {article.title}
                </h2>
              </Link>
              <div
                className="text-4xl"
                dangerouslySetInnerHTML={{
                  __html: article.description.childMarkdownRemark.html,
                }}
              />
            </div>
          </div>
        )
      })}
    </div>
  )
}
