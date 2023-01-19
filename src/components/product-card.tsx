import React from 'react'
import { Link } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { IProduct } from '../types'

export default function Layout(product: IProduct) {
  return (
    <li
      key={product.id}
      className="max-w-md mx-auto overflow-hidden bg-white rounded-sm shadow"
    >
      <Link to={`/${product.manufacturer.slug}/${product.slug}`}>
        <GatsbyImage
          image={
            product.image_thumbnail.imageFile.childImageSharp.gatsbyImageData
          }
          alt={`${product.title} Thumbnail`}
          className="object-cover w-full"
        />
        <div className="p-4">
          <h3 className="font-medium text-gray-900 text-md">{product.title}</h3>
        </div>
      </Link>
    </li>
  )
}
