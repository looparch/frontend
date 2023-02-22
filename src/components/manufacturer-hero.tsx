import React from 'react'
import { Link } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import ReactMarkdown from 'react-markdown'
import { IManufacturer } from '../types'

export default function ManufacturerHero(manufacturer: IManufacturer) {
  return (
    <div className="grid max-w-6xl grid-cols-3 gap-6 mx-auto mb-2">
      <h1 className="sr-only">{manufacturer.title}</h1>
      <div>
        <img
          src={manufacturer.image_logo_dark.imageFile.publicURL}
          alt={`${manufacturer.title} Logo`}
          width="300"
          height="100"
          className="mb-6"
        />
        <article className="prose">
          <ReactMarkdown>{manufacturer.description}</ReactMarkdown>
        </article>
        <div className="my-2">
          {manufacturer.tags &&
            manufacturer.tags.map((tag) => {
              return <div key={tag} className="inline-block p-1 mr-2 text-xs bg-slate-100">{tag}</div>
            })}
        </div>
        <div>
          <a href={manufacturer.href} rel="noopener" target="_blank">
            Link
          </a>
        </div>
      </div>
      <div className="col-span-2">
        <GatsbyImage
          image={
            manufacturer.image_hero.imageFile.childImageSharp.gatsbyImageData
          }
          alt={`${manufacturer.title} Banner`}
          className="object-cover w-full h-full"
        />
      </div>
    </div>
  )
}
