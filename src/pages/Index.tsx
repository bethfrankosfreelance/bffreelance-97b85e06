import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ServicesSection from "@/components/ServicesSection";
import AlaCarteSection from "@/components/AlaCarteSection";
import FooterSection from "@/components/FooterSection";
import SEO from "@/components/SEO";

const Index = () => {
  return (
    <main>
      <SEO
        title="Beth Frankos Freelance — Launch. Grow. Thrive."
        description="Operations consulting, business strategy, and website services for contractors, nonprofits, and small businesses ready to scale."
        path="/"
      />
      <HeroSection />
      <AboutSection />
      <TestimonialsSection />
      <ServicesSection />
      <AlaCarteSection />
      <FooterSection />
    </main>
  );
};

export default Index;
