import dynamic from "next/dynamic";
import Faqs from "@/components/faqs";
import Hero from "@/components/hero";
import Footer from "@/components/footer";
import Header from "@/components/header";
import { ToastContainer } from "react-toastify";
const DynamicFeature = dynamic(() => import('@/components/feature'), { ssr: false });
const DynamicAboutUs = dynamic(() => import('@/components/about-us'), { ssr: false });
const DynamicCitations = dynamic(() => import('@/components/citations'), { ssr: false });
const DynamicMotivationals = dynamic(() => import('@/components/motivational'), { ssr: false });
const DynamicScrollToTop = dynamic(() => import('@/components/scroll-top'), { ssr: false });
const DynamicVideoSection = dynamic(() => import('@/components/video-area'), { ssr: false });
const DynamicHelpedPeople = dynamic(() => import('@/components/helped-people'), { ssr: false });
const DynamicServices = dynamic(() => import('@/components/services'), { ssr: false });
export default function Home() {
  return (
    <>
      <ToastContainer />
      <Header page="home" />
      <Hero />
      <DynamicFeature />
      <DynamicAboutUs />
      <DynamicServices />
      <DynamicCitations />
      <DynamicHelpedPeople />
      <DynamicVideoSection />
      <Faqs />
      <DynamicMotivationals />
      <Footer />
      <DynamicScrollToTop />
    </>
  );
}
