import { EntityType } from "@/types";
import { ImageView } from "../../image-view"
import { IconBox } from "../../ui";
import { ProductType } from "@/types/api/Product";
import { ImageType } from "@/types/api/Image";

interface Props {
    data: EntityType<ProductType>
}

export default function MiniProductCard({data}: Props) {
    return (
      <>
      <div className="flex gap-5">
         
            <ImageView src={data.attributes.thumbnail?.data?.attributes.url} width={120} height={120} alt={'Top Sellig image'} />
      
          <div className="flex flex-col gap-2">
              <div className="font-quickSand text-base font-bold text-[#253D4E]">{data.attributes.title}</div>
              <div className="flex">
            <ul className="flex">
              <li> <IconBox icon={"icon-star-full text-[12px]"} size={24} /> </li>
              <li> <IconBox icon={"icon-star-full text-[12px]"} size={24} /> </li>
              <li> <IconBox icon={"icon-star-full text-[24px]"} size={24} /> </li>
              <li> <IconBox icon={"icon-star-full text-[12px]"} size={24} /> </li>
              <li> <IconBox icon={"icon-star-empty text-[12px]"} size={24} /> </li>
            </ul>
            <div>({data.attributes.rate})</div>
              </div>
             
                  
                  {
                      data.attributes.sell_price ?
                           <div className="flex gap-1 items-center">
                            <span className="text-[#3BB77E] text-[20px] font-quickSand font-bold">${data.attributes.price}</span>
                             <span className="text-[#7E7E7E] line-through font-bold">${data.attributes.sell_price}</span>
                        </div>
                          :
                           <span className="text-[#3BB77E] text-[20px] font-quickSand">${data.attributes.price}</span> 
                  }
              
</div>
            
          </div>
          
          
     
        </>
  )
    
};