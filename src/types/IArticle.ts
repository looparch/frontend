import { IDirectusImageData } from "./IDirectusImageData";
import { IGatsbyImageData } from 'gatsby-plugin-image'

export interface IArticle {
  id: string;
  title: string;
  slug: string;
  heroImage: {
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
