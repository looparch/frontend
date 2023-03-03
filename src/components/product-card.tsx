import React from 'react'
import { Link } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { IProduct } from '../types'

export default function ProductCard(product: IProduct) {
  return (
    <li>
      <Link
        to={`/${product.manufacturer.slug}/${product.slug}`}
        className="relative block mb-2 overflow-hidden bg-gray-100 rounded-lg group h-80 lg:mb-3"
      >
        <GatsbyImage
          image={
            product.image_thumbnail.imageFile.childImageSharp.gatsbyImageData
          }
          alt={`${product.title} Thumbnail`}
          className="object-cover object-center w-full h-full transition duration-200 group-hover:scale-110"
        />
        {product.is_new && (
          <span className="bg-red-500 text-white text-sm tracking-wider uppercase rounded-br-lg absolute left-0 top-0 px-3 py-1.5">New</span>
        )}
      </Link>

      <div>
        <Link
          to={`/${product.manufacturer.slug}/${product.slug}`}
          className="mb-1 text-md lg:text-md line-clamp-1 text-medium-text"
        >
          {product.title}
        </Link>
      </div>
    </li>
  )
}
