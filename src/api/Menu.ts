import { ApiResponseType, MenuType } from "@/types";
import apiClient from "./config/ApiClient"

export async function getMenuAPiCall():Promise<ApiResponseType<MenuType>> {
    const response = await apiClient.get('/menus?populate=*');
    return response.data;
}