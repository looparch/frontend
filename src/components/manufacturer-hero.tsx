import React from 'react'
import { Link } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import ReactMarkdown from 'react-markdown'
import { IManufacturer } from '../types'

export default function ManufacturerHero(manufacturer: IManufacturer) {
  console.log(manufacturer)
  return (
    <div>
      <div
        id="manufacturer-hero"
        className="grid max-w-6xl grid-cols-12 mx-auto mb-2 justify-items-center place-items-center lg:mb-6 md:mb-4"
      >
        <div className="w-full h-full col-span-7 col-start-6 row-start-1 -z-0">
          <GatsbyImage
            image={
              manufacturer.image_hero.imageFile.childImageSharp.gatsbyImageData
            }
            alt={`${manufacturer.title} Banner`}
            className="object-cover w-full h-full"
          />
        </div>
        <div className="z-10 grid col-span-4 col-start-1 row-start-1 px-0 py-0 md:py-8 lg:py-10 md:px-4 lg:px-6">
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
              <a href={manufacturer.href} rel="noopener" target="_blank" className="underline underline-offset-8">
                Visit {manufacturer.title}
              </a>
            </div>
            <div>
              {manufacturer.tags &&
                manufacturer.tags.map((tag) => {
                  return (
                    <div
                      key={tag}
                      className="inline-block p-1 mr-2 text-xs border border-gray-400 rounded-sm"
                    >
                      {tag}
                    </div>
                  )
                })}
            </div>
          </div>
        </div>
        {/* <div className="w-full h-full col-span-12 col-start-1 row-start-1 -z-0 bg-gradient-to-r from-white to-transparent"></div> */}
      </div>
    </div>
  )
}
