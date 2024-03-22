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
      <div className="w-full h-[50dvh]">
        <div className="grid w-full h-full mx-auto md:px-0 ">
          <GatsbyImage
            image={image_hero.imageFile.childImageSharp.gatsbyImageData}
            alt={`${title} Banner`}
            className="object-cover"
            style={{ gridArea: '1/1' }}
          />
          <div
            className="z-20 flex items-center content-center justify-center w-full h-full p-6 mx-auto md:p-0"
            style={{ gridArea: '1/1' }}
          >
            <ManufacturerLogo className="absolute w-3/4 mx-auto md:w-1/2 place-self-center fill-white" />
          </div>

          <div
            className="z-10 bg-[#000000] opacity-30 mix-blend-multiply"
            style={{ gridArea: '1/1' }}
          ></div>
        </div>
      </div>
    </>
  )
}
