import { ReactNode } from "react";
import { IconBox } from "../icon-box";

interface Props{
    children: ReactNode;
    title: string;
    closeModal:()=>void
}

export default function Modal({closeModal,title,children}:Props) {
  return (
      <div className="absolute z-10 w-[800px] h-[500px] bg-gray-200 border rounded-2xl translate-y-2/4  -translate-x-2/4 left-[50%] top-[50%] text-3xl">
          <div className="flex justify-between items-center bg-gray-100 p-3  rounded-2xl">
          <div onClick={closeModal} className="cursor-pointer" >
             <IconBox
              linkClassName={"flex items-center justify-end p-4"}
              icon={"icon-close"}
              size={24}
              link={"#"}
              hideTitleOnMobile={true}
              titleClassName={"text-gray-500"}
            />              
          </div>      
              {title}          
          </div>

          <div>
              {children}
          </div>
          
     </div>
  )
};