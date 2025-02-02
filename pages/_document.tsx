import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
      <Script src="../public/assets/js/vendor/jquery-3.7.1.min.js"></Script>
      <Script src="../public/assets/js/swiper-bundle.min.js"></Script>
      <Script src="../public/assets/js/bootstrap.min.js"></Script>
      <Script src="../public/assets/js/jquery.magnific-popup.min.js"></Script>
      <Script src="../public/assets/js/jquery.counterup.min.js"></Script>
      <Script src="../public/assets/js/jquery-ui.min.js"></Script>
      <Script src="../public/assets/js/imagesloaded.pkgd.min.js"></Script>
      <Script src="../public/assets/js/isotope.pkgd.min.js"></Script>
      <Script src="../public/assets/js/main.js"></Script>
    </Html>
  );
}
