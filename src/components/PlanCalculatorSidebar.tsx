import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Users, Puzzle, ArrowRight, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

interface PlanCalculatorSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const PlanCalculatorSidebar = ({ isOpen, onClose }: PlanCalculatorSidebarProps) => {
  const [players, setPlayers] = useState<number>(0);
  const [plugins, setPlugins] = useState<number>(0);
  const [recommendation, setRecommendation] = useState<string>("");
  const [price, setPrice] = useState<string>("");

  const calculateRecommendation = (playerCount: number, pluginCount: number) => {
    // If no inputs provided
    if (playerCount === 0 && pluginCount === 0) {
      setRecommendation("");
      setPrice("");
      return;
    }

    // Primary logic based on player count and plugins
    if (playerCount <= 5 && pluginCount <= 5) {
      setRecommendation("Redstone Power");
      setPrice("₹99");
    } else if (playerCount >= 5 && playerCount <= 15 && pluginCount >= 5 && pluginCount <= 10) {
      setRecommendation("Diamond Core");
      setPrice("₹249");
    } else if (playerCount >= 15 && playerCount <= 30 && pluginCount >= 10 && pluginCount <= 20) {
      setRecommendation("Nether Storm");
      setPrice("₹372");
    } else if (playerCount >= 30 && playerCount <= 50 && pluginCount >= 20 && pluginCount <= 40) {
      setRecommendation("End Storm");
      setPrice("₹499");
    } else if (playerCount >= 50 && playerCount <= 80 && pluginCount >= 40 && pluginCount <= 60) {
      setRecommendation("Wither Storm");
      setPrice("₹582");
    } else if (playerCount >= 80 && playerCount <= 150 && pluginCount >= 60 && pluginCount <= 100) {
      setRecommendation("Dragon Buff");
      setPrice("₹672");
    } else if (playerCount > 150 || pluginCount > 100) {
      setRecommendation("Custom Plan");
      setPrice("Contact Us");
    } else {
      // Fallback logic for edge cases
      let recommendedPlan = "";
      let recommendedPrice = "";
      
      // Base recommendation on highest factor (players vs plugins)
      const maxPlayers = Math.max(playerCount, 0);
      const maxPlugins = Math.max(pluginCount, 0);
      
      if (maxPlayers <= 10 && maxPlugins <= 8) {
        recommendedPlan = "Redstone Power";
        recommendedPrice = "₹99";
      } else if (maxPlayers <= 25 && maxPlugins <= 15) {
        recommendedPlan = "Diamond Core";
        recommendedPrice = "₹249";
      } else if (maxPlayers <= 40 && maxPlugins <= 25) {
        recommendedPlan = "Nether Storm";
        recommendedPrice = "₹372";
      } else if (maxPlayers <= 65 && maxPlugins <= 45) {
        recommendedPlan = "End Storm";
        recommendedPrice = "₹499";
      } else if (maxPlayers <= 100 && maxPlugins <= 70) {
        recommendedPlan = "Wither Storm";
        recommendedPrice = "₹582";
      } else if (maxPlayers <= 200 && maxPlugins <= 120) {
        recommendedPlan = "Dragon Buff";
        recommendedPrice = "₹672";
      } else {
        recommendedPlan = "Custom Plan";
        recommendedPrice = "Contact Us";
      }
      
      setRecommendation(recommendedPlan);
      setPrice(recommendedPrice);
    }
  };

  const handleCalculate = () => {
    calculateRecommendation(players, plugins);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[9999]"
            onClick={onClose}
          />
          
          {/* Sidebar */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 20, stiffness: 300 }}
            className="fixed right-0 top-0 h-full w-full max-w-md bg-navy-dark border-l border-creeper/30 z-[10000] overflow-y-auto"
          >
            <div className="p-6">
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-creeper/20 rounded-full flex items-center justify-center">
                    <img 
                      src="/lovable-uploads/1a0d50b6-cd93-42c1-bb4d-18c8aed41a15.png" 
                      alt="Calculator" 
                      className="h-6 w-6"
                      onError={(e) => {
                        // Fallback to a default icon if image fails to load
                        e.currentTarget.style.display = 'none';
                      }}
                    />
                  </div>
                  <h2 className="text-xl font-bold text-white">Plan Calculator</h2>
                </div>
                <button
                  onClick={onClose}
                  className="text-gray-400 hover:text-white transition-colors p-2 rounded-lg hover:bg-creeper/10"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <Card className="bg-navy-light border-gray-800">
                <CardHeader className="pb-4">
                  <CardTitle className="text-lg text-white text-center">
                    Find Your Perfect Plan
                  </CardTitle>
                  <p className="text-gray-400 text-sm text-center">
                    Tell us about your server needs
                  </p>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="players-sidebar" className="text-white flex items-center gap-2">
                      <Users className="h-4 w-4 text-creeper" />
                      Expected Players
                    </Label>
                    <Input
                      id="players-sidebar"
                      type="number"
                      min="0"
                      max="500"
                      value={players || ""}
                      onChange={(e) => setPlayers(parseInt(e.target.value) || 0)}
                      placeholder="How many players?"
                      className="bg-navy border-gray-700 text-white placeholder-gray-500"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="plugins-sidebar" className="text-white flex items-center gap-2">
                      <Puzzle className="h-4 w-4 text-creeper" />
                      Number of Plugins
                    </Label>
                    <Input
                      id="plugins-sidebar"
                      type="number"
                      min="0"
                      max="200"
                      value={plugins || ""}
                      onChange={(e) => setPlugins(parseInt(e.target.value) || 0)}
                      placeholder="How many plugins?"
                      className="bg-navy border-gray-700 text-white placeholder-gray-500"
                    />
                  </div>
                  
                  <Button 
                    onClick={handleCalculate}
                    className="w-full minecraft-btn"
                    disabled={players === 0 && plugins === 0}
                  >
                    Calculate Recommendation
                  </Button>
                  
                  {recommendation && (
                    <motion.div
                      className="mt-4 p-4 bg-navy rounded-lg border border-creeper/50"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="text-center">
                        <Badge className="bg-creeper text-navy-dark font-bold mb-3" variant="secondary">
                          Recommended Plan
                        </Badge>
                        
                        <h3 className="text-lg font-bold text-white mb-2">
                          {recommendation} Plan
                        </h3>
                        
                        <div className="text-2xl font-bold text-creeper mb-3">
                          {price}
                          {price !== "Contact Us" && <span className="text-sm text-gray-400">/month</span>}
                        </div>
                        
                        <p className="text-gray-300 mb-4 text-sm">
                          Perfect for <span className="text-creeper font-semibold">{players} players</span> and{" "}
                          <span className="text-creeper font-semibold">{plugins} plugins</span>
                        </p>
                        
                        <div className="space-y-2">
                          {recommendation === "Custom Plan" ? (
                            <Button variant="outline" size="sm" className="w-full border-creeper text-creeper hover:bg-creeper/10" asChild>
                              <Link to="/contact" onClick={onClose}>
                                Contact Us <ArrowRight className="ml-2 h-4 w-4" />
                              </Link>
                            </Button>
                          ) : (
                            <Button size="sm" className="w-full minecraft-btn" asChild>
                              <Link to="/plans/minecraft" onClick={onClose}>
                                View {recommendation} Plan <ArrowRight className="ml-2 h-4 w-4" />
                              </Link>
                            </Button>
                          )}
                          
                          <Button variant="outline" size="sm" className="w-full border-creeper text-creeper hover:bg-creeper/10" asChild>
                            <Link to="/plans/minecraft" onClick={onClose}>
                              View All Plans
                            </Link>
                          </Button>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default PlanCalculatorSidebar;