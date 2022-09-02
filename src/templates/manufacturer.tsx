import * as React from 'react'
import { graphql, Link } from 'gatsby'
import type { PageProps } from 'gatsby'
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image'
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
          image_primary: DirectusImage
        }
      ]
    }
  }
}

const Manufacturer = ({ data: { directus } }: PageProps<DataProps>) => {
  const manufacturer = directus.manufacturer
  return (
    <div>
      <h1>{manufacturer.title}</h1>
      <p>{manufacturer.slug}</p>
      <img
        src={manufacturer.image_logo_dark.imageFile.publicURL}
        alt={`${manufacturer.title} Logo`}
        width="300"
      />
      <GatsbyImage
        image={
          manufacturer.image_hero.imageFile.childImageSharp.gatsbyImageData
        }
        alt={`${manufacturer.title} Banner`}
      />
      <ReactMarkdown>{manufacturer.description}</ReactMarkdown>
      {manufacturer.tags.map((tag) => {
        return <div key={tag}>{tag}</div>
      })}
      <p>
        <a href={manufacturer.href}>Link</a>
      </p>

      {manufacturer.products.map((product) => {
        return (
          <div key={product.id}>
            <GatsbyImage
              image={
                product.image_primary.imageFile.childImageSharp.gatsbyImageData
              }
              alt={`${product.title} Thumbnail`}
            />
            <div>
              <Link to={`/${manufacturer.slug}/${product.slug}`}>
                {product.title}
              </Link>
            </div>
          </div>
        )
      })}
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
        description
        tags
        href
        image_hero {
          id
          imageFile {
            childImageSharp {
              gatsbyImageData(width: 300)
            }
          }
        }
        image_logo_dark {
          id
          imageFile {
            publicURL
          }
        }
        products {
          id
          title
          slug
          image_primary {
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
