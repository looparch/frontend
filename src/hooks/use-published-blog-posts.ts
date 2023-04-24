import { graphql, useStaticQuery } from 'gatsby'

const usePublishedBlogPosts = () => {
  const { blogPosts: { nodes } } = useStaticQuery(graphql`
    query PublishedBlogPostsQuery {
      blogPosts: allContentfulBlogPost(sort: {publishDate: DESC}, limit: 6) {
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
              excerpt
            }
          }
          body {
            childMarkdownRemark {
              html
              excerpt
            }
          }
        }
      }
    }
  `)

  return nodes
}

export default usePublishedBlogPosts
