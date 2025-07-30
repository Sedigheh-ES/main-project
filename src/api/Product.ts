import { CategoryType } from "@/types/api/Category";
import apiClient from "./config/ApiClient";
import { ApiResponseType } from "@/types";
import { ProductType } from "@/types/api/Product";

interface Props{
  
    populate?: Array<"categories" | "thumbnail" | "gallery" >;
    filters?: {};
    sort?: Array<string>;
    pagination?: {
        withCount?: number;
        page?: number;
        pageSize?: number;
        start?: number;
        limit?: number
    };
    is_top_selling?: boolean;
    is_trending?: boolean;
 
   
}


export function getAllProductsApiCall({ populate, filters = {}, sort = [],pagination={},is_top_selling,is_trending }: Props): Promise<ApiResponseType<ProductType>> {

    return apiClient.get('/products', {
        params: {
           
            populate: populate?.join(','),
            filters: filters,
            sort: sort,
            pagination: pagination,
            is_top_selling: is_top_selling,
            is_trending: is_trending,
          
            
        },
    })
}

// interface Props{
//     populate?: Array<"categories" | "thumbnail" | "gallery">,
//     filters?: {
//         is_popular?: boolean,
//         is_popular_fruit?: boolean,
//         is_best_seller?:boolean
//     }
// }

// interface Filters{
//     is_popular?: { $eq: boolean },
//     is_popular_fruit?: { $eq: boolean },
//     is_best_seller?:{$eq:boolean}
// }

// export function getAllProductsApiCall({ populate, filters={},sort=[] }: Props):Promise<ApiResponseType<ProductType>> {
//     const customFilter: Filters = {}

//     if (filters ?.is_popular) {
//         customFilter.is_popular = {$eq:filters.is_popular}
//     }
//      if (filters ?.is_popular_fruit) {
//         customFilter.is_popular_fruit = {$eq:filters.is_popular_fruit}
//      }
    
//       if (filters ?.is_best_seller) {
//         customFilter.is_best_seller = {$eq:filters.is_best_seller}
//     }

//     return apiClient.get('/products', {
//         params: {
//             populate: populate?.join(','),
//             filters: filters
//         }
//     })
// }