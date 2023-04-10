import * as React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import LayoutContent from '../components/layout-content'
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
        <LayoutContent>
          <ul
            role="list"
            className="grid grid-cols-2 gap-3 py-0 md:gap-6 md:grid-cols-3 lg:grid-cols-4 lg:gap-6 lg:py-6"
          >
            <li className="flex flex-col col-span-2 py-6 rounded-lg md:col-span-3 lg:col-span-2">
              <div className="mb-6 text-base leading-tight prose transition max-w-none">
                <ReactMarkdown>{manufacturer.description}</ReactMarkdown>
              </div>
              <div>
                <a
                  href={manufacturer.href}
                  rel="noopener"
                  target="_blank"
                  className="button"
                >
                  <span className="sr-only">Click here to </span>Visit{' '}
                  {manufacturer.title}
                  <span className="sr-only">'s website</span>
                </a>
              </div>
            </li>
            {manufacturer.products.map((product) => {
              return <ProductCard {...product} key={product.id} />
            })}
          </ul>
        </LayoutContent>
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
