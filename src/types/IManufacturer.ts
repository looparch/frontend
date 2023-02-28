import { IDirectusImageData } from "./IDirectusImageData";
import { IProduct } from "./IProduct";

export interface IManufacturer {
  id: string;
  title: string;
  slug: string;
  href: string;
  description: string;
  image_hero: IDirectusImageData;
  image_logo_dark: IDirectusImageData;
  image_logo_light: IDirectusImageData;
  tags: Array<string>;
  products: Array<IProduct>;
}
