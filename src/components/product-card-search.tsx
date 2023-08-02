import React from 'react'
import { Link } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
// import { IProduct } from '../types'
import { Highlight } from 'react-instantsearch-hooks-web'

export default function ProductCardSearch(item: any) {
  const { product } = item
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
          <span className="bg-red-400 text-white z-20 text-sm tracking-wider uppercase rounded-br-md absolute left-0 top-0 px-3 py-1.5">
            New
          </span>
        )}
        <div className="absolute inset-0 z-10 bg-[#000000] opacity-20 transition duration-500 group-hover:opacity-0" />
        <div className="absolute bottom-0 z-20 p-2 m-2 font-bold leading-none text-black transition duration-500 bg-white min-h-[40%] group-hover:opacity-75 min-w-[95%]">
          <h2 className="mb-2 text-lg">
            <Highlight attribute="title" hit={product} />
          </h2>
          <p className="mb-2 text-sm font-light">
            <Highlight attribute="manufacturer.title" hit={product} />
          </p>

          <p className="mb-2 text-sm font-normal line-clamp-3">
            <Highlight attribute="description" hit={product} />
          </p>
          {product.tags.map((tag: string) => (
            <span className="mr-2 text-xs font-light">
              <Highlight attribute="tags" hit={product} />
            </span>
          ))}
        </div>
      </Link>
    </li>
  )
}
