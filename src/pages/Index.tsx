
import { useEffect, useState, useRef } from "react";
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
import { Helmet } from "react-helmet-async";

const Index = () => {
  const [loading, setLoading] = useState(true);
  const cursorDotRef = useRef<HTMLDivElement>(null);
  const cursorOutlineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Update document title
    document.title = "CreeperCastle.cloud - Premium Minecraft Hosting in India";
    
    // Simulate loading time (minimum 1 second, maximum 2 seconds)
    const timer = setTimeout(() => {
      setLoading(false);
      // Scroll to top after loading
      window.scrollTo(0, 0);
    }, Math.max(1000, Math.min(1500, Math.random() * 500 + 1000)));
    
    return () => {
      clearTimeout(timer);
    };
  }, []);

  // Custom cursor implementation
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (cursorDotRef.current && cursorOutlineRef.current) {
        cursorDotRef.current.style.top = `${e.clientY}px`;
        cursorDotRef.current.style.left = `${e.clientX}px`;
        
        // Add a slight delay to the outline for a smoother effect
        setTimeout(() => {
          if (cursorOutlineRef.current) {
            cursorOutlineRef.current.style.top = `${e.clientY}px`;
            cursorOutlineRef.current.style.left = `${e.clientX}px`;
          }
        }, 50);
      }
    };

    document.addEventListener("mousemove", handleMouseMove);
    
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  if (loading) {
    return <LoadingScreen />;
  }

  return (
    <>
      <Helmet>
        <title>CreeperCastle.cloud - Premium Minecraft Server Hosting in India</title>
        <meta name="description" content="CreeperCastle.cloud offers premium Minecraft hosting with instant setup, high performance NVMe storage, and unmatched DDoS protection in India." />
        <meta name="keywords" content="minecraft hosting, minecraft server, minecraft india, ddos protection, minecraft mods, game server, minecraft multiplayer" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://creepercastle.cloud/" />
        <meta property="og:title" content="CreeperCastle.cloud - Premium Minecraft Server Hosting in India" />
        <meta property="og:description" content="Premium Minecraft hosting with instant setup, high performance NVMe storage, and unmatched DDoS protection in India." />
        <meta property="og:image" content="https://creepercastle.cloud/logo.png" />
        
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://creepercastle.cloud/" />
        <meta property="twitter:title" content="CreeperCastle.cloud - Premium Minecraft Server Hosting in India" />
        <meta property="twitter:description" content="Premium Minecraft hosting with instant setup, high performance NVMe storage, and unmatched DDoS protection in India." />
        <meta property="twitter:image" content="https://creepercastle.cloud/logo.png" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://creepercastle.cloud/" />
        
        {/* Favicon */}
        <link rel="icon" href="/lovable-uploads/394abece-307b-48f2-8c38-4d2123607648.png" type="image/png" />
      </Helmet>
      
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

      {/* Custom cursor elements */}
      <div className="custom-cursor">
        <div ref={cursorDotRef} className="cursor-dot"></div>
        <div ref={cursorOutlineRef} className="cursor-outline"></div>
      </div>
    </>
  );
};

export default Index;
