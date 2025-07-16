import { IconBox } from "@/components/common";
import { miniProductSlider } from "@/mock/miniProductSlider";
import Link from "next/link";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";




interface Props {}

export default function MiniProductSlider({ }: Props) {



  return (
    <Swiper
           spaceBetween={20}
            slidesPerView={1}
            autoplay={true}
            modules={[Autoplay]}

            breakpoints={
                                {
                    640: {
                      slidesPerView: 2,
                      spaceBetween: 20
                    },
                    1024: {
                      slidesPerView: 3,
                      spaceBetween: 24
                    }
                  }
                            }
      
        >
         
               {
              miniProductSlider.map((item, index) => {
                  return (
                      <SwiperSlide key={index}> 
                      <div className="flex items-center pl-4 xl:pl-12 bg-right-bottom bg-no-repeat h-[250px] bg-[length:50%] rounded-xl gap-[14px]" style={{backgroundImage:`url(${item.image})`, backgroundColor:item.color}}>
                          <div className="flex flex-col items-center basis-1/2 gap-2.5">
                              <h3 className="text-[##253D4E] text-2xl font-Quicksand font-bold">{item.title}</h3>
                              <Link href={item.link} className="bg-[#3BB77E] pl-[15px] pr-2.5 py-2 inline-flex justify-center rounded-sm cursor-pointer">
                                  <div className="text-white text-base">Shop Now</div>
                                   <IconBox icon={"icon-arrow-small-right text-[24px] ml-[20px]"} size={24} />      
                              </Link>       

                          </div>
                      </div>

   </SwiperSlide>
                  )
              })
          }
   
      
    </Swiper>
  );

    
};