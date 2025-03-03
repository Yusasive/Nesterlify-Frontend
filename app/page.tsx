import HeroSection from "@/components/homepage/HeroSection";
import Explore from "@/components/homepage/Explore";
import Services from "@/components/homepage/Services";
import TravelTips from "@/components/homepage/TravelTips";
import WhyNesterlify from "@/components/homepage/WhyNesterlify";
import GlobalSponsors from "@/components/homepage/GlobalSupport";
import TestimonialSlider from "@/components/homepage/TestimonailSlider";
import Future from "@/components/homepage/Future";

export default function Home() {
  return (
    <div className="bg-[#FFFFFF]">
      <HeroSection />
      <Explore />
      <Services />
      <TravelTips />
      <WhyNesterlify />
      <GlobalSponsors />
      <TestimonialSlider />
      <Future />
    </div>
  );
}
