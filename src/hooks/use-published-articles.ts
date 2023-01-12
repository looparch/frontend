import { graphql, useStaticQuery } from 'gatsby'

const usePublishedArticles = () => {
  const { articles: { nodes } } = useStaticQuery(graphql`
    query PublishedArticlesQuery {
      articles: allContentfulBlogPost(sort: {updatedAt: ASC}) {
        nodes {
          id
          title
          slug
        }
      }
    }
  `)

  return nodes
}

export default usePublishedArticles
