import * as React from 'react'
import { graphql } from 'gatsby'
import type { PageProps } from 'gatsby'
import { getImage, IGatsbyImageData } from 'gatsby-plugin-image'
import ReactMarkdown from 'react-markdown'
import Layout from '../components/layout'

import ZoomedImage from '../components/zoomed-image'

type DirectusImage = {
  imageFile: {
    childImageSharp: {
      gatsbyImageData: IGatsbyImageData
    }
  }
}

type DataProps = {
  directus: {
    product: {
      title: string
      slug: string
      description: string
      tags: Array<string>
      href: string
      image_primary: DirectusImage
      image_secondary: DirectusImage
    }
  }
}

const Product = ({
  data: {
    directus: { product },
  },
}: PageProps<DataProps>) => {
  const primaryImage = getImage(product.image_primary.imageFile.childImageSharp)
  let secondaryImage = undefined
  if (product.image_secondary) {
    secondaryImage = getImage(product.image_secondary.imageFile.childImageSharp)
  }
  return (
    <Layout>
      <div>
        <h1>{product.title}</h1>
        <p>{product.slug}</p>
        {primaryImage && (
          <ZoomedImage
            image={primaryImage}
            alt={`${product.title} Primary`}
            style={{ width: '50%' }}
          />
        )}
        {secondaryImage !== undefined && (
          <ZoomedImage
            image={secondaryImage}
            alt={`${product.title} Secondary`}
            style={{ width: '50%' }}
          />
        )}
        <ReactMarkdown>{product.description}</ReactMarkdown>
        {product.tags &&
          product.tags.length > 0 &&
          product.tags.map((tag) => {
            return <div key={tag}>{tag}</div>
          })}
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
      }
    }
  }
`
