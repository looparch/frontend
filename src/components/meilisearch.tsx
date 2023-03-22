import React, { useEffect, useState } from 'react'

import { instantMeiliSearch, InstantMeiliSearchInstance } from '@meilisearch/instant-meilisearch'
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

  const client = instantMeiliSearch(
    // @ts-ignore next-line
    process.env.MEILISEARCH_HOST,
    process.env.MEILISEARCH_KEY,
    {
      placeholderSearch: true,
      finitePagination: true,
    }
  )

  console.log("rendering meilisearch")

  return (
    <InstantSearch indexName="all_products" searchClient={client}>
      <Configure analytics={false} hitsPerPage={20} distinct={true} />
      <SearchBox
        placeholder="Search materials..."
        searchAsYouType={false}
        classNames={{
          root: 'w-full',
          form: 'w-full flex mb-6',
          input:
            'focus:outline-none focus:ring-1 focus:ring-loop-50 focus:border-loop-500 w-full mr-2',
          submit: 'w-12 h-12',
          reset: 'w-12 h-12',
          loadingIndicator: 'ml-2 w-12 h-12',
          submitIcon: '!w-6 !h-6',
          resetIcon: '!w-6 !h-6',
          loadingIcon: '!w-6 !h-6',
        }}
      />
      <Hits
        hitComponent={MeiliSearchHit}
        classNames={{
          root: 'grid',
          list: 'grid grid-cols-2 gap-6',
          item: 'flex items-start justify-start p-6 bg-pure-white bg-opacity-70 rounded-lg',
        }}
      />
      <Pagination
        // totalPages={4}
        classNames={{
          root: 'max-w-1/2 w-1/2 mx-auto mt-6',
          list: 'flex justify-between',
          item: 'w-8 h-8 flex rounded-full items-center justify-center bg-loop-400 text-white rounded-sm hover:bg-loop-500 font-medium',
          selectedItem: 'bg-loop-500',
          disabledItem: 'opacity-50 cursor-not-allowed',
        }}
      />
    </InstantSearch>
  )
}

export default MeiliSearch
