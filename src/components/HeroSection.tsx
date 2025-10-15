
import { Button } from "@/components/ui/button";
import { Server, Shield, Cpu } from "lucide-react";
import { motion } from "framer-motion";

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
    <div className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden pixel-grid">
      {/* Minecraft-style background with floating blocks */}
      <div className="absolute inset-0 overflow-hidden z-0">
        {/* Floating Minecraft-style blocks */}
        {Array(8).fill(0).map((_, i) => (
          <motion.div 
            key={i}
            className="absolute"
            initial={{ 
              x: Math.random() * 100 + "%", 
              y: Math.random() * 100 + "%",
              rotate: Math.random() * 20 - 10,
              scale: 0.3 + Math.random() * 0.4
            }}
            animate={{ 
              y: ["-10%", "110%"],
              rotate: [-10, 10, -10],
              opacity: [0.1, 0.2, 0.1]
            }}
            transition={{ 
              duration: 10 + Math.random() * 15,
              repeat: Infinity,
              ease: "linear",
              delay: Math.random() * 5
            }}
          >
            <div className={`w-16 h-16 rounded-pixel ${i % 3 === 0 ? 'grass-bg' : i % 3 === 1 ? 'dirt-bg' : 'stone-bg'} border-2 border-black/20`} />
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
              className="text-3xl md:text-4xl lg:text-5xl font-minecraft mb-6 leading-tight"
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
              {" "}Server
            </motion.h1>
            
            <motion.p 
              className="text-lg font-pixel text-gray-300 mb-8 leading-relaxed"
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
                <Button className="minecraft-btn rounded-pixel text-base py-6 px-8 pixel-animate font-minecraft" asChild>
                  <a href="https://billing.creepercastle.in/" target="_blank" rel="noopener noreferrer">
                    Store
                  </a>
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button variant="outline" className="border-4 border-creeper text-creeper hover:bg-creeper/20 rounded-pixel text-base py-6 px-8 font-minecraft shadow-pixel" asChild>
                  <a href="https://discord.gg/RuQ9neH56S" target="_blank" rel="noopener noreferrer">
                    Discord
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
                <div className="mr-3 p-2 grass-bg rounded-pixel border-2 border-grass-dark animate-block-pop">
                  <Server className="text-white h-5 w-5" />
                </div>
                <div>
                  <p className="font-pixel text-sm">Instant Setup</p>
                </div>
              </motion.div>
              
              <motion.div 
                className="flex items-center"
                whileHover={{ x: 5, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <div className="mr-3 p-2 bg-purple-600 rounded-pixel border-2 border-purple-800 animate-block-pop animation-delay-500">
                  <Shield className="text-white h-5 w-5" />
                </div>
                <div>
                  <p className="font-pixel text-sm">CreeperShield™</p>
                </div>
              </motion.div>
              
              <motion.div 
                className="flex items-center"
                whileHover={{ x: 5, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <div className="mr-3 p-2 stone-bg rounded-pixel border-2 border-stone-dark animate-block-pop animation-delay-1000">
                  <Cpu className="text-white h-5 w-5" />
                </div>
                <div>
                  <p className="font-pixel text-sm">NVMe Storage</p>
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
                className="absolute inset-0 rounded-pixel blur-3xl bg-creeper/20"
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
                className="w-4/5 mx-auto rounded-block border-4 border-creeper shadow-pixel-lg"
                style={{ imageRendering: 'pixelated' }}
                animate={{ y: [-10, 10, -10] }}
                transition={{ 
                  y: {
                    duration: 3,
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
