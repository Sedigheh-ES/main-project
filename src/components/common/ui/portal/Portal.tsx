import { ReactNode } from "react";
import { createPortal } from "react-dom";

interface Props {
    children: ReactNode;
}

export default function Portal({ children }: Props) {
    return createPortal(
        <div>{children}</div>,
        document.getElementById("portal")!
    )
};