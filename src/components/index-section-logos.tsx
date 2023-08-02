import * as React from 'react'
import usePublishedManufacturers from '../hooks/use-published-manufacturers'
import Logos from './logos'
import { IGatsbyImageData, GatsbyImage, StaticImage } from 'gatsby-plugin-image'
import { Link } from 'gatsby'

type ManufacturerProps = {
  id: string
  title: string
  slug: string
  tags: [string]
  image_hero: {
    id: string
    imageFile: {
      childImageSharp: {
        gatsbyImageData: IGatsbyImageData
      }
    }
  }
}

const IndexSectionLogos = () => {
  const manufacturers = usePublishedManufacturers()
  return (
    <div className="home-section">
      <div className="px-6 mx-auto max-w-7xl lg:px-8">
        <div className="grid max-w-2xl grid-cols-1 mx-auto gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none ">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
                Representing
              </h2>
            </div>
          </div>
          <article className="grid grid-cols-2 gap-6 lg:grid-cols-4 md:gap-4">
            {manufacturers.map((item: ManufacturerProps) => {
              const ManufacturerLogo = Logos[item.slug]

              return (
                <Link
                  to={`/${item.slug}`}
                  className="grid place-content-center-center justify-items-center place-items-center group"
                  key={item.id}
                >
                  <h3 className="flex w-full h-16 md:h-32 lg:h-36">
                    <ManufacturerLogo className="z-20 w-full transition group-hover:scale-110 fill-black" />
                    <span className="sr-only">{item.title}</span>
                  </h3>
                </Link>
              )
            })}
          </article>
        </div>
      </div>
    </div>
  )
}

export default IndexSectionLogos
