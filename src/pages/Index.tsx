
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
import { Helmet } from "react-helmet-async";

const Index = () => {
  const [loading, setLoading] = useState(true);

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

        {/* Add custom cursor styles */}
        <style>
          {`
            body {
              cursor: none;
            }
            a, button {
              cursor: none;
            }
            .custom-cursor {
              position: fixed;
              pointer-events: none;
              z-index: 9999;
            }
            .custom-cursor .cursor-dot {
              position: fixed;
              top: 0;
              left: 0;
              width: 8px;
              height: 8px;
              background-color: #50C878;
              border-radius: 50%;
              transform: translate(-50%, -50%);
              z-index: 9999;
            }
            .custom-cursor .cursor-outline {
              position: fixed;
              top: 0;
              left: 0;
              width: 40px;
              height: 40px;
              background-color: rgba(80, 200, 120, 0.2);
              border: 1px solid #50C878;
              border-radius: 50%;
              transform: translate(-50%, -50%);
              transition: width 0.2s, height 0.2s;
              z-index: 9998;
            }
            a:hover ~ .custom-cursor .cursor-outline,
            button:hover ~ .custom-cursor .cursor-outline {
              width: 60px;
              height: 60px;
              background-color: rgba(80, 200, 120, 0.1);
            }
            @media (max-width: 768px) {
              * {
                cursor: auto !important;
              }
              .custom-cursor {
                display: none;
              }
            }
          `}
        </style>
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

      {/* Custom cursor */}
      <div className="custom-cursor">
        <div className="cursor-dot"></div>
        <div className="cursor-outline"></div>
      </div>

      {/* Custom cursor script */}
      <script dangerouslySetInnerHTML={{
        __html: `
          document.addEventListener('mousemove', (e) => {
            const dot = document.querySelector('.cursor-dot');
            const outline = document.querySelector('.cursor-outline');
            
            if (dot && outline) {
              dot.style.top = e.clientY + 'px';
              dot.style.left = e.clientX + 'px';
              outline.style.top = e.clientY + 'px';
              outline.style.left = e.clientX + 'px';
            }
          });
        `
      }} />
    </>
  );
};

export default Index;
