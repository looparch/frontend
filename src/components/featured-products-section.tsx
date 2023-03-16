import * as React from 'react'
import useFeaturedProducts from '../hooks/use-featured-products'
import Logos from './logos'
import { IGatsbyImageData, GatsbyImage } from 'gatsby-plugin-image'
import { Link } from 'gatsby'

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
      <h2 className="mb-6 text-3xl font-bold text-blue-900">Featured Products</h2>
      <article className="grid grid-cols-1 gap-2 md:grid-cols-3 md:gap-4">
        {products.map((item: FeaturedProductProps) => {
          return (
            <Link
              to={`/${item.manufacturer.slug}/${item.slug}`}
              className="grid grid-flow-row"
              key={item.id}
            >
              <div className="relative block mb-2 overflow-hidden bg-gray-100 rounded-lg h-80 group">
                <GatsbyImage
                  image={item.image_primary.imageFile.childImageSharp.gatsbyImageData}
                  alt={`${item.title} Background Image`}
                  className="absolute object-cover object-center w-full h-full transition duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 z-10 opacity-70 bg-gradient-to-t from-[#000000]" />
                <div className="absolute z-20 flex items-center justify-center w-full h-full mx-auto text-center text-white">
                  <span className="p-9 leading-[1]">
                    <h3 className="pb-4 text-xl font-bold">{item.title}</h3>
                    <p>by {item.manufacturer.title}</p>
                  </span>
                </div>
              </div>
            </Link>
          )
        })}
      </article>
    </section>
  )
}
