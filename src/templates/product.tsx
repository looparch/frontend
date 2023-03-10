import * as React from 'react'
import { graphql } from 'gatsby'
import type { PageProps } from 'gatsby'
import { getImage } from 'gatsby-plugin-image'
import ReactMarkdown from 'react-markdown'
import Layout from '../components/layout'
import { IProduct } from '../types/IProduct'
import Logos from '../components/logos'

import ZoomedImage from '../components/zoomed-image'

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
      <>
        <div className="max-w-2xl px-2 pt-6 mx-auto mb-6 leading-snug md:px-6">
          <h1 className="text-xl font-semibold">{product.title}</h1>
          {product.subtitle && <p>{product.subtitle}</p>}
          <p className="">
            {product.collection && (
              <span>
                From the <strong>{product.collection} Collection</strong>{' '}
              </span>
            )}
            by <strong>{designer}</strong>
          </p>
        </div>
        <div className="px-2 md:px-6" id="wrap">
          <div className="mx-auto mb-20 min-h-full md:min-h-[75vh] prose max-w-2xl">
            {/* <ManufacturerLogo className="w-64 max-w-xs" /> */}

            {/* <div
          className={
            secondaryImage
              ? 'grid md:grid-cols-2 md:grid-rows-1 grid-cols-1 grid-rows-2 gap-2 md:gap-6 mb-6 print:grid-cols-1'
              : 'flex justify-center place-content-center mb-6 max-w-[50vw] mx-auto'
          }
        > */}
            {primaryImage && (
              <ZoomedImage
                image={primaryImage}
                alt={`${product.title} Primary`}
                // className={secondaryImage ? 'aspect-square' : 'max-w-3xl'}
                className="object-cover w-full h-full border border-gray-400 max-w-2xl print:h-[30vh] mb-6"
              />
            )}
            {secondaryImage !== undefined && (
              <ZoomedImage
                image={secondaryImage}
                alt={`${product.title} Secondary`}
                className="object-cover w-full h-full border border-gray-400 max-w-2xl print:h-[30vh] mb-6"
              />
            )}
            {/* </div> */}
            <div className="print:max-h-[40vh]">
              <div className="mx-auto mb-6 font-serif text-lg prose">
                <ReactMarkdown>{product.description}</ReactMarkdown>
              </div>
              <p className="mb-8 prose">
                <a
                  href={product.href}
                  rel="noopener"
                  target="_blank"
                  className="underline underline-offset-8 hover:text-loop-600"
                >
                  View @{product.manufacturer.title}
                </a>
              </p>
              {product.tags && (
                <p className="text-xs">{product.tags.join(', ')}</p>
              )}
            </div>
          </div>
        </div>
      </>
    </Layout>
  )
}

export default Product

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
