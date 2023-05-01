import React from 'react'
import useSiteMetadata from '../hooks/use-site-metadata'
import { IGatsbyImageData } from 'gatsby-plugin-image'
import { getSrc } from 'gatsby-plugin-image'

type SEOProps = {
  product: {
    id: string
    manufacturer: {
      title: string
      image_logo_dark: {
        id: string
        imageFile: {
          publicURL: string
        }
      }
    }
    title: string
    description: string
    image_primary: {
      imageFile: {
        childImageSharp: {
          gatsbyImageData: IGatsbyImageData
        }
      }
    }
  }
  pathname?: string
  children?: React.ReactNode
  siteUrl?: string
  instagramUrl?: string
  linkedInUrl?: string
}

export const SEOProductJsonLd = ({ product, pathname, children }: SEOProps) => {
  const { siteTitle, siteUrl, publisher } = useSiteMetadata()
  const product_id = product.id
  const manufacturer = product.manufacturer.title
  const title = product.title
  const description = product.description || `${manufacturer} ${title}`
  const image_primary =
    product.image_primary.imageFile.childImageSharp.gatsbyImageData

  const seo = {
    title,
    description,
    image_primary,
    manufacturer,
  }

  console.log('pathname', pathname)
  console.log('publisher', publisher)

  const schemaOrgJSONLD = [
    {
      '@context': 'http://schema.org',
      '@type': 'Product',
      name: seo.title,
      image: [
        `${siteUrl}${getSrc(
          product.image_primary.imageFile.childImageSharp.gatsbyImageData
        )}`,
      ],
      description: `${
        product.description ||
        `${product.manufacturer.title} - ${product.title}` ||
        ''
      }`,
      sku: `${product.id}`,
      mpn: `${product.id}`,
      review: {
        '@type': 'Review',
        reviewRating: {
          '@type': 'Rating',
          ratingValue: '5',
          bestRating: '5',
        },
        author: {
          '@type': 'Person',
          name: publisher,
          url: siteUrl,
        },
      },
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '5',
        reviewCount: '1',
      },
      brand: {
        '@type': 'Brand',
        name: product.manufacturer.title,
        logo: `${siteUrl}${product.manufacturer.image_logo_dark.imageFile.publicURL}`,
      },
      offers: {
        '@type': 'Offer',
        price: '1.00',
        priceCurrency: 'USD',
        priceValidUntil: '2020-01-01',
        availability: 'InStock',
        url: `${siteUrl}${pathname}`,
      },
    },
  ]

  return (
    <>
      <script type="application/ld+json">
        {JSON.stringify(schemaOrgJSONLD)}
      </script>
    </>
  )
}
