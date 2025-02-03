import dynamic from "next/dynamic";
import Faqs from "@/components/faqs";
import Hero from "@/components/hero";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Services from "@/components/services";
import ScrollTop from "@/components/scroll-top";
import PricePlans from "@/components/price-plans";
import VideoSection from "@/components/video-area";
import HelpedPeople from "@/components/helped-people";
const DynamicTeams = dynamic(() => import('@/components/teams'), { ssr: false });
const DynamicBrand = dynamic(() => import('@/components/brand'), { ssr: false });
const DynamicFeature = dynamic(() => import('@/components/feature'), { ssr: false });
const DynamicAboutUs = dynamic(() => import('@/components/about-us'), { ssr: false });
const DynamicCitations = dynamic(() => import('@/components/citations'), { ssr: false });
const DynamicTestimonials = dynamic(() => import('@/components/testimonials'), { ssr: false });
const DynamicComplimentaries = dynamic(() => import('@/components/compilmentaries'), { ssr: false });
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
      <DynamicTeams />
      <DynamicComplimentaries />
      <PricePlans />
      <Faqs />
      <DynamicBrand />
      <DynamicTestimonials />
      <Footer />
      <ScrollTop />
    </>
  );
}
