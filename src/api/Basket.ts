import apiClient from "./config/ApiClient";


export async function basketApiCall() {
    return  await apiClient.get('/my-basket');
}
