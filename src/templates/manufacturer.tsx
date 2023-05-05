import * as React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../components/layout'
import LayoutContent from '../components/layout-content'
import ProductCard from '../components/product-card'
import ManufacturerHero from '../components/manufacturer-hero'
import type { IManufacturer } from '../types'
import { SEO } from '../components/seo'
import { ReactMarkdown } from 'react-markdown/lib/react-markdown'
import { GatsbyImage } from 'gatsby-plugin-image'

type DataProps = {
  data: {
    directus: {
      manufacturer: IManufacturer
    }
  }
  location: {
    pathname: string
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
        {/* <LayoutContent>
          <div className="block grid-cols-2 gap-6 sm:grid">
            <div>
              <p>Blars</p>
            </div>
            <div className="pt-6">
              <div className="grid auto-rows-[200px] grid-cols-3 gap-2">
                {[...Array(7)].map((_, i) => (
                  <div
                    key={i}
                    className={`row-span-1 rounded-md border-2 border-slate-400/10 bg-neutral-100 dark:bg-neutral-300 ${
                      i === 3 || i === 6 ? 'col-span-2' : ''
                    }`}
                  >
                    <GatsbyImage
                      image={
                        manufacturer.image_hero.imageFile.childImageSharp
                          .gatsbyImageData
                      }
                      alt="hello"
                      className="object-cover w-full h-full"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </LayoutContent> */}
        <LayoutContent>
          <ul
            role="list"
            className="grid grid-cols-2 gap-3 py-0 md:gap-6 md:grid-cols-3 lg:grid-cols-4 lg:gap-6 lg:py-6"
          >
            <li className="flex flex-col col-span-2 py-6 rounded-lg md:col-span-3 lg:col-span-2">
              <div className="mb-6 text-base leading-tight prose transition max-w-none">
                <ReactMarkdown>{manufacturer.description}</ReactMarkdown>
              </div>
              <div className="flex gap-4">
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
                <Link
                  to={`/contact/?manufacturer=${manufacturer.title}`}
                  className="button secondary"
                >
                  <span className="sr-only">
                    Click here to inquire about {manufacturer.title}
                  </span>
                  Inquire
                </Link>
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
  location,
}: DataProps) => (
  <SEO title={`${manufacturer.title}`} pathname={location.pathname} />
)

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
