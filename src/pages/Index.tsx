import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import LocationsSection from "@/components/LocationsSection";
import CreeperShieldSection from "@/components/CreeperShieldSection";
import ReviewsSection from "@/components/ReviewsSection";
import CtaSection from "@/components/CtaSection";
import DiscordSection from "@/components/DiscordSection";
import LoadingScreen from "@/components/LoadingScreen";
import MumbaiRestockPopup from "@/components/MumbaiRestockPopup";
import MinecraftConsole from "@/components/MinecraftConsole";
import PlanCalculatorSidebar from "@/components/PlanCalculatorSidebar";
import { Button } from "@/components/ui/button";
import { Server, Shield, Settings, Calculator } from "lucide-react";
import SEOHead from "@/components/SEOHead";
import SiteNavigationStructuredData from "@/components/SiteNavigationStructuredData";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

const Index = () => {
  const [loading, setLoading] = useState(true);
  const [calculatorOpen, setCalculatorOpen] = useState(false);

  useEffect(() => {
    document.title = "CreeperCastle.cloud - Premium Minecraft Hosting in India";
    
    const timer = setTimeout(() => {
      setLoading(false);
      window.scrollTo(0, 0);
    }, Math.max(1000, Math.min(1500, Math.random() * 500 + 1000)));
    
    return () => {
      clearTimeout(timer);
    };
  }, []);

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash) {
        const element = document.querySelector(hash);
        if (element) {
          setTimeout(() => {
            window.scrollTo({
              top: element.getBoundingClientRect().top + window.scrollY - 80,
              behavior: 'smooth'
            });
          }, 100);
        }
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  if (loading) {
    return <LoadingScreen />;
  }

  return (
    <>
      <SEOHead
        title="CreeperCastle.cloud - Premium Minecraft Hosting in India | DDoS Protection & Instant Setup"
        description="Get premium Minecraft server hosting in India with DDoS protection, instant setup, and 24/7 support. Plans starting from ₹99/month with Mumbai & Delhi locations."
        keywords={[
          "minecraft hosting", "minecraft server hosting india", "premium minecraft hosting", 
          "ddos protection", "instant setup", "mumbai minecraft hosting", "delhi minecraft hosting", 
          "creepercastle", "minecraft server", "game server hosting", "minecraft server rental"
        ]}
        canonicalUrl="https://creepercastle.cloud/"
        ogType="website"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          "name": "CreeperCastle.cloud - Premium Minecraft Hosting in India",
          "description": "Get premium Minecraft server hosting in India with DDoS protection, instant setup, and 24/7 support. Plans starting from ₹99/month.",
          "url": "https://creepercastle.cloud/"
        }}
      />
      
      <SiteNavigationStructuredData />
      
      <MumbaiRestockPopup />
      
      <AnimatePresence mode="wait">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col min-h-screen bg-navy text-white relative"
        >
          <Navbar />
          
          <main className="flex-grow pt-24 relative z-10">
            <section id="home" className="min-h-screen flex items-center relative">
              <HeroSection />
              
              <div className="fixed bottom-6 right-6 z-50 space-y-4">
                <motion.div
                  className="bg-gradient-to-r from-creeper to-creeper-light p-4 rounded-lg shadow-lg border border-creeper/30 backdrop-blur-sm"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    onClick={() => setCalculatorOpen(true)}
                    className="bg-transparent hover:bg-creeper/20 text-navy-dark font-bold flex items-center gap-2 border-none shadow-none p-0"
                  >
                    <img 
                      src="/lovable-uploads/1a0d50b6-cd93-42c1-bb4d-18c8aed41a15.png" 
                      alt="Calculator" 
                      className="w-6 h-6"
                    />
                    Plan Calculator
                  </Button>
                </motion.div>
              </div>
              
              <MinecraftConsole />
            </section>
            <section id="locations">
              <LocationsSection />
            </section>
            <section id="features">
              <CreeperShieldSection />
            </section>
            <DiscordSection />
            <ReviewsSection />
            <CtaSection />
          </main>
          
          <Footer />
          
          <PlanCalculatorSidebar 
            isOpen={calculatorOpen} 
            onClose={() => setCalculatorOpen(false)} 
          />
        </motion.div>
      </AnimatePresence>
    </>
  );
};

export default Index;