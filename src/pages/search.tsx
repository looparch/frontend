import * as React from 'react'
import { HeadFC } from 'gatsby'
import Layout from '../components/layout'
import { SEO } from '../components/seo'
import MeiliSearch from '../components/meilisearch'

const SearchPage = () => {
  return (
    <Layout>
      <>
        <div className="max-w-5xl px-4 mx-auto my-6 text-lg text-dark-text md:px-6 min-h-[80vh]">
          <MeiliSearch />
        </div>
      </>
    </Layout>
  )
}

export default SearchPage

export const Head : HeadFC= () => <SEO title="Search" pathname={location.pathname}/>
