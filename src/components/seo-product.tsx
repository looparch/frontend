import React from 'react'
import useSiteMetadata from '../hooks/use-site-metadata'
import { IGatsbyImageData } from 'gatsby-plugin-image'

type SEOProps = {
  product: {
    manufacturer: {
      title: string
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

export const SEOProduct = ({ product, pathname, children }: SEOProps) => {
  const { siteTitle } = useSiteMetadata()
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

  console.log("pathname", pathname)

  return (
    <>
      <meta name="description" content={seo.description} />
      <meta name="image" content={seo.image_primary.images.fallback?.src} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seo.title} />
      {/* <meta name="twitter:url" content={seo.url} /> */}
      <meta name="twitter:description" content={seo.description} />
      <meta
        name="twitter:image"
        content={seo.image_primary.images.fallback?.src}
      />
      {children}
    </>
  )
}
