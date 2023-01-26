import { graphql, useStaticQuery } from 'gatsby'

const usePublishedArticles = () => {
  const { articles: { nodes } } = useStaticQuery(graphql`
    query PublishedArticlesQuery {
      articles: allContentfulArticle(sort: {updatedAt: ASC}) {
        nodes {
          id
          title
          slug
          imageHero {
            gatsbyImageData
          }
        }
      }
    }
  `)

  return nodes
}

export default usePublishedArticles
