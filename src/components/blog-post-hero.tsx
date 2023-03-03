import React from 'react'
import { GatsbyImage } from 'gatsby-plugin-image'
import { IBlogPost } from '../types'
import GraphicTextHero from './graphic-text-hero'

export default function BlogPostHero(article: IBlogPost) {
  return (
    <GraphicTextHero title={article.title} description={article.description} image={article.heroImage.gatsbyImageData} />
  )
}
