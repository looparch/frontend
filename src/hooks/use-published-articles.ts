import { graphql, useStaticQuery } from 'gatsby'

const usePublishedArticles = () => {
  const { directus: { articles } } = useStaticQuery(graphql`
    query PublishedArticlesQuery {
      directus {
        articles: Articles(
          filter: {status: {_eq: "published"}}
          sort: "date_updated"
        ) {
          id
          title
          slug
        }
      }
    }
  `)

  return articles
}

export default usePublishedArticles
