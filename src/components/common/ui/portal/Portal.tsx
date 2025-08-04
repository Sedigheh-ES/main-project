import { ReactNode } from "react";
import { createPortal } from "react-dom";

interface Props {
    children: ReactNode;
    onClose:()=>void
}

export default function Portal({ children,onClose }: Props) {
    return createPortal(
        <div className={"fixed top-0 left-0 bottom-0 right-0 bg-gray-300/75 z-10 flex justify-center items-center"} onClick={onClose}>
            <div className={""} onClick={(e)=>e.stopPropagation()}>
                {children}
                </div>
        </div>,
        document.getElementById("portal")!
    )
};