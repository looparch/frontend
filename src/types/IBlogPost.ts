import { IGatsbyImageData } from 'gatsby-plugin-image'

export interface IBlogPost {
  id: string;
  title: string;
  slug: string;
  heroImage: {
    url: string;
    gatsbyImageData: IGatsbyImageData;
  }
  description: {
    childMarkdownRemark: {
      html: string
    }
  }
  body: {
    childMarkdownRemark: {
      html: string
    }
  }
  body_markdown: string,
  tags: Array<string>
}
