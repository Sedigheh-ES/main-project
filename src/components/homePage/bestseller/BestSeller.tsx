import { IconBox, ImageView } from "@/components/common";
import { popularProducts } from "@/mock/popularProducts";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

interface Props { }

export default function BestSeller({ }: Props) {
    return (
        <Swiper
            spaceBetween={20}
            slidesPerView={4}
            autoplay={true}
            modules={[Autoplay]}

            breakpoints={
                {
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 18
                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 22
                    },
                    1280: {
                        slidesPerView: 4,
                        spaceBetween: 24
                    }
                }
            }

        >
            {
                popularProducts.map((item, index) => {
                    return (
            
                        <SwiperSlide key={index}>
                            <div className=" group border-[1px] border-gray-200 hover:border-green-150 rounded-[10px] hover:shadow-[20px_20px_40px_0_rgba(24,24,24,0.07)] relative p-3 md:p-4 xl:px-5 xl:pb-5 lg:pt-[65px] h-full mt-[50px] ml-[24px]">
                                <div className="flex items-center justify-center" >
                                    <ImageView src={item.image} width={210} height={168} alt={"product image"} classname="m-auto w-full aspect-[3/2] mb-[28px]" />
                                </div>

                                <div className="flex flex-col gap-2">
                                    <div className="text-[#7E7E7E] text-xs">{item.categorty}</div>
                                    <h3 className=" max-h-[50px] text-[#253D4E] text-sm font-bold overflow-hidden">{item.title}</h3>
                                    <div className="flex">
                                        <ul className="flex">
                                            <li> <IconBox icon={"icon-star-full text-[12px]"} size={24} /> </li>
                                            <li> <IconBox icon={"icon-star-full text-[12px]"} size={24} /> </li>
                                            <li> <IconBox icon={"icon-star-full text-[24px]"} size={24} /> </li>
                                            <li> <IconBox icon={"icon-star-full text-[12px]"} size={24} /> </li>
                                            <li> <IconBox icon={"icon-star-empty text-[12px]"} size={24} /> </li>
                                        </ul>
                                        <div>{item.rate}</div>
                                    </div>
                                    <div className="text-[#7E7E7E] text-xs">{item.weight} gram</div>
                                </div>
                                <div className="flex justify-between">
                                    <div><span className="text-[#3BB77E] text-[20px]" >${item.price} </span> <span className="text-[#7E7E7E] text-xs line-through" >${item.sale_price}</span></div>
                                    <div className="bg-[#DEF9EC] text-[#3BB77E] text-sm flex items-center justify-center px-3 py-2 gap-0.5">Add  <IconBox icon={"icon-add text-[12px]"} size={16} /> </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    )
                })
            }
        </Swiper>
    );
};