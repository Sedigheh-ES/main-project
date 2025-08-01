import { getAllProductsApiCall } from "@/api/Product";
import ProductverticalList from "@/components/common/product/product-vertical-list/ProductverticalList";
import { ApiResponseType, EntityType } from "@/types";
import { ProductType } from "@/types/api/Product";
import { useQuery } from "@tanstack/react-query";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { InView } from "react-intersection-observer";

interface Props {
    sliderData:Array<EntityType<ProductType>>,
    nextEl?: string,
    prevEl?: string
}

export default function BottomSlider() {
     const { data:topRateData,refetch } = useQuery<ApiResponseType<ProductType>>({ 
    queryKey: [getAllProductsApiCall.name,'top_rate'],
         queryFn: () => getAllProductsApiCall(
             {
                 populate: ["thumbnail"],
                 sort: ["rate:desc"],
                 pagination: {
                     start: 0,
                     limit: 3               
                 },
             }),
         enabled:false
    })
  
    

   const { data:isTopSellingData } = useQuery<ApiResponseType<ProductType>>({ 
    queryKey: [getAllProductsApiCall.name,'top_sellig'],
  queryFn: () => getAllProductsApiCall({ populate: ["categories", "thumbnail"], filters: { is_top_selling: { $eq: true } } })
  })

   
    
    const { data:isTrendingData } = useQuery<ApiResponseType<ProductType>>({ 
    queryKey: [getAllProductsApiCall.name,'trending_data'],
  queryFn: () => getAllProductsApiCall({ populate: ["categories", "thumbnail"], filters: { is_trending: { $eq: true } } })
    })
    
   

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

            <SwiperSlide>
              { RecentlyAdded && <ProductverticalList title={'Recently added'} data={RecentlyAdded.data} />}
            </SwiperSlide>

            
            <SwiperSlide> 
                <InView as="div" onChange={(inView, entry) => inView && refetch()}>
                    {topRateData && <ProductverticalList title={'Top Rated'} data={topRateData.data} />}
                    </InView>
            </SwiperSlide>
        </Swiper>
    );
};