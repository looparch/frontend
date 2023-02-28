import React from 'react'
import { Link } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import ReactMarkdown from 'react-markdown'
import { IManufacturer } from '../types'

export default function ManufacturerHero(manufacturer: IManufacturer) {
  return (
    <div>
      <div
        id="manufacturer-hero"
        className="grid max-w-6xl grid-cols-12 mx-auto mb-2 justify-items-center place-items-center lg:mb-6 md:mb-4"
      >
        <div className="w-full h-full col-span-12 col-start-1 row-start-1 -z-10">
          <GatsbyImage
            image={
              manufacturer.image_hero.imageFile.childImageSharp.gatsbyImageData
            }
            alt={`${manufacturer.title} Banner`}
            className="object-cover w-full h-full"
          />
        </div>
        <div className="grid col-span-4 col-start-1 row-start-1 px-0 py-0 md:py-8 lg:py-10 md:px-4 lg:px-6">
          <div className="justify-self-center">
            <img
              src={manufacturer.image_logo_dark.imageFile.publicURL}
              alt={`${manufacturer.title} Logo`}
              width="300"
              height="100"
            />
          </div>
          <div>
            <article className="z-10 mb-6 prose">
              <h1 className="sr-only">{manufacturer.title}</h1>
              <ReactMarkdown>{manufacturer.description}</ReactMarkdown>
            </article>
            <div className="mb-6">
              <a href={manufacturer.href} rel="noopener" target="_blank">
                Link
              </a>
            </div>
            <div>
              {manufacturer.tags &&
                manufacturer.tags.map((tag) => {
                  return (
                    <div
                      key={tag}
                      className="inline-block p-2 mr-2 text-xs font-light uppercase rounded-lg shadow-md bg-slate-100"
                    >
                      {tag}
                    </div>
                  )
                })}
            </div>
          </div>
        </div>
        <div className="w-full h-full col-span-12 col-start-1 row-start-1 -z-10 bg-gradient-to-r from-white to-transparent bg-blend-color-dodge"></div>
      </div>
    </div>
  )
}
