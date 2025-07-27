import { IconBox, ImageView, Logo } from "@/components/common";
import { SearchForm } from "./searchform";
import Link from "next/link";
import { Menu } from "./menu";
import { useEffect, useState } from "react";
import { useMenu } from "@/hooks/use-menu";
import { EntityType, MenuItemType } from "@/types";

export function Header() {
  const [showMobileMenu, setShowMobileMenu] = useState<boolean>(false);
  const [showCategoryMenu, setShowCategoryMenu] = useState<boolean>(false);

  const { data: mainMenuItems } = useMenu({ position: "main_menu" });
  const { data: categoryMenuItems } = useMenu({ position: "brows-category" });

  const menuBodyClickHandler = (e) => {
     e.stopPropagation();
  }
  const categoryMenuClickHandler = (e) => {
    e.stopPropagation();
    setShowCategoryMenu((prevState) => !prevState);
  };

  const categoryBodyClickHandler = () => {
    e.stopPropagation();
    setShowCategoryMenu((prevState) => !prevState);
  };

  useEffect(() => {
    const clickHandler = () => {
      setShowCategoryMenu(false);
    };
    document.addEventListener("click", (clickHandler) => {
      setShowCategoryMenu(false);
    });
    return () => {
      document.removeEventListener("click", clickHandler);
    };
  }, []);

  const menuBtnClickHandler = (e) => {
    e.stopPropagation();
    setShowMobileMenu((prevState) => !prevState);
  };

  return (

    
    <header className="flex flex-col justify-center items-center mb-[33px]">
      <div className=" container flex items-center justify-between py-4 border-b border-b-[#E5E5E5]">
        <Logo />

        <SearchForm />

        <button
          onClick={menuBtnClickHandler}
          id="menu_btn"
          className="flex flex-col justify-between py-[4px] lg:hidden w-[24px] h-[24px] cursor-pointer"
        >
          <span className="w-full h-[1.5px] bg-black inline-block rounded"></span>
          <span className="w-full h-[1.5px] bg-black inline-block rounded"></span>
          <span className="w-full h-[1.5px] bg-black inline-block rounded"></span>
        </button>

        <ul className="hidden lg:flex gap-5 cursor-pointer">
          <li className="flex gap-2 cursor-pointer ">
            <IconBox
              linkClassName={"flex items-center"}
              icon={"icon-user"}
              size={24}
              title={"Account"}
              link={"#"}
              hideTitleOnMobile={true}
              titleClassName={"text-gray-500"}
            />
          </li>

          <li className="flex gap-2 cursor-pointer">
            <IconBox
              linkClassName={"flex items-center"}
              icon={"icon-shopping-cart"}
              size={24}
              title={"Card"}
              link={"#"}
              hideTitleOnMobile={true}
              badge={2}
              titleClassName={"text-gray-500"}
            />
          </li>
        </ul>
      </div>

      {/* Mobile Menu */}
      <div className="border-gray-200 border-y h-auto ">
        <div  onClick={menuBodyClickHandler} className={`${showMobileMenu? 'left-0 fixed overflow-y-scroll' :'-left-[100%] absolute' }  container transition-all w-4/5 rounded-[24px] lg:rounded-[0px] lg:w-auto flex  top-0 bottom-0  lg:static flex-col lg:hidden justify-start lg:justify-between items-start pt-[16px] pl-[24px] lg:py-[13px] lg:items-center h-[100vh] bg-white lg:h-[70px] mobile-menu z-50`}>
          <div className={"relative"} onClick={categoryMenuClickHandler}>
            <div className="flex lg:hidden relative w-[250px] h-[50px] bg-[#3BB77E] rounded-[5px] border border-gray-200  justify-center items-center gap-2 cursor-pointer">
               
              <IconBox
                linkClassName={"text-white font-bold"}
                icon={"icon-apps"}
                size={24}
                link={"#"}
                hideTitleOnMobile={true}
                title={"Browse All Categories"}
              />

              <IconBox
                linkClassName={"text-white"}
                icon={"icon-angle-small-down"}
                size={24}
                link={"#"}
                hideTitleOnMobile={false}
                titleClassName={"text-meduim text-white"}
              />
            </div>

            <div
              onClick={categoryBodyClickHandler}
              className={`${
                showCategoryMenu ? "flex" : "hidden"
              } bg-white w-[400px] h-auto border absolute left-0 top-12 rounded-[10px] border-[#BCE3C9] p-2.5 z-10`}
            >
              <div className="flex flex-wrap justify-between gap-y-[15px]">
                {categoryMenuItems &&
                  categoryMenuItems.data.map(
                    (item: EntityType<MenuItemType>, index: number) => {
                      return (
                        <IconBox
                          key={index}
                          link={item.attributes.link}
                          icon={item.attributes.icon_name}
                          size={30}
                          title={item.attributes.title}
                          titleClassName={"text-[#253D4E] text-sm font-bold"}
                          linkClassName={
                            "flex items-center gap-3.5 rounded-[5px] lg:border-[1px] lg:border-gray-300 py-2.5  basis-full lg:basis-[calc(50%-8px)] justify-start pl-4 lg:hover:border-green-300 cursor-pointer"
                          }
                          path={item.attributes.icon_path}
                        />
                      );
                    }
                  )}
              </div>
            </div>
            <nav id="nav-menu">
              <ul className="flex flex-col xl:flex lg:flex-row items-start gap-2.5 justify-center font-bold">
                {mainMenuItems &&
                  mainMenuItems.data.map(
                    (item: EntityType<MenuItemType>, index: number) => {
                      return (
                        <li key={index}>
                          {item.attributes.icon_name ? (
                            <IconBox
                              link={item.attributes.link}
                              icon={item.attributes.icon_name}
                              title={item.attributes.title}
                              size={24}
                              titleClassName="ml-1"
                            />
                          ) : (
                            <Link
                              href={item.attributes.link}
                              className={"flex items-center gap-1"}
                            >
                              {item.attributes.title}
                            </Link>
                          )}
                        </li>
                      );
                    }
                  )}
              </ul>
            </nav>
          </div>
        </div>
      </div>

      {/* Menu  */}
      <div className="container flex items-center justify-between py-4 border-b border-b-[#E5E5E5]">
        {/* search moile */}
        <div className="border-2  border-[#025f34] w-full rounded-lg max-w-[300px] mx-[15px] px-[15px] lg:hidden inline-block">
          <form name="search-form" action="#" className="flex items-center">
            <input
              type="text"
              name="search-text"
              placeholder="search for items"
              className="text-sm text-gray-400 w-full py-[15px] focus:outline-none"
            />
            <button type="submit">
              <IconBox icon={"icon-search"} />
            </button>
          </form>
        </div>

        <ul className="lg:hidden flex gap-5 cursor-pointer w-full justify-end">
          <li className="flex gap-2 cursor-pointer">
            <IconBox
              icon={"icon-user"}
              size={36}
              title={"Account"}
              link={"#"}
              hideTitleOnMobile={true}
              titleClassName={"text-gray-500"}
            />
          </li>

          <li className="flex gap-2 cursor-pointer">
            <IconBox
              icon={"icon-shopping-cart"}
              size={36}
              title={"Card"}
              link={"#"}
              hideTitleOnMobile={true}
              badge={2}
              titleClassName={"text-gray-500"}
            />
          </li>
        </ul>

        <Menu />

        <div className="hidden lg:flex items-center shrink-0 gap-3">
          <IconBox
            icon={"icon-headset xl:text-[30px] aspect-square"}
            size={24}
            link={"#"}
          />

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
  );
}
