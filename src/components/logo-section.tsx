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
    <section className="bg-pink-50 home-section">
      <h2 className="mb-6 text-3xl font-bold text-pink-900">Representing</h2>
      <section className="grid grid-cols-1 gap-2 md:grid-cols-4 md:gap-4">
        {manufacturers.map((item: ManufacturerProps) => {
          const ManufacturerLogo = Logos[item.slug]

          return (
            <Link to={`/${item.slug}`} className="grid place-content-center-center justify-items-center place-items-center group" key={item.id}>
              <div className="flex w-full h-36">
                {/* <GatsbyImage
                  image={
                    item.image_hero.imageFile.childImageSharp.gatsbyImageData
                  }
                  alt={`${item.title} Background Image`}
                  className="absolute object-cover object-center w-full h-full transition duration-1000 group-hover:scale-110"
                /> */}
                <ManufacturerLogo className="z-20 w-full transition group-hover:scale-110 fill-pink-900 "/>
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
