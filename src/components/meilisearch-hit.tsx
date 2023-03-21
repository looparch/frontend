import React from "react"
import { Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import { Highlight } from "react-instantsearch-hooks-web"


const MeiliSearchHit = ({ hit }: any) => {
  hit.objectID = hit.id
  return (
    <div key={hit.id} className="flex justify-start">
      <GatsbyImage
        image={hit.image}
        alt={hit.title}
        className="flex-shrink-0 object-cover w-24 h-full mr-4"
      />
      <div>
        <div className="text-lg font-light leading-tight line-clamp-2">
          <Highlight
            attribute="manufacturer"
            hit={hit}
            classNames={{
              root: 'leading-none',
            }}
          />
        </div>
        <Link
          to={hit.slug}
          className="font-semibold leading-none group text-loop-600 hover:text-loop-700 hover:underline underline-offset-4"
        >
          <div className="text-lg leading-tight line-clamp-2">
            <Highlight
              attribute="title"
              hit={hit}
              classNames={{
                root: 'leading-none',
              }}
            />
          </div>
        </Link>
        {hit.description && (
          <div className="text-sm leading-tight line-clamp-2">
            <Highlight attribute="description" hit={hit} />
          </div>
        )}
        {hit.tags && (
          <div>
            <Highlight attribute="tags" hit={hit} className="text-xs" />
          </div>
        )}
      </div>
    </div>
  )
}

export default MeiliSearchHit
