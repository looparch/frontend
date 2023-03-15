import * as React from 'react'
import usePublishedManufacturers from '../hooks/use-published-manufacturers'
import Logos from '../components/logos'
import { IGatsbyImageData, GatsbyImage } from 'gatsby-plugin-image'
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

export default function LogoSection() {
  const manufacturers = usePublishedManufacturers()
  return (
    <section className="home-section">
      <h2 className="mb-6 text-3xl font-semibold">Representing</h2>
      <section className="grid grid-cols-2 gap-2 md:grid-cols-4 md:gap-4">
        {manufacturers.map((item: ManufacturerProps) => {
          const ManufacturerLogo = Logos[item.slug]

          return (
            <Link to={`/${item.slug}`} className="grid grid-flow-row" key={item.id}>
              <div className="relative block h-32 mb-2 overflow-hidden group">
                {/* <GatsbyImage
                  image={
                    item.image_hero.imageFile.childImageSharp.gatsbyImageData
                  }
                  alt={`${item.title} Background Image`}
                  className="absolute object-cover object-center w-full h-full transition duration-1000 group-hover:scale-110"
                /> */}
                <ManufacturerLogo className="absolute z-20 w-full h-full transition group-hover:scale-110" fillcolor="rgb(95, 95, 95)"/>
                <span className="sr-only">{item.title}</span>
                {/* <div className="absolute inset-0 z-10 opacity-70 bg-gradient-to-t from-gray-900" /> */}
              </div>
              {/* <div className="mb-1 text-xs lg:text-md line-clamp-1 text-dark-text">
                {item.tags.join(', ')}
              </div> */}
            </Link>
          )
        })}
      </section>
    </section>
  )
}
