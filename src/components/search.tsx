import React, { useState } from 'react'
// @ts-ignore next-line
import { useFlexSearch } from 'react-use-flexsearch'
import useFlexSearchData from '../hooks/use-flexsearch-data'
import { Link } from 'gatsby'

export default function Search() {
  const [query, setQuery] = useState('')
  // const { index, store } = useFlexSearchData()
  // const results = useFlexSearch(query, index, store, {
  //   limit: 50,
  //   suggest: true,
  // })

  return (
    <div>
      <h3>Search {query}</h3>
      <form onSubmit={(e) => e.preventDefault()}>
        <input
          type="text"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value)
          }}
        />
        <button type="submit">Search</button>
      </form>
      <div>
        <p>Results</p>
        <ul>
          {results.map((result: any) => (
            <li key={result.id}>
              <Link to={result.slug}>
                {result.manufacturer_title} - {result.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
