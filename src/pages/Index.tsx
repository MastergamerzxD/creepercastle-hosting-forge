
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import PricingSection from "@/components/PricingSection";
import LocationsSection from "@/components/LocationsSection";
import CreeperShieldSection from "@/components/CreeperShieldSection";
import ControlPanelSection from "@/components/ControlPanelSection";
import ReviewsSection from "@/components/ReviewsSection";
import CtaSection from "@/components/CtaSection";

// Import framer-motion for animations
import { motion } from "framer-motion";

const Index = () => {
  useEffect(() => {
    // Update document title
    document.title = "CreeperCastle.cloud - Premium Minecraft Hosting";
    
    // Scroll to top on page load
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col min-h-screen bg-navy text-white"
    >
      <Navbar />
      
      <main className="flex-grow pt-16">
        <HeroSection />
        <PricingSection />
        <LocationsSection />
        <CreeperShieldSection />
        <ControlPanelSection />
        <ReviewsSection />
        <CtaSection />
      </main>
      
      <Footer />
    </motion.div>
  );
};

export default Index;
