import { Layouts } from "@/components/layouts";
import "@/styles/globals.css";
import "@/styles/style.css";
import "@/styles/icon.css";
import type { AppProps } from "next/app";
import { Swiper } from "swiper/react";
import 'swiper/css';
import 'swiper/css/autoplay';
import 'react-toastify/ReactToastify.css';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ToastContainer } from "react-toastify";


export default function App({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
        refetchIntervalInBackground: false,
        retry: 0

      }
    }
  });
  return (
    <QueryClientProvider client={queryClient}>
      <Layouts>
        <Component {...pageProps} />
        <ToastContainer autoClose={false} hideProgressBar={false} closeOnClick={false} draggable={false} theme={"light"}  />

      </Layouts>
    </QueryClientProvider>
  );
}
