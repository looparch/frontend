import * as React from 'react'
import { graphql } from 'gatsby'
import type { PageProps } from 'gatsby'
import { GatsbyImage, getImage, IGatsbyImageData } from 'gatsby-plugin-image'
import ReactMarkdown from 'react-markdown'

type DirectusImage = {
  imageFile: {
    childImageSharp: {
      gatsbyImageData: IGatsbyImageData
    }
  }
}

type DataProps = {
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

const Product = ({ data: { product } }: PageProps<DataProps>) => {
  const primaryImage = getImage(product.image_primary.imageFile.childImageSharp)
  let secondaryImage = undefined
  if (product.image_secondary) {
    secondaryImage = getImage(product.image_secondary.imageFile.childImageSharp)
  }
  return (
    <div>
      <h1>{product.title}</h1>
      <p>{product.slug}</p>
      {primaryImage && (
        <GatsbyImage image={primaryImage} alt={`${product.title} Primary`} />
      )}
      {secondaryImage !== undefined && (
        <GatsbyImage
          image={secondaryImage}
          alt={`${product.title} Secondary`}
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
  )
}

export default Product

export const pageQuery = graphql`
  query JsonProductById($id: String!) {
    product: productsJson(jsonId: {eq: $id}) {
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
            gatsbyImageData {
              backgroundColor
              height
              images {
                fallback {
                  sizes
                  src
                  srcSet
                }
                sources {
                  sizes
                  srcSet
                  type
                }
              }
              layout
              width
            }
          }
        }
      }
      image_secondary {
        id
        imageFile {
          childImageSharp {
            gatsbyImageData {
              backgroundColor
              height
              images {
                fallback {
                  sizes
                  src
                  srcSet
                }
                sources {
                  sizes
                  srcSet
                  type
                }
              }
              layout
              width
            }
          }
        }
      }
    }
  }
`
