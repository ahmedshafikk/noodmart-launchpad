import Navbar from '@/components/landing/Navbar';
import HeroSection from '@/components/landing/HeroSection';
import ValueProps from '@/components/landing/ValueProps';
import HowItWorks from '@/components/landing/HowItWorks';
import ForRestaurants from '@/components/landing/ForRestaurants';
import WaitlistSection from '@/components/landing/WaitlistSection';
import FAQSection from '@/components/landing/FAQSection';
import FinalCTA from '@/components/landing/FinalCTA';
import Footer from '@/components/landing/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <ValueProps />
      <HowItWorks />
      <ForRestaurants />
      <WaitlistSection />
      <FAQSection />
      <FinalCTA />
      <Footer />
    </div>
  );
};

export default Index;
