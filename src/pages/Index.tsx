import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import WorkSection from "@/components/WorkSection";
import CaseStudiesSection from "@/components/CaseStudiesSection";
import WritingSection from "@/components/WritingSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <WorkSection />
      <CaseStudiesSection />
      <WritingSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
