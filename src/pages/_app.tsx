import { Layouts } from "@/components/layouts";
import "@/styles/globals.css";
import "@/styles/style.css";

import "@/styles/icon.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
   <Layouts>
      <Component {...pageProps} />
   </Layouts>
  );
}
