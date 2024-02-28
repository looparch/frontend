import React from 'react'
import { Link } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { IProduct } from '../types'

export default function ProductCard(product: IProduct) {
  return (
    <li className="group">
      <Link
        to={`/${product.manufacturer.slug}/${product.slug}`}
        className="relative block overflow-hidden transition duration-500 bg-gray-100 rounded-md h-72 md:h-80 group-hover:shadow-md"
      >
        <GatsbyImage
          image={
            product.image_thumbnail.imageFile.childImageSharp.gatsbyImageData
          }
          alt={`${product.title} Thumbnail`}
          className="object-cover object-center w-full h-full transition duration-500 group-hover:scale-110"
        />
        {product.is_new && (
          <span className="bg-red-400 text-white z-20 text-sm tracking-wider uppercase rounded-sm absolute left-0 top-0 px-2 py-1 m-4">
            New
          </span>
        )}
        <div className="absolute inset-0 z-10 bg-[#000000] opacity-20 transition duration-500 group-hover:opacity-0" />
        <div className="absolute bottom-0 z-20 p-2 m-2 text-2xl font-bold leading-none text-white transition duration-500 w-fit group-hover:text-black group-hover:bg-white">
          {product.title}
        </div>
      </Link>
    </li>
  )
}
