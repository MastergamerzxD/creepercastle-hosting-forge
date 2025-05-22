
import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Server, Shield, Cloud } from "lucide-react";

const Plans = () => {
  const navigate = useNavigate();
  
  return (
    <>
      <Helmet>
        <title>Hosting Plans | CreeperCastle.cloud</title>
        <meta 
          name="description" 
          content="Explore our range of hosting solutions - from Minecraft server hosting to VPS plans and DDoS protection services."
        />
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
