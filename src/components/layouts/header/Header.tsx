import { IconBox, ImageView, Logo } from "@/components/common";
import { SearchForm } from "./searchform";
import Link from "next/link";


export  function Header() {
  return (
    <header className="flex items-center justify-center mb-[33px]">
      <div className=" container flex items-center justify-between py-4">
         <Logo/>
        <SearchForm/>

        <ul className="hidden lg:flex gap-5 cursor-pointer">
          <li className="flex gap-2 cursor-pointer ">
                      <IconBox icon={'icon-user'} size={24} title={'Account'} link={'#'} hideTitleOnMobile={true} />
          </li>
         
          <li className="flex gap-2 cursor-pointer ">
          <IconBox icon={'icon-shopping-cart'} size={24} title={'Card'} link={'#'}  hideTitleOnMobile={true} badge={2} />         
          </li>
        </ul>

      </div>

    </header>
  )
}
