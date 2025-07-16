import { IconBox } from "@/components/common";
import { miniProductSlider } from "@/mock/miniProductSlider";
import Link from "next/link";


interface Props {}

export default function MiniProductSlider({}: Props) {
  return (
      <div>
          {
              miniProductSlider.map((item, index) => {
                  return (
                      <div className="flex items-center pl-4 xl:pl-12 h-[500px] bg-no-repeat bg-right-bottom aspect-slider" style={{backgroundImage:`url(${item.image})`, backgroundColor:item.color}}>
                          <div className="flex flex-col justify-between basis-1/2">
                              <h3 className="text-[##253D4E] text-2xl font-Quicksand font-bold">{item.title}</h3>
                              <Link href={item.link} className="bg-[#3BB77E] pl-[15px] pr-2.5 py-2 inline-flex justify-center rounded-3xl cursor-pointer">
                                  <div className="text-white text-2xl">Shop Now</div>
                                   <IconBox icon={"icon-arrow-small-right text-[24px] ml-[20px] absolute"} size={24} />      
                              </Link>       

                          </div>
                      </div>


                  )
              })
          }
    </div>
  )
};