import React from 'react'
import { Link } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { IProduct } from '../types'

export default function Layout(product: IProduct) {
  return (
    <li
      key={product.id}
      className="flex flex-col flex-grow-0 col-span-1 text-center bg-white divide-y divide-gray-200 rounded-sm shadow flex-shrink-1 hover:shadow-lg"
    >
      <Link to={`/${product.manufacturer.slug}/${product.slug}`}>
        <div className="flex flex-col flex-1 p-0">
          <GatsbyImage
            image={product.image_thumbnail.imageFile.childImageSharp.gatsbyImageData}
            alt={`${product.title} Thumbnail`}
            className="object-cover"
          />
        </div>
      </Link>
      <div className="flex items-center content-center justify-center flex-auto">
        <div className="m-4 font-semibold text-gray-900 text-md">
          {product.title}
        </div>
      </div>
    </li>
  )
}
