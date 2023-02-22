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
      <div className="max-w-6xl px-8 mx-auto">
        <h1 className="text-xl">
          {product.title} {product.id}
        </h1>
        <p>by {designer}</p>
        <div
          className={
            secondaryImage
              ? 'grid grid-cols-2 gap-6'
              : 'grid grid-cols-1 align-content-center'
          }
        >
          {primaryImage && (
            <ZoomedImage
              image={primaryImage}
              alt={`${product.title} Primary`}
              className={secondaryImage ? 'aspect-square' : 'max-w-3xl'}
              imgClassName="flex"
            />
          )}
          {secondaryImage !== undefined && (
            <ZoomedImage
              image={secondaryImage}
              alt={`${product.title} Secondary`}
              className="aspect-square"
            />
          )}
        </div>
        <div className="min-w-full prose">
          <ReactMarkdown>{product.description}</ReactMarkdown>
        </div>
        <div className="my-2">
          {product.tags &&
            product.tags.map((tag) => {
              return (
                <div
                  key={tag}
                  className="inline-block p-1 mr-2 text-xs bg-slate-100"
                >
                  {tag}
                </div>
              )
            })}
        </div>
        <p>
          <a href={product.href}>Link</a>
        </p>
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
        image_primary {
          id
          imageFile {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
        image_secondary {
          id
          imageFile {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
        tags
        manufacturer {
          title
        }
      }
    }
  }
`
