import { IconBox, ImageView } from "@/components/common";
import { popularProducts } from "@/mock/popularProducts";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";



interface Props {
    sliderData: Array<any>,
    nextEl?: string,
    prevEl?: string
}

export default function DealsOftheDaySlider({ sliderData, nextEl, prevEl }: Props) {
    return (
        <Swiper
            spaceBetween={20}
            slidesPerView={1}
            autoplay={true}
            modules={[Autoplay, Navigation]}
            navigation={{
                nextEl: nextEl,
                prevEl: prevEl

            }}

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
                        spaceBetween: 22
                    }
                }
            }

        >

            {
                sliderData.map((slideData, index) => {
                    return (
                        <SwiperSlide key={index}>

                          

                        </SwiperSlide>
                    )
                })
            }


        </Swiper>
    );
};