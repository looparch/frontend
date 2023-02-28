import { IDirectusImageData } from './IDirectusImageData'

export interface IProduct {
  id: string;
  title: string;
  slug: string;
  description: string;
  designer: string;
  collection: string;
  tags: Array<string>;
  href: string;
  image_primary: IDirectusImageData;
  image_secondary: IDirectusImageData;
  image_thumbnail: IDirectusImageData;
  manufacturer: {
    id: string;
    title: string;
    slug: string;
  }
}
