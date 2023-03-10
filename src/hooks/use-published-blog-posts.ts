import { graphql, useStaticQuery } from 'gatsby'

const usePublishedBlogPosts = () => {
  const { blogPosts: { nodes } } = useStaticQuery(graphql`
    query PublishedBlogPostsQuery {
      blogPosts: allContentfulBlogPost(sort: {updatedAt: ASC}, limit: 3) {
        nodes {
          id
          title
          slug
          heroImage {
            gatsbyImageData
          }
          description {
            childMarkdownRemark {
              html
            }
          }
        }
      }
    }
  `)

  return nodes
}

export default usePublishedBlogPosts
