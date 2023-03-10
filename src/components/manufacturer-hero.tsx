import React from 'react'
import { Link } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import Logos from '../components/logos'
import ReactMarkdown from 'react-markdown'
import { IManufacturer } from '../types'

export default function ManufacturerHero(manufacturer: IManufacturer) {
  const ManufacturerLogo = Logos[`${manufacturer.slug}`]

  return (
    <div>
      <div
        id="manufacturer-hero"
        className="grid max-w-6xl grid-cols-1 gap-6 px-2 mx-auto my-6 md:px-6 md:grid-cols-2"
      >
        <div className="py-6">
          <div className="flex items-center content-center">
            <ManufacturerLogo className="max-w-xs mx-auto" />
          </div>
          <div className="w-4/5 mx-auto">
            <article className="z-10 mb-6 prose">
              <h1 className="sr-only">{manufacturer.title}</h1>
              <ReactMarkdown className="font-serif text-lg text-dark-text">
                {manufacturer.description}
              </ReactMarkdown>
            </article>
            <div className="mb-8">
              <a
                href={manufacturer.href}
                rel="noopener"
                target="_blank"
                className="underline underline-offset-8"
              >
                Visit {manufacturer.title}
              </a>
            </div>
            <p className="text-xs">
              {manufacturer.tags.join(', ')}
              {/* {manufacturer.tags &&
                manufacturer.tags.map((tag) => {
                  return (
                    <div
                      key={tag}
                      className="inline-block p-1 mr-2 text-xs border border-gray-400 rounded-sm"
                    >
                      {tag}
                    </div>
                  )
                })} */}
            </p>
          </div>
        </div>
        <div className="hidden md:block">
          <GatsbyImage
            image={
              manufacturer.image_hero.imageFile.childImageSharp.gatsbyImageData
            }
            alt={`${manufacturer.title} Banner`}
            className="object-cover w-full h-full rounded-md"
          />
        </div>
        {/* <div className="w-full h-full col-span-12 col-start-1 row-start-1 -z-0 bg-gradient-to-r from-white to-transparent"></div> */}
      </div>
    </div>
  )
}
