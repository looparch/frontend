import { graphql, useStaticQuery } from "gatsby"

const useSiteMetadata = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
          image
          siteUrl
          instagramUrl
          linkedInUrl
        }
      }
    }
  `)

  return data.site.siteMetadata
}

export default useSiteMetadata
