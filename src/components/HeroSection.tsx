
import { Button } from "@/components/ui/button";
import { Server, Shield, Cpu } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const HeroSection = () => {
  // Enhanced rotating text variants with more attractive Minecraft hosting related keywords
  const textVariants = [
    "Minecraft", 
    "SMP", 
    "Modded", 
    "Bedrock", 
    "Java", 
    "Survival", 
    "Creative", 
    "Adventure", 
    "Skyblock",
    "PvP"
  ];
  
  return (
    <div className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden z-0">
        {/* Floating elements in background */}
        {Array(6).fill(0).map((_, i) => (
          <motion.div 
            key={i}
            className="absolute opacity-10"
            initial={{ 
              x: Math.random() * 100 + "%", 
              y: Math.random() * 100 + "%",
              rotate: Math.random() * 360,
              scale: 0.5 + Math.random() * 0.5
            }}
            animate={{ 
              y: ["-10%", "110%"],
              rotate: [0, 360],
              opacity: [0.05, 0.1, 0.05]
            }}
            transition={{ 
              duration: 15 + Math.random() * 20,
              repeat: Infinity,
              ease: "linear",
              delay: Math.random() * 5
            }}
          >
            <div className="w-16 h-16 bg-creeper/20 rounded-sm" />
          </motion.div>
        ))}
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
              Unleash Your{" "}
              <span className="relative inline-block w-[180px]">
                <span className="invisible">Minecraft</span>
                {textVariants.map((text, index) => (
                  <motion.span 
                    key={text}
                    className="text-creeper absolute top-0 left-0"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ 
                      opacity: [0, 1, 1, 0], 
                      y: [20, 0, 0, -20],
                    }}
                    transition={{ 
                      duration: 2,
                      delay: index * 2,
                      repeat: Infinity,
                      repeatDelay: textVariants.length * 2 - 2
                    }}
                  >
                    {text}
                  </motion.span>
                ))}
              </span>
              {" "}Server's True Potential
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
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button className="minecraft-btn rounded-md text-lg py-6 px-8 relative overflow-hidden group pixel-animate" asChild>
                  <a href="https://billing.creepercastle.in/" target="_blank" rel="noopener noreferrer">
                    <span className="relative z-10">Store</span>
                    <span className="absolute inset-0 bg-creeper-light opacity-0 group-hover:opacity-20 transition-opacity duration-300"></span>
                  </a>
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button variant="outline" className="border-creeper text-creeper hover:bg-creeper/10 rounded-md text-lg py-6 px-8 relative overflow-hidden group" asChild>
                  <a href="https://discord.gg/RuQ9neH56S" target="_blank" rel="noopener noreferrer">
                    <span className="relative z-10">Discord</span>
                    <span className="absolute inset-0 bg-creeper/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  </a>
                </Button>
              </motion.div>
            </motion.div>
            
            <motion.div 
              className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <motion.div 
                className="flex items-center"
                whileHover={{ x: 5, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <div className="mr-3 p-2 bg-creeper/10 rounded-full animate-pulse-slow">
                  <Server className="text-creeper h-5 w-5" />
                </div>
                <div>
                  <p className="font-medium">Instant Setup</p>
                </div>
              </motion.div>
              
              <motion.div 
                className="flex items-center"
                whileHover={{ x: 5, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <div className="mr-3 p-2 bg-creeper/10 rounded-full animate-pulse-slow animation-delay-500">
                  <Shield className="text-creeper h-5 w-5" />
                </div>
                <div>
                  <p className="font-medium">CreeperShield™</p>
                </div>
              </motion.div>
              
              <motion.div 
                className="flex items-center"
                whileHover={{ x: 5, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <div className="mr-3 p-2 bg-creeper/10 rounded-full animate-pulse-slow animation-delay-1000">
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
                className="absolute inset-0 rounded-full blur-3xl bg-creeper/20 animate-morph"
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
                src="/lovable-uploads/570fb7e4-e36a-4bb5-a9ef-be9e7ae57b15.png" 
                alt="CreeperCastle.cloud Logo" 
                className="w-4/5 mx-auto rounded-lg"
                animate={{ y: [-10, 10, -10], rotate: [0, 5, 0, -5, 0] }}
                transition={{ 
                  y: {
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut"
                  },
                  rotate: {
                    duration: 10,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }
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
