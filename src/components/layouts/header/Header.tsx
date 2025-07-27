import { IconBox, ImageView, Logo } from "@/components/common";
import { SearchForm } from "./searchform";
import Link from "next/link";
import { Menu } from "./menu";
import { useState } from "react";


export function Header() {
  const [showMobileMenu, setShowMobileMenu] = useState<boolean>(false);
  return (
    <header className="flex flex-col justify-center items-center mb-[33px]">
      <div className=" container flex items-center justify-between py-4 border-b border-b-[#E5E5E5]">
        <Logo />

        <SearchForm />

        
        <ul className="lg:hidden flex gap-5 cursor-pointer">
          <li className="flex gap-2 cursor-pointer">
            <IconBox linkClassName={"flex items-center"} icon={'icon-menu'} size={24} title={''} link={'#'} hideTitleOnMobile={true} titleClassName={"text-gray-500"} />
          </li>
        </ul>

        <ul className="hidden lg:flex gap-5 cursor-pointer">         
          <li className="flex gap-2 cursor-pointer ">

            <IconBox linkClassName={"flex items-center"} icon={'icon-user'} size={24} title={'Account'} link={'#'} hideTitleOnMobile={true} titleClassName={"text-gray-500"} />
          </li>

          <li className="flex gap-2 cursor-pointer">
            <IconBox linkClassName={"flex items-center"} icon={'icon-shopping-cart'} size={24} title={'Card'} link={'#'} hideTitleOnMobile={true} badge={2} titleClassName={"text-gray-500"} />
          </li>
        </ul>

      </div>

      
      {/* Menu  */}
      <div className="container flex items-center justify-between py-4 border-b border-b-[#E5E5E5]">

        {/* search moile */}    
        <div className="border-2  border-[#3BB77E] w-full rounded-lg max-w-[300px] mx-[15px] px-[15px] lg:hidden inline-block">
            <form name="search-form" action="#" className="flex items-center">
                <input type="text" name="search-text" placeholder="search for items"
                    className="text-sm text-gray-400 w-full py-[15px] focus:outline-none"/>
                <button type="submit"><IconBox icon={'icon-search'} /></button>
            </form>
        </div>

       
         <ul className="lg:hidden flex gap-5 cursor-pointer w-full justify-end">         
          <li className="flex gap-2 cursor-pointer">
            <IconBox  icon={'icon-user'} size={36} title={'Account'} link={'#'} hideTitleOnMobile={true} titleClassName={"text-gray-500"} />
          </li>

          <li className="flex gap-2 cursor-pointer">
            <IconBox icon={'icon-shopping-cart'} size={36} title={'Card'} link={'#'} hideTitleOnMobile={true} badge={2} titleClassName={"text-gray-500"} />
          </li>
        </ul>

        <Menu />

        <div className="hidden lg:flex items-center shrink-0 gap-3">
          <IconBox icon={"icon-headset xl:text-[30px] aspect-square"} size={24} link={'#'} />

          <div>
            <Link href="#" className="text-[#3BB77E] lg:text-2xl ">
              1900-8888
            </Link>

            <div className="font-medium text-xs text-[#7E7E7E] flex items-center justify-center">
              <span className="hidden xl:inline-block">24/7</span>Support Center
            </div>

          </div>
        </div>
      </div>
    </header>
  )
}
