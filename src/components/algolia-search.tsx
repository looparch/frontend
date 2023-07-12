import React from 'react'
import algoliasearch from 'algoliasearch/lite'
import {
  Highlight,
  Hits,
  InstantSearch,
  SearchBox,
  PoweredBy,
} from 'react-instantsearch-hooks-web'
import { Link } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import ProductCard from './product-card-search'

const searchClient = algoliasearch(
  process.env.GATSBY_ALGOLIA_APPID || '',
  process.env.GATSBY_ALGOLIA_APIKEY || ''
)

const SearchPage = () => (
  <>
    <InstantSearch
      searchClient={searchClient}
      indexName={process.env.GATSBY_ALGOLIA_INDEXNAME}
    >
      <SearchBox />
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
  </>
)

const DefaultHitComponent = ({ hit }: any) => (
  // <div className="">
  //   <Link to={`/${hit.manufacturer.slug}/${hit.slug}`}>
  //     <div>
  //       title: <Highlight attribute="title" hit={hit} />,
  //     </div>
  //     <div>
  //       <GatsbyImage
  //         image={hit.image_thumbnail.imageFile.childImageSharp.gatsbyImageData}
  //         alt={`${hit.title} Thumbnail`}
  //         className='object-cover object-center w-full h-full'
  //       />
  //     </div>
  //   </Link>
  // </div>
  <>
    {/* <pre>{JSON.stringify(hit, null, 2)}</pre> */}
    <ProductCard product={hit} />
  </>
)

export default SearchPage
