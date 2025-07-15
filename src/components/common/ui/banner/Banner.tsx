import { ImageView } from "../../image-view"
import { IconBox } from "../icon-box"

export default function Banner() {
    return (
        <>
            <div className="rounded-[6px] p-10 md:rounded-[14px] lg:rounded-[30px] bg-hero-pattern bg-[#FDC04033] bg-opacity-20 bg-cover bg-top bg-no-repeat grid grid-cols-2 justify-between items-center my-[38px] lg:h-[538px] h-[50%]  relative">
                <div>
                    <div className="max-w-full font-quickSand text-[20px] sm:text-4xl md:text-3xl lg:text-7xl tracking-[-0.04%] text-[#1C4037]">Don’t miss amazing grocery deals</div>
                    <div className="font-quickSand text-[30px] tracking-[-0.04%] text-[#7E7E7E] mt-8 hidden lg:block leading-6">Sign up for the daily newsletter </div>
                    <div className="hidden lg:flex mt-[68px] relative ">
                        <form action="#" className="flex items-center" >
                             <IconBox icon={"icon-paper-plane text-[24px] ml-[20px] absolute"} size={24} />
                            <input type="email" name="email" placeholder="Your email address"
                              className="text-sm text-gray-400 py-[15px] focus:outline-none bg-white rounded-full w-[342px] pt-[15px] pb-[17px] pl-[57px] border border-[#F5F5F5] grow"/>
                            <button type="submit"
                                className="bg-[#3BB77E] text-white px-[37px] py-[15px] rounded-full ml-[-40px] cursor-pointer">
                                Subscribe
                            </button>
                        </form>
                    </div>
                </div>
                <div>
                    <ImageView src={"/assets/images/fresh-apples.png"} width={717} height={538} classname={"absolute bottom-0 right-0  w-[50%] h-full flex "} alt={"hero Banner"} />
                </div>

            </div>
             <div className="lg:hidden md:hidden sm:hidden flex mt-[16px] relative items-center justify-center pl-1.5 pr-1.5 ">
                        <form action="#" className="flex items-center" >
                             <IconBox icon={"icon-paper-plane text-[24px] ml-[20px] absolute"} size={24} />
                            <input type="email" name="email" placeholder="Your email address"
                              className="text-sm text-gray-400 py-[15px] focus:outline-none bg-[#F5F5F5] rounded-full w-[240] pt-[9px] pb-[9px] pl-[57px] border border-[#F5F5F5] grow"/>
                            <button type="submit"
                                className="bg-[#3BB77E] text-white px-[18px] py-[9px] rounded-full ml-[-30px] cursor-pointer">
                                Subscribe
                            </button>
                        </form>
                    </div>
        </>
    )
};