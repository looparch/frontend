import React from 'react'
import algoliasearch from 'algoliasearch/lite'
import {
  Hits,
  InstantSearch,
  SearchBox,
  PoweredBy,
} from 'react-instantsearch-hooks-web'
import ProductCard from './product-card-search'

const searchClient = algoliasearch(
  process.env.GATSBY_ALGOLIA_APPID || '',
  process.env.GATSBY_ALGOLIA_APIKEY || ''
)

const AlgoliaSearch = () => {
  return (
    <InstantSearch
      searchClient={searchClient}
      indexName={process.env.GATSBY_ALGOLIA_INDEXNAME}
      routing={true}
    >
      <SearchBox
        autoFocus={true}
        placeholder="Search products by title, manufacturer or description..."
        classNames={{
          root: 'w-full',
          form: 'mb-8 flex w-full justify-between',
          input:
            'focus:ring-1 focus:border-loop-500 focus:ring-loop-500 w-full',
          loadingIndicator: 'm-5',
          submit: 'm-5',
          resetIcon: 'hidden',
          loadingIcon: 'm-5',
        }}
      />
      <Hits
        hitComponent={DefaultHitComponent}
        classNames={{
          root: 'MyCustomHits',
          emptyRoot: 'bg-gray-100',
          list: 'grid grid-cols-3 gap-4',
          item: 'w-full bg-pure-white',
        }}
      />
      <PoweredBy
        classNames={{
          root: 'w-40 mt-8',
          link: 'text-black',
        }}
      />
    </InstantSearch>
  )
}

const DefaultHitComponent = ({ hit }: any) => <ProductCard product={hit} />

export default AlgoliaSearch
