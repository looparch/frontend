import * as React from 'react'
import type { HeadFC, PageProps } from 'gatsby'
import { graphql, Link } from 'gatsby'
import usePublishedManufacturers from '../hooks/use-published-manufacturers'

type ManufacturerProps = {
  id: string
  title: string
  slug: string
}

const IndexPage = () => {
  const manufacturers = usePublishedManufacturers()
  return (
    <main>
      <ul>
        {manufacturers.map((manufacturer: ManufacturerProps) => {
          return (
            <li key={manufacturer.id}>
              <Link to={`/${manufacturer.slug}`}>{manufacturer.title}</Link>
            </li>
          )
        })}
      </ul>
    </main>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
