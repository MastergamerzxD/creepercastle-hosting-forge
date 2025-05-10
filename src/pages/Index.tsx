
import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import PricingSection from "@/components/PricingSection";
import LocationsSection from "@/components/LocationsSection";
import CreeperShieldSection from "@/components/CreeperShieldSection";
import ControlPanelSection from "@/components/ControlPanelSection";
import ReviewsSection from "@/components/ReviewsSection";
import CtaSection from "@/components/CtaSection";
import DiscordSection from "@/components/DiscordSection";
import LoadingScreen from "@/components/LoadingScreen";

// Import framer-motion for animations
import { motion } from "framer-motion";

const Index = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Update document title
    document.title = "CreeperCastle.cloud - Premium Minecraft Hosting";
    
    // Initialize custom cursor
    const cursor = document.createElement('div');
    cursor.classList.add('custom-cursor');
    document.body.appendChild(cursor);

    const moveCursor = (e: MouseEvent) => {
      cursor.style.left = `${e.clientX}px`;
      cursor.style.top = `${e.clientY}px`;
    };

    document.addEventListener('mousemove', moveCursor);
    
    // Simulate loading time (minimum 1 second, maximum 2 seconds)
    const timer = setTimeout(() => {
      setLoading(false);
      // Scroll to top after loading
      window.scrollTo(0, 0);
    }, Math.max(1000, Math.min(2000, Math.random() * 1000 + 1000)));
    
    return () => {
      clearTimeout(timer);
      document.removeEventListener('mousemove', moveCursor);
      document.body.removeChild(cursor);
    };
  }, []);

  if (loading) {
    return <LoadingScreen />;
  }

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
        <DiscordSection />
        <ReviewsSection />
        <CtaSection />
      </main>
      
      <Footer />
    </motion.div>
  );
};

export default Index;
