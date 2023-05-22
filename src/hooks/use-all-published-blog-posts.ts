import { graphql, useStaticQuery } from 'gatsby'

const useAllPublishedBlogPosts = () => {
  const { blogPosts: { nodes } } = useStaticQuery(graphql`
    query AllPublishedBlogPostsQuery {
      blogPosts: allContentfulBlogPost(sort: {publishDate: DESC}) {
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

export default useAllPublishedBlogPosts
