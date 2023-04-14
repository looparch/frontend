import * as React from 'react'
import useFeaturedProducts from '../hooks/use-featured-products'
import { IGatsbyImageData } from 'gatsby-plugin-image'

import CardTitleDescription from './card-title-description'

type FeaturedProductProps = {
  id: string
  title: string
  slug: string
  tags: [string]
  image_primary: {
    id: string
    imageFile: {
      childImageSharp: {
        gatsbyImageData: IGatsbyImageData
      }
    }
  }
  manufacturer: {
    title: string
    slug: string
  }
}

export default function FeaturedProductsSection() {
  const products = useFeaturedProducts()
  return (
    <section className="bg-blue-50 home-section">
      <h2 className="text-blue-900">
        Featured Products
      </h2>
      <article className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4 md:gap-4">
        {products.map((item: FeaturedProductProps) => {
          return (
            <CardTitleDescription
              key={item.id}
              link={`/${item.manufacturer.slug}/${item.slug}`}
              gatsbyImage={
                item.image_primary.imageFile.childImageSharp.gatsbyImageData
              }
              title={item.title}
              description={`by ${item.manufacturer.title}`}
            />
          )
        })}
      </article>
    </section>
  )
}
