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
  data: {
    directus: {
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
  }
}

const Manufacturer = ({
  data: {
    directus: { manufacturer },
  },
}: DataProps) => {
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
              gatsbyImageData
            }
          }
        }
        image_logo_dark {
          id
          imageFile {
            publicURL
          }
        }
        tags
        products(limit: 25, sort: "featured") {
          id
          title
          slug
          image_thumbnail {
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
  }
`
