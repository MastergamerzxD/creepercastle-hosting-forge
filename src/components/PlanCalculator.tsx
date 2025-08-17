import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Calculator, Users, Puzzle, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const PlanCalculator = () => {
  const [players, setPlayers] = useState<number>(0);
  const [plugins, setPlugins] = useState<number>(0);
  const [recommendation, setRecommendation] = useState<string>("");
  const [price, setPrice] = useState<string>("");

  const calculateRecommendation = (playerCount: number, pluginCount: number) => {
    if (playerCount <= 5 && pluginCount <= 5) {
      setRecommendation("Redstone Power");
      setPrice("₹99");
    } else if (playerCount >= 5 && playerCount <= 15 && pluginCount >= 5 && pluginCount <= 10) {
      setRecommendation("Diamond Core");
      setPrice("₹199");
    } else if (playerCount >= 15 && playerCount <= 30 && pluginCount >= 10 && pluginCount <= 20) {
      setRecommendation("Nether Storm");
      setPrice("₹299");
    } else if (playerCount >= 30 && playerCount <= 50 && pluginCount >= 20 && pluginCount <= 40) {
      setRecommendation("End Storm");
      setPrice("₹399");
    } else if (playerCount >= 50 && playerCount <= 80 && pluginCount >= 40 && pluginCount <= 60) {
      setRecommendation("Wither Storm");
      setPrice("₹499");
    } else if (playerCount >= 80 && playerCount <= 150 && pluginCount >= 60 && pluginCount <= 100) {
      setRecommendation("Dragon Buff");
      setPrice("₹672");
    } else if (playerCount > 150 || pluginCount > 100) {
      setRecommendation("Custom Plan");
      setPrice("Contact Us");
    } else {
      setRecommendation("");
      setPrice("");
    }
  };

  const handleCalculate = () => {
    calculateRecommendation(players, plugins);
  };

  return (
    <motion.div
      className="max-w-2xl mx-auto"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.3 }}
    >
      <Card className="bg-navy-light border-gray-800">
        <CardHeader className="text-center pb-4">
          <div className="flex justify-center mb-4">
            <div className="w-12 h-12 bg-creeper/20 rounded-full flex items-center justify-center">
              <Calculator className="h-6 w-6 text-creeper" />
            </div>
          </div>
          <CardTitle className="text-2xl font-bold text-white">
            Minecraft Plan Calculator
          </CardTitle>
          <p className="text-gray-400">
            Tell us about your server and we'll recommend the perfect plan
          </p>
        </CardHeader>
        
        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="players" className="text-white flex items-center gap-2">
                <Users className="h-4 w-4 text-creeper" />
                Expected Players
              </Label>
              <Input
                id="players"
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
              <Label htmlFor="plugins" className="text-white flex items-center gap-2">
                <Puzzle className="h-4 w-4 text-creeper" />
                Number of Plugins
              </Label>
              <Input
                id="plugins"
                type="number"
                min="0"
                max="200"
                value={plugins || ""}
                onChange={(e) => setPlugins(parseInt(e.target.value) || 0)}
                placeholder="How many plugins?"
                className="bg-navy border-gray-700 text-white placeholder-gray-500"
              />
            </div>
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
              className="mt-6 p-6 bg-navy rounded-lg border border-creeper/50"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
            >
              <div className="text-center">
                <Badge className="bg-creeper text-navy-dark font-bold mb-4" variant="secondary">
                  Recommended Plan
                </Badge>
                
                <h3 className="text-2xl font-bold text-white mb-2">
                  {recommendation} Plan
                </h3>
                
                <div className="text-3xl font-bold text-creeper mb-4">
                  {price}
                  {price !== "Contact Us" && <span className="text-lg text-gray-400">/month</span>}
                </div>
                
                <p className="text-gray-300 mb-6">
                  Perfect for <span className="text-creeper font-semibold">{players} players</span> and{" "}
                  <span className="text-creeper font-semibold">{plugins} plugins</span>
                </p>
                
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  {recommendation === "Custom Plan" ? (
                    <Button variant="outline" className="border-creeper text-creeper hover:bg-creeper/10" asChild>
                      <Link to="/contact">
                        Contact Us <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  ) : (
                    <Button className="minecraft-btn" asChild>
                      <Link to="/plans/minecraft">
                        View {recommendation} Plan <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  )}
                  
                  <Button variant="outline" className="border-creeper text-creeper hover:bg-creeper/10" asChild>
                    <Link to="/plans/minecraft">
                      View All Plans
                    </Link>
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default PlanCalculator;