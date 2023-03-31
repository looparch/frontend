import * as React from 'react'
import { graphql } from 'gatsby'
import type { PageProps } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import ReactMarkdown from 'react-markdown'
import Layout from '../components/layout'
import { IProduct } from '../types/IProduct'
import Logos from '../components/logos'
import { SEO } from '../components/seo'

// import ZoomedImage from '../components/zoomed-image'

type DataProps = {
  directus: {
    product: IProduct
  }
}

const Product = ({
  data: {
    directus: { product },
  },
}: PageProps<DataProps>) => {
  const primaryImage = getImage(product.image_primary.imageFile.childImageSharp)
  const designer = product.designer || product.manufacturer.title
  const ManufacturerLogo = Logos[product.manufacturer.slug]

  let secondaryImage = undefined
  if (product.image_secondary) {
    secondaryImage = getImage(product.image_secondary.imageFile.childImageSharp)
  }
  return (
    <Layout>
      <article className="grid max-w-6xl grid-cols-1 gap-6 py-6 mx-auto md:grid-cols-5 print:grid-cols-5" id="wrap">
        <div className="order-last col-span-3 md:order-first print:order-first">
          <div className="mx-auto mb-20 min-h-full md:min-h-[75vh] prose max-w-2xl print:max-w-full print:break-after-avoid print:break-before-avoid print:break-inside-avoid">
            {primaryImage && (
              <GatsbyImage
                image={primaryImage}
                alt={`${product.title} Primary`}
                className="object-cover w-full h-full mb-6 border border-gray-400"
              />
            )}
            {secondaryImage !== undefined && (
              <GatsbyImage
                image={secondaryImage}
                alt={`${product.title} Secondary`}
                className="object-cover w-full h-full mb-6 border border-gray-400"
              />
            )}
          </div>
        </div>
        <div className="col-span-2">
          <div className="mb-6 leading-snug">
            <h1 className="text-xl font-semibold">{product.title}</h1>
            {product.subtitle && <h2>{product.subtitle}</h2>}
            <p>
              {product.collection && (
                <span>
                  From the <strong>{product.collection} Collection</strong>{' '}
                </span>
              )}
              by <strong>{designer}</strong>
            </p>
            <p className="hidden text-sm print:block print:mt-4">
              <a href={product.href}>{product.href}</a>
            </p>
          </div>
          <div className="">
            <div className="">
              <ReactMarkdown className="mb-6 prose text-black text-md print:text-sm max-w-none prose-h2:font-normal prose-h2:text-base prose-h2:text-black">
                {product.description}
              </ReactMarkdown>
              <p className="mb-6 print:hidden">
                <a
                  href={product.href}
                  rel="noopener"
                  target="_blank"
                  className="button"
                >
                  <span className="sr-only">Visit and </span>
                  View <span className="sr-only">{product.title} </span>{' '}@
                  {product.manufacturer.title}
                </a>
              </p>
              {product.tags && (
                <p className="text-xs">{product.tags.join(', ')}</p>
              )}
            </div>
          </div>
        </div>
      </article>
    </Layout>
  )
}

export default Product

export const Head = ({
  data: {
    directus: { product },
  },
}: PageProps<DataProps>) => (
  <SEO title={`${product.manufacturer.title} - ${product.title}`} />
)

export const pageQuery = graphql`
  query ProductById($id: ID!) {
    directus {
      product: Products_by_id(id: $id) {
        id
        title
        slug
        href
        description
        designer
        collection
        subtitle
        image_primary {
          id
          imageFile {
            childImageSharp {
              gatsbyImageData(width: 1200)
            }
          }
        }
        image_secondary {
          id
          imageFile {
            childImageSharp {
              gatsbyImageData(width: 1200)
            }
          }
        }
        tags
        manufacturer {
          title
          slug
        }
      }
    }
  }
`
