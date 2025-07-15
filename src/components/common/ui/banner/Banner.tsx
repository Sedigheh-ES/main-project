import { ImageView } from "../../image-view"

export default function Banner() {
    return (
        <>
            <div className="rounded-[6px] p-10 md:rounded-[14px] lg:rounded-[30px] bg-hero-pattern bg-[rgba(227,237,189,0.2)] bg-opacity-20 bg-cover bg-top bg-no-repeat grid grid-cols-2 justify-between items-center my-[38px] h-[538px] relative">
                <div>
                    <div className="max-w-full font-quickSand text-2xl sm:text-3xl md:text-2xl lg:text-7xl tracking-[-0.04%] text-[#1C4037]">Don’t miss amazing grocery deals</div>
             <div className="font-lato text-[30px] tracking-[-0.04%] text-[#7E7E7E] mt-8 hidden lg:block leading-6">Sign up for the daily newsletter </div>                  
                </div>
                <div>
                    <ImageView src={"/assets/images/fresh-apples.png"} width={717} height={538} classname={"absolute bottom-0 right-0 sm:h-full w-[50%] hidden lg:flex "} alt={"Footer Banner"} />

                </div>

            </div>
        </>
    )
};