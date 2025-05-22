
import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, HelpCircle, Server } from "lucide-react";
import { motion } from "framer-motion";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

const minecraftPlans = [
  {
    name: "2GB Minecraft Performance Plan",
    price: 99,
    ram: "2GB",
    cpu: "1 vCore",
    storage: "30GB NVMe SSD",
    players: "10 Players",
    ddosProtection: "Basic Protection",
    features: [
      "Instant Setup",
      "All Minecraft Versions",
      "24/7 Support",
      "Automatic Backups",
      "One-Click Plugin Installer",
      "Custom Domain",
      "99.9% Uptime",
      "SFTP Access",
    ],
    highlighted: false,
  },
  {
    name: "3GB Minecraft Performance Plan",
    price: 149,
    ram: "3GB",
    cpu: "1 vCore",
    storage: "45GB NVMe SSD",
    players: "20 Players",
    ddosProtection: "Basic Protection",
    features: [
      "Instant Setup",
      "All Minecraft Versions",
      "24/7 Support",
      "Automatic Backups",
      "One-Click Plugin Installer",
      "Custom Domain",
      "99.9% Uptime",
      "Free Subdomain",
      "SFTP Access",
    ],
    highlighted: false,
  },
  {
    name: "5GB Minecraft Performance Plan",
    price: 249,
    ram: "5GB",
    cpu: "2 vCores",
    storage: "75GB NVMe SSD",
    players: "30 Players",
    ddosProtection: "Standard Protection",
    features: [
      "Instant Setup",
      "All Minecraft Versions",
      "24/7 Priority Support",
      "2x Daily Backups",
      "One-Click Plugin Installer",
      "Custom Domain",
      "99.9% Uptime",
      "Full Modpack Support",
      "Free Subdomain",
      "SFTP Access",
    ],
    highlighted: true,
  },
  {
    name: "8GB Minecraft Performance Plan",
    price: 399,
    ram: "8GB",
    cpu: "3 vCores",
    storage: "120GB NVMe SSD",
    players: "50 Players",
    ddosProtection: "Advanced Protection",
    features: [
      "Instant Setup",
      "All Minecraft Versions",
      "24/7 Priority Support",
      "3x Daily Backups",
      "One-Click Plugin Installer",
      "Custom Domain",
      "99.9% Uptime",
      "Full Modpack Support",
      "Free Subdomain",
      "Dedicated Resources",
      "SFTP Access",
    ],
    highlighted: false,
  },
  {
    name: "10GB Minecraft Performance Plan",
    price: 499,
    ram: "10GB",
    cpu: "4 vCores",
    storage: "150GB NVMe SSD",
    players: "Unlimited Players",
    ddosProtection: "Advanced Protection",
    features: [
      "Instant Setup",
      "All Minecraft Versions",
      "24/7 Priority Support",
      "3x Daily Backups",
      "One-Click Plugin Installer",
      "Custom Domain",
      "99.9% Uptime",
      "Full Modpack Support",
      "Free Subdomain",
      "Dedicated Resources",
      "SFTP Access",
    ],
    highlighted: false,
  },
  {
    name: "16GB Minecraft Performance Plan",
    price: 799,
    ram: "16GB",
    cpu: "6 vCores",
    storage: "240GB NVMe SSD",
    players: "Unlimited Players",
    ddosProtection: "Premium Protection",
    features: [
      "Instant Setup",
      "All Minecraft Versions",
      "24/7 Priority Support",
      "4x Daily Backups",
      "One-Click Plugin Installer",
      "Custom Domain",
      "99.99% Uptime",
      "Full Modpack Support",
      "Free Subdomain",
      "Dedicated Resources",
      "SFTP Access",
      "Premium Support",
    ],
    highlighted: false,
  },
];

const MinecraftPlans = () => {
  return (
    <>
      <Helmet>
        <title>Minecraft Server Hosting Plans | CreeperCastle.cloud</title>
        <meta 
          name="description" 
          content="High-performance Minecraft server hosting plans with NVMe SSD storage, DDoS protection, and 24/7 support. Perfect for any size community."
        />
      </Helmet>
      
      <div className="flex flex-col min-h-screen bg-navy text-white">
        <div className="fixed inset-0 z-0 pointer-events-none">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30" 
            style={{ backgroundImage: 'url("/lovable-uploads/4fca9c12-4db7-435f-a6c5-3fe7e04cf205.png")' }}
          ></div>
          
          <div className="absolute inset-0 bg-gradient-to-b from-navy-dark/90 via-navy/80 to-navy-light/70"></div>
        </div>
        
        <Navbar />
        
        <main className="flex-grow pt-24 relative z-10">
          <section className="py-12">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <motion.h1 
                  className="text-4xl md:text-5xl font-bold mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  Minecraft <span className="text-creeper">Server Hosting</span>
                </motion.h1>
                <motion.p 
                  className="text-xl text-gray-300 max-w-3xl mx-auto"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  High-performance Minecraft servers with instant deployment, one-click plugin installation,
                  and 24/7 expert support. Perfect for any size community.
                </motion.p>
              </div>
              
              <motion.div 
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                {minecraftPlans.map((plan, index) => (
                  <Card 
                    key={index} 
                    className={`bg-navy-light ${plan.highlighted ? 'border-2 border-creeper relative' : 'border border-gray-800'} hover:transform hover:-translate-y-2 transition-all duration-300`}
                  >
                    {plan.highlighted && (
                      <div className="absolute top-0 right-0 bg-creeper text-navy-dark font-medium text-sm px-4 py-1 rounded-bl-lg">
                        Most Popular
                      </div>
                    )}
                    <CardHeader className="text-center">
                      <div className="mx-auto mb-4">
                        <Server className="h-12 w-12 text-creeper" />
                      </div>
                      <CardTitle className="text-2xl">{plan.name}</CardTitle>
                      <div className="flex items-baseline justify-center mt-2">
                        <span className="text-4xl font-bold">₹{plan.price}</span>
                        <span className="text-gray-400 ml-1">/month</span>
                      </div>
                      <CardDescription className="text-gray-400 mt-2">
                        {plan.ram === "2GB" ? "Perfect for small friend groups" : 
                         plan.ram === "5GB" ? "Ideal for growing communities" : 
                         plan.ram === "10GB" ? "For established servers" :
                         plan.ram === "16GB" ? "For large networks" :
                         "For your Minecraft community"}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="border-t border-gray-700 pt-4">
                          <ul className="space-y-2">
                            <li className="flex justify-between">
                              <span className="text-gray-400">RAM</span>
                              <span className="font-medium text-creeper">{plan.ram}</span>
                            </li>
                            <li className="flex justify-between">
                              <span className="text-gray-400">CPU</span>
                              <span className="font-medium text-creeper">{plan.cpu}</span>
                            </li>
                            <li className="flex justify-between">
                              <span className="text-gray-400">Storage</span>
                              <span className="font-medium text-creeper">{plan.storage}</span>
                            </li>
                            <li className="flex justify-between">
                              <span className="text-gray-400">Players</span>
                              <span className="font-medium text-creeper">{plan.players}</span>
                            </li>
                            <li className="flex justify-between items-center">
                              <div className="flex items-center text-gray-400">
                                <span>DDoS Protection</span>
                                <TooltipProvider>
                                  <Tooltip>
                                    <TooltipTrigger>
                                      <HelpCircle className="h-4 w-4 ml-1" />
                                    </TooltipTrigger>
                                    <TooltipContent className="bg-navy-dark border border-gray-700">
                                      <p className="w-64">CreeperShield protects your server from DDoS attacks, keeping it online even during attacks.</p>
                                    </TooltipContent>
                                  </Tooltip>
                                </TooltipProvider>
                              </div>
                              <span className="font-medium text-creeper">{plan.ddosProtection}</span>
                            </li>
                          </ul>
                        </div>
                        
                        <div className="border-t border-gray-700 pt-4">
                          <h4 className="font-medium mb-2">Features:</h4>
                          <ul className="space-y-1">
                            {plan.features.map((feature, i) => (
                              <li key={i} className="flex items-start">
                                <Check className="h-5 w-5 text-creeper mr-2 mt-0.5 flex-shrink-0" />
                                <span className="text-sm text-gray-300">{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        <Button className="w-full minecraft-btn" asChild>
                          <a 
                            href="https://billing.creepercastle.in/index.php?rp=/store/minecraft-performance-servers" 
                            target="_blank" 
                            rel="noopener noreferrer"
                          >
                            Buy Now
                          </a>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </motion.div>
              
              <div className="mt-16 text-center">
                <h2 className="text-2xl md:text-3xl font-bold mb-6">
                  Need something <span className="text-creeper">more powerful</span>?
                </h2>
                <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                  For larger communities or special requirements, check out our VPS plans 
                  or contact us for a custom solution tailored to your needs.
                </p>
                <div className="flex flex-col md:flex-row gap-4 justify-center">
                  <Button className="minecraft-btn" asChild>
                    <a href="/plans/vps">Explore VPS Plans</a>
                  </Button>
                  <Button variant="outline" className="border-creeper text-creeper hover:bg-creeper/10" asChild>
                    <a href="https://discord.gg/RuQ9neH56S" target="_blank" rel="noopener noreferrer">
                      Get Custom Solution
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </section>
          
          {/* Features Section */}
          <section className="py-16 bg-navy-dark/50">
            <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">
                  Why Choose <span className="text-creeper">Our Minecraft Hosting</span>?
                </h2>
                <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                  We offer the best features and support to ensure your Minecraft server runs perfectly
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-navy-light p-6 rounded-lg border border-gray-800">
                  <h3 className="text-xl font-semibold mb-3 flex items-center">
                    <Server className="mr-2 text-creeper h-5 w-5" /> 
                    High Performance
                  </h3>
                  <p className="text-gray-400">
                    Premium NVMe SSD storage and powerful CPUs ensure your server runs smoothly with minimal lag.
                  </p>
                </div>
                
                <div className="bg-navy-light p-6 rounded-lg border border-gray-800">
                  <h3 className="text-xl font-semibold mb-3 flex items-center">
                    <Check className="mr-2 text-creeper h-5 w-5" /> 
                    One-Click Installation
                  </h3>
                  <p className="text-gray-400">
                    Install Minecraft versions, plugins, and modpacks with just one click through our control panel.
                  </p>
                </div>
                
                <div className="bg-navy-light p-6 rounded-lg border border-gray-800">
                  <h3 className="text-xl font-semibold mb-3 flex items-center">
                    <Server className="mr-2 text-creeper h-5 w-5" /> 
                    Low Latency
                  </h3>
                  <p className="text-gray-400">
                    Servers located in India for minimal ping and optimal gameplay experience for local players.
                  </p>
                </div>
                
                <div className="bg-navy-light p-6 rounded-lg border border-gray-800">
                  <h3 className="text-xl font-semibold mb-3 flex items-center">
                    <Check className="mr-2 text-creeper h-5 w-5" /> 
                    DDoS Protection
                  </h3>
                  <p className="text-gray-400">
                    CreeperShield protection keeps your server online and secure even during attacks.
                  </p>
                </div>
                
                <div className="bg-navy-light p-6 rounded-lg border border-gray-800">
                  <h3 className="text-xl font-semibold mb-3 flex items-center">
                    <Check className="mr-2 text-creeper h-5 w-5" /> 
                    24/7 Support
                  </h3>
                  <p className="text-gray-400">
                    Our expert team is available around the clock to assist with any issues or questions.
                  </p>
                </div>
                
                <div className="bg-navy-light p-6 rounded-lg border border-gray-800">
                  <h3 className="text-xl font-semibold mb-3 flex items-center">
                    <Server className="mr-2 text-creeper h-5 w-5" /> 
                    Automatic Backups
                  </h3>
                  <p className="text-gray-400">
                    Regular automatic backups ensure your world and player data is always safe.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default MinecraftPlans;
