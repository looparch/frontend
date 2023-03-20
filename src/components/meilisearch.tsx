import React from 'react'
import { Link } from 'gatsby'

import {
  InstantSearch,
  SearchBox,
  Hits,
  Highlight,
  RefinementList,
  CurrentRefinements,
  SortBy,
  // Configure,
  // @ts-ignore next-line
} from 'react-instantsearch-hooks-web'
import { instantMeiliSearch } from '@meilisearch/instant-meilisearch'

const searchClient = instantMeiliSearch(
  // @ts-ignore next-line
  process.env.MEILISEARCH_HOST,
  process.env.MEILISEARCH_KEY,
  {
    placeholderSearch: false,
  }
)

const MeiliSearch = () => (
  <InstantSearch indexName="all_products" searchClient={searchClient}>
    <RefinementList attribute="manufacturer" />
    <RefinementList attribute="tags" />
    <CurrentRefinements />

    <SearchBox />
    <Hits hitComponent={Hit} />
  </InstantSearch>
)

const Hit = ({ hit }: any) => {
  hit.objectID = hit.id
  return (
    <div key={hit.id}>
      <Link to={hit.slug}>
        <Highlight attribute="manufacturer" hit={hit} />
        {' – '}
        <Highlight attribute="title" hit={hit} />
      </Link>
      {hit.description && (
        <div>
          <Highlight
            attribute="description"
            hit={hit}
            className="text-xs leading-tight"
          />
        </div>
      )}
      {hit.tags && (
        <div>
          <Highlight attribute="tags" hit={hit} className="text-xs" />
        </div>
      )}
    </div>
  )
}

export default MeiliSearch
