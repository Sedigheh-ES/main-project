import { ApiResponseType, EntityType } from "@/types"
import MiniProductCard from "../product-card/MiniProductCard"
import { ProductType } from "@/types/api/Product"
import { useQuery } from "@tanstack/react-query"
import { getAllProductsApiCall } from "@/api/Product"

interface Props {
  title: string;
  data: Array<EntityType<ProductType>>
}

export default function ProductverticalList({ title, data }: Props) {

 
 
  return (
    <>
      <h3 className="text-[#253D4E] font-quickSand text-2xl font-bold mb-[41px]">{title}</h3>
      <div className="flex flex-col gap-4">
      
        {
          data.map((item, index) => {
            return (<MiniProductCard data={item} key={index} />)
          })
        }
      
      </div>
    </>
  )
};