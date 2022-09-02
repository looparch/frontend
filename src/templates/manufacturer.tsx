import * as React from 'react'
import { graphql, Link } from 'gatsby'
import type { PageProps } from 'gatsby'
import { GatsbyImage, getImage, IGatsbyImageData } from 'gatsby-plugin-image'
import ReactMarkdown from 'react-markdown'

type DirectusImage = {
  imageFile: {
    id: string
    childImageSharp: {
      gatsbyImageData: IGatsbyImageData
    }
  }
}

type DirectusLocalImage = {
  id: string
  imageFile: {
    publicURL: string
  }
}

type DataProps = {
  manufacturer: {
    title: string
    slug: string
    description: string
    tags: Array<string>
    href: string
    image_hero: DirectusImage
    image_logo_dark: DirectusLocalImage
    products: [
      {
        id: string
        title: string
        slug: string
        image_thumbnail: DirectusImage
      }
    ]
  }
}

const Manufacturer = ({ data: { manufacturer }, pageContext }: PageProps<DataProps>) => {
  console.log(pageContext)
  const heroImage = getImage(manufacturer.image_hero.imageFile.childImageSharp)
  return (
    <div>
      <h1>{manufacturer.title}</h1>
      <p>{manufacturer.slug}</p>
      <img
        src={manufacturer.image_logo_dark.imageFile.publicURL}
        alt={`${manufacturer.title} Logo`}
        width="300"
      />
      {heroImage && (
        <GatsbyImage image={heroImage} alt={`${manufacturer.title} Banner`} />
      )}
      <ReactMarkdown>{manufacturer.description}</ReactMarkdown>
      {manufacturer.tags.map((tag) => {
        return <div key={tag}>{tag}</div>
      })}
      <p>
        <a href={manufacturer.href}>Link</a>
      </p>

      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {manufacturer.products.map((product) => {
          const thumbnailImage = getImage(
            product.image_thumbnail.imageFile.childImageSharp
          )
          return (
            <div key={product.id}>
              {thumbnailImage && (
                <GatsbyImage
                  image={thumbnailImage}
                  alt={`${product.title} Thumbnail`}
                />
              )}
              <div>
                <Link to={`/${manufacturer.slug}/${product.slug}`}>
                  {product.title}
                </Link>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Manufacturer

export const pageQuery = graphql`
  query JsonManufacturerById($id: String) {
    manufacturer: manufacturersJson(id: { eq: $id }) {
      id
      jsonId
      title
      slug
      href
      description
      image_hero {
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
      image_logo_dark {
        imageFile {
          publicURL
        }
      }
      tags
      products {
        id
        slug
        title
        image_thumbnail {
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
  }
`
