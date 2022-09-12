import { IDirectusImageData } from './IDirectusImageData'

export interface IProductCardProduct {
  id: string
  title: string
  slug: string
  image_thumbnail: IDirectusImageData
  tags: string[]
  manufacturer: {
    id: string
    title: string
    slug: string
  }
}
