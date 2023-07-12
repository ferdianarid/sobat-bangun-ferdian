import {ReactNode} from "react"

export interface IRoomPreview {
  id?: number
  image: string
  title: string
  dimension: string
  variant?:any
}

export interface IDetailInfo {
  id?:number
  icons: string
  title: string
  children: ReactNode
}

export interface ITestimonial {
  id?: number
  name: string
  rating: number
  description: string
}

export interface IHouse {
  id?:number
  image:string
  title: string
  type: string
  price:number
  startFrom: number
  variant?:any
}

export type IFooterLink ={
  id?:number
  route: string,
  title: string
}

export interface IListPayment {
  images: string
}

export interface IPayment {
  id?:number
  title: string
  prefix: string
  listPayment: IListPayment[] | any
}