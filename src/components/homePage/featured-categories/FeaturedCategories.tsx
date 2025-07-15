import { ImageView } from "@/components/common";
import { featuredCategoriesMock } from "@/mock/featuredCategoriesMock";
import Link from "next/link";


export default function FeaturedCategories() {
  return (
    <div className="flex flex-wrap justify-between gap-[24px] mt-[50px] ">
      {
        featuredCategoriesMock.map((item, index) => {
          return (
            <Link key={index} href={item.link} style={{ backgroundColor: item.color}} className={"flex flex-col items-center justify-center rounded-xl pt-3 px-2"}>
              <ImageView src={item.img} width={93} height={84} alt={"cat"} classname="p-2"/>
              <h3 className="text-[#253D4E] text-[12px] font-bold">{item.title}</h3>
              <span className="text-[#B6B6B6] text-[12px] pb-[18px]">{item.items} items</span>
            </Link>
          )
        })
      }


    </div>
  )
};