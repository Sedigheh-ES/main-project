import Header from "./header/Header";
import Footer from "./footer/Footer";
import { ReactNode } from "react";

interface Props{
    children:ReactNode
}
export default function Layouts({children}:Props) {
  return (
      <>
          <Header />
          <main>{ children}</main>
          <Footer/>
      </>
  )
}
