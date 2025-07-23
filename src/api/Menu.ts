import apiClient from "./config/ApiClient"

export async function getMenuAPiCall() {
    const response = await apiClient.get('/menus?populate=*');
    return response.data;
}