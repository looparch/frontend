import * as React from 'react'
import Layout from '../components/layout'
import { SEO } from '../components/seo'
import Search from '../components/search'
import { Slice } from 'gatsby'
import MeiliSearch from '../components/meilisearch'

const SearchPage = () => {
  return (
    <Layout>
      <>
        <div className="w-full h-24 px-2 mx-auto bg-black md:px-6" />
        <h1>Search Page</h1>
        <MeiliSearch />
        {/* <Search /> */}
        {/* <Slice alias="search" /> */}
      </>
    </Layout>
  )
}

export default SearchPage

export const Head = () => <SEO title="Search" />
