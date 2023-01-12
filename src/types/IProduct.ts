import { IDirectusImageData } from './IDirectusImageData'

export interface IProduct {
  title: string;
  slug: string;
  description: string;
  tags: Array<string>;
  href: string;
  image_primary: IDirectusImageData;
  image_secondary: IDirectusImageData;
  manufacturer: {
    id: string;
    title: string;
    slug: string;
  }
}
