import { graphql, useStaticQuery } from 'gatsby'

const useFeaturedProducts = () => {
  const { directus: { products } } = useStaticQuery(graphql`
    query FeaturedProductsQuery {
      directus {
        products: Products(
          filter: {status: {_eq: "published"}, featured: {_eq: true}}
          sort: "title"
          limit: 6
        ) {
          id
          title
          slug
          tags
          image_primary {
            id
            imageFile {
              childImageSharp {
                gatsbyImageData(width: 300, height: 300)
              }
            }
          }
          manufacturer {
            title
            slug
          }
        }
      }
    }
  `)

  return products
}

export default useFeaturedProducts
