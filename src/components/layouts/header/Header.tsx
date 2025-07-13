import { IconBox, ImageView, Logo } from "@/components/common";
import { SearchForm } from "./searchform";
import Link from "next/link";
import { Menu } from "./menu";


export function Header() {
  return (
    <header className="flex flex-col justify-center items-center mb-[33px]">
      <div className=" container flex items-center justify-between py-4 border-b border-b-[#E5E5E5]">
        <Logo />
        <SearchForm />

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
        <Menu />

      </div>
    </header>
  )
}
