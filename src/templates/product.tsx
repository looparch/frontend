import * as React from 'react'
import { graphql } from 'gatsby'
import type { PageProps } from 'gatsby'
import { getImage } from 'gatsby-plugin-image'
import ReactMarkdown from 'react-markdown'
import Layout from '../components/layout'
import { IProduct } from '../types/IProduct'
import { SEO } from '../components/seo'
import { SEOProductJsonLd } from '../components/seo-product-json-ld'
import { SEOBreadcrumbsJsonLd } from '../components/seo-breadcrumbs-json-ld'
import LayoutContent from '../components/layout-content'
import MediumZoom from '../components/medium-zoom'

type DataProps = {
  directus: {
    product: IProduct
  }
}

const Product = ({
  data: {
    directus: { product },
  },
  location,
}: PageProps<DataProps>) => {
  const primaryImage = getImage(product.image_primary.imageFile.childImageSharp)
  const designer = product.designer || product.manufacturer.title
  console.log(location)

  let secondaryImage = undefined
  if (product.image_secondary) {
    secondaryImage = getImage(product.image_secondary.imageFile.childImageSharp)
  }
  return (
    <Layout>
      <LayoutContent>
        <article
          className="grid grid-cols-1 gap-6 py-6 mx-auto md:grid-cols-5"
          id="wrap"
        >
          <div className="order-last col-span-3 md:order-first">
            <div className="min-h-full mx-auto mb-20 print:max-width-none print:break-after-avoid print:break-inside-avoid">
              {primaryImage && (
                <>
                  <MediumZoom
                    image={product.image_primary.imageFile.childImageSharp}
                    title={`${product.title} Primary`}
                  />
                </>
              )}
              {secondaryImage !== undefined && (
                <>
                  <MediumZoom
                    image={product.image_secondary.imageFile.childImageSharp}
                    title={`${product.title} Secondary`}
                  />
                </>
              )}
            </div>
          </div>
          <div className="col-span-2">
            <div className="mb-6 leading-none">
              <h1 className="text-2xl font-semibold">{product.title}</h1>
              {product.subtitle && (
                <h2 className="text-lg">{product.subtitle}</h2>
              )}
              <p className="mt-6 text-lg font-light">
                {product.collection && (
                  <span>
                    From the <strong>{product.collection} Collection</strong>{' '}
                  </span>
                )}
                by <strong>{designer}</strong>
              </p>
              <p className="hidden text-sm print:block print:mt-4">
                <a href={product.href}>{product.href}</a>
              </p>
            </div>
            <div className="">
              <ReactMarkdown className="mb-6 prose text-black text-md print:text-sm max-w-none prose-h2:font-normal prose-h2:text-base prose-h2:text-black">
                {product.description}
              </ReactMarkdown>
              <p className="mb-6 print:hidden">
                <a
                  href={product.href}
                  rel="noopener"
                  target="_blank"
                  className="button"
                >
                  {`View at ${product.manufacturer.title}`}
                </a>
              </p>
              {product.tags && (
                <p className="text-xs">{product.tags.join(', ')}</p>
              )}
            </div>
          </div>
        </article>
      </LayoutContent>
    </Layout>
  )
}

export default Product

export const Head = ({
  data: {
    directus: { product },
  },
  location,
}: PageProps<DataProps>) => {
  const titleString = `${product.manufacturer.title} - ${product.title}`
  return (
    <>
      <SEO title={titleString} pathname={location.pathname} />
      <SEOProductJsonLd product={product} pathname={location.pathname} />
      <SEOBreadcrumbsJsonLd pathname={location.pathname} />
    </>
  )
}

export const pageQuery = graphql`
  query ProductById($id: ID!) {
    directus {
      product: Products_by_id(id: $id) {
        id
        title
        slug
        href
        description
        designer
        collection
        subtitle
        image_primary {
          id
          imageFile {
            childImageSharp {
              gatsbyImageData(width: 1200)
            }
          }
        }
        image_secondary {
          id
          imageFile {
            childImageSharp {
              gatsbyImageData(width: 1200)
            }
          }
        }
        tags
        manufacturer {
          title
          slug
          image_logo_dark {
            id
            imageFile {
              publicURL
            }
          }
        }
      }
    }
  }
`
