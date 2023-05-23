import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'

const IndexSectionProjectDiversity = () => {
  return (
    <div className="home-section">
      <div className="px-6 mx-auto max-w-7xl lg:px-8">
        <div className="grid max-w-2xl grid-cols-1 mx-auto gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
                Project Diversity
              </h2>
              <p className="my-6 text-lg leading-8">
                Our lines represent a large spectrum of possibilities.
              </p>
              <p className="my-6 text-lg leading-8">
                Loop provides solutions for Healthcare, Hospitality, Corporate,
                Civic, Cultural, Education, Retail, Residential, Liturgical, or
                any other scenario your project brings to the table.
              </p>
            </div>
          </div>
          <StaticImage
            src="../images/junckers.jpg"
            alt="Project Diversity Illustration"
            className="w-[48rem] max-w-none rounded-sm shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
          />
        </div>
      </div>
    </div>
  )
}

export default IndexSectionProjectDiversity
