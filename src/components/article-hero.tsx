import React from 'react'
import { GatsbyImage } from 'gatsby-plugin-image'
import { IArticle } from '../types'
import GraphicTextHero from './graphic-text-hero'

export default function ArticleHero(article: IArticle) {
  return (
    <GraphicTextHero title={article.title} description={article.description} image={article.heroImage.gatsbyImageData} />
  )
}
