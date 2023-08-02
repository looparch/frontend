import * as React from 'react'
import { HeadFC } from 'gatsby'
import Layout from '../components/layout'
import LayoutContent from '../components/layout-content'
import { SEO } from '../components/seo'
import AlgoliaSearch from '../components/algolia-search'

const SearchPage = () => {
  return (
    <Layout>
      <LayoutContent>
        <>
          {/* <div className="max-w-6xl px-4 py-6 mx-auto sm:px-6 lg:py-8 lg:px-8"> */}
          <h1 className="mt-2 mb-6 text-3xl font-bold tracking-tight sm:text-4xl">
            Search
          </h1>
          <AlgoliaSearch />
          {/* </div> */}
        </>
      </LayoutContent>
    </Layout>
  )
}

export default SearchPage

export const Head: HeadFC = ({ location }) => (
  <SEO title="Search" pathname={location.pathname} />
)
