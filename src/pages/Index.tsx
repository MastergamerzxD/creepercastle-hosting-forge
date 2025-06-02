import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import PricingSection from "@/components/PricingSection";
import LocationsSection from "@/components/LocationsSection";
import CreeperShieldSection from "@/components/CreeperShieldSection";
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
    
    // Simulate loading time (minimum 1 second, maximum 1.5 seconds)
    const timer = setTimeout(() => {
      setLoading(false);
      // Scroll to top after loading
      window.scrollTo(0, 0);
    }, Math.max(1000, Math.min(1500, Math.random() * 500 + 1000)));
    
    return () => {
      clearTimeout(timer);
    };
  }, []);

  // Handle hash navigation for smooth scrolling
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

    // Initial check for hash on page load
    handleHashChange();
    
    // Add event listener for hash changes
    window.addEventListener('hashchange', handleHashChange);
    
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
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
    "logo": "/lovable-uploads/a5ede7d4-e1bf-4925-84dd-4b075648dc11.png",
    "description": "Premium Minecraft server hosting services in India with best-in-class hardware, DDoS protection, and instant setup.",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "India",
      "addressRegion": "Mumbai, Delhi"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "customer support",
      "email": "support@creepercastle.in"
    },
    "sameAs": [
      "https://discord.gg/RuQ9neH56S"
    ]
  };
  
  const offerStructuredData = {
    "@context": "https://schema.org",
    "@type": "AggregateOffer",
    "itemOffered": {
      "@type": "Service",
      "name": "Minecraft Server Hosting",
      "description": "Premium Minecraft server hosting with DDoS protection and high performance hardware"
    },
    "lowPrice": "99",
    "highPrice": "672",
    "priceCurrency": "INR",
    "offerCount": "6"
  };

  // FAQ structured data
  const faqStructuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How quickly can I get my Minecraft server set up?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our servers are set up instantly! After completing your purchase, you'll have immediate access to your Minecraft server control panel."
        }
      },
      {
        "@type": "Question",
        "name": "Where are your server locations?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We have high-performance servers in Mumbai and Delhi, India, providing low-latency connections for Indian players."
        }
      },
      {
        "@type": "Question",
        "name": "What payment methods do you accept?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We accept credit/debit cards, UPI, and various other local payment methods for your convenience."
        }
      },
      {
        "@type": "Question",
        "name": "Do you offer DDoS protection?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes! All our plans include basic DDoS protection, and we offer advanced protection through our CreeperShield service."
        }
      }
    ]
  };

  if (loading) {
    return <LoadingScreen />;
  }

  return (
    <>
      <Helmet>
        <title>CreeperCastle.cloud - Best Minecraft Server Hosting in India</title>
        <meta name="description" content="CreeperCastle.cloud offers premium Minecraft hosting with instant setup, high performance NVMe storage, and unmatched DDoS protection in India. Starting at just ₹99/month." />
        <meta name="keywords" content="minecraft hosting india, minecraft server hosting, minecraft smp hosting, bedrock servers, java servers, minecraft india, ddos protection, minecraft mods, game server, minecraft multiplayer, best minecraft hosting india, budget minecraft server, modded minecraft hosting, minecraft plugins, cheap minecraft hosting, affordable minecraft server india" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://creepercastle.cloud/" />
        <meta property="og:title" content="CreeperCastle.cloud - Best Minecraft Server Hosting in India" />
        <meta property="og:description" content="Premium Minecraft hosting with instant setup, high performance NVMe storage, and unmatched DDoS protection in India. Starting at just ₹99/month." />
        <meta property="og:image" content="/lovable-uploads/a5ede7d4-e1bf-4925-84dd-4b075648dc11.png" />
        <meta property="og:image:alt" content="CreeperCastle.cloud - Minecraft Server Hosting" />
        <meta property="og:site_name" content="CreeperCastle.cloud" />
        <meta property="og:locale" content="en_IN" />
        
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://creepercastle.cloud/" />
        <meta property="twitter:title" content="CreeperCastle.cloud - Best Minecraft Server Hosting in India" />
        <meta property="twitter:description" content="Premium Minecraft hosting with instant setup, high performance NVMe storage, and unmatched DDoS protection in India. Starting at just ₹99/month." />
        <meta property="twitter:image" content="/lovable-uploads/a5ede7d4-e1bf-4925-84dd-4b075648dc11.png" />
        
        {/* Additional Meta Tags */}
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />
        <meta name="theme-color" content="#50C878" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="CreeperCastle.cloud" />
        <meta name="application-name" content="CreeperCastle.cloud" />
        <meta name="msapplication-TileColor" content="#50C878" />
        <meta name="msapplication-TileImage" content="/lovable-uploads/570fb7e4-e36a-4bb5-a9ef-be9e7ae57b15.png" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://creepercastle.cloud/" />
        
        {/* Favicon */}
        <link rel="icon" href="/lovable-uploads/570fb7e4-e36a-4bb5-a9ef-be9e7ae57b15.png" type="image/png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/lovable-uploads/570fb7e4-e36a-4bb5-a9ef-be9e7ae57b15.png" />
        
        {/* JSON-LD Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(businessStructuredData)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(offerStructuredData)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(faqStructuredData)}
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
          {/* Enhanced background with underwater Minecraft scene */}
          <div className="fixed inset-0 z-0 pointer-events-none">
            {/* Background image overlay with underwater Minecraft scene */}
            <div 
              className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40" 
              style={{ backgroundImage: 'url("/lovable-uploads/aecdd243-6cbd-4e56-82a8-b494c26108cc.png")' }}
            ></div>
            
            {/* Gradient overlay for better text visibility */}
            <div className="absolute inset-0 bg-gradient-to-b from-navy-dark/90 via-navy/80 to-navy-light/70"></div>
            
            {/* Animated particles */}
            {Array.from({ length: 10 }).map((_, i) => (
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
        </motion.div>
      </AnimatePresence>
    </>
  );
};

export default Index;
