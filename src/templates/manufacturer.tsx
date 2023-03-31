import * as React from 'react'
import { graphql } from 'gatsby'
import type { PageProps } from 'gatsby'
import Layout from '../components/layout'
import ProductCard from '../components/product-card'
import ManufacturerHero from '../components/manufacturer-hero'
import type { IManufacturer } from '../types'
import { SEO } from '../components/seo'
import { ReactMarkdown } from 'react-markdown/lib/react-markdown'

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
        <div className="px-2 mx-auto max-w-8xl md:px-0">
          <ul
            role="list"
            className="grid grid-cols-2 gap-2 p-2 md:p-8 md:gap-6 md:grid-cols-3 lg:grid-cols-4 lg:gap-6"
          >
            <li className="flex flex-col justify-center col-span-2 p-6 rounded-lg">
              <div className="mb-6 text-base leading-tight prose transition">
                <ReactMarkdown>{manufacturer.description}</ReactMarkdown>
              </div>
              <div>
                <a
                  href={manufacturer.href}
                  rel="noopener"
                  target="_blank"
                  className="button"
                >
                  <span className="sr-only">Click here to </span>Visit {manufacturer.title}
                  <span className="sr-only">'s website</span>
                </a>
              </div>
            </li>
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
}: DataProps) => <SEO title={`${manufacturer.title}`} />

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
