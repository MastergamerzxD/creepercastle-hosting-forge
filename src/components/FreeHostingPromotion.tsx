
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, X, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const CreeperShieldPromotion = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if user has already seen the promotion today
    const hasSeenToday = localStorage.getItem('creeperShieldPromoSeenToday');
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
    localStorage.setItem('creeperShieldPromoSeenToday', new Date().toDateString());
  };

  const handleGetCreeperShield = () => {
    handleClose();
    window.open('https://billing.creepercastle.in/index.php?rp=/store/creepershield', '_blank');
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
                  <Shield className="h-8 w-8 text-creeper" />
                </motion.div>
                
                <CardTitle className="text-2xl font-bold text-white">
                  🛡️ <span className="text-creeper">CREEPERSHIELD RESTOCKED</span> & 20% OFF!
                </CardTitle>
                
                <CardDescription className="text-gray-300 text-base">
                  Get premium DDoS protection with 20% off store-wide! Limited time offer.
                </CardDescription>
              </CardHeader>

              <CardContent className="text-center space-y-4">
                <div className="bg-navy-light rounded-lg p-4 space-y-2">
                  <p className="text-sm text-gray-400">🎯 What's included:</p>
                  <ul className="text-sm text-gray-300 space-y-1">
                    <li>• Advanced DDoS Protection</li>
                    <li>• 99.9% Uptime Guarantee</li>
                    <li>• Global Network Coverage</li>
                    <li>• 24/7 Premium Support</li>
                  </ul>
                  <div className="bg-creeper/20 rounded-lg p-3 mt-3">
                    <p className="text-xs text-gray-400">Use coupon code:</p>
                    <p className="text-lg font-bold text-creeper">CREEPER20</p>
                  </div>
                </div>

                <div className="space-y-3">
                  <Button 
                    className="minecraft-btn w-full text-lg py-3 font-bold shadow-lg hover:shadow-creeper/50 transition-all duration-300 transform hover:scale-105"
                    onClick={handleGetCreeperShield}
                  >
                    <Shield className="h-5 w-5" />
                    Get CreeperShield Now!
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

export default CreeperShieldPromotion;
