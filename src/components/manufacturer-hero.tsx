import React from 'react'
import { Link } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import ReactMarkdown from 'react-markdown'
import { IManufacturerHero } from '../types'

export default function ManufacturerHero(manufacturer: IManufacturerHero) {
  return (
    <div>
      <h1 className="sr-only">{manufacturer.title}</h1>
      <img
        src={manufacturer.image_logo_dark.imageFile.publicURL}
        alt={`${manufacturer.title} Logo`}
        width="300"
        height="100"
      />
      <GatsbyImage
        image={
          manufacturer.image_hero.imageFile.childImageSharp.gatsbyImageData
        }
        alt={`${manufacturer.title} Banner`}
      />
      <div>
        <ReactMarkdown>{manufacturer.description}</ReactMarkdown>
      </div>
      {manufacturer.tags &&
        manufacturer.tags.map((tag) => {
          return <div key={tag}>{tag}</div>
        })}
      <div>
        <a href={manufacturer.href} rel="noopener" target="_blank">Link</a>
      </div>
    </div>
  )
}
