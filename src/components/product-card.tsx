import React from 'react'
import { Link } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { IProduct } from '../types'

export default function ProductCard(product: IProduct) {
  return (
    <li className="relative overflow-hidden h-96 snap-y">
      <Link to={`/${product.manufacturer.slug}/${product.slug}`}>
        <GatsbyImage
          image={
            product.image_thumbnail.imageFile.childImageSharp.gatsbyImageData
          }
          alt={`${product.title} Thumbnail`}
          className="absolute object-cover w-full h-full"
        />
        <div className="absolute bottom-0 px-4 py-2 bg-slate-700 bg-opacity-70">
          <p className="text-xs font-medium text-gray-100 line-clamp-1">{product.title}</p>
        </div>
      </Link>
    </li>
  )
}
