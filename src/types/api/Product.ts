import { CategoryType } from "./Category"
import { ImageType } from "./Image"
import { EntityType, PopulateType } from "./Response"

export interface ProductType {
  title: string
  description: any
  quantity: number
  price: number
  sell_price?: number
  discount_expire_date?: string
  rate: number
  weight?: number
  is_popular: boolean
  is_top_selling: boolean
  is_trending: boolean
  SKU: string | null
  label: string | null
  unit: string
  total: number | null
  sold: number | null
  is_popular_fruit?: boolean
  is_best_seller?: boolean
    thumbnail?: {
      data?:EntityType<ImageType>
  }
  gallery?: PopulateType<ImageType>
  categories?: PopulateType<CategoryType>
}

export interface Thumbnail {
  data: Data
}

export interface Data {
  id: number
  attributes: Attributes2
}

export interface Attributes2 {
  name: string
  alternativeText: any
  caption: any
  width: number
  height: number
  formats?: Formats
  hash: string
  ext: string
  mime: string
  size: number
  url: string
  previewUrl: any
  provider: string
  provider_metadata: any
}

export interface Formats {
  thumbnail: Thumbnail2
}

export interface Thumbnail2 {
  name: string
  hash: string
  ext: string
  mime: string
  path: any
  width: number
  height: number
  size: number
  url: string
}

export interface Gallery {
  data: any
}

export interface Categories {
  data: Daum2[]
}

export interface Daum2 {
  id: number
  attributes: Attributes3
}

export interface Attributes3 {
  title: string
  description: any
  slug: string
  is_featured: boolean
  icon_name: any
  color?: string
  product_count?: number
  link?: string
}


