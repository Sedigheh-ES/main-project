
import { getMenuAPiCall } from "@/api/Menu";
import { IconBox } from "@/components/common";
import { browseCategroiesMock } from "@/mock/browsCateegory";
import { menuMock } from "@/mock/menu";
import { EntityType, MenuItemType, MenuType, PopulateType } from "@/types";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";





export function Menu() {
    //TODO Load menu data from API
    const { data: menuData } = useQuery({ queryKey: [getMenuAPiCall.name], queryFn: () => getMenuAPiCall() });
    console.log('Menu Data: ', menuData);

    let mainMenuItems: null | PopulateType<MenuItemType> = null;
    let categoryMenuItems: null | PopulateType<MenuItemType> = null;
    if (menuData) {

        const findMenu = menuData.filter((item: EntityType<MenuType>) => item.attributes?.position === 'main_menu');
        console.log('Main menu items:', findMenu);

        if (findMenu.length > 0) {
            mainMenuItems = findMenu[0].attributes.menu_items;
            mainMenuItems?.data.sort((a: EntityType<MenuItemType>, b: EntityType<MenuItemType>) => {
                if (a.attributes.rank < b.attributes.rank) 
                    return -1;
                if (a.attributes.rank > b.attributes.rank)
                    return 1;

                return 0;
               
            })
           
        }

        const findCategoryMenu = menuData.filter((item: EntityType<MenuType>) => item.attributes?.position === 'brows-category');
        console.log('Main menu items:', findMenu);

        if (findCategoryMenu.length > 0) {
          categoryMenuItems = findCategoryMenu[0].attributes.menu_items;
            categoryMenuItems?.data.sort((a: EntityType<MenuItemType>, b: EntityType<MenuItemType>) => {
                if (a.attributes.rank < b.attributes.rank) 
                    return -1;
                if (a.attributes.rank > b.attributes.rank)
                    return 1;

                return 0;
               
            })
           
        }

    }
   
   
    return (
        <>
            {/* Brows all category */}
            <div id="all_categpries" className="hidden relative w-[250px] h-[50px] bg-[#3BB77E] rounded-[5px] border border-gray-200 lg:flex justify-center items-center gap-2 cursor-pointer">
                <span className={"flex items-center justify-center gap-x-2"}>
                    <IconBox linkClassName={"text-white font-bold"} icon={'icon-apps'} size={24} link={'#'} hideTitleOnMobile={true} title={"Browse All Categories"} />
                </span>
                <span className={"flex items-center justify-center gap-x-1"}>
                    <IconBox linkClassName={"text-white"} icon={'icon-angle-small-down'} size={24} link={'#'} hideTitleOnMobile={false} titleClassName={"text-meduim text-white"} />
                </span>

                {/* All Categories Menu */}
                <div id="all_categories_box" className={"hidden lg:flex bg-white w-[500px] h-auto border absolute left-0 top-16 rounded-[10px] border-[#BCE3C9] p-2.5 z-10"}>
                    <div id="all_cat_inner_box" className="flex flex-wrap justify-between gap-y-[15px]">
                        {
                            categoryMenuItems &&
                            categoryMenuItems.data.map((item: EntityType<MenuItemType>, index: number) => {
                                return <IconBox key={index} link={item.attributes.link} icon={item.attributes.icon_name} size={30} title={item.attributes.title} titleClassName={"text-[#253D4E] text-sm font-bold"}
            linkClassName={"flex items-center gap-3.5 rounded-[5px] lg:border-[1px] lg:border-gray-300 py-2.5  basis-full lg:basis-[calc(50%-8px)] justify-start pl-4 lg:hover:border-green-300 cursor-pointer"} path={item.attributes.icon_path} />


                            })
                        }

                        {/* {
                            browseCategroiesMock.map((item, index) => {
                                return <IconBox key={index} link={item.link} icon={item.icon} size={30} title={item.title} titleClassName={"text-[#253D4E] text-sm font-bold"}
                                    linkClassName={"flex items-center gap-3.5 rounded-[5px] lg:border-[1px] lg:border-gray-300 py-2.5  basis-full lg:basis-[calc(50%-8px)] justify-start pl-4 lg:hover:border-green-300 cursor-pointer"} path={item.iconPath} />

                            })
                        } */}

                    </div>

                </div>
            </div>

            <nav id="nav-menu">
                <ul className="hidden xl:flex flex-col lg:flex-row items-start gap-2.5 justify-center font-bold">
                    {
                        mainMenuItems &&
                        mainMenuItems.data.map((item: EntityType<MenuItemType>, index: number) => {
                            return (
                                <li key={index}>
                                    {
                                        item.attributes.icon_name ?
                                            <IconBox link={item.attributes.link} icon={item.attributes.icon_name} title={item.attributes.title} size={24} titleClassName="ml-1" />
                                            :
                                            <Link href={item.attributes.link} className={"flex items-center gap-1"} > {item.attributes.title}</Link>
                                    }
                                </li>
                            )
                        })
                    }


                    {/* // {
                    //     menuMock.map((item, index) => {
                    //         return (
                    //             <li>
                    //                 {
                    //                     item.icon ?
                    //                         <IconBox {...item}  size={24} titleClassName="ml-1" /> 
                    //                         :
                    //                         <Link href="#" className={"flex items-center gap-1"} > {item.title} </Link>
                    //                 }
                    //            </li>
                
                    //         )
                    //     })
                    // } */}

                </ul>

            </nav>



        </>
    )
}
