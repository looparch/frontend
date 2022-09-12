import type { IGatsbyImageData } from 'gatsby-plugin-image'

export interface IDirectusImageData {
  id: string;
  imageFile: {
    id: string;
    publicURL: string;
    childImageSharp: {
      layout: string;
      gatsbyImageData: IGatsbyImageData
    }
  }
}
