import { IconBox, ImageView } from "@/components/common";
import { popularProducts } from "@/mock/popularProducts";
import { EntityType } from "@/types";
import { ProductType } from "@/types/api/Product";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import ProductCardButton from "./ProductCardButton";

interface Props {
  data: EntityType<ProductType>;
}

export default function SimpleProductCard({ data }: Props) {
  return (
    <div className="group border-[1px] border-gray-200 hover:border-green-150 rounded-[10px] hover:shadow-[20px_20px_40px_0_rgba(24,24,24,0.07)] relative p-3 md:p-4 xl:px-5 xl:pb-5 lg:pt-[65px] h-full mt-[50px]">
      <div className="flex items-center justify-center">
        <ImageView
          src={data.attributes.thumbnail?.data?.attributes.url}
          width={210}
          height={168}
          alt={"product image"}
          classname="m-auto w-full aspect-[3/2] mb-[28px]"
        />
      </div>

      <div className="flex flex-col gap-2">
        {data.attributes.categories?.data[0] && (
          <div className="text-[#7E7E7E] text-xs">
            {data.attributes.categories?.data[0].attributes.title}
          </div>
        )}
        <h3 className=" max-h-[50px] text-[#253D4E] text-sm font-bold overflow-hidden">
          {data.attributes.title}
        </h3>
        <div className="flex">
          <ul className="flex">
            <li>
              {" "}
              <IconBox icon={"icon-star-full text-[12px]"} size={24} />{" "}
            </li>
            <li>
              {" "}
              <IconBox icon={"icon-star-full text-[12px]"} size={24} />{" "}
            </li>
            <li>
              {" "}
              <IconBox icon={"icon-star-full text-[24px]"} size={24} />{" "}
            </li>
            <li>
              {" "}
              <IconBox icon={"icon-star-full text-[12px]"} size={24} />{" "}
            </li>
            <li>
              {" "}
              <IconBox icon={"icon-star-empty text-[12px]"} size={24} />{" "}
            </li>
          </ul>
          <div>({data.attributes.rate})</div>
        </div>
        <div className="text-[#7E7E7E] text-xs">
          {data.attributes.weight} gram
        </div>
      </div>
      <div className="flex justify-between">
        <div>
          <span className="text-[#3BB77E] text-[20px]">
            ${data.attributes.price}{" "}
          </span>{" "}
          <span className="text-[#7E7E7E] text-xs line-through">
            ${data.attributes.sell_price}
          </span>
        </div>

        <ProductCardButton productData={data}/>
      </div>
    </div>
  );
}
