import * as React from 'react'
import { HeadFC } from 'gatsby'
import Layout from '../components/layout'
import { SEO } from '../components/seo'
import MeiliSearch from '../components/meilisearch'

const SearchPage = () => {
  return (
    <Layout>
      <div className="max-w-6xl px-4 py-6 mx-auto sm:px-6 lg:py-8 lg:px-8">
        <h1 className="mt-2 mb-6 text-3xl font-bold tracking-tight sm:text-4xl">
          Search
        </h1>
        <MeiliSearch />
      </div>
    </Layout>
  )
}

export default SearchPage

export const Head: HeadFC = ({ location }) => (
  <SEO title="Search" pathname={location.pathname} />
)
