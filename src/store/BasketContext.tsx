import { ReactNode, createContext, useState } from "react";

interface Props{
    children: ReactNode;
}

interface PropductItem{
    productId: number;
    title: string;
    price: number;
    img: string;
    quantity:number
}
export const BasketContext = createContext<{
    basketItems: Array<PropductItem>,
     addItem: (product:PropductItem) => void,
    increaseItem: (productId:number) => void,
    decreaseItem: (productId:number) => void,
    deleteItem:(productId:number)=>void
}>({
    basketItems: [],
    addItem: (product:PropductItem) => { },
    increaseItem: (productId:number) => { },
    decreaseItem: (productId:number) => { },
    deleteItem:(productId:number)=>{}

});

export const BasketContextProvider = (props: Props) => {
    
    const [basketItems, setBasketItems] = useState<Array<PropductItem>>([]);

    const addItemHandler = (product:PropductItem) => {
        
    }
    const increaseItemHadler = (productId:number) => {
        
    }
    const decreaseItemHandler = (productId:number) => {
        
    }
    const deleteItemHandler = (productId:number) => {
        
    }
    
    return (
        <BasketContext.Provider value={{basketItems:basketItems,addItem:addItemHandler,increaseItem:increaseItemHadler,decreaseItem:decreaseItemHandler,deleteItem:deleteItemHandler}}>
            {props.children}
        </BasketContext.Provider>
    )
}