import AnnouncementBar from "@/components/AnnouncementBar";
import HeroSection from "@/components/HeroSection";
import TrustSection from "@/components/TrustSection";
import WhoForSection from "@/components/WhoForSection";
import ProblemSection from "@/components/ProblemSection";
import ServicesSection from "@/components/ServicesSection";
import WhyMeSection from "@/components/WhyMeSection";
import AboutSection from "@/components/AboutSection";
import ResultsSection from "@/components/ResultsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FaqSection from "@/components/FaqSection";
import FinalCtaSection from "@/components/FinalCtaSection";
import FooterSection from "@/components/FooterSection";
import SEO from "@/components/SEO";

const Index = () => {
  return (
    <main>
      <SEO
        title="Beth Frankos Freelance — Fix the systems behind your growth"
        description="Operations consulting for small businesses, contractors, and nonprofits. Streamline processes, reduce bottlenecks, and build systems that scale."
        path="/"
      />
      <AnnouncementBar />
      <HeroSection />
      <TrustSection />
      <WhoForSection />
      <ProblemSection />
      <ServicesSection />
      <WhyMeSection />
      <AboutSection />
      <ResultsSection />
      <TestimonialsSection />
      <FaqSection />
      <FinalCtaSection />
      <FooterSection />
    </main>
  );
};

export default Index;
