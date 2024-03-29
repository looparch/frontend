import React from 'react'
import useSiteMetadata from '../hooks/use-site-metadata'
import voca from 'voca'

interface IListItemElement {
  '@type': string
  position: number
  item: {
    '@id': string
    name: string
  }
}

interface IBreadcrumbObj {
  '@context': string
  '@type': string
  name: string
  itemListElement: Array<IListItemElement>
}

type SEOProps = {
  title?: string
  description?: string
  pathname: string
  children?: React.ReactNode
  siteUrl?: string
  instagramUrl?: string
  linkedInUrl?: string
}

const getBreadcrumbsFromPathname = (pathname: string) => {
  const { siteUrl } = useSiteMetadata()
  const parts = pathname.split('/').filter((part) => part !== '')
  const breadcrumbObj: IBreadcrumbObj = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    'name': 'Breadcrumbs',
    itemListElement: [],
  }
  let pathnameBuild = `${siteUrl}`
  for (let i = 0; i < parts.length; i++) {
    pathnameBuild += `/${parts[i]}`
    const breadcrumb = {
      '@type': 'ListItem',
      position: i + 1,
      item: {
        '@id': pathnameBuild,
        name: voca.titleCase(parts[i].replace(/\-/g, ' ')),
      },
    }
    breadcrumbObj.itemListElement.push(breadcrumb)
  }

  return breadcrumbObj
}

export const SEOBreadcrumbsJsonLd = ({ pathname }: SEOProps) => {
  const schemaOrgJSONLD = getBreadcrumbsFromPathname(pathname)

  return (
    <script type="application/ld+json">
      {JSON.stringify(schemaOrgJSONLD)}
    </script>
  )
}
