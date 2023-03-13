import * as React from 'react'
import type { IGatsbyImageData } from 'gatsby-plugin-image'
import { GatsbyImage } from 'gatsby-plugin-image'
import { Link } from 'gatsby'
import ReactMarkdown from 'react-markdown'
import type { IManufacturer } from '../types'
import Logos from './logos'

type IDescription = {
  childMarkdownRemark: {
    html: string
  }
}

type IGraphicTextHeroProps = {
  title: string
  description: any
  image: IGatsbyImageData
  link?: string
}

export default function ManufacturerHero(manufacturer: IManufacturer) {
  const { title, description, image_hero } = manufacturer
  const ManufacturerLogo = Logos[manufacturer.slug]
  return (
    <div className="max-w-full mx-auto" id="manufacturer-hero">
      <div className="grid h-auto mx-auto mb-6">

        <div
          className="relative z-10 opacity-90 mix-blend-darken"
          style={{ gridArea: '1/1' }}
        />

        <GatsbyImage
          image={image_hero.imageFile.childImageSharp.gatsbyImageData}
          alt={`${title} Background Image`}
          className="object-cover"
          style={{ gridArea: '1/1' }}
        />

        <div
          className="relative z-20 grid content-center max-w-4xl p-6 pt-24 mx-auto mt-0 text-black bg-white rounded-none shadow-lg md:rounded-lg md:mt-24 h-fit align-items-center md:p-10 place-self-center bg-opacity-90"
          style={{ gridArea: '1/1' }}
        >
          <ManufacturerLogo
            fillcolor={'rgb(95, 95, 95)'}
            className="max-w-sm mx-auto mb-4"
          />
          <div className="max-w-lg font-serif text-base font-light leading-tight prose prose-strong:underline underline-offset-4 md:text-lg drop-shadow-md">
            <ReactMarkdown>{description}</ReactMarkdown>
            <a className="button" href={manufacturer.href}>
              Visit {title}
            </a>
          </div>
        </div>

      </div>
    </div>
  )
}
