
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Server, X, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const FreeHostingPromotion = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if user has already seen the promotion today
    const hasSeenToday = localStorage.getItem('freeHostingPromoSeenToday');
    const today = new Date().toDateString();
    
    if (hasSeenToday !== today) {
      // Show promotion after 2 seconds
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 2000);
      
      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    // Mark as seen for today
    localStorage.setItem('freeHostingPromoSeenToday', new Date().toDateString());
  };

  const handleGetFreeHosting = () => {
    handleClose();
    window.open('/free-hosting', '_self');
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ type: "spring", duration: 0.5 }}
          >
            <Card className="bg-navy border-creeper/50 max-w-md w-full relative overflow-hidden">
              {/* Animated background sparkles */}
              <div className="absolute inset-0 pointer-events-none">
                {Array.from({ length: 8 }).map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute"
                    initial={{
                      x: Math.random() * 100 + "%",
                      y: Math.random() * 100 + "%",
                      opacity: 0,
                    }}
                    animate={{
                      opacity: [0, 1, 0],
                      scale: [0.5, 1, 0.5],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: i * 0.3,
                    }}
                  >
                    <Sparkles className="h-4 w-4 text-creeper/30" />
                  </motion.div>
                ))}
              </div>

              {/* Close button */}
              <button
                onClick={handleClose}
                className="absolute top-4 right-4 z-10 text-gray-400 hover:text-white transition-colors"
              >
                <X className="h-5 w-5" />
              </button>

              <CardHeader className="text-center pb-4">
                <motion.div
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 1, repeat: Infinity, repeatDelay: 2 }}
                  className="w-16 h-16 bg-creeper/20 rounded-xl flex items-center justify-center mx-auto mb-4"
                >
                  <Server className="h-8 w-8 text-creeper" />
                </motion.div>
                
                <CardTitle className="text-2xl font-bold text-white">
                  🎉 <span className="text-creeper">FREE HOSTING IS LIVE</span> 🚀
                </CardTitle>
                
                <CardDescription className="text-gray-300 text-base">
                  Start your Minecraft server journey with our free hosting tier! No credit card required.
                </CardDescription>
              </CardHeader>

              <CardContent className="text-center space-y-4">
                <div className="bg-navy-light rounded-lg p-4 space-y-2">
                  <p className="text-sm text-gray-400">🎯 What's included:</p>
                  <ul className="text-sm text-gray-300 space-y-1">
                    <li>• 1GB RAM Minecraft Server</li>
                    <li>• 10GB NVMe Storage</li>
                    <li>• Basic DDoS Protection</li>
                    <li>• 24/7 Community Support</li>
                  </ul>
                  <div className="bg-creeper/20 rounded-lg p-3 mt-3">
                    <p className="text-xs text-gray-400">Limited time offer:</p>
                    <p className="text-lg font-bold text-creeper">COMPLETELY FREE</p>
                  </div>
                </div>

                <div className="space-y-3">
                  <Button 
                    className="minecraft-btn w-full text-lg py-3 font-bold shadow-lg hover:shadow-creeper/50 transition-all duration-300 transform hover:scale-105"
                    onClick={handleGetFreeHosting}
                  >
                    <Server className="h-5 w-5" />
                    Get Free Server Now!
                  </Button>
                  
                  <button
                    onClick={handleClose}
                    className="text-sm text-gray-400 hover:text-gray-300 transition-colors"
                  >
                    Maybe later
                  </button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default FreeHostingPromotion;
