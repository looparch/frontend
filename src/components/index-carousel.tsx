import React from 'react'
import { GatsbyImage } from 'gatsby-plugin-image'
import { IArticle } from '../types/IArticle'

type DataProps = {
  articles: Array<IArticle>
}

export default function IndexCarousel({ articles }: DataProps) {
  return (
    <>
      {articles.map((article, index) => {
        return (
          <div
            className="relative grid content-center grid-cols-1 overflow-hidden h-[50vh] justify-items-center"
            key={index}
          >
            <div className="absolute">
              <GatsbyImage
                image={article.heroImage.gatsbyImageData}
                className="object-fill w-full h-full"
                alt=""
              />
            </div>
            <div className="absolute inset-0 z-10 h-full opacity-70 bg-gradient-to-t from-black"></div>
            <div className="z-30 p-8 text-white w-fit lg:p-8">
              <h2 className="text-6xl font-bold leading-tight">
                {article.title}
              </h2>
              <div className="text-4xl" dangerouslySetInnerHTML={{__html: article.description.childMarkdownRemark.html}} />
            </div>
          </div>
        )
      })}
    </>
  )
}
