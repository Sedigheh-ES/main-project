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

export async function basketApiCall(): Promise<ApiResponseSingleType<BasketType>> {
    const token = window.localStorage.getItem('token');
    const uuid = window.localStorage.getItem('uuid');
    if (!token && !uuid) {
        const response:ApiResponseSingleType<BasketType>= await apiClient.post('/my-basket');
        
        window.localStorage.setItem('uuid', response.data.attributes.uuid);
        return response;

    }
    if (uuid) {
        return await apiClient.get('/my-basket', {
            params: {
                 uuid:uuid
             }
         });
    }
    return await apiClient.get('/my-basket');
   
}

export async function UpdateBasketApiCall(data: UpdatebasketData) {
    const uuid = window.localStorage.getItem('uuid');
    if (uuid) {
        return await apiClient.put('/my-basket', {
            data: data
        },
            {
                params: {
                    uuid: uuid
                }
            });
    }
    return await apiClient.put('/my-basket', {
        data:data
    });
}

