import { CategoryType } from "@/types/api/Category";
import apiClient from "./config/ApiClient";
import { ApiResponseType } from "@/types";
import { ProductType } from "@/types/api/Product";

interface Props{
    populate?: Array<"categries" | "thumbnail" | "gallery">,
    filters?: {
        is_popular?:boolean
    }
}

interface Filters{
   is_popular?:{$eq:boolean}
}

export function getAllProductsApiCall({ populate, filters }: Props):Promise<ApiResponseType<ProductType>> {
    const customFilter: Filters = {}
    if (filters ?.is_popular) {
        customFilter.is_popular = {$eq:filters.is_popular}
    }
    return apiClient.get('/products', {
        params: {
            populate: populate?.join(','),
            filters: filters
        }
    })
}