import { UpdateBasketApiCall, UpdatebasketData, basketApiCall } from "@/api/Basket";
import { BasketItemType } from "@/types/api/Basket";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";


export default function useBasket() {
    const queryClient = useQueryClient();

    const { data: basketData } = useQuery({ queryKey: ['get-basket'], queryFn: basketApiCall });
   const mutate = useMutation({mutationFn:UpdateBasketApiCall})

    // console.log('basketData', basketData);

    const basketItems = basketData?.data.attributes.basket_items ?? [];



    const addItemHandler = (productId: number) => {
        const prepareUpdateData = basketItems.map((item) => {
            return {
                product: {
                    connect:[{id:item.product.data.id}]
                },
                quantity:item.quantity
            }
             
        }) 
        prepareUpdateData.push(
            {
                    product: {
                        connect:[{id:productId}]
                    },
                    quantity:1
                }
        )
        
        const updateData: UpdatebasketData = {
            basket_items: prepareUpdateData
            
        }
        mutate.mutate(updateData, {
            onSuccess: (response) => {
            queryClient.invalidateQueries({queryKey:['get-basket']})
        }})
    
    }
    
    const UpdateItemHandler = (productId: number,type:"increase" | "decrease") => {
        const prepareUpdateData = basketItems.map((item) => {
            return {
                product: {
                    connect:[{id:item.product.data.id}]
                },
                quantity:item.quantity
            }
             
        }) 
        prepareUpdateData.map((item) => {
            if (item.product.connect[0].id === productId) {
                if (type === 'increase') {
                    item.quantity = item.quantity + 1;

                } else {
                     item.quantity = item.quantity - 1;
                }
            }
            return item;
        })
        
        const updateData: UpdatebasketData = {
            basket_items: prepareUpdateData
            
        }
        mutate.mutate(updateData, {
            onSuccess: (response) => {
            queryClient.invalidateQueries({queryKey:['get-basket']})
        }})
    
}

    const getItemHandler = (productId: number):BasketItemType | undefined => {
        return basketItems.find((item) => item.product.data.id === productId);
    }

    return { basketItems: basketItems,addItem:addItemHandler,updateItem:UpdateItemHandler , getItem:getItemHandler};

}
