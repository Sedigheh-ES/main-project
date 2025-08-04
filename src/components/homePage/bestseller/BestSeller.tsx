import { IconBox, ImageView } from "@/components/common";
import SimpleProductCard from "@/components/common/product/product-card/SimpleProductCard";
import SimpleProductSlider from "@/components/common/product/simple-product-slider/SimpleProductSlider";
import { popularProducts } from "@/mock/popularProducts";
import { EntityType } from "@/types";
import { ProductType } from "@/types/api/Product";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

interface Props {
    sliderData:Array<EntityType<ProductType>>
}

export default function BestSeller({ sliderData }: Props) {
    
    return (
        <Swiper
            spaceBetween={20}
            slidesPerView={2}
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
            slidesPerView: 5,
            spaceBetween: 24
          }
        }
      }

        >
            {
                sliderData.map((slideData, index) => {
                    return (
            
                        <SwiperSlide key={index}>
                           <SimpleProductCard data={slideData}/>
                        </SwiperSlide>
                    )
                })
            }
        </Swiper>
    );
};