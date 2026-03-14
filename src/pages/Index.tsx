import HeroSection from "@/components/HeroSection";
import MedicalStorySection from "@/components/MedicalStorySection";
import GeneralStoreSection from "@/components/GeneralStoreSection";
import CommunitySection from "@/components/CommunitySection";
import CTAFooter from "@/components/CTAFooter";

const Index = () => {
  return (
    <main className="overflow-x-hidden">
      <HeroSection />
      <MedicalStorySection />
      <GeneralStoreSection />
      <CommunitySection />
      <CTAFooter />
    </main>
  );
};

export default Index;
