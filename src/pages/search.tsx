import * as React from 'react'
import Layout from '../components/layout'
import { SEO } from '../components/seo'
import MeiliSearch from '../components/meilisearch'

const SearchPage = () => {
  return (
    <Layout>
      <div className="max-w-5xl px-4 mx-auto my-8 text-lg text-dark-text md:px-0 min-h-[80vh]">
        <MeiliSearch />
        {/* <Search /> */}
        {/* <Slice alias="search" /> */}
      </div>
    </Layout>
  )
}

export default SearchPage

export const Head = () => <SEO title="Search" />
