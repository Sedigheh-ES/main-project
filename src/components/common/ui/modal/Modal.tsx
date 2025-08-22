import { ReactNode } from "react";
import { IconBox } from "../icon-box";
import Portal from "../portal/Portal";
import { ImageView } from "../../image-view";

interface Props {
    children: ReactNode;
    title: string;
    closeModal: () => void
}

export default function Modal({ closeModal, title, children }: Props) {
    return (
        <Portal onClose={closeModal}>
            <div className="z-10 min-w-[100vw] w-auto md:min-w-[50vw] min-h-[100vh] md:min-h-[50vh] bg-gray-200 border rounded-2xl left-[50%] top-[50%] text-3xl overflow-scroll">
                <div className="flex justify-between items-center bg-gray-100 p-3 rounded-2xl">
                    <div onClick={closeModal} className="cursor-pointer" >
                        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="22" height="28" viewBox="0 0 22 28" >
                            <path d="M20.281 20.656c0 0.391-0.156 0.781-0.438 1.062l-2.125 2.125c-0.281 0.281-0.672 0.438-1.062 0.438s-0.781-0.156-1.062-0.438l-4.594-4.594-4.594 4.594c-0.281 0.281-0.672 0.438-1.062 0.438s-0.781-0.156-1.062-0.438l-2.125-2.125c-0.281-0.281-0.438-0.672-0.438-1.062s0.156-0.781 0.438-1.062l4.594-4.594-4.594-4.594c-0.281-0.281-0.438-0.672-0.438-1.062s0.156-0.781 0.438-1.062l2.125-2.125c0.281-0.281 0.672-0.438 1.062-0.438s0.781 0.156 1.062 0.438l4.594 4.594 4.594-4.594c0.281-0.281 0.672-0.438 1.062-0.438s0.781 0.156 1.062 0.438l2.125 2.125c0.281 0.281 0.438 0.672 0.438 1.062s-0.156 0.781-0.438 1.062l-4.594 4.594 4.594 4.594c0.281 0.281 0.438 0.672 0.438 1.062z"></path>
                        </svg>

                    </div>
                    {title}
                </div>

                <div>
                    {children}
                </div>

            </div>
        </Portal>
    )
};