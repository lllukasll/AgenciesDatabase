import { ICategory } from "./category";

export interface IAgency {
    name: string,
    localization: string,
    description: string,
    address: string,
    phone: string,
    email: string,
    websiteAddress: string,
    rating: number,
    reviews: number,
    logoUrl: string,
    categories: ICategory[]
}