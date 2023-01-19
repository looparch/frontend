import React, { ReactFragment } from 'react'
import { Carousel } from 'flowbite-react'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { IArticle } from '../types/IArticle'
import { ReactNode } from 'react-markdown/lib/react-markdown'
import { ReactNodeArray } from 'prop-types'

type DataProps = {
  articles: Array<IArticle>
}

export default function IndexCarousel({ articles }: DataProps) {
  return (
    <>
      {articles.map((article, index) => {
        console.log(article)
        return (
          <div
            className="relative grid content-center grid-cols-1 justify-items-center h-96"
            key={index}
          >
            <div className="absolute">
              <GatsbyImage
                image={article.heroImage.gatsbyImageData}
                className="object-cover max-h-96"
                alt=""
              />
            </div>
            <div className="absolute inset-0 z-10 h-full opacity-70 bg-gradient-to-t from-black"></div>
            <div className="z-30 p-8 text-white w-fit lg:p-8">
              <h3 className="text-xl font-medium ">
                {article.title}
              </h3>
              <div dangerouslySetInnerHTML={{__html: article.description.childMarkdownRemark.html}} />
            </div>
          </div>
        )
      })}
    </>
  )
}
