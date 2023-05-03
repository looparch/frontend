import React from 'react'
import useSiteMetadata from '../hooks/use-site-metadata'

type SEOProps = {
  title?: string
  description?: string
  pathname?: string
  children?: React.ReactNode
  siteUrl?: string
  instagramUrl?: string
  linkedInUrl?: string
}

export const SEOSiteJsonLD = ({ title, description, pathname }: SEOProps) => {
  const {
    title: defaultTitle,
    description: defaultDescription,
    image,
    siteUrl,
    instagramUrl,
    linkedInUrl,
  } = useSiteMetadata()

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    image: `${siteUrl}${image}`,
    url: `${siteUrl}${pathname || ``}`,
  }

  // Default Website Schema
  const schemaOrgJSONLD = [
    {
      '@context': 'http://schema.org',
      '@type': 'WebSite',
      url: seo.url,
      name: seo.title,
      alternateName: seo.title,
      potentialAction: {
        '@type': 'SearchAction',
        target: `${siteUrl}/search/?all_products%5Bquery%5D={search_term_string}`,
        'query-input': 'required name=search_term_string',
      },
    },
    {
      '@context': 'http://schema.org',
      '@type': 'Organization',
      name: seo.title,
      legalName: `${seo.title}, LLC`,
      url: seo.url,
      logo: seo.image,
      foundingDate: '2009',
      address: {
        '@type': 'PostalAddress',
        streetAddress: '3110 N 16th Street',
        addressLocality: 'Phoenix',
        addressRegion: 'AZ',
        postalCode: '85016',
        addressCountry: 'USA',
      },
      contactPoint: {
        '@type': 'ContactPoint',
        contactType: 'sales',
        email: 'info@looparch.com',
        url: `${seo.url}/contact/`,
      },
      sameAs: [
        'https://www.instagram.com/looparch/',
        'https://www.facebook.com/looparch/',
      ],
    },
    {
      '@context': 'http://schema.org',
      '@type': 'LocalBusiness',
      address: {
        '@type': 'PostalAddress',
        streetAddress: '3110 N 16th Street',
        addressLocality: 'Phoenix',
        addressRegion: 'AZ',
        postalCode: '85016',
        addressCountry: 'USA',
      },
      telephone: '602-810-1502',
      image: seo.image,
      priceRange: '$$$',
      description: `${seo.description}`,
      name: seo.title,
      openingHours: 'Mo,Tu,We,Th,Fr 09:00-17:00',
      geo: {
        '@type': 'GeoCoordinates',
        latitude: '33.484319',
        longitude: '-112.047970',
      },
      sameAs: [
        'https://www.instagram.com/looparch/',
        'https://www.facebook.com/looparch/',
        'https://www.pinterest.com/looparchitecturalmaterials',
      ],
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
