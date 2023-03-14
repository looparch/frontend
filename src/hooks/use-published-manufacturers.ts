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
          image_hero {
            id
            imageFile {
              childImageSharp {
                gatsbyImageData(width: 300, height: 300)
              }
            }
          }
          tags
        }
      }
    }
  `)

  return manufacturers
}

export default usePublishedManufacturers
