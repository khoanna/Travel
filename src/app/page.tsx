import HeroBanner from "@/components/Home/Banner";
import ContactUs from "@/components/Home/Connect";
import ExperiencesShowcase from "@/components/Home/Experiences";
import ExploreStyles from "@/components/Home/Explore";
import FeaturesSection from "@/components/Home/Feature";
import TopPicksVietnam from "@/components/Home/Tour";
import WhyTravelWithUs from "@/components/Home/WhyTravelWithUs";

export default function Home() {
  return (
    <div>
      <HeroBanner />
      <FeaturesSection />
      <TopPicksVietnam />
      <ExploreStyles />
      <ExperiencesShowcase />
      <WhyTravelWithUs />
      <ContactUs />
    </div>
  );
}
