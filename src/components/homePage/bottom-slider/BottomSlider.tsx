import { IconBox, ImageView } from "@/components/common";
import ProductDealsCard from "@/components/common/product/deals-of-the-day-card/ProductDealsCard";
import ProductverticalList from "@/components/common/product/product-vertical-list/ProductverticalList";
import { TopRatedMock } from "@/mock/TopRatedMock";
import { popularProducts } from "@/mock/popularProducts";
import { RecentlyAddedMock } from "@/mock/recentlyAddedMock";
import { TopSellingMock } from "@/mock/topSellerMock";
import { TrendingProductsMock } from "@/mock/trendingProduct";
import { title } from "process";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";



interface Props {
    sliderData: Array<any>,
    nextEl?: string,
    prevEl?: string
}

export default function BottomSlider({}: Props) {
    return (
        <Swiper
            spaceBetween={16}
            slidesPerView={1}
            autoplay={true}
            modules={[Autoplay, Navigation]}
           

            breakpoints={
                {
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 18
                    },
                    1024: {
                        slidesPerView: 4,
                        spaceBetween: 22
                    },
                    1280: {
                        slidesPerView: 4,
                        spaceBetween: 22
                    }
                }
            }

        >


            <SwiperSlide>
                <ProductverticalList title={'Top Selling'} data={TopSellingMock} />
            </SwiperSlide>
            <SwiperSlide>
                <ProductverticalList title={'Trending Products'} data={TrendingProductsMock} />
            </SwiperSlide>
            <SwiperSlide>
                <ProductverticalList title={'Recently added'} data={RecentlyAddedMock} />
            </SwiperSlide>
            <SwiperSlide>
                <ProductverticalList title={'Top Rated'} data={TopRatedMock} />
            </SwiperSlide>
        </Swiper>
    );
};