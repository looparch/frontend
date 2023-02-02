import React from 'react'
import { GatsbyImage } from 'gatsby-plugin-image'
import { IArticle } from '../types'

export default function ArticleHero(article: IArticle) {
  return (
    <div className="grid h-[50vh]">
      <GatsbyImage
        image={article.heroImage.gatsbyImageData}
        alt={`${article.title} Banner`}
        className="object-cover"
        style={{ gridArea: '1/1' }}
      />

      <div
        className="relative z-20 grid place-items-center"
        style={{ gridArea: '1/1' }}
      >
        <h1 className="mx-24 text-6xl font-bold leading-tight text-white">
          {article.title}
        </h1>
      </div>
      <div
        className="relative z-10 opacity-70 bg-gradient-to-t from-black"
        style={{ gridArea: '1/1' }}
      ></div>
    </div>
  )
}
