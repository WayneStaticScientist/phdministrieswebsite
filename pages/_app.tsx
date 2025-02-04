import "@/styles/globals.css";
import "@/styles/css/style.css";
import "@/styles/css/bootstrap.min.css";
import "@/styles/css/fontawesome.min.css";
import "@/styles/css/swiper-bundle.min.css";
import "@/styles/css/magnific-popup.min.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
