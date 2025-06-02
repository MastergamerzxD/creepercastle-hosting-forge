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
import { Button } from "@/components/ui/button";
import { Server, Shield } from "lucide-react";

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
            <section id="pricing">
              <PricingSection />
            </section>
            
            {/* Services Cards Section */}
            <section className="py-20 bg-navy">
              <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {/* VPS Card */}
                  <div className="bg-navy-light rounded-xl p-6 border border-gray-800 hover:border-creeper/50 transition-all hover:transform hover:-translate-y-2">
                    <div className="text-center mb-6">
                      <div className="w-16 h-16 bg-creeper/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                        <Server className="h-8 w-8 text-creeper" />
                      </div>
                      <h3 className="text-xl font-bold mb-2">VPS Hosting</h3>
                      <p className="text-gray-400 text-sm">High-performance virtual private servers</p>
                    </div>
                    
                    <div className="space-y-3 mb-6">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-400">Starting RAM:</span>
                        <span className="text-creeper">32GB</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-400">Starting CPU:</span>
                        <span className="text-creeper">10 vCores</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-400">Storage:</span>
                        <span className="text-creeper">300GB NVMe</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-400">Location:</span>
                        <span className="text-creeper">Delhi, India</span>
                      </div>
                    </div>
                    
                    <div className="text-center">
                      <div className="text-2xl font-bold text-creeper mb-2">₹3,300/mo</div>
                      <Button className="w-full minecraft-btn" asChild>
                        <a href="/plans/vps">View Plans</a>
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
                        <a href="/plans/minecraft">View Plans</a>
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
                        <a href="/plans/creepershield">View Plans</a>
                      </Button>
                    </div>
                  </div>
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
