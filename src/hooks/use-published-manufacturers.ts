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
          image_logo_dark {
            id
            imageFile {
              publicURL
            }
          }
          image_hero {
            id
            imageFile {
              childImageSharp {
                gatsbyImageData(width: 100, height: 50)
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
