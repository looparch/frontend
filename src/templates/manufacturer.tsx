import * as React from 'react'
import { graphql } from 'gatsby'
import type { PageProps } from 'gatsby'
import Layout from '../components/layout'
import ProductCard from '../components/product-card'
import ManufacturerHero from '../components/manufacturer-hero'
import type { IManufacturer } from '../types'
import { SEO } from '../components/seo'

type DataProps = {
  data: {
    directus: {
      manufacturer: IManufacturer
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
      <div className="bg-white">
        <ManufacturerHero {...manufacturer} />
        <div className="max-w-6xl px-2 mx-auto md:px-6">
          <ul
            role="list"
            className="grid grid-cols-2 gap-2 md:gap-6 md:grid-cols-3 lg:grid-cols-4 lg:gap-6"
          >
            {manufacturer.products.map((product) => {
              return <ProductCard {...product} key={product.id} />
            })}
          </ul>
        </div>
      </div>
    </Layout>
  )
}

export default Manufacturer

export const Head = ({
  data: {
    directus: { manufacturer },
  },
}: DataProps) => <SEO title={`${manufacturer.title} - Loop`} />

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
              gatsbyImageData(height: 800, width: 1200)
            }
          }
        }
        image_logo_dark {
          id
          imageFile {
            publicURL
          }
        }
        image_logo_light {
          id
          imageFile {
            publicURL
          }
        }
        tags
        products(
          limit: -1
          sort: "featured, collection, title"
          filter: { status: { _eq: "published" } }
        ) {
          id
          title
          slug
          image_thumbnail {
            id
            imageFile {
              childImageSharp {
                gatsbyImageData(width: 300, height: 400)
              }
            }
          }
          tags
          manufacturer {
            id
            title
            slug
          }
          is_new
        }
      }
    }
  }
`
