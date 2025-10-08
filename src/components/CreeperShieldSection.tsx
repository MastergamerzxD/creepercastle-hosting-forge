
import { Shield, Server, BarChart3, LineChart, Network, Clock, Lock, Fingerprint, MoveHorizontal, Layers, CloudOff, Cpu, Check } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const CreeperShieldSection = () => {
  // Dynamic statistics that increase over time
  const [stats, setStats] = useState({
    totalAttacks: 29847,
    largestAttack: 216,
    growthPercentage: 18
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setStats(prev => ({
        totalAttacks: prev.totalAttacks + Math.floor(Math.random() * 3) + 1, // Increase by 1-3
        largestAttack: prev.largestAttack + (Math.random() > 0.95 ? Math.floor(Math.random() * 2) : 0), // Occasionally increase
        growthPercentage: Math.min(prev.growthPercentage + (Math.random() > 0.9 ? 1 : 0), 25) // Slowly increase up to 25%
      }));
    }, 5000); // Update every 5 seconds

    return () => clearInterval(interval);
  }, []);
  return (
    <section className="py-20 relative overflow-hidden" id="creepershield">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <div className="absolute top-20 right-20 w-64 h-64 rounded-full bg-creeper/5 blur-3xl"></div>
        <div className="absolute bottom-40 left-20 w-80 h-80 rounded-full bg-creeper/5 blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center bg-creeper/10 p-2 rounded-full mb-4">
            <Shield className="h-6 w-6 text-creeper" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-creeper">CreeperShield</span> Advanced DDoS Protection
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Our enterprise-grade DDoS protection system keeps your Minecraft server online 24/7, even during the most intense attacks.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          <Card className="bg-navy-light border border-gray-800 hover:border-creeper/50 transition-all duration-300 hover:shadow-lg hover:shadow-creeper/10">
            <CardContent className="p-6">
              <div className="mb-4 p-3 bg-creeper/10 rounded-lg inline-block">
                <Network className="h-6 w-6 text-creeper" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Multi-Vector Protection</h3>
              <p className="text-gray-400">
                CreeperShield defends against all types of DDoS attacks including SYN floods, UDP floods, NTP amplification, and more with adaptive mitigation techniques.
              </p>
            </CardContent>
          </Card>
          
          <Card className="bg-navy-light border border-gray-800 hover:border-creeper/50 transition-all duration-300 hover:shadow-lg hover:shadow-creeper/10">
            <CardContent className="p-6">
              <div className="mb-4 p-3 bg-creeper/10 rounded-lg inline-block">
                <Clock className="h-6 w-6 text-creeper" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Real-time Monitoring</h3>
              <p className="text-gray-400">
                24/7 traffic analysis with sub-second attack detection and automatic mitigation deployment, ensuring minimal disruption to legitimate players.
              </p>
            </CardContent>
          </Card>
          
          <Card className="bg-navy-light border border-gray-800 hover:border-creeper/50 transition-all duration-300 hover:shadow-lg hover:shadow-creeper/10">
            <CardContent className="p-6">
              <div className="mb-4 p-3 bg-creeper/10 rounded-lg inline-block">
                <Cpu className="h-6 w-6 text-creeper" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Intelligent Traffic Analysis</h3>
              <p className="text-gray-400">
                AI-powered anomaly detection identifies and filters malicious traffic patterns before they can impact your server performance.
              </p>
            </CardContent>
          </Card>
          
          <Card className="bg-navy-light border border-gray-800 hover:border-creeper/50 transition-all duration-300 hover:shadow-lg hover:shadow-creeper/10">
            <CardContent className="p-6">
              <div className="mb-4 p-3 bg-creeper/10 rounded-lg inline-block">
                <Fingerprint className="h-6 w-6 text-creeper" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Bot Protection</h3>
              <p className="text-gray-400">
                Advanced bot detection algorithms prevent automated attacks while ensuring legitimate players maintain seamless access to your server.
              </p>
            </CardContent>
          </Card>
          
          <Card className="bg-navy-light border border-gray-800 hover:border-creeper/50 transition-all duration-300 hover:shadow-lg hover:shadow-creeper/10">
            <CardContent className="p-6">
              <div className="mb-4 p-3 bg-creeper/10 rounded-lg inline-block">
                <MoveHorizontal className="h-6 w-6 text-creeper" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Load Balancing</h3>
              <p className="text-gray-400">
                Intelligent traffic distribution across multiple nodes ensures optimal performance even during high-traffic periods or partial network disruptions.
              </p>
            </CardContent>
          </Card>
          
          <Card className="bg-navy-light border border-gray-800 hover:border-creeper/50 transition-all duration-300 hover:shadow-lg hover:shadow-creeper/10">
            <CardContent className="p-6">
              <div className="mb-4 p-3 bg-creeper/10 rounded-lg inline-block">
                <CloudOff className="h-6 w-6 text-creeper" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Volumetric Attack Protection</h3>
              <p className="text-gray-400">
                Our network can absorb and filter up to 1.2 Tbps of attack traffic, ensuring your server stays online even during massive volumetric attacks.
              </p>
            </CardContent>
          </Card>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="bg-navy-light border border-gray-800 rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <Shield className="h-5 w-5 text-creeper mr-2" /> CreeperShield Highlights
              </h3>
              <ul className="space-y-4">
                <li className="flex">
                  <div className="mr-3 text-creeper">•</div>
                  <div>
                    <span className="font-medium text-creeper">Enterprise-grade Infrastructure:</span>
                    <p className="text-gray-400 mt-1">Distributed across 7 global scrubbing centers with 1.2 Tbps total mitigation capacity.</p>
                  </div>
                </li>
                <li className="flex">
                  <div className="mr-3 text-creeper">•</div>
                  <div>
                    <span className="font-medium text-creeper">Adaptive Protection:</span>
                    <p className="text-gray-400 mt-1">Protection rules automatically adjust based on attack patterns and server load.</p>
                  </div>
                </li>
                <li className="flex">
                  <div className="mr-3 text-creeper">•</div>
                  <div>
                    <span className="font-medium text-creeper">Protocol-specific Defense:</span>
                    <p className="text-gray-400 mt-1">Custom protections for Minecraft-specific attack vectors and exploits.</p>
                  </div>
                </li>
                <li className="flex">
                  <div className="mr-3 text-creeper">•</div>
                  <div>
                    <span className="font-medium text-creeper">Zero-day Mitigation:</span>
                    <p className="text-gray-400 mt-1">Protection against newly discovered vulnerabilities through behavior-based detection.</p>
                  </div>
                </li>
              </ul>
            </div>
            
            <div className="bg-navy-light border border-gray-800 rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <Layers className="h-5 w-5 text-creeper mr-2" /> Protection Tiers
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="border border-gray-800 rounded-lg p-4">
                  <div className="font-semibold text-lg mb-2">Basic Protection</div>
                  <ul className="text-gray-400 space-y-2">
                    <li className="flex items-center">
                      <Check className="h-4 w-4 text-creeper mr-2 flex-shrink-0" />
                      <span>Layer 3/4 Protection</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="h-4 w-4 text-creeper mr-2 flex-shrink-0" />
                      <span>Protocol Validation</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="h-4 w-4 text-creeper mr-2 flex-shrink-0" />
                      <span>100 Gbps Capacity</span>
                    </li>
                  </ul>
                </div>
                <div className="border border-creeper/30 rounded-lg p-4 bg-creeper/5">
                  <div className="font-semibold text-lg mb-2 text-creeper">Premium Protection</div>
                  <ul className="text-gray-400 space-y-2">
                    <li className="flex items-center">
                      <Check className="h-4 w-4 text-creeper mr-2 flex-shrink-0" />
                      <span>All Basic Features</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="h-4 w-4 text-creeper mr-2 flex-shrink-0" />
                      <span>Advanced Mitigation</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="h-4 w-4 text-creeper mr-2 flex-shrink-0" />
                      <span>AI-powered Mitigation</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="h-4 w-4 text-creeper mr-2 flex-shrink-0" />
                      <span>1.2 Tbps Capacity</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          
          <div className="space-y-6">
            <div className="bg-navy-light border border-gray-800 rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <Lock className="h-5 w-5 text-creeper mr-2" /> Why Choose CreeperShield?
              </h3>
              <div className="space-y-4">
                <p className="text-gray-300">
                  Unlike standard DDoS protection, CreeperShield is specifically designed for Minecraft servers, with deep protocol understanding and gaming-optimized mitigation strategies.
                </p>
                <div className="grid grid-cols-2 gap-3">
                  <div className="flex items-center bg-navy-dark rounded-md p-3">
                    <div className="w-2 h-2 bg-creeper rounded-full mr-3"></div>
                    <span>Game-optimized filtering</span>
                  </div>
                  <div className="flex items-center bg-navy-dark rounded-md p-3">
                    <div className="w-2 h-2 bg-creeper rounded-full mr-3"></div>
                    <span>Low latency mitigation</span>
                  </div>
                  <div className="flex items-center bg-navy-dark rounded-md p-3">
                    <div className="w-2 h-2 bg-creeper rounded-full mr-3"></div>
                    <span>99.9% uptime guarantee</span>
                  </div>
                  <div className="flex items-center bg-navy-dark rounded-md p-3">
                    <div className="w-2 h-2 bg-creeper rounded-full mr-3"></div>
                    <span>24/7 security team</span>
                  </div>
                </div>
                <div className="mt-4">
                  <Button className="minecraft-btn rounded-md w-full" asChild>
                    <Link to="https://billing.creepercastle.in" target="_blank">
                      Upgrade Your Protection
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
            
            <div className="bg-navy-light border border-gray-800 rounded-xl p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold flex items-center">
                  <BarChart3 className="h-5 w-5 text-creeper mr-2" /> Protection Statistics
                </h3>
                <span className="text-xs text-gray-400">Last 30 days</span>
              </div>
              <div className="grid grid-cols-2 gap-4 mb-5">
                <div className="bg-navy p-3 rounded-lg border border-gray-800">
                  <div className="text-xs text-gray-400 mb-1">Total Attacks Blocked</div>
                  <div className="text-2xl font-bold">{stats.totalAttacks.toLocaleString()}</div>
                  <div className="text-xs text-creeper mt-1">+{stats.growthPercentage}% vs. previous period</div>
                </div>
                <div className="bg-navy p-3 rounded-lg border border-gray-800">
                  <div className="text-xs text-gray-400 mb-1">Largest Attack</div>
                  <div className="text-2xl font-bold">{stats.largestAttack} Gbps</div>
                  <div className="text-xs text-gray-400 mt-1">SYN Flood Attack</div>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-3">
                <div className="bg-navy p-3 rounded-lg border border-gray-800">
                  <div className="text-xs text-gray-400 mb-1">Network</div>
                  <div className="text-lg font-bold">78%</div>
                </div>
                <div className="bg-navy p-3 rounded-lg border border-gray-800">
                  <div className="text-xs text-gray-400 mb-1">Application</div>
                  <div className="text-lg font-bold">19%</div>
                </div>
                <div className="bg-navy p-3 rounded-lg border border-gray-800">
                  <div className="text-xs text-gray-400 mb-1">Other</div>
                  <div className="text-lg font-bold">3%</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="text-center mt-16">
          <p className="text-xl text-gray-400 mb-8">
            CreeperShield is included in all our hosting plans, with enhanced protection available for large networks.
          </p>
          <Button className="minecraft-btn rounded-md" asChild>
            <Link to="/contact" target="_blank">
              Contact Us for Custom Protection Solutions
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CreeperShieldSection;
