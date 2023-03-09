import * as React from 'react'
import usePublishedManufacturers from '../hooks/use-published-manufacturers'
import Logos from '../components/logos'
import {
  IGatsbyImageData,
  GatsbyImageProps,
  getImage,
  GatsbyImage,
} from 'gatsby-plugin-image'

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
    <section className="grid grid-cols-4 gap-4">
      {manufacturers.map((item: ManufacturerProps) => {
        const ManufacturerLogo = Logos[item.slug]
        const bgImage = getImage(
          item.image_hero.imageFile.childImageSharp.gatsbyImageData
        )
        return (
          // <div key={item.id} className="relative rounded-md hover:bg-loop-100" style={{
          //   backgroundImage: `url(${bgImage?.images.fallback?.src})`,
          //   backgroundPosition: "center",
          //   backgroundRepeat: "no-repeat",
          //   backgroundSize: "cover",
          //   backgroundColor: "rgb(233, 242, 228)"
          // }}>
          <div className="relative bg-slate-400 aspect-square">
            <div className="absolute inset-0 -z-0">
              <GatsbyImage
                image={
                  item.image_hero.imageFile.childImageSharp.gatsbyImageData
                }
                alt={`${item.title} Background Image`}
                className="object-cover"
              />
            </div>
            <ManufacturerLogo fillColor="rgb(243, 248, 241)" className="z-50" />
            <div className="absolute inset-0 w-full h-full bg-black -z-0 bg-opacity-20" />
          </div>
        )
      })}
    </section>
  )
}
