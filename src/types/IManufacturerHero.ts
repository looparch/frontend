import { IDirectusImageData } from "./IDirectusImageData";
import { IProductCardProduct } from "./IProductCardProduct";
import type { IGatsbyImageData } from 'gatsby-plugin-image'

export interface IManufacturerHero {
  id: string;
  title: string;
  slug: string;
  href: string;
  description: string;
  image_hero: IDirectusImageData
  image_logo_dark: IDirectusImageData
  tags: Array<string>
  products: Array<IProductCardProduct>
}
