
import { Shield, Server, BarChart3, LineChart } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const CreeperShieldSection = () => {
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
            <span className="text-creeper">CreeperShield</span> DDoS Protection
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Our advanced DDoS protection system keeps your Minecraft server online, even during the most intense attacks.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="space-y-6">
              <div className="flex">
                <div className="mr-4 p-3 bg-creeper/10 rounded-lg">
                  <Shield className="h-6 w-6 text-creeper" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Enterprise-grade Protection</h3>
                  <p className="text-gray-400">
                    CreeperShield provides up to 1.2 Tbps of DDoS mitigation capacity, stopping even the largest attacks from reaching your server.
                  </p>
                </div>
              </div>
              
              <div className="flex">
                <div className="mr-4 p-3 bg-creeper/10 rounded-lg">
                  <LineChart className="h-6 w-6 text-creeper" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Real-time Traffic Analysis</h3>
                  <p className="text-gray-400">
                    Our system continuously monitors network traffic, identifying and filtering malicious packets before they impact your game server.
                  </p>
                </div>
              </div>
              
              <div className="flex">
                <div className="mr-4 p-3 bg-creeper/10 rounded-lg">
                  <Server className="h-6 w-6 text-creeper" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Multi-layered Protection</h3>
                  <p className="text-gray-400">
                    From network layer to application layer, CreeperShield provides comprehensive protection against all types of DDoS attacks.
                  </p>
                </div>
              </div>
              
              <div className="flex">
                <div className="mr-4 p-3 bg-creeper/10 rounded-lg">
                  <BarChart3 className="h-6 w-6 text-creeper" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Detailed Attack Analytics</h3>
                  <p className="text-gray-400">
                    Access comprehensive attack statistics and reports to understand attack patterns and improve your server's security posture.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mt-8">
              <Button className="minecraft-btn rounded-md">Learn More About CreeperShield</Button>
            </div>
          </div>
          
          <div className="relative">
            <div className="relative bg-navy-light rounded-xl border border-gray-800 overflow-hidden p-6">
              {/* Protection Status Dashboard Mockup */}
              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-4">CreeperShield Status</h3>
                <div className="flex items-center mb-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                  <span className="text-green-500 font-medium">Protection Active</span>
                  <span className="ml-auto text-sm text-gray-400">Last attack: 2 hours ago</span>
                </div>
                <div className="h-2 w-full bg-navy rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-green-500 to-creeper w-[90%]"></div>
                </div>
                <div className="flex justify-between text-xs mt-1">
                  <span className="text-gray-400">Protection Level</span>
                  <span className="text-creeper">90%</span>
                </div>
              </div>
              
              {/* Attack Statistics */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <Card className="bg-navy border-gray-800">
                  <CardContent className="p-4">
                    <h4 className="text-sm text-gray-400 mb-1">Attacks Blocked (24h)</h4>
                    <p className="text-2xl font-bold">1,247</p>
                    <div className="text-xs text-green-500 mt-1">+12% from yesterday</div>
                  </CardContent>
                </Card>
                <Card className="bg-navy border-gray-800">
                  <CardContent className="p-4">
                    <h4 className="text-sm text-gray-400 mb-1">Largest Attack</h4>
                    <p className="text-2xl font-bold">76.5 Gbps</p>
                    <div className="text-xs text-gray-400 mt-1">SYN Flood</div>
                  </CardContent>
                </Card>
              </div>
              
              {/* Attack Graph */}
              <div className="bg-navy p-4 rounded-lg border border-gray-800 mb-6">
                <h4 className="text-sm font-medium mb-4">Attack Traffic (Last 24 Hours)</h4>
                <div className="h-40 relative">
                  <div className="absolute bottom-0 left-0 right-0 h-40 overflow-hidden">
                    {/* Fake graph */}
                    <svg className="w-full h-full" viewBox="0 0 300 100" preserveAspectRatio="none">
                      <path 
                        d="M0,100 L0,80 C20,75 40,90 60,80 C80,70 100,20 120,30 C140,40 160,90 180,70 C200,50 220,40 240,50 C260,60 280,30 300,20 L300,100 Z" 
                        fill="rgba(80, 200, 120, 0.2)"
                      />
                      <path 
                        d="M0,80 C20,75 40,90 60,80 C80,70 100,20 120,30 C140,40 160,90 180,70 C200,50 220,40 240,50 C260,60 280,30 300,20" 
                        fill="none" 
                        stroke="#50C878" 
                        strokeWidth="2"
                      />
                    </svg>
                  </div>
                </div>
                <div className="flex justify-between text-xs text-gray-500 mt-2">
                  <span>00:00</span>
                  <span>06:00</span>
                  <span>12:00</span>
                  <span>18:00</span>
                  <span>23:59</span>
                </div>
              </div>
              
              {/* Protection Features */}
              <div className="grid grid-cols-2 gap-3">
                <div className="flex items-center bg-navy-dark rounded-md p-2">
                  <div className="w-2 h-2 bg-creeper rounded-full mr-2"></div>
                  <span className="text-xs">TCP/UDP Protection</span>
                </div>
                <div className="flex items-center bg-navy-dark rounded-md p-2">
                  <div className="w-2 h-2 bg-creeper rounded-full mr-2"></div>
                  <span className="text-xs">Layer 7 Filtering</span>
                </div>
                <div className="flex items-center bg-navy-dark rounded-md p-2">
                  <div className="w-2 h-2 bg-creeper rounded-full mr-2"></div>
                  <span className="text-xs">Bot Protection</span>
                </div>
                <div className="flex items-center bg-navy-dark rounded-md p-2">
                  <div className="w-2 h-2 bg-creeper rounded-full mr-2"></div>
                  <span className="text-xs">Smart Traffic Analysis</span>
                </div>
              </div>
            </div>
            
            {/* Glow effect */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-creeper/20 to-creeper/5 rounded-xl blur opacity-30"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CreeperShieldSection;
