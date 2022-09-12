import * as React from 'react'
import type { HeadFC, PageProps } from 'gatsby'
import { Link } from 'gatsby'
import usePublishedManufacturers from '../hooks/use-published-manufacturers'
import Layout from '../components/layout'

type ManufacturerProps = {
  id: string
  title: string
  slug: string
}

const IndexPage = () => {
  const manufacturers = usePublishedManufacturers()
  return (
    <Layout>
      <div>
        <ul>
          {manufacturers.map((manufacturer: ManufacturerProps) => {
            return (
              <li key={manufacturer.id}>
                <Link to={`/${manufacturer.slug}`}>{manufacturer.title}</Link>
              </li>
            )
          })}
        </ul>
      </div>
    </Layout>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
