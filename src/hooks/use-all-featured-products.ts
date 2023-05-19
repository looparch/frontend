import { graphql, useStaticQuery } from 'gatsby'

const useAllFeaturedProducts = () => {
  const { directus: { products } } = useStaticQuery(graphql`
    query AllFeaturedProductsQuery {
      directus {
        products: Products(
          filter: {status: {_eq: "published"}, featured: {_eq: true}}
          sort: "date_updated"
        ) {
          id
          title
          slug
          image_thumbnail {
            id
            imageFile {
              childImageSharp {
                gatsbyImageData(width: 300, height: 400)
              }
            }
          }
          tags
          manufacturer {
            id
            title
            slug
          }
          is_new
        }
      }
    }
  `)

  return products
}

export default useAllFeaturedProducts
