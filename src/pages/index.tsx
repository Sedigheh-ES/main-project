import Section from "@/components/section/Section";
import Banner from "@/components/common/ui/banner/Banner";
import FeaturedCategories from "@/components/homePage/featured-categories/FeaturedCategories";
import MiniProductSlider from "@/components/homePage/mini-product-slider/MiniProductSlider";
import BestSeller from "@/components/homePage/bestseller/BestSeller";
import Link from "next/link";
import { IconBox } from "@/components";
import SimpleProductSlider from "@/components/common/product/simple-product-slider/SimpleProductSlider";
import { DealsOfTheDaysMock } from "@/mock/dealsOftheDayMock";
import DealsOftheDaySlider from "@/components/homePage/deals-of-the-day/DealsOfTheDaySlider";
import BottomSlider from "@/components/homePage/bottom-slider/BottomSlider";
import { getAllProductsApiCall } from "@/api/Product";
import { QueryClient, dehydrate, useQuery } from "@tanstack/react-query";
import { ApiResponseType, EntityType } from "@/types";
import { ProductType } from "@/types/api/Product";
import { getMenuAPiCall } from "@/api/Menu";


export default function Home() {

  const { data: popularProductsData } = useQuery<ApiResponseType<ProductType>>({
    queryKey: [getAllProductsApiCall.name, 'popular_product'],
    queryFn: () => getAllProductsApiCall({ populate: ["categories", "thumbnail"], filters: { is_popular: true } }),
  });


  const { data: popularFruitProductsData } = useQuery<ApiResponseType<ProductType>>({
    queryKey: [getAllProductsApiCall.name, 'popular_fruit'],
    queryFn: () => getAllProductsApiCall({ populate: ["categories", "thumbnail"], filters: { is_popular_fruit: { $eq: true } } })
  })

  const { data: bestSellerProductsData } = useQuery<ApiResponseType<ProductType>>({
    queryKey: [getAllProductsApiCall.name, 'best_seller'],
    queryFn: () => getAllProductsApiCall({ populate: ["categories", "thumbnail"], filters: { is_best_seller: { $eq: true } } })
  })

  return (
    <>
      <Section>
        <Banner />
      </Section>

      <Section>
        <div>
          <h2 className="text-4xl text-[#253D4E] font-quickSand "> Featured Categories</h2>
        </div>
        <FeaturedCategories />
      </Section>

      <Section>
        <MiniProductSlider />
      </Section>

      <Section>
        <div className="flex justify-between mb-[50px]">
          <h2 className="text-5xl text-[#253D4E]">Popular Products</h2>
          <div className="flex items-center gap-3">
            <i className="swiper-nav-left icon-angle-small-left cursor-pointer bg-gray-100 p-2 rounded-full text-gray-500 hover:bg-[#3BB77E] hover:text-white text-[24px]"></i>
            <i className="swiper-nav-right icon-angle-small-right cursor-pointer bg-gray-100 p-2 rounded-full text-gray-500 hover:bg-[#3BB77E] hover:text-white text-[24px]"></i>
          </div>
        </div>
        {popularProductsData && <SimpleProductSlider nextEl={".swiper-nav-right"} prevEl={".swiper-nav-left"} sliderData={popularProductsData.data} />}
      </Section>

      <Section>
        <div className="flex justify-between mb-[50px]">
          <h2 className="text-5xl text-[#253D4E]">Popular Fruits</h2>
          <div className="flex items-center gap-3">
            <i className="swiper-nav-left2 icon-angle-small-left cursor-pointer bg-gray-100 p-2 rounded-full text-gray-500 hover:bg-[#3BB77E] hover:text-white text-[24px]"></i>
            <i className="swiper-nav-right2 icon-angle-small-right cursor-pointer bg-gray-100 p-2 rounded-full text-gray-500 hover:bg-[#3BB77E] hover:text-white text-[24px]"></i>
          </div>
        </div>
        {popularFruitProductsData && <SimpleProductSlider sliderData={popularFruitProductsData?.data} nextEl={".swiper-nav-right2"} prevEl={".swiper-nav-left2"} />
        }      </Section>



       <Section>
          <div className="flex justify-between mb-[50px]">
          <h2 className="text-[32px] md:text-heading5 lg:text-heading4 xl:text-heading3 text-[#253D4E]">Best Sellers</h2>
            </div>
            <div className="flex gap-[24px]">
                <div className="bg-[url('/assets/images/bg-leaf.png')] bg-no-repeat bg-bottom bg-[#3BB77E] rounded-[10px] shadow-[20px_20px_40px_0_rgba(24,24,24,0.07)] p-12 pt-[38px] self-stretch flex-col justify-between max-w-[370px] hidden xl:flex">
                <h3 className="text-5xl text-[#253D4E]">Bring nature into your home</h3>
            <Link href="#" className="mt-6 pl-[15px] pr-2.5 py-2 bg-[#FDC040] hover:bg-[#3BB77E] rounded-[3px] cursor-pointer inline-flex max-w-max items-center gap-2.5">
              <div className="text-xsmall text-white">Shop now</div>
              <IconBox icon={"icon-arrow-small-right "} size={24} />
            </Link>
          </div>
          {bestSellerProductsData &&
            <div  className=" flex-grow">
              <BestSeller sliderData={bestSellerProductsData.data} />
            </div>
          
            }
          </div>    

      </Section>
      
      
      <Section>
        <div className="flex justify-between items-center mb-[50px]">
          <h2 className="text-5xl text-[#253D4E]">Deals Of The Days</h2>
          <Link className="flex items-center" href="#">
            All Deals <IconBox icon={"icon-angle-small-right"} size={24}/>
          </Link>
        </div>
        <DealsOftheDaySlider sliderData={DealsOfTheDaysMock} />
      </Section>

      <Section>
        <BottomSlider />
      </Section> 

    </>
  );
}


export async function getServerSideProps() {
  const queryClient = new QueryClient()
  await queryClient.prefetchQuery({
    queryKey: [getMenuAPiCall.name],
    queryFn: getMenuAPiCall
  })

  await queryClient.prefetchQuery({
    queryKey: [getAllProductsApiCall.name, 'popular_product'],
    queryFn: () => getAllProductsApiCall({ populate: ["categories", "thumbnail"], filters: { is_popular: true } })

  })

  return { props: { dehydratedState: dehydrate(queryClient), } }
}