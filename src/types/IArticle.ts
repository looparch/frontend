import { IGatsbyImageData } from 'gatsby-plugin-image'

export interface IArticle {
  id: string;
  title: string;
  slug: string;
  imageHero: {
    gatsbyImageData: IGatsbyImageData;
  }
  description: {
    raw: string;
  }
  body: {
    raw: string;
  }
  tags: Array<string>
}
