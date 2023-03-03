import { IGatsbyImageData } from 'gatsby-plugin-image'

interface ReferenceProps {
  contentful_id: string;
  title: string;
  description: string;
  gatsbyImageData: IGatsbyImageData;
  __typename: string;
}

export interface IArticle {
  id: string;
  title: string;
  slug: string;
  heroImage: {
    url: string;
    gatsbyImageData: IGatsbyImageData;
  }
  description: {
    raw: string;
    references: Array<ReferenceProps>;
  }
  body: {
    raw: string;
    references: Array<ReferenceProps>;
  }
  tags: Array<string>
}
