import * as React from 'react'
import { graphql } from 'gatsby'
import type { PageProps } from 'gatsby'
import { getImage } from 'gatsby-plugin-image'
import ReactMarkdown from 'react-markdown'
import Layout from '../components/layout'
import { IProduct } from '../types/IProduct'

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
  let secondaryImage = undefined
  if (product.image_secondary) {
    secondaryImage = getImage(product.image_secondary.imageFile.childImageSharp)
  }
  return (
    <Layout>
      <div className="relative max-w-6xl px-2 mx-auto mb-20 md:px-6">
        <div className="flex pt-6 mb-6 leading-snug">
          <div>
            <h1 className="text-xl font-semibold">{product.title}</h1>
            {product.subtitle && (
              <p>{product.subtitle}</p>
            )}
            <p className="">
              {product.collection && (
                <span>
                  From the <strong>{product.collection} Collection</strong>{' '}
                </span>
              )}
              by <strong>{designer}</strong>
            </p>
          </div>
        </div>
        <div
          className={
            secondaryImage
              ? 'grid md:grid-cols-2 md:grid-rows-1 grid-cols-1 grid-rows-2 gap-2 md:gap-6 mb-6'
              : 'flex justify-center place-content-center mb-6'
          }
        >
          {primaryImage && (
            <ZoomedImage
              image={primaryImage}
              alt={`${product.title} Primary`}
              // className={secondaryImage ? 'aspect-square' : 'max-w-3xl'}
              className="object-cover w-full h-full border border-gray-400"
            />
          )}
          {secondaryImage !== undefined && (
            <ZoomedImage
              image={secondaryImage}
              alt={`${product.title} Secondary`}
              className="object-cover w-full h-full border border-gray-400"
            />
          )}
        </div>
        <div className="min-w-full mb-6 font-serif text-lg prose">
          <ReactMarkdown>{product.description}</ReactMarkdown>
        </div>
        <p className="mb-8">
          <a href={product.href} rel="noopener" target="_blank" className="underline underline-offset-8 hover:text-loop-600">
            View @{product.manufacturer.title}
          </a>
        </p>
        <div className="mb-6">
          {product.tags &&
            product.tags.map((tag) => {
              return (
                <div
                  key={tag}
                  className="inline-block p-1 mr-2 text-xs text-gray-500 border border-gray-400 rounded-sm"
                >
                  {tag}
                </div>
              )
            })}
        </div>
      </div>
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
          image_logo_dark {
            id
            imageFile {
              publicURL
            }
          }
        }
      }
    }
  }
`
