import { graphql, useStaticQuery } from 'gatsby'

const usePublishedArticles = () => {
  const { articles: { nodes } } = useStaticQuery(graphql`
    query PublishedArticlesQuery {
      articles: allContentfulArticle(sort: {publishDate: DESC}, limit: -1) {
        nodes {
          id
          title
          slug
          heroImage {
            gatsbyImageData(width: 1200)
          }
        }
      }
    }
  `)

  return nodes
}

export default usePublishedArticles
