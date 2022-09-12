import * as React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import ProductCard from '../components/product-card'
import ManufacturerHero from '../components/manufacturer-hero'
import type { IManufacturerHero } from '../types'

type DataProps = {
  data: {
    directus: {
      manufacturer: IManufacturerHero
    }
  }
}

const Manufacturer = ({
  data: {
    directus: { manufacturer },
  },
}: DataProps) => {
  return (
    <Layout>
      <>
        <ManufacturerHero {...manufacturer} />
        <ul
          role="list"
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
        >
          {manufacturer.products.map((product) => {
            return <ProductCard {...product} />
          })}
        </ul>
      </>
    </Layout>
  )
}

export default Manufacturer

export const pageQuery = graphql`
  query ManufacturerById($id: ID!) {
    directus {
      manufacturer: Manufacturers_by_id(id: $id) {
        id
        title
        slug
        href
        description
        image_hero {
          id
          imageFile {
            childImageSharp {
              gatsbyImageData(width: 300)
            }
          }
        }
        image_logo_dark {
          id
          imageFile {
            publicURL
          }
        }
        tags
        products(limit: 100, sort: "featured") {
          id
          title
          slug
          image_thumbnail {
            id
            imageFile {
              childImageSharp {
                gatsbyImageData(width: 500)
              }
            }
          }
          tags
          manufacturer {
            id
            title
            slug
          }
        }
      }
    }
  }
`
