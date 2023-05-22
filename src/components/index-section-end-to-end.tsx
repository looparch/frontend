import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'

const IndexSectionEndToEnd = () => {
  return (
    <div className="shadow-2xl home-section shadow-loop-600">
      <div className="px-6 mx-auto max-w-7xl lg:px-8">
        <div className="grid max-w-2xl grid-cols-1 mx-auto gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
                End to End Support
              </h2>
              <p className="my-6 text-lg leading-8">
                Your projects are <strong>our</strong> projects. Understanding
                the process is a big part of what we do.
              </p>
              <p className="my-6 text-lg leading-8">
                Loop supports all your efforts at every waypoint from concept to
                completion – on every project from tiny to tremendous.
              </p>
              <p className="my-6 text-lg leading-8">
                Whether you're specifying, purchasing, or installing, Loop
                understands your needs and provides a clear path forward.
              </p>
            </div>
          </div>
          <StaticImage
            src="../images/area-environments.jpg"
            alt="End to End Support Illustration"
            className="w-[48rem] max-w-none rounded-sm shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
          />
        </div>
      </div>
    </div>
  )
}

export default IndexSectionEndToEnd
