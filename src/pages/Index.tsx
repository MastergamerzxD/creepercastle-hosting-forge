
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
import { motion, AnimatePresence } from "framer-motion";
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

  // JSON-LD structured data for better SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "CreeperCastle.cloud",
    "alternateName": "CreeperCastle",
    "url": "https://creepercastle.cloud/",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://creepercastle.cloud/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  const businessStructuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "CreeperCastle.cloud",
    "url": "https://creepercastle.cloud/",
    "logo": "https://creepercastle.cloud/logo.png",
    "description": "Premium Minecraft server hosting services in India with best-in-class hardware, DDoS protection, and instant setup.",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "India"
    },
    "sameAs": [
      "https://discord.gg/creepercastle",
      "https://twitter.com/creepercastle",
      "https://instagram.com/creepercastle"
    ]
  };

  if (loading) {
    return <LoadingScreen />;
  }

  return (
    <>
      <Helmet>
        <title>CreeperCastle.cloud - Premium Minecraft Server Hosting in India</title>
        <meta name="description" content="CreeperCastle.cloud offers premium Minecraft hosting with instant setup, high performance NVMe storage, and unmatched DDoS protection in India." />
        <meta name="keywords" content="minecraft hosting, minecraft server, minecraft india, ddos protection, minecraft mods, game server, minecraft multiplayer, best minecraft hosting, budget minecraft server, modded minecraft hosting, minecraft plugins" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://creepercastle.cloud/" />
        <meta property="og:title" content="CreeperCastle.cloud - Premium Minecraft Server Hosting in India" />
        <meta property="og:description" content="Premium Minecraft hosting with instant setup, high performance NVMe storage, and unmatched DDoS protection in India." />
        <meta property="og:image" content="https://creepercastle.cloud/logo.png" />
        <meta property="og:image:alt" content="CreeperCastle.cloud Logo" />
        <meta property="og:site_name" content="CreeperCastle.cloud" />
        <meta property="og:locale" content="en_US" />
        
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://creepercastle.cloud/" />
        <meta property="twitter:title" content="CreeperCastle.cloud - Premium Minecraft Server Hosting in India" />
        <meta property="twitter:description" content="Premium Minecraft hosting with instant setup, high performance NVMe storage, and unmatched DDoS protection in India." />
        <meta property="twitter:image" content="https://creepercastle.cloud/logo.png" />
        <meta property="twitter:site" content="@creepercastle" />
        <meta property="twitter:creator" content="@creepercastle" />
        
        {/* Additional Meta Tags */}
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />
        <meta name="theme-color" content="#50C878" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="CreeperCastle.cloud" />
        <meta name="application-name" content="CreeperCastle.cloud" />
        <meta name="msapplication-TileColor" content="#50C878" />
        <meta name="msapplication-TileImage" content="https://creepercastle.cloud/mstile-144x144.png" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://creepercastle.cloud/" />
        
        {/* Favicon */}
        <link rel="icon" href="/lovable-uploads/394abece-307b-48f2-8c38-4d2123607648.png" type="image/png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/lovable-uploads/394abece-307b-48f2-8c38-4d2123607648.png" />
        
        {/* JSON-LD Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(businessStructuredData)}
        </script>
      </Helmet>
      
      <AnimatePresence mode="wait">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col min-h-screen bg-navy text-white relative"
        >
          {/* Enhanced animated background with particles */}
          <div className="fixed inset-0 z-0 pointer-events-none">
            <div className="absolute inset-0 bg-gradient-to-b from-navy-dark via-navy to-navy-light opacity-80"></div>
            {Array.from({ length: 15 }).map((_, i) => (
              <motion.div
                key={i}
                className="absolute bg-creeper/20 rounded-full"
                initial={{
                  width: Math.random() * 6 + 2,
                  height: Math.random() * 6 + 2,
                  x: Math.random() * 100 + "%",
                  y: Math.random() * 100 + "%",
                  opacity: Math.random() * 0.5,
                }}
                animate={{
                  y: ["-10%", "110%"],
                  opacity: [0, 0.6, 0],
                }}
                transition={{
                  duration: Math.random() * 15 + 20,
                  repeat: Infinity,
                  ease: "linear",
                  delay: Math.random() * 10,
                }}
              />
            ))}
          </div>
          
          <Navbar />
          
          <main className="flex-grow pt-16 relative z-10">
            <section id="home">
              <HeroSection />
            </section>
            <section id="pricing">
              <PricingSection />
            </section>
            <section id="locations">
              <LocationsSection />
            </section>
            <section id="features">
              <CreeperShieldSection />
            </section>
            <ControlPanelSection />
            <DiscordSection />
            <ReviewsSection />
            <CtaSection />
          </main>
          
          <Footer />
        </motion.div>
      </AnimatePresence>
    </>
  );
};

export default Index;
