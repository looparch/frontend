import * as React from 'react'
import { graphql, Link } from 'gatsby'
import type { PageProps } from 'gatsby'
import { GatsbyImage, getImage, IGatsbyImageData } from 'gatsby-plugin-image'
import ReactMarkdown from 'react-markdown'
import Layout from '../components/layout'

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
            tags: string[]
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
    <Layout>
      <div>
        <h1 className="sr-only">{manufacturer.title}</h1>
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

        <ul
          role="list"
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
        >
          {manufacturer.products.map((product) => {
            const thumbnailImage = getImage(
              product.image_thumbnail.imageFile.childImageSharp
            )
            return (
              <li
                key={product.id}
                className="flex flex-col col-span-1 text-center bg-white divide-y divide-gray-200 rounded-lg shadow"
              >
                <div className="flex flex-col flex-1 p-8">
                  {thumbnailImage && (
                    <GatsbyImage
                      image={thumbnailImage}
                      alt={`${product.title} Thumbnail`}
                    />
                  )}
                  <h3 className="mt-6 text-sm font-medium text-gray-900">
                    <Link to={`/${manufacturer.slug}/${product.slug}`}>
                      {product.title}
                    </Link>
                  </h3>
                  <dl className="flex flex-col justify-between flex-grow mt-1">
                    <dt className="sr-only">Tags</dt>
                    <dd className="mt-3">
                      {product.tags.map((tag) => {
                        return (
                          <span
                            className="px-2 py-1 text-xs font-medium text-green-800 bg-green-100 rounded-full"
                            key={tag}
                          >
                            {tag}
                          </span>
                        )
                      })}
                    </dd>
                  </dl>
                </div>
              </li>
            )
          })}
        </ul>
      </div>
    </Layout>
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
        tags
        products(limit: 25, sort: "featured") {
          id
          title
          slug
          image_thumbnail {
            id
            imageFile {
              childImageSharp {
                gatsbyImageData(width: 500)
              }
            }
          }
          tags
        }
      }
    }
  }
`
