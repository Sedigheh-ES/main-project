import { ReactNode } from "react";
import { IconBox } from "../icon-box";
import Portal from "../portal/Portal";

interface Props {
    children: ReactNode;
    title: string;
    closeModal: () => void
}

export default function Modal({ closeModal, title, children }: Props) {
    return (
        <Portal onClose={closeModal}>
            <div className="z-10 min-w-[100vw] md:min-w-[50vw] min-h-[100vh] md:min-h-[50vh] bg-gray-200 border rounded-2xl left-[50%] top-[50%] text-3xl overflow-scroll">
                <div className="flex justify-between items-center bg-gray-100 p-3 rounded-2xl">
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
        </Portal>
    )
};