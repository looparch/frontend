import React from 'react'
import { Link } from 'gatsby'
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image'

type CardTitleDescriptionProps = {
  link: string
  gatsbyImage: IGatsbyImageData
  title: string
  description?: any
}

const CardTitleDescription = ({
  link,
  gatsbyImage,
  title,
  description,
}: CardTitleDescriptionProps) => {
  return (
    <>
      <Link to={`/${link}`} className="grid grid-flow-row">
        <div className="relative block overflow-hidden bg-gray-100 rounded-md h-60 group">
          <GatsbyImage
            image={gatsbyImage}
            alt={`${title} Background Image`}
            className="absolute object-cover object-center w-full h-full transition duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 z-10 bg-[#000000] opacity-40 transition duration-500 group-hover:opacity-0" />
          <div className="absolute grid grid-rows-2 z-20 mx-auto h-full w-full text-2xl font-bold leading-[1] text-white">
            <h3 className="transitional-product-card-inner place-self-start">
              {title}
            </h3>
            <div className="text-base font-normal transition duration-500 place-self-end justify-self-start">
              <p className="transitional-product-card-inner-description">{description}</p>
            </div>
          </div>
        </div>
      </Link>
    </>
  )
}

export default CardTitleDescription
