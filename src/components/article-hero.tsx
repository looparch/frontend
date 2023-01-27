import React from 'react'
import { Link } from 'gatsby'
import { GatsbyImage, StaticImage, getImage } from 'gatsby-plugin-image'
import { IArticle } from '../types'

export default function ArticleHero(article: IArticle) {
  return (
    <div
      style={{
        display: 'grid',
      }}
    >
      <GatsbyImage
        image={article.heroImage.gatsbyImageData}
        alt={`${article.title} Banner`}
        className="object-cover"
        style={{
          gridArea: '1/1',
        }}
      />

      <div
        style={{
          gridArea: '1/1',
          position: 'relative',
          placeItems: 'center',
          display: 'grid',
        }}
        className="z-20"
      >
        <h1 className="mx-24 text-6xl font-bold leading-tight text-white">{article.title}</h1>
      </div>
      <div
        style={{
          gridArea: '1/1',
          position: 'relative',
        }}
        className="z-10 opacity-50 bg-slate-600 mix-blend-multiply"
      ></div>
    </div>
  )
}
