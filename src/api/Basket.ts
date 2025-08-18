import { ApiResponseSingleType} from "@/types";
import apiClient from "./config/ApiClient";
import { BasketType } from "@/types/api/Basket";

export interface UpdatebasketData{
    basket_items: Array<{
        product: {
            connect:Array<{id:number}>
        },
        quantity:number
        
    }>
}

export async function basketApiCall():Promise<ApiResponseSingleType<BasketType>> {
    return  await apiClient.get('/my-basket');
}

export async function UpdateBasketApiCall(data:UpdatebasketData) {
    return await apiClient.put('/my-basket', {
        data:data
    });
}

