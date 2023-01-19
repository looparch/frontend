import React from 'react'
import { Link } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { IArticle } from '../types'

export default function ArticleHero(article: IArticle) {
  console.log(article)
  return (
    <div className="w-full h-56 mx-auto sm:h-64 xl:h-96 2xl:h-1/4">
      <GatsbyImage
        image={article.heroImage.gatsbyImageData}
        alt={`${article.title} Banner`}
        className="object-cover w-full h-full"
      />
      <h1 className="">{article.title}</h1>
      <div
        className=""
        dangerouslySetInnerHTML={{
          __html: article.description.childMarkdownRemark.html,
        }}
      />
    </div>
  )
}
