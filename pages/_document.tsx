import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en" className="no-jd" dir="ltr">
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Caveat:wght@400..700&amp;family=Nunito+Sans:ital,opsz,wght@0,6..12,200..1000;1,6..12,200..1000&amp;family=Nunito:ital,wght@0,200..1000;1,200..1000&amp;display=swap"
          rel="stylesheet" />
        <link rel="preconnect" href="https://fonts.googleapis.com/" />
        <link rel="preconnect" href="https://fonts.gstatic.com/" crossOrigin="" />
        <meta name="theme-color" content="#ffffff"></meta>
      </Head >
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
      <script src="/assets/js/vendor/jquery-3.7.1.min.js" async ></script>
      <script src="assets/js/swiper-bundle.min.js" async></script>
      <script src="assets/js/bootstrap.min.js" async></script>
      <script src="assets/js/jquery.magnific-popup.min.js" async></script>
      <script src="assets/js/jquery.counterup.min.js" async></script>
      <script src="assets/js/jquery-ui.min.js" async></script>
      <script src="assets/js/imagesloaded.pkgd.min.js" async></script>
      <script src="assets/js/isotope.pkgd.min.js" async></script>
      <script src="assets/js/main.js" async></script>
    </Html>
  );
}
