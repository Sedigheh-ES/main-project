import { ImageView, Logo } from "@/components/common";
import { SearchForm } from "./searchform";
import Link from "next/link";


export  function Header() {
  return (
    <header className="mb-[33px]">
      <div className=" container flex items-center justify-between py-4">
         <Logo/>
        <SearchForm/>

        <ul className="flex gap-2 cursor-pointer">
          <Link href="#"><li className={"icon-user text-[24px]"}> </li></Link>
          <div className="text-medium text-gray-500" >Account</div>
          <Link href="#"><li className={"icon-shopping-cart text-[24px]"} ></li> </Link>
           <div className="text-medium text-gray-500" >Card</div>
        </ul>

      </div>

    </header>
  )
}
