import React from 'react'
import { GatsbyImage } from 'gatsby-plugin-image'
import { IArticle } from '../types'

export default function ArticleHero(article: IArticle) {
  return (
    <div className="grid mx-auto mb-6 max-w-7xl h-[24rem] md:h-[36rem]">
      <GatsbyImage
        image={article.heroImage.gatsbyImageData}
        alt={`${article.title} Banner`}
        className="object-cover"
        style={{ gridArea: '1/1' }}
      />
      <div
        className="relative z-20 grid content-center max-w-4xl p-6 mx-auto text-center text-white transition-all duration-1000 translate-x-10 align-items-center md:p-0"
        style={{ gridArea: '1/1' }}
      >
        <h1 className="mb-6 text-5xl font-bold leading-none md:text-6xl drop-shadow-md">
          {article.title}
        </h1>
        <div
          dangerouslySetInnerHTML={{
            __html: article.description.childMarkdownRemark.html,
          }}
          className="text-2xl font-light leading-tight md:text-4xl drop-shadow-md"
        />
      </div>
      <div
        className="relative z-10 opacity-70 bg-gradient-to-t from-black"
        style={{ gridArea: '1/1' }}
      ></div>
    </div>
  )
}
