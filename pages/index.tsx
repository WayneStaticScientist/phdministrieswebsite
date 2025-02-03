import dynamic from "next/dynamic";
import Faqs from "@/components/faqs";
import Hero from "@/components/hero";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Services from "@/components/services";
import ScrollTop from "@/components/scroll-top";
import VideoSection from "@/components/video-area";
import HelpedPeople from "@/components/helped-people";
const DynamicFeature = dynamic(() => import('@/components/feature'), { ssr: false });
const DynamicAboutUs = dynamic(() => import('@/components/about-us'), { ssr: false });
const DynamicCitations = dynamic(() => import('@/components/citations'), { ssr: false });
const DynamicMotivationals = dynamic(() => import('@/components/motivational'), { ssr: false });
export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <DynamicFeature />
      <DynamicAboutUs />
      <Services />
      <DynamicCitations />
      <HelpedPeople />
      <VideoSection />
      <Faqs />
      <DynamicMotivationals />
      <Footer />
      <ScrollTop />
    </>
  );
}
