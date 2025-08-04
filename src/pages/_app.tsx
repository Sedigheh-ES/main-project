import { Layouts } from "@/components/layouts";
import "@/styles/globals.css";
import "@/styles/style.css";
import "@/styles/icon.css";
import type { AppProps } from "next/app";
import { Swiper } from "swiper/react";
import 'swiper/css';
import 'swiper/css/autoplay';
import 'react-toastify/ReactToastify.css';
import { HydrationBoundary, QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ToastContainer } from "react-toastify";
import { useState } from "react";
import { ModalContextProvider } from "@/store/ModalContext";



export default function App({ Component, pageProps }: AppProps) {
  const [queryClient] =
    useState(() =>
    new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      refetchIntervalInBackground: false,
      retry: 0,
      staleTime: 60 * 1000
    }
  }
  })
    
 )
 
  return (
    <QueryClientProvider client={queryClient}>
      <HydrationBoundary state={pageProps.dehydratedState}>
        <ModalContextProvider>
        <div id={"portal"}></div>
      <Layouts>
        <Component {...pageProps} />
        <ToastContainer autoClose={false} hideProgressBar={false} closeOnClick={false} draggable={false} theme={"light"}  />
          </Layouts>
          </ModalContextProvider>
      </HydrationBoundary>
      
    </QueryClientProvider>
  );
}
