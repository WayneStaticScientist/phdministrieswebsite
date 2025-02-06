import dynamic from "next/dynamic";
import Faqs from "@/components/faqs";
import Hero from "@/components/hero";
import Footer from "@/components/footer";
import Header from "@/components/header";
import { ToastContainer } from "react-toastify";
import CharitArea from "@/components/secondary-headers/charit-area";
const DynamicFeature = dynamic(() => import('@/components/feature'), { ssr: false });
const DynamicAboutUs = dynamic(() => import('@/components/about-us'), { ssr: false });
const DynamicCitations = dynamic(() => import('@/components/citations'), { ssr: false });
const DynamicMotivationals = dynamic(() => import('@/components/motivational'), { ssr: false });
const DynamicScrollToTop = dynamic(() => import('@/components/scroll-top'), { ssr: false });
const DynamicVideoSection = dynamic(() => import('@/components/video-area'), { ssr: false });
const DynamicHelpedPeople = dynamic(() => import('@/components/helped-people'), { ssr: false });
const DynamicContentWcu = dynamic(() => import("@/components/xpp-3"), { ssr: false });
export default function Home() {
  return (
    <>
      <ToastContainer />
      <Header page="home" />
      <Hero />
      <DynamicFeature />
      <DynamicAboutUs />
      <CharitArea />
      <DynamicCitations />
      <DynamicHelpedPeople />
      <DynamicVideoSection />
      <DynamicContentWcu />
      <Faqs />
      <DynamicMotivationals />
      <Footer />
      <DynamicScrollToTop />
    </>
  );
}
