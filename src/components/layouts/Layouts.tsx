
import {Footer} from "./footer/";
import { ReactNode } from "react";
import { Header } from "./header";

interface Props{
    children:ReactNode
}
export function Layouts({children}:Props) {
    return (
        <>
            <Header />
            <main>{children}</main>
            <Footer />
        </>
    );
}
