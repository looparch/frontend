import * as React from 'react'
import { GatsbyImage } from 'gatsby-plugin-image'
import ReactMarkdown from 'react-markdown'
import type { IManufacturer } from '../types'
import Logos from './logos'

export default function ManufacturerHero(manufacturer: IManufacturer) {
  const { title, description, image_hero, href } = manufacturer
  const ManufacturerLogo = Logos[manufacturer.slug]

  return (
    <>
      <div className="w-full h-[50vh] md:h-[50vh]">
        <div className="grid w-full h-full mx-auto md:px-0 ">
          <GatsbyImage
            image={image_hero.imageFile.childImageSharp.gatsbyImageData}
            alt={`${title} Banner`}
            className="object-cover"
            style={{ gridArea: '1/1' }}
          />
          <div
            className="z-20 grid items-center content-center justify-center w-full h-full p-6 mx-auto md:p-0"
            style={{ gridArea: '1/1' }}
          >
            <ManufacturerLogo className="absolute w-3/4 md:w-1/2 2xl:w-1/5 place-self-center fill-white md:fill-white" />
          </div>

          <div
            className="z-10 bg-[#000000] opacity-50 mix-blend-multiply"
            style={{ gridArea: '1/1' }}
          ></div>
        </div>
      </div>
      {/* <div className="p-2 mx-auto md:p-8 md:pb-0 max-w-7xl">
        <ReactMarkdown className="mb-6 font-light leading-tight prose max-w-7xl">
          {description}
        </ReactMarkdown>
        <div>
          <a href={href} rel="noopener" target="_blank" className="button">
            <span className="sr-only">Click here to </span>Visit {title}
            <span className="sr-only">'s website</span>
          </a>
        </div>
      </div> */}
    </>
  )
}
