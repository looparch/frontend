import React, { useEffect, useState, useMemo } from 'react'

import {
  instantMeiliSearch,
  InstantMeiliSearchInstance,
} from '@meilisearch/instant-meilisearch'

import {
  InstantSearch,
  SearchBox,
  Hits,
  Configure,
  Pagination,
} from 'react-instantsearch-hooks-web'

import MeiliSearchHit from './meilisearch-hit'

const MeiliSearch = () => {
  const [searchClient, setSearchClient] = useState<InstantMeiliSearchInstance>()
  const [queryValue, setQueryValue] = useState('')

  const client = useMemo(() => {
    return instantMeiliSearch(
      // @ts-ignore next-line
      process.env.MEILISEARCH_HOST,
      process.env.MEILISEARCH_SEARCH_KEY,
      {
        placeholderSearch: true,
        finitePagination: true,
        primaryKey: 'id',
      }
    )
  }, [])

  useEffect(() => {
    setSearchClient(client)
    if (window) {
      const params = new URLSearchParams(location.search)
      const term = params.get('term')
      if (term) {
        setQueryValue(term)
      }
    }
  }, [client])

  return (
    <>
      {searchClient && (
        <InstantSearch indexName="all_products" searchClient={searchClient} routing={true}>
          <Configure analytics={false} hitsPerPage={10} distinct={true} />
          <SearchBox
            placeholder="Search materials..."
            searchAsYouType={false}
            classNames={{
              root: 'w-full',
              form: 'w-full flex mb-6 items-center',
              input:
                'focus:outline-none focus:ring-1 focus:ring-loop-50 focus:border-loop-500 w-full mr-2',
              submit: 'w-6 h-6',
              reset: 'w-6 h-6 hidden',
              loadingIndicator: 'ml-2 w-6 h-6',
              submitIcon: '!w-6 !h-6',
              resetIcon: '!w-6 !h-6',
              loadingIcon: '!w-6 !h-6',
            }}
          />
          <Hits
            hitComponent={MeiliSearchHit}
            classNames={{
              root: 'grid',
              list: 'grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6',
              item: 'flex items-start justify-start p-6 bg-pure-white bg-opacity-50 rounded-lg',
            }}
          />
          <Pagination
            // totalPages={4}
            classNames={{
              root: 'max-w-full w-full sm:w-2/3 mx-auto my-6',
              list: 'flex justify-between',
              item: 'w-12 h-12 flex rounded-full items-center justify-center bg-loop-400 text-white hover:bg-loop-500 font-medium',
              selectedItem: 'bg-loop-500',
              disabledItem: 'opacity-50 cursor-not-allowed',
            }}
          />
        </InstantSearch>
      )}
    </>
  )
}

export default MeiliSearch
