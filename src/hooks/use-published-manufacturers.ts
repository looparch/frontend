import { graphql, useStaticQuery } from 'gatsby'

const usePublishedManufacturers = () => {
  const { directus: { manufacturers } } = useStaticQuery(graphql`
    query PublishedManufacturersQuery {
      directus {
        manufacturers: Manufacturers(
          filter: {status: {_eq: "published"}}
          sort: "title"
        ) {
          id
          title
          slug
        }
      }
    }
  `)

  return manufacturers
}

export default usePublishedManufacturers
