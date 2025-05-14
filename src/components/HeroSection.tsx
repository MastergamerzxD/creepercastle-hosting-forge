
import { Button } from "@/components/ui/button";
import { Server, Shield, Cpu } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <div className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <motion.div 
          className="absolute top-20 left-10 w-4 h-4 bg-creeper rounded-sm opacity-20"
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        ></motion.div>
        <motion.div 
          className="absolute top-40 right-20 w-6 h-6 bg-creeper rounded-sm opacity-20"
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        ></motion.div>
        <motion.div 
          className="absolute bottom-20 left-1/4 w-5 h-5 bg-creeper rounded-sm opacity-20"
          animate={{ y: [0, -12, 0] }}
          transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        ></motion.div>
        <motion.div 
          className="absolute top-1/3 right-1/4 w-3 h-3 bg-creeper rounded-sm opacity-20"
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
        ></motion.div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center">
          <motion.div 
            className="lg:w-1/2 mb-10 lg:mb-0"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Unleash Your <motion.span 
                className="text-creeper"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.4 }}
              >Minecraft</motion.span> Server's True Potential
            </motion.h1>
            
            <motion.p 
              className="text-xl text-gray-300 mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Premium hosting with instant setup, high performance hardware, and unmatched DDoS protection. Your Minecraft adventure starts here.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <Button className="minecraft-btn rounded-md text-lg py-6 px-8 relative overflow-hidden group" asChild>
                <Link to="https://store.creepercastle.cloud" target="_blank">
                  <span className="relative z-10">Store</span>
                  <span className="absolute inset-0 bg-creeper-light opacity-0 group-hover:opacity-20 transition-opacity duration-300"></span>
                </Link>
              </Button>
              <Button variant="outline" className="border-creeper text-creeper hover:bg-creeper/10 rounded-md text-lg py-6 px-8 relative overflow-hidden group" asChild>
                <Link to="https://discord.gg/creepercastle" target="_blank">
                  <span className="relative z-10">Discord</span>
                  <span className="absolute inset-0 bg-creeper/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                </Link>
              </Button>
            </motion.div>
            
            <motion.div 
              className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <motion.div 
                className="flex items-center"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <div className="mr-3 p-2 bg-creeper/10 rounded-full">
                  <Server className="text-creeper h-5 w-5" />
                </div>
                <div>
                  <p className="font-medium">Instant Setup</p>
                </div>
              </motion.div>
              
              <motion.div 
                className="flex items-center"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <div className="mr-3 p-2 bg-creeper/10 rounded-full">
                  <Shield className="text-creeper h-5 w-5" />
                </div>
                <div>
                  <p className="font-medium">CreeperShield™</p>
                </div>
              </motion.div>
              
              <motion.div 
                className="flex items-center"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <div className="mr-3 p-2 bg-creeper/10 rounded-full">
                  <Cpu className="text-creeper h-5 w-5" />
                </div>
                <div>
                  <p className="font-medium">NVMe Storage</p>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="lg:w-1/2 flex justify-center"
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="relative">
              <motion.div 
                className="absolute inset-0 rounded-full blur-3xl bg-creeper/20"
                animate={{ 
                  scale: [0.8, 1, 0.8],
                  opacity: [0.2, 0.5, 0.2]
                }}
                transition={{ 
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              ></motion.div>
              <motion.img 
                src="https://www.pngall.com/wp-content/uploads/2/Minecraft-Creeper-PNG-HD-Image.png" 
                alt="Minecraft Server Hosting" 
                className="w-4/5 mx-auto rounded-lg shadow-2xl"
                animate={{ y: [-10, 10, -10] }}
                transition={{ 
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                onError={(e) => {
                  e.currentTarget.src = "https://images.unsplash.com/photo-1639653279211-09958a51fb00?q=80&w=1974&auto=format&fit=crop";
                }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
