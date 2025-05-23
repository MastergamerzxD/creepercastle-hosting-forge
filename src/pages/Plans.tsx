
import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Server, Shield, Cloud } from "lucide-react";

const Plans = () => {
  const navigate = useNavigate();
  
  // JSON-LD structured data for better SEO
  const plansStructuredData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "item": {
          "@type": "Service",
          "name": "Minecraft Hosting",
          "description": "High-performance Minecraft servers with instant setup, one-click plugin installation, and 24/7 expert support.",
          "url": "https://creepercastle.cloud/plans/minecraft",
          "provider": {
            "@type": "Organization",
            "name": "CreeperCastle.cloud"
          },
          "offers": {
            "@type": "Offer",
            "price": "99",
            "priceCurrency": "INR"
          }
        }
      },
      {
        "@type": "ListItem",
        "position": 2,
        "item": {
          "@type": "Service",
          "name": "CreeperShield DDoS Protection",
          "description": "Advanced DDoS protection specifically designed for Minecraft servers.",
          "url": "https://creepercastle.cloud/plans/creepershield",
          "provider": {
            "@type": "Organization",
            "name": "CreeperCastle.cloud"
          }
        }
      },
      {
        "@type": "ListItem",
        "position": 3,
        "item": {
          "@type": "Service",
          "name": "VPS Hosting",
          "description": "High-performance VPS solutions with dedicated resources, complete control, and enterprise-grade hardware.",
          "url": "https://creepercastle.cloud/plans/vps",
          "provider": {
            "@type": "Organization",
            "name": "CreeperCastle.cloud"
          }
        }
      }
    ]
  };
  
  return (
    <>
      <Helmet>
        <title>Minecraft & VPS Hosting Plans | CreeperCastle.cloud</title>
        <meta 
          name="description" 
          content="Affordable Minecraft server hosting plans starting at ₹99/month. Choose from Minecraft hosting, VPS plans, or DDoS protection services optimized for Indian gamers."
        />
        <meta
          name="keywords"
          content="minecraft hosting plans, minecraft server pricing, cheap minecraft hosting india, vps hosting india, ddos protection, minecraft server costs, budget minecraft server, creeper castle pricing"
        />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://creepercastle.cloud/plans" />
        <meta property="og:title" content="Minecraft & VPS Hosting Plans | CreeperCastle.cloud" />
        <meta property="og:description" content="Affordable Minecraft server hosting plans starting at ₹99/month. Choose from Minecraft hosting, VPS plans, or DDoS protection services." />
        <meta property="og:image" content="/lovable-uploads/a5ede7d4-e1bf-4925-84dd-4b075648dc11.png" />
        <meta property="og:image:alt" content="CreeperCastle Hosting Plans" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Minecraft & VPS Hosting Plans | CreeperCastle.cloud" />
        <meta name="twitter:description" content="Affordable Minecraft server hosting plans starting at ₹99/month. Low-latency servers optimized for Indian gamers." />
        <meta name="twitter:image" content="/lovable-uploads/a5ede7d4-e1bf-4925-84dd-4b075648dc11.png" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://creepercastle.cloud/plans" />
        
        {/* JSON-LD Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify(plansStructuredData)}
        </script>
      </Helmet>
      
      <div className="flex flex-col min-h-screen bg-navy text-white">
        <div className="fixed inset-0 z-0 pointer-events-none">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30" 
            style={{ backgroundImage: 'url("/lovable-uploads/4fca9c12-4db7-435f-a6c5-3fe7e04cf205.png")' }}
          ></div>
          
          <div className="absolute inset-0 bg-gradient-to-b from-navy-dark/90 via-navy/80 to-navy-light/70"></div>
        </div>
        
        <Navbar />
        
        <main className="flex-grow pt-24 relative z-10">
          <section className="py-12">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <motion.h1 
                  className="text-4xl md:text-5xl font-bold mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  Our <span className="text-creeper">Hosting Solutions</span>
                </motion.h1>
                <motion.p 
                  className="text-xl text-gray-300 max-w-3xl mx-auto"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  Choose the perfect hosting solution for your needs.
                </motion.p>
              </div>
              
              <motion.div 
                className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <motion.div 
                  className="flex flex-col items-center text-center p-8 bg-navy-light rounded-xl border border-gray-800 hover:border-creeper cursor-pointer transition-all hover:-translate-y-2"
                  onClick={() => navigate("/plans/minecraft")}
                  whileHover={{ scale: 1.02 }}
                >
                  <Server className="h-20 w-20 text-creeper mb-6" />
                  <h2 className="text-2xl font-bold mb-4">Minecraft Hosting</h2>
                  <p className="text-gray-400 mb-8">
                    High-performance Minecraft servers with instant setup, one-click plugin installation,
                    and 24/7 expert support. Perfect for any size community.
                  </p>
                  <div className="mt-auto">
                    <Button className="minecraft-btn" onClick={() => navigate("/plans/minecraft")}>
                      View Minecraft Plans
                    </Button>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="flex flex-col items-center text-center p-8 bg-navy-light rounded-xl border border-gray-800 hover:border-creeper cursor-pointer transition-all hover:-translate-y-2"
                  onClick={() => navigate("/plans/creepershield")}
                  whileHover={{ scale: 1.02 }}
                >
                  <Shield className="h-20 w-20 text-creeper mb-6" />
                  <h2 className="text-2xl font-bold mb-4">CreeperShield</h2>
                  <p className="text-gray-400 mb-8">
                    Advanced DDoS protection specifically designed for Minecraft servers. 
                    Keep your server online even during the most intense attacks.
                  </p>
                  <div className="mt-auto">
                    <Button className="minecraft-btn" onClick={() => navigate("/plans/creepershield")}>
                      View CreeperShield Plans
                    </Button>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="flex flex-col items-center text-center p-8 bg-navy-light rounded-xl border border-gray-800 hover:border-creeper cursor-pointer transition-all hover:-translate-y-2"
                  onClick={() => navigate("/plans/vps")}
                  whileHover={{ scale: 1.02 }}
                >
                  <Cloud className="h-20 w-20 text-creeper mb-6" />
                  <h2 className="text-2xl font-bold mb-4">VPS Hosting</h2>
                  <p className="text-gray-400 mb-8">
                    High-performance VPS solutions with dedicated resources, 
                    complete control, and enterprise-grade hardware.
                  </p>
                  <div className="mt-auto">
                    <Button className="minecraft-btn" onClick={() => navigate("/plans/vps")}>
                      View VPS Plans
                    </Button>
                  </div>
                </motion.div>
              </motion.div>
              
              <div className="mt-16 text-center">
                <h2 className="text-2xl md:text-3xl font-bold mb-6">
                  Need a <span className="text-creeper">Custom Solution</span>?
                </h2>
                <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                  Contact our team for a custom hosting solution tailored to your specific needs.
                </p>
                <Button className="minecraft-btn" asChild>
                  <a href="https://discord.gg/RuQ9neH56S" target="_blank" rel="noopener noreferrer">
                    Contact for Custom Solutions
                  </a>
                </Button>
              </div>
            </div>
          </section>
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default Plans;
