import { ICategory } from "./category";

export interface IAgency {
    name: string,
    localization: string,
    description: string,
    rating: number,
    reviews: number,
    logoUrl: string,
    categories: ICategory[]
}