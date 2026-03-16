import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import MedicalStorySection from "@/components/MedicalStorySection";
import ProductsSection from "@/components/ProductsSection";
import GeneralStoreSection from "@/components/GeneralStoreSection";
import CommunitySection from "@/components/CommunitySection";
import FAQSection from "@/components/FAQSection";
import CTAFooter from "@/components/CTAFooter";

const Index = () => {
  return (
    <main className="overflow-x-hidden">
      <HeroSection />
      <AboutSection />
      <MedicalStorySection />
      <ProductsSection />
      <GeneralStoreSection />
      <CommunitySection />
      <FAQSection />
      <CTAFooter />
    </main>
  );
};

export default Index;
