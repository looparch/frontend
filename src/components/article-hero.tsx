import React from 'react'
import { IArticle } from '../types'
import GraphicTextHero from './graphic-text-hero'

export default function ArticleHero(article: IArticle) {
  return (
    <GraphicTextHero title={article.title} description={article.description} image={article.heroImage.gatsbyImageData} />
  )
}
