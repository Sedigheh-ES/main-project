import { IconBox } from "@/components/common";
import { useMenu } from "@/hooks/use-menu";
import { EntityType, MenuItemType, MenuType, PopulateType } from "@/types";
import Link from "next/link";
import { useEffect, useState } from "react";

export function Menu() {
  const [showCategoryMenu, setShowCategoryMenu] = useState<boolean>(false);

  const { data: mainMenuItems } = useMenu({ position: "main_menu" });
  const { data: categoryMenuItems } = useMenu({ position: "brows-category" });

    const categoryMenuClickHandler = (e) => {
        e.stopPropagation();
    setShowCategoryMenu((prevState) => !prevState);
  };

    const categoryBodyClickHandler = () => {
     
 }

    useEffect(() => {
        const clickHandler= ()=>{ setShowCategoryMenu(false)}
        document.addEventListener('click', (clickHandler) => {
            setShowCategoryMenu(false)
        })
        return () => {
            document.removeEventListener('click',clickHandler)
        }
    }, []);

  return (
    <>
          {/* Brows all category */}
          
          <div className={'relative'} onClick={categoryMenuClickHandler}>
          <div className="hidden relative w-[250px] h-[50px] bg-[#3BB77E] rounded-[5px] border border-gray-200 lg:flex justify-center items-center gap-2 cursor-pointer ">
                 
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
              {/* All Categories Menu*/}
        <div
         
          onClick={categoryBodyClickHandler}
          className={`${
            showCategoryMenu ? "flex" : "hidden"
          } bg-white w-[500px] h-auto border absolute left-0 top-16 rounded-[10px] border-[#BCE3C9] p-2.5 z-10`}
             >
          <div
           
            className="flex flex-wrap justify-between gap-y-[15px]"
             >
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
        </div>
          
    

      <nav id="nav-menu">
        <ul className="hidden xl:flex flex-col lg:flex-row items-start gap-2.5 justify-center font-bold">
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
    </>
  );
}
