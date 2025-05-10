
import { Button } from "@/components/ui/button";
import { Server, Shield, Cpu } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <div className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <div className="absolute top-20 left-10 w-4 h-4 bg-creeper rounded-sm animate-float opacity-20"></div>
        <div className="absolute top-40 right-20 w-6 h-6 bg-creeper rounded-sm animate-float animation-delay-1000 opacity-20"></div>
        <div className="absolute bottom-20 left-1/4 w-5 h-5 bg-creeper rounded-sm animate-float animation-delay-2000 opacity-20"></div>
        <div className="absolute top-1/3 right-1/4 w-3 h-3 bg-creeper rounded-sm animate-float animation-delay-1500 opacity-20"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 mb-10 lg:mb-0">
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Unleash Your <span className="text-creeper">Minecraft</span> Server's True Potential
            </motion.h1>
            
            <motion.p 
              className="text-xl text-gray-300 mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Premium hosting with instant setup, high performance hardware, and unmatched DDoS protection. Your Minecraft adventure starts here.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Button className="minecraft-btn rounded-md text-lg py-6 px-8" asChild>
                <Link to="https://store.creepercastle.cloud" target="_blank">Store</Link>
              </Button>
              <Button variant="outline" className="border-creeper text-creeper hover:bg-creeper/10 rounded-md text-lg py-6 px-8" asChild>
                <Link to="https://discord.gg/creepercastle" target="_blank">Discord</Link>
              </Button>
            </motion.div>
            
            <motion.div 
              className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <div className="flex items-center">
                <div className="mr-3 p-2 bg-creeper/10 rounded-full">
                  <Server className="text-creeper h-5 w-5" />
                </div>
                <div>
                  <p className="font-medium">Instant Setup</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="mr-3 p-2 bg-creeper/10 rounded-full">
                  <Shield className="text-creeper h-5 w-5" />
                </div>
                <div>
                  <p className="font-medium">CreeperShield™</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="mr-3 p-2 bg-creeper/10 rounded-full">
                  <Cpu className="text-creeper h-5 w-5" />
                </div>
                <div>
                  <p className="font-medium">NVMe Storage</p>
                </div>
              </div>
            </motion.div>
          </div>
          
          <motion.div 
            className="lg:w-1/2 flex justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
          >
            <div className="relative">
              <img 
                src="https://cdn.pixabay.com/photo/2014/11/13/15/23/minecraft-529462_1280.jpg" 
                alt="Minecraft Server Hosting" 
                className="w-4/5 mx-auto rounded-lg shadow-2xl animate-float"
              />
              <div className="absolute inset-0 rounded-full blur-3xl bg-creeper/20 animate-pulse-slow" style={{transform: 'scale(0.8)'}}></div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
