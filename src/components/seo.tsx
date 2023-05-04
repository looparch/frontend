import React from 'react'
import useSiteMetadata from '../hooks/use-site-metadata'
import { SEOSiteJsonLD } from './seo-site-json-ld'
import { SEOBreadcrumbsJsonLd } from './seo-breadcrumbs-json-ld'

type SEOProps = {
  title?: string
  description?: string
  pathname?: string
  children?: React.ReactNode
  siteUrl?: string
  instagramUrl?: string
  linkedInUrl?: string
}

export const SEO = ({ title, description, pathname, children }: SEOProps) => {
  const {
    title: defaultTitle,
    description: defaultDescription,
    image,
    siteUrl,
    instagramUrl,
    linkedInUrl,
  } = useSiteMetadata()
  const siteTitle = defaultTitle

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    image: `${siteUrl}${image}`,
    url: `${siteUrl}` || ``,
    pathname: `${siteUrl}${pathname}` || ``,
  }

  return (
    <>
      {seo.title === siteTitle && <title key="title">{seo.title}</title>}
      {seo.title !== siteTitle && <title key="title">{`${seo.title} - ${siteTitle}`}</title>}
      <meta name="description" key="description" content={seo.description} />
      <meta name="image" key="image" content={seo.image} />
      <meta name="twitter:card" key="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" key="twitter:title" content={seo.title} />
      <meta name="twitter:url" key="twitter:url" content={seo.pathname} />
      <meta name="twitter:description" key="twitter:description" content={seo.description} />
      <meta name="twitter:image" key="twitter:image" content={seo.image} />
      <SEOSiteJsonLD key="site-seo"/>
      {pathname && <SEOBreadcrumbsJsonLd key="seo-breadcrumbs" pathname={pathname} />}
      {children}
    </>
  )
}
