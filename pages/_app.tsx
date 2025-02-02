import "@/styles/globals.css";
import "../public/assets/css/style.css";
import "../public/assets/css/bootstrap.min.css";
import "../public/assets/css/fontawesome.min.css";
import "../public/assets/css/swiper-bundle.min.css";
import "../public/assets/css/magnific-popup.min.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
