import * as React from 'react'
import { GatsbyImage } from 'gatsby-plugin-image'
import ReactMarkdown from 'react-markdown'
import type { IManufacturer } from '../types'
import Logos from './logos'

export default function ManufacturerHero(manufacturer: IManufacturer) {
  const { title, description, image_hero } = manufacturer
  const ManufacturerLogo = Logos[manufacturer.slug]

  return (
    <div className="p-6 mx-auto max-w-7xl w-6xl" id="manufacturer-hero">
      <div className="grid grid-cols-2 grid-rows-1 mx-auto mb-6 h-[50vh] md:h-[50vh]">
        <div className="z-20 h-full col-span-2 col-start-1 row-span-1 row-start-1 bg-[#000000] opacity-50 mix-blend-multiply rounded-lg" />
        <GatsbyImage
          image={image_hero.imageFile.childImageSharp.gatsbyImageData}
          alt={`${title} Background Image`}
          className="z-10 col-span-2 col-start-1 row-span-1 row-start-1"
        />
        <div className="z-20 flex content-center justify-center col-span-2 col-start-1 row-span-1 row-start-1">
          <ManufacturerLogo className="max-w-md pt-12 fill-white md:fill-white" />

          <div className="grid h-full max-w-lg grid-cols-1">
            <div className="flex flex-wrap items-start content-center justify-center">
              <a
                className="button"
                href={manufacturer.href}
                target="_blank"
                rel="no-opener"
              >
                Visit {title}
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="z-20 px-2 mx-auto w-6xl max-w-7xl md:px-6">
        <div className="text-base font-light leading-tight prose text-black font-inter max-w-none md:text-black underline-offset-4 md:text-base">
          <ReactMarkdown>{description}</ReactMarkdown>
        </div>
      </div>
    </div>
  )
}
