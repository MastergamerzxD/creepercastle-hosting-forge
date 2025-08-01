
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
import FreeHostingPromotion from "@/components/FreeHostingPromotion";
import { Button } from "@/components/ui/button";
import { Server, Shield, Settings } from "lucide-react";
import StructuredData from "@/components/StructuredData";

// Import framer-motion for animations
import { motion, AnimatePresence } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

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
        <title>CreeperCastle.cloud - Best Minecraft Server Hosting in India | Premium Gaming Servers</title>
        <meta name="description" content="India's #1 Minecraft server hosting provider with instant setup, NVMe storage, DDoS protection & 24/7 support. Starting at ₹99/month. Mumbai & Delhi servers." />
        <meta name="keywords" content="minecraft hosting india, minecraft server hosting, minecraft smp hosting, bedrock servers, java servers, minecraft india, ddos protection, minecraft mods, game server, minecraft multiplayer, best minecraft hosting india, budget minecraft server, modded minecraft hosting, minecraft plugins, cheap minecraft hosting, affordable minecraft server india, mumbai minecraft hosting, delhi minecraft hosting" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://creepercastle.cloud/" />
        <meta property="og:title" content="CreeperCastle.cloud - Best Minecraft Server Hosting in India" />
        <meta property="og:description" content="Premium Minecraft hosting with instant setup, high performance NVMe storage, and unmatched DDoS protection in India. Starting at just ₹99/month." />
        <meta property="og:image" content="https://creepercastle.cloud/lovable-uploads/a5ede7d4-e1bf-4925-84dd-4b075648dc11.png" />
        <meta property="og:image:alt" content="CreeperCastle.cloud - Minecraft Server Hosting" />
        <meta property="og:site_name" content="CreeperCastle.cloud" />
        <meta property="og:locale" content="en_IN" />
        
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://creepercastle.cloud/" />
        <meta property="twitter:title" content="CreeperCastle.cloud - Best Minecraft Server Hosting in India" />
        <meta property="twitter:description" content="Premium Minecraft hosting with instant setup, high performance NVMe storage, and unmatched DDoS protection in India. Starting at just ₹99/month." />
        <meta property="twitter:image" content="https://creepercastle.cloud/lovable-uploads/a5ede7d4-e1bf-4925-84dd-4b075648dc11.png" />
        
        {/* Additional Meta Tags */}
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <meta name="googlebot" content="index, follow" />
        <meta name="theme-color" content="#50C878" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="CreeperCastle.cloud" />
        <meta name="application-name" content="CreeperCastle.cloud" />
        <meta name="msapplication-TileColor" content="#50C878" />
        <meta name="msapplication-TileImage" content="/lovable-uploads/570fb7e4-e36a-4bb5-a9ef-be9e7ae57b15.png" />
        <meta name="author" content="CreeperCastle.cloud" />
        <meta name="publisher" content="CreeperCastle.cloud" />
        <meta name="geo.region" content="IN" />
        <meta name="geo.placename" content="Mumbai, Delhi" />
        <meta name="geo.position" content="19.0760;72.8777" />
        <meta name="ICBM" content="19.0760, 72.8777" />
        
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

      <StructuredData type="website" />
      <StructuredData type="organization" />
      
      {/* Free Hosting Promotion Popup */}
      <FreeHostingPromotion />
      
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
            
            {/* Services Cards Section */}
            <section className="py-20 bg-navy">
              <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {/* Other Hosting Card */}
                  <div className="bg-navy-light rounded-xl p-6 border border-gray-800 hover:border-creeper/50 transition-all hover:transform hover:-translate-y-2">
                    <div className="text-center mb-6">
                      <div className="w-16 h-16 bg-creeper/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                        <Settings className="h-8 w-8 text-creeper" />
                      </div>
                      <h3 className="text-xl font-bold mb-2">Other Hosting</h3>
                      <p className="text-gray-400 text-sm">VPS Hosting & Discord Bot Hosting</p>
                    </div>
                    
                    <div className="space-y-3 mb-6">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-400">VPS Hosting:</span>
                        <span className="text-creeper">From ₹299</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-400">Discord Hosting:</span>
                        <span className="text-creeper">From ₹22</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-400">Features:</span>
                        <span className="text-creeper">Full Control</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-400">Support:</span>
                        <span className="text-creeper">24/7 Expert</span>
                      </div>
                    </div>
                    
                    <div className="text-center">
                      <div className="text-2xl font-bold text-creeper mb-2">Starting ₹22/mo</div>
                      <Button className="w-full minecraft-btn" asChild>
                        <Link to="/plans/other">View Plans</Link>
                      </Button>
                    </div>
                  </div>

                  {/* Minecraft Card */}
                  <div className="bg-navy-light rounded-xl p-6 border-2 border-creeper relative hover:transform hover:-translate-y-2 transition-all">
                    <div className="absolute top-0 right-0 bg-creeper text-navy-dark font-medium text-sm px-3 py-1 rounded-bl-lg">
                      Most Popular
                    </div>
                    
                    <div className="text-center mb-6">
                      <div className="w-16 h-16 bg-creeper/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                        <Server className="h-8 w-8 text-creeper" />
                      </div>
                      <h3 className="text-xl font-bold mb-2">Minecraft Hosting</h3>
                      <p className="text-gray-400 text-sm">Optimized servers for the best Minecraft experience</p>
                    </div>
                    
                    <div className="space-y-3 mb-6">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-400">Starting RAM:</span>
                        <span className="text-creeper">2GB</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-400">Starting CPU:</span>
                        <span className="text-creeper">1 vCore</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-400">Storage:</span>
                        <span className="text-creeper">30GB NVMe</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-400">Location:</span>
                        <span className="text-creeper">Delhi, India</span>
                      </div>
                    </div>
                    
                    <div className="text-center">
                      <div className="text-2xl font-bold text-creeper mb-2">₹99/mo</div>
                      <Button className="w-full minecraft-btn" asChild>
                        <Link to="/plans/minecraft">View Plans</Link>
                      </Button>
                    </div>
                  </div>

                  {/* CreeperShield Card */}
                  <div className="bg-navy-light rounded-xl p-6 border border-gray-800 hover:border-creeper/50 transition-all hover:transform hover:-translate-y-2">
                    <div className="text-center mb-6">
                      <div className="w-16 h-16 bg-creeper/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                        <Shield className="h-8 w-8 text-creeper" />
                      </div>
                      <h3 className="text-xl font-bold mb-2">CreeperShield</h3>
                      <p className="text-gray-400 text-sm">Advanced DDoS protection for your servers</p>
                    </div>
                    
                    <div className="space-y-3 mb-6">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-400">Bandwidth:</span>
                        <span className="text-creeper">1 Tbps+</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-400">Response Time:</span>
                        <span className="text-creeper">&lt;1.1ms</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-400">Protection:</span>
                        <span className="text-creeper">Layer 3 & 4</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-400">Uptime:</span>
                        <span className="text-creeper">99.9%</span>
                      </div>
                    </div>
                    
                    <div className="text-center">
                      <div className="text-2xl font-bold text-creeper mb-2">₹84/mo</div>
                      <Button className="w-full minecraft-btn" asChild>
                        <Link to="/plans/creepershield">View Plans</Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* CreeperPanel Section */}
            <section className="py-16 bg-navy-light">
              <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto text-center">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                  >
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">
                      Manage with <span className="text-creeper">CreeperPanel</span>
                    </h2>
                    <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                      Experience our enhanced Pterodactyl-based game server management system with 
                      advanced security, real-time monitoring, and intuitive controls designed 
                      specifically for seamless Minecraft server administration.
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                      <div className="bg-navy rounded-lg p-6 border border-gray-800">
                        <Shield className="h-8 w-8 text-creeper mx-auto mb-3" />
                        <h3 className="font-semibold mb-2">Advanced Security</h3>
                        <p className="text-sm text-gray-400">Multi-layer protection with SSL encryption</p>
                      </div>
                      
                      <div className="bg-navy rounded-lg p-6 border border-gray-800">
                        <Server className="h-8 w-8 text-creeper mx-auto mb-3" />
                        <h3 className="font-semibold mb-2">Real-time Monitoring</h3>
                        <p className="text-sm text-gray-400">Live server stats and performance metrics</p>
                      </div>
                      
                      <div className="bg-navy rounded-lg p-6 border border-gray-800">
                        <Settings className="h-8 w-8 text-creeper mx-auto mb-3" />
                        <h3 className="font-semibold mb-2">Easy Management</h3>
                        <p className="text-sm text-gray-400">Intuitive interface for all your needs</p>
                      </div>
                    </div>
                    
                    <Button className="minecraft-btn text-lg px-8 py-3" asChild>
                      <Link to="/creeperpanel">Explore CreeperPanel</Link>
                    </Button>
                  </motion.div>
                </div>
              </div>
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
