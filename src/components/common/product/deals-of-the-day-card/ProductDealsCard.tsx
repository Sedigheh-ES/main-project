import { ImageView } from "../../image-view"
import { IconBox } from "../../ui"

interface Props {
  data: {
    title: string,
    image: string,
    category: string,
    rate: number,
    weight: number,
    unit: number,
    price: number,
    sale_price: number,
    label: string,
    dead_line: string
  }
}

export default function ProductDealsCard({ data }: Props) {
  return (
    <div className="relative h-[438px]">

      <ImageView src={'/assets/images/img.png'} width={378} height={335} alt={"Deals image"} classname="w-full" />

      <div className="absolute z-[20] left-[50%] top-[195px] translate-x-[-50%]">
        <div className="flex items-center justify-between gap-3">
          <div className="bg-white rounded-[6px] w-[60px] h-[60px] aspect-square text-center">
            <div className="text-[#3BB77E] font-quickSand text-3xl font-bold">05</div>
            <div className="text-[#7E7E7E] text-sm ">Days</div>
          </div>
          <div className="bg-white rounded-[6px] w-[60px] h-[60px] aspect-square text-center">
            <div className="text-[#3BB77E] font-quickSand text-3xl font-bold">05</div>
            <div className="text-[#7E7E7E] text-sm ">Hours</div>
          </div>
          <div className="bg-white rounded-[6px] w-[60px] h-[60px] aspect-square text-center">
            <div className="text-[#3BB77E] font-quickSand text-3xl font-bold">05</div>
            <div className="text-[#7E7E7E] text-sm ">Min</div>
          </div>
          <div className="bg-white rounded-[6px] w-[60px] h-[60px] aspect-square text-center">
            <div className="text-[#3BB77E] font-quickSand text-3xl font-bold">05</div>
            <div className="text-[#7E7E7E] text-sm ">Sec</div>
          </div>
        </div>

        <div className="bg-white h-[170px] w-[325px] mt-[11px] rounded-[10px] shadow-stone-500 pt-6 px-8 flex flex-col gap-2 ">
          <div className="text-[#253D4E] text-sm font-bold">
            Seeds of Change Organic Quinoa, Brown, & Red Rice
          </div>

          <div className="flex">
            <ul className="flex">
              <li> <IconBox icon={"icon-star-full text-[12px]"} size={24} /> </li>
              <li> <IconBox icon={"icon-star-full text-[12px]"} size={24} /> </li>
              <li> <IconBox icon={"icon-star-full text-[24px]"} size={24} /> </li>
              <li> <IconBox icon={"icon-star-full text-[12px]"} size={24} /> </li>
              <li> <IconBox icon={"icon-star-empty text-[12px]"} size={24} /> </li>
            </ul>
            <div>(4.0)</div>
          </div>

          <div className="flex text-sm text-[#7E7E7E] ">
            <span>500</span><span>gram</span>
          </div>

          <div className="flex justify-between">
            <div><span className="text-[#3BB77E] text-[20px]" >$200 </span> <span className="text-[#7E7E7E] text-xs line-through" >$200</span></div>
            <div className="bg-[#DEF9EC] text-[#3BB77E] text-sm flex items-center justify-center px-3 py-2 gap-0.5">Add  <IconBox icon={"icon-add text-[12px]"} size={16} /> </div>
          </div>

        </div>
      </div>



    </div>
  )
};