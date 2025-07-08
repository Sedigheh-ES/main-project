import { IconBox } from "@/components/common";
import Link from "next/link";


export function Menu() {
    return (
        <>
            {/* Brows all category */}
            <div id="all_categpries" className=" relative w-[250px] h-[44px] bg-[#3BB77E] rounded-[5px] border border-gray-200 flex justify-center items-center gap-2 cursor-pointer">
                <span className={"flex items-center justify-center gap-x-2"}><IconBox linkClassName={"text-white font-bold"} icon={'icon-apps'} size={24} link={'#'} hideTitleOnMobile={true} title={"Browse All Categories"} /></span>
                <span className={"flex items-center justify-center gap-x-1"}><IconBox linkClassName={"text-white"} icon={'icon-angle-small-down'} size={24} link={'#'} hideTitleOnMobile={false} titleClassName={"text-meduim text-white"} /></span>

                {/* All Categories Menu */}
                <div id="all_categories_box" className={"bg-white w-[500px] h-[500px] border absolute left-0 top-16 rounded-[10px] border-[#BCE3C9] p-2.5"}>
                    <div id="all_cat_inner_box" className="flex flex-wrap justify-between gap-y-[15px]">
                        <Link href={'#'} className="flex items-center gap-3.5 border border-[#F2F3F4] rounded-[5px] py-3 px-9">
                            <li className="icon-groceries-1 text-[30px] list-none"><span className="path1"></span><span
                                className="path2"></span><span className="path3"></span><span
                                    className="path4"></span><span className="path5"></span><span
                                        className="path6"></span><span className="path7"></span></li>
                            <div className="text-[#253D4E] text-sm font-bold">Milks and Dairies</div>

                        </Link>


                    </div>

                </div>
            </div>
            <div>
                <nav>

                </nav>
            </div>

            <div>Phone</div>
        </>
    )
}
