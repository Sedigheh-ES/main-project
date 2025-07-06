import { ImageView, Logo } from "@/components/common";
import { SearchForm } from "./searchform";

export  function Header() {
  return (
    <header className="mb-[33px]">
      <div className=" container flex items-center justify-between py-4">
         <Logo/>
        <SearchForm/>

        <ul className="flex gap-2">
          <li>account</li>
          <li>login</li>
        </ul>

      </div>

    </header>
  )
}
