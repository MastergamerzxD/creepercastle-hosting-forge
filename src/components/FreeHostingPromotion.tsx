import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Gift, Clock, Users, Zap } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const FreeHostingPromotion = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 50 }}
        transition={{ duration: 0.5 }}
        className="mb-8"
      >
        <Card className="bg-gradient-to-r from-creeper/20 to-creeper/10 border-2 border-creeper relative overflow-hidden">
          <div className="absolute top-0 right-0 bg-creeper text-navy-dark font-bold text-xs px-3 py-1 rounded-bl-lg">
            LIMITED TIME
          </div>
          <CardHeader className="text-center pb-4">
            <div className="mx-auto mb-4 p-3 bg-creeper/20 rounded-full w-fit">
              <Gift className="h-8 w-8 text-creeper" />
            </div>
            <CardTitle className="text-2xl md:text-3xl mb-2">
              🎉 <span className="text-creeper">FREE</span> Minecraft Hosting!
            </CardTitle>
            <CardDescription className="text-base text-gray-300">
              Get your first month absolutely FREE on any plan!
            </CardDescription>
          </CardHeader>
          <CardContent className="text-center">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <div className="flex items-center justify-center space-x-2">
                <Clock className="h-5 w-5 text-creeper" />
                <span className="text-sm">Instant Setup</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <Users className="h-5 w-5 text-creeper" />
                <span className="text-sm">Up to 20 Players</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <Zap className="h-5 w-5 text-creeper" />
                <span className="text-sm">2GB RAM + DDoS Protection</span>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-3 justify-center items-center mb-4">
              <Button 
                size="lg" 
                className="minecraft-btn text-lg px-8 py-6 w-full sm:w-auto" 
                asChild
              >
                <a href="https://discord.gg/RuQ9neH56S" target="_blank" rel="noopener noreferrer">
                  Claim Free Hosting
                </a>
              </Button>
              <Button 
                variant="outline" 
                size="sm" 
                onClick={() => setIsVisible(false)}
                className="text-gray-400 border-gray-600 hover:bg-gray-800 w-full sm:w-auto"
              >
                Maybe Later
              </Button>
            </div>
            
            <div className="flex flex-wrap justify-center gap-2 mb-2">
              <Badge variant="secondary" className="bg-creeper/20 text-creeper border-creeper/30">
                No Setup Fees
              </Badge>
              <Badge variant="secondary" className="bg-creeper/20 text-creeper border-creeper/30">
                24/7 Support
              </Badge>
              <Badge variant="secondary" className="bg-creeper/20 text-creeper border-creeper/30">
                Instant Activation
              </Badge>
            </div>
            
            <p className="text-xs text-gray-500">
              Join our Discord to claim your free hosting. Limited to new customers only.
            </p>
          </CardContent>
        </Card>
      </motion.div>
    </AnimatePresence>
  );
};

export default FreeHostingPromotion;