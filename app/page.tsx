import HeroSection from "@/components/homepage/HeroSection";
import Explore from "@/components/homepage/Explore";
import Services from "@/components/homepage/Services";
import TravelTips from "@/components/homepage/TravelTips";
import WhyNesterlify from "@/components/homepage/WhyNesterlify";

export default function Home() {
  return (
    <div className="bg-[#FFFFFF]">
      <HeroSection />
      <Explore />
      <Services />
      <TravelTips />
      <WhyNesterlify />
    </div>
  );
}
