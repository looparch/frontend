import { IDirectusImageData } from "./IDirectusImageData";

export interface IArticle {
  id: string;
  title: string;
  slug: string;
  image_hero: IDirectusImageData
  description: string;
  body: string,
  body_markdown: string,
  tags: Array<string>
}
