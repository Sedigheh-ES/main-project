import { basketApiCall } from "@/api/Basket";
import { useQuery } from "@tanstack/react-query";


export default function useBasket() {
    const { data: basketData } = useQuery({ queryKey: ['get-basket'], queryFn: basketApiCall });
    console.log('basketData',basketData);
}
