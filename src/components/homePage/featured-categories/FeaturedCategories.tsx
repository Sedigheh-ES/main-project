import { getFeaturedCategory } from "@/api/Category";
import { ImageView } from "@/components/common";
import { ApiResponseType } from "@/types";
import { CategoryType } from "@/types/api/Category";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";


export default function FeaturedCategories() {

  const { data } = useQuery<ApiResponseType<CategoryType>>({ queryKey: [getFeaturedCategory.name], queryFn: () => getFeaturedCategory() });
  console.log(data);
  return (
    <div className="flex flex-wrap justify-between gap-[24px] mt-[50px] ">
      {
        data &&
        data?.data.map((item, index) => {
          return (
            <Link key={index} href={item.attributes.link ?? '#'} style={{ backgroundColor: item.attributes.color}} className={"flex flex-col items-center justify-center rounded-xl pt-3 px-2"}>
              <ImageView src={item.attributes.thumbnail.data?.attributes.url ?? ''} width={93} height={84} alt={"cat"} classname="p-2"/>
              <h3 className="text-[#253D4E] text-[12px] font-bold">{item.attributes.title}</h3>
              <span className="text-[#B6B6B6] text-[12px] pb-[18px]">{item.attributes.product_count} items</span>
            </Link>
          )
        })
      }

    </div>
  )
};