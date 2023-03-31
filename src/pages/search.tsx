import * as React from 'react'
import { navigate } from 'gatsby'
import { XMarkIcon } from '@heroicons/react/24/outline'
import LayoutBare from '../components/layout-bare'
import { SEO } from '../components/seo'
import MeiliSearch from '../components/meilisearch'

const SearchPage = () => {
  return (
    <LayoutBare>
      <>
        <div className="grid justify-between max-w-5xl grid-flow-col px-4 mx-auto my-8 text-2xl font-medium text-dark-text md:px-0">
          <h1>Search</h1>
          <button onClick={() => navigate(-1)}>
            <XMarkIcon className="w-12 h-12 mr-4" aria-hidden="true" />
          </button>
        </div>
        <div className="max-w-5xl px-4 mx-auto my-8 text-lg text-dark-text md:px-0 min-h-[80vh]">
          <MeiliSearch />
        </div>
      </>
    </LayoutBare>
  )
}

export default SearchPage

export const Head = () => <SEO title="Search" />
