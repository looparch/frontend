import * as React from 'react'
import { graphql } from 'gatsby'
import type { PageProps } from 'gatsby'
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image'
import ReactMarkdown from 'react-markdown'

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

const Product = ({ data: { directus } }: PageProps<DataProps>) => {
  const product = directus.product
  return (
    <div>
      <h1>{product.title}</h1>
      <p>{product.slug}</p>
      <GatsbyImage
        image={product.image_primary.imageFile.childImageSharp.gatsbyImageData}
        alt={`${product.title} Primary`}
      />
      {product.image_secondary && (
        <GatsbyImage
          image={
            product.image_secondary.imageFile.childImageSharp.gatsbyImageData
          }
          alt={`${product.title} Secondary`}
        />
      )}
      <ReactMarkdown>{product.description}</ReactMarkdown>
      {product.tags && product.tags.length > 0 && product.tags.map((tag) => {
        return <div>{tag}</div>
      })}
      <p>
        <a href={product.href}>Link</a>
      </p>
    </div>
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
        description
        tags
        href
        image_primary {
          id
          imageFile {
            childImageSharp {
              gatsbyImageData(width: 300)
            }
          }
        }
        image_secondary {
          id
          imageFile {
            childImageSharp {
              gatsbyImageData(width: 300)
            }
          }
        }
      }
    }
  }
`
