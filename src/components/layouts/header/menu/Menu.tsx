import { IconBox } from "@/components/common";
import { browseCategroiesMock } from "@/mock/browsCateegory";
import { menuMock } from "@/mock/menu";
import Link from "next/link";




export function Menu() {
    //TODO Load menu data from API
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
                <div id="all_categories_box" className={"hidden lg:hidden bg-white w-[500px] h-auto border absolute left-0 top-16 rounded-[10px] border-[#BCE3C9] p-2.5"}>
                    <div id="all_cat_inner_box" className="flex flex-wrap justify-between gap-y-[15px]">
                    
                        {
                            browseCategroiesMock.map((item,index) => {
                                return <IconBox key={index} link={item.link} icon={item.icon} size={30} title={item.title} titleClassName={"text-[#253D4E] text-sm font-bold"}
                                    linkClassName={"flex items-center gap-3.5 rounded-[5px] lg:border-[1px] lg:border-gray-300 py-2.5  basis-full lg:basis-[calc(50%-8px)] justify-start pl-4 lg:hover:border-green-300 cursor-pointer"} path={item.iconPath} />

                            })
                        }

                    </div>

                </div>
            </div>
         
            <nav id="nav-menu">
                <ul className="hidden xl:flex flex-col lg:flex-row items-start gap-2.5 justify-center font-bold">
                    {
                        menuMock.map((item, index) => {
                            return (
                                <li>
                                    {
                                        item.icon ?
                                            <IconBox {...item}  size={24} titleClassName="ml-1" /> 
                                            :
                                            <Link href="#" className={"flex items-center gap-1"} > {item.title} </Link>
                                    }
                               </li>
                
                            )
                        })
                    }
                    
                </ul>

            </nav>
        

        
        </>
    )
}
