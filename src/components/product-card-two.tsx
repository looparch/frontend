import React from 'react'
import { Link } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { IProduct } from '../types'

export default function ProductCardTwo(product: IProduct) {
  return (
    <li>
      <Link
        to={`/${product.manufacturer.slug}/${product.slug}`}
        className="relative block mb-2 overflow-hidden bg-gray-100 rounded-lg group h-80 lg:mb-3"
      >
        {/* <img src="https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&q=75&fit=crop&w=600" loading="lazy" alt="Photo by Galina N" className="object-cover object-center w-full h-full transition duration-200 group-hover:scale-110" /> */}
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
          className="mb-1 text-gray-500 transition duration-100 hover:gray-800 text-md lg:text-lg line-clamp-1"
        >
          {product.title}
        </Link>
      </div>
    </li>
  )
}
