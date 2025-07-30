import { getAllProductsApiCall } from "@/api/Product";
import { IconBox, ImageView } from "@/components/common";
import ProductDealsCard from "@/components/common/product/deals-of-the-day-card/ProductDealsCard";
import ProductverticalList from "@/components/common/product/product-vertical-list/ProductverticalList";
import { TopRatedMock } from "@/mock/TopRatedMock";
import { popularProducts } from "@/mock/popularProducts";
import { RecentlyAddedMock } from "@/mock/recentlyAddedMock";
import { TopSellingMock } from "@/mock/topSellerMock";
import { TrendingProductsMock } from "@/mock/trendingProduct";
import { ApiResponseType, EntityType } from "@/types";
import { ProductType } from "@/types/api/Product";
import { useQuery } from "@tanstack/react-query";
import { permission } from "process";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";



interface Props {
    sliderData:Array<EntityType<ProductType>>,
    nextEl?: string,
    prevEl?: string
}

export default function BottomSlider({sliderData}: Props) {
     const { data:topRateData } = useQuery<ApiResponseType<ProductType>>({ 
    queryKey: [getAllProductsApiCall.name,'top_rate'],
         queryFn: () => getAllProductsApiCall(
             {
                 populate: ["thumbnail"],
                 sort: ["rate:desc"],
                 pagination: {
                     page: 1,
                     pageSize:3
                 }
             })
    })
    console.log("top rated",topRateData);
    

   const { data:isTopSellingData } = useQuery<ApiResponseType<ProductType>>({ 
    queryKey: [getAllProductsApiCall.name,'top_sellig'],
  queryFn: () => getAllProductsApiCall({ populate: ["categories", "thumbnail"], filters: { is_top_selling: { $eq: true } } })
  })

    console.log('top Selling', isTopSellingData);
    
    const { data:isTrendingData } = useQuery<ApiResponseType<ProductType>>({ 
    queryKey: [getAllProductsApiCall.name,'trending_data'],
  queryFn: () => getAllProductsApiCall({ populate: ["categories", "thumbnail"], filters: { is_trending: { $eq: true } } })
    })
    
    console.log('Trending', isTrendingData);

     const { data:RecentlyAdded} = useQuery<ApiResponseType<ProductType>>({ 
    queryKey: [getAllProductsApiCall.name,'recent_data'],
         queryFn: () => getAllProductsApiCall(
             {
                populate: ["thumbnail"],
                 sort: ["id:desc"],
                 pagination: {
                     page: 1,
                     pageSize:3
                 },
               
             }
             
         )
     })
    console.log("Recenlty",RecentlyAdded);

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
               { isTopSellingData && <ProductverticalList title={'Top Selling'} data={isTopSellingData?.data} />}
            </SwiperSlide>
            
         <SwiperSlide>
              { isTrendingData && <ProductverticalList title={'Trending Products'} data={isTrendingData?.data} />}
            </SwiperSlide>

            {/* <SwiperSlide>
                <ProductverticalList title={'Recently added'} data={RecentlyAddedMock} />
            </SwiperSlide> */}

            <SwiperSlide> 
               {topRateData && <ProductverticalList title={'Top Rated'} data={topRateData.data} />}
            </SwiperSlide>
        </Swiper>
    );
};