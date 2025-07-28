import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import FeatureCardsSection from "@/components/FeatureCardsSection";
import WhyVOTSSection from "@/components/WhyVOTSSection";
import CoursesSection from "@/components/CoursesSection";
import SuccessStoriesSection from "@/components/SuccessStoriesSection";
import WebinarSection from "@/components/WebinarSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <FeatureCardsSection />
      <WhyVOTSSection />
      <CoursesSection />
      <SuccessStoriesSection />
      <WebinarSection />
      <Footer />
    </div>
  );
};

export default Index;
