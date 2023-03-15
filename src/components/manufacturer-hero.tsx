import * as React from 'react'
import { GatsbyImage } from 'gatsby-plugin-image'
import ReactMarkdown from 'react-markdown'
import type { IManufacturer } from '../types'
import Logos from './logos'

export default function ManufacturerHero(manufacturer: IManufacturer) {
  const { title, description, image_hero } = manufacturer
  const ManufacturerLogo = Logos[manufacturer.slug]

  return (
    <>
      {/* <div className="max-w-full mx-auto h-[90vh] md:h-[80vh] mb-6">
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
      </div> */}
      <div className="max-w-full mx-auto h-[90vh] md:h-[80vh] mb-6">
        <div className="grid object-cover w-full h-full px-2 mx-auto max-w-7xl">
          {/* <Navbar style={{ gridArea: '1/1' }} /> */}
          <GatsbyImage
            image={image_hero.imageFile.childImageSharp.gatsbyImageData}
            alt={`${title} Banner`}
            className="object-cover"
            style={{ gridArea: '1/1' }}
          />
          
          <div
            className="relative z-20 grid content-center h-full max-w-4xl p-6 mx-auto text-center text-white align-items-center md:p-0"
            style={{ gridArea: '1/1' }}
          >
            {/* <p>Blars tacoman</p> */}
            <ManufacturerLogo className="pt-12 fill-white md:fill-white" />
          </div>

          <div
            className="relative z-10 bg-[#000000] opacity-50 mix-blend-multiply"
            style={{ gridArea: '1/1' }}
          ></div>
        </div>
        <ReactMarkdown className="text-2xl font-light leading-tight md:text-4xl drop-shadow-md">
          {description}
        </ReactMarkdown>
      </div>
    </>
  )
}
