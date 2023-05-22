import * as React from 'react'
import useFeaturedProducts from '../hooks/use-featured-products'
import { IGatsbyImageData } from 'gatsby-plugin-image'
import { Link } from 'gatsby'

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

const FeaturedProductsSection = () => {
  const products = useFeaturedProducts()
  return (
    <div className="shadow-2xl home-section shadow-loop-600">
      <div className="px-6 mx-auto max-w-7xl lg:px-8">
        <div className="grid max-w-2xl grid-cols-1 mx-auto gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none">
          <div className="lg:pr-8 lg:pt-4">
            <div className="flex items-center place-content-between lg:max-w-full">
              <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
                Featured Products
              </h2>
              <Link to="/featured-products" className="h-full button">View all →</Link>
            </div>
          </div>
          <article className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3 md:gap-4">
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
        </div>
      </div>
    </div>
  )
}

export default FeaturedProductsSection
