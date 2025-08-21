import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { X, Gift, Zap, ExternalLink } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const FreeHostingPopup = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show popup after 2 seconds on page load
    const timer = setTimeout(() => {
      const hasSeenPopup = localStorage.getItem('freeHostingPopupSeen');
      if (!hasSeenPopup) {
        setIsVisible(true);
      }
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    localStorage.setItem('freeHostingPopupSeen', 'true');
  };

  const handleGetFreeServer = () => {
    localStorage.setItem('freeHostingPopupSeen', 'true');
    setIsVisible(false);
    window.open('https://free.creepercastle.cloud/', '_blank');
  };

  const handleLearnMore = () => {
    localStorage.setItem('freeHostingPopupSeen', 'true');
    setIsVisible(false);
    window.location.href = '/free-hosting';
  };

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[10000] flex items-center justify-center p-4"
        onClick={(e) => {
          if (e.target === e.currentTarget) {
            handleClose();
          }
        }}
      >
        <motion.div
          initial={{ scale: 0.8, opacity: 0, y: 50 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.8, opacity: 0, y: 50 }}
          transition={{ type: "spring", duration: 0.5 }}
          className="relative max-w-md w-full"
        >
          <Card className="bg-gradient-to-br from-navy-dark via-navy-dark to-navy-light border-2 border-creeper shadow-2xl shadow-creeper/20">
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors z-10"
            >
              <X className="h-5 w-5" />
            </button>
            
            <CardHeader className="text-center pb-4 pt-8">
              <div className="mx-auto mb-4 p-3 bg-creeper/20 rounded-full w-fit animate-pulse">
                <Gift className="h-12 w-12 text-creeper" />
              </div>
              
              <div className="inline-flex items-center gap-2 bg-creeper/20 text-creeper px-3 py-1 rounded-full text-xs font-medium mb-4 border border-creeper/30 mx-auto">
                <Zap className="h-3 w-3" />
                NOW LIVE!
              </div>
              
              <CardTitle className="text-2xl md:text-3xl mb-3 bg-gradient-to-r from-white via-creeper to-white bg-clip-text text-transparent">
                🎉 FREE Hosting is Here!
              </CardTitle>
              <CardDescription className="text-base text-gray-300">
                Get your <span className="text-creeper font-semibold">FREE</span> Minecraft server with 
                <span className="text-creeper font-semibold"> 2GB RAM</span> now!
              </CardDescription>
            </CardHeader>
            
            <CardContent className="text-center space-y-4">
              <div className="grid grid-cols-2 gap-4 mb-6 text-sm">
                <div className="bg-creeper/10 p-3 rounded-lg border border-creeper/20">
                  <div className="font-bold text-creeper">2GB RAM</div>
                  <div className="text-gray-300">Memory</div>
                </div>
                <div className="bg-creeper/10 p-3 rounded-lg border border-creeper/20">
                  <div className="font-bold text-creeper">50% CPU</div>
                  <div className="text-gray-300">Power</div>
                </div>
              </div>
              
              <div className="space-y-3">
                <Button 
                  size="lg" 
                  className="minecraft-btn w-full text-lg py-6 group" 
                  onClick={handleGetFreeServer}
                >
                  <div className="flex items-center justify-center gap-3">
                    <Gift className="h-5 w-5" />
                    Get Free Server Now
                    <ExternalLink className="h-4 w-4" />
                  </div>
                </Button>
                
                <Button 
                  variant="outline" 
                  size="sm" 
                  onClick={handleLearnMore}
                  className="w-full text-gray-300 border-gray-600 hover:bg-creeper/10 hover:border-creeper/30 hover:text-creeper"
                >
                  Learn More About Free Hosting
                </Button>
              </div>
              
              <p className="text-xs text-gray-500 mt-4">
                No credit card required • Instant setup • Always free
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default FreeHostingPopup;