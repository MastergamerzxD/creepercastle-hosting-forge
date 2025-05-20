
import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Server } from "lucide-react";
import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const vpsPlans = [
  {
    name: "Basic VPS",
    price: 3300,
    specs: {
      ram: "32GB",
      cpu: "10 vCores",
      storage: "300GB NVMe SSD",
      bandwidth: "Unmetered",
      protection: "CreeperShield Protection"
    },
    features: [
      "Root Access",
      "Full SSH Access",
      "Choose Your OS",
      "Dedicated Resources",
      "99.9% Uptime SLA",
      "24/7 Support"
    ]
  },
  {
    name: "Advanced VPS",
    price: 4800,
    specs: {
      ram: "48GB",
      cpu: "12 vCores",
      storage: "400GB NVMe SSD",
      bandwidth: "Unmetered",
      protection: "CreeperShield Protection"
    },
    features: [
      "Root Access",
      "Full SSH Access",
      "Choose Your OS",
      "Dedicated Resources",
      "99.9% Uptime SLA",
      "24/7 Priority Support",
      "Automatic Backups",
      "Managed Firewall"
    ],
    highlighted: true
  },
  {
    name: "Enterprise VPS",
    price: 6800,
    specs: {
      ram: "64GB",
      cpu: "16 vCores",
      storage: "500GB NVMe SSD",
      bandwidth: "Unmetered",
      protection: "Premium DDoS Protection"
    },
    features: [
      "Root Access",
      "Full SSH Access",
      "Choose Your OS",
      "Dedicated Resources",
      "99.9% Uptime SLA",
      "24/7 Priority Support",
      "Daily Backups",
      "Managed Firewall",
      "Resource Monitoring",
      "Performance Optimization"
    ]
  }
];

// These plans are shown in the High-Performance tab
const highPerfVpsPlans = [
  {
    name: "Performance VPS",
    price: 8400,
    specs: {
      ram: "96GB",
      cpu: "20 vCores",
      storage: "800GB NVMe SSD",
      bandwidth: "Unmetered",
      protection: "Premium DDoS Protection"
    },
    features: [
      "Root Access",
      "Full SSH Access",
      "Choose Your OS",
      "Dedicated Resources",
      "99.99% Uptime SLA",
      "24/7 Premium Support",
      "2x Daily Backups",
      "Advanced Firewall",
      "Resource Monitoring",
      "Performance Optimization",
      "Dedicated Support Team"
    ]
  },
  {
    name: "Ultimate VPS",
    price: 12500,
    specs: {
      ram: "128GB",
      cpu: "24 vCores",
      storage: "1TB NVMe SSD",
      bandwidth: "Unmetered",
      protection: "Enterprise DDoS Protection"
    },
    features: [
      "Root Access",
      "Full SSH Access",
      "Choose Your OS",
      "Dedicated Resources",
      "99.99% Uptime SLA",
      "24/7 Premium Support",
      "3x Daily Backups",
      "Advanced Firewall",
      "Resource Monitoring",
      "Performance Optimization",
      "Dedicated Support Team",
      "Custom Setup Assistance",
      "Hardware Redundancy"
    ],
    highlighted: true
  }
];

const VpsPlans = () => {
  return (
    <>
      <Helmet>
        <title>VPS Server Hosting Plans | CreeperCastle.cloud</title>
        <meta 
          name="description" 
          content="High-performance VPS hosting with dedicated resources, root access, and CreeperShield DDoS protection. Perfect for large Minecraft communities and businesses."
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
                  VPS <span className="text-creeper">Hosting Plans</span>
                </motion.h1>
                <motion.p 
                  className="text-xl text-gray-300 max-w-3xl mx-auto"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  High-performance VPS solutions with dedicated resources, 
                  complete control, and enterprise-grade hardware.
                </motion.p>
              </div>
              
              <Tabs defaultValue="standard" className="w-full max-w-5xl mx-auto">
                <TabsList className="grid grid-cols-2 mb-8 bg-navy-light border border-gray-800">
                  <TabsTrigger value="standard" className="text-lg py-3">Standard VPS</TabsTrigger>
                  <TabsTrigger value="high-performance" className="text-lg py-3">High-Performance</TabsTrigger>
                </TabsList>
                
                <TabsContent value="standard">
                  <motion.div 
                    className="grid grid-cols-1 md:grid-cols-3 gap-8"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                  >
                    {vpsPlans.map((plan, index) => (
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
                            Full root access with dedicated resources
                          </CardDescription>
                        </CardHeader>
                        <CardContent>
                          <div className="space-y-4">
                            <div className="border-t border-gray-700 pt-4">
                              <ul className="space-y-2">
                                <li className="flex justify-between">
                                  <span className="text-gray-400">RAM</span>
                                  <span className="font-medium text-creeper">{plan.specs.ram}</span>
                                </li>
                                <li className="flex justify-between">
                                  <span className="text-gray-400">CPU</span>
                                  <span className="font-medium text-creeper">{plan.specs.cpu}</span>
                                </li>
                                <li className="flex justify-between">
                                  <span className="text-gray-400">Storage</span>
                                  <span className="font-medium text-creeper">{plan.specs.storage}</span>
                                </li>
                                <li className="flex justify-between">
                                  <span className="text-gray-400">Bandwidth</span>
                                  <span className="font-medium text-creeper">{plan.specs.bandwidth}</span>
                                </li>
                                <li className="flex justify-between">
                                  <span className="text-gray-400">DDoS Protection</span>
                                  <span className="font-medium text-creeper">{plan.specs.protection}</span>
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
                                href="https://billing.creepercastle.in/index.php?rp=/store/vps-hosting" 
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
                </TabsContent>
                
                <TabsContent value="high-performance">
                  <motion.div 
                    className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                  >
                    {highPerfVpsPlans.map((plan, index) => (
                      <Card 
                        key={index} 
                        className={`bg-navy-light ${plan.highlighted ? 'border-2 border-creeper relative' : 'border border-gray-800'} hover:transform hover:-translate-y-2 transition-all duration-300`}
                      >
                        {plan.highlighted && (
                          <div className="absolute top-0 right-0 bg-creeper text-navy-dark font-medium text-sm px-4 py-1 rounded-bl-lg">
                            Most Powerful
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
                            Enterprise-grade performance
                          </CardDescription>
                        </CardHeader>
                        <CardContent>
                          <div className="space-y-4">
                            <div className="border-t border-gray-700 pt-4">
                              <ul className="space-y-2">
                                <li className="flex justify-between">
                                  <span className="text-gray-400">RAM</span>
                                  <span className="font-medium text-creeper">{plan.specs.ram}</span>
                                </li>
                                <li className="flex justify-between">
                                  <span className="text-gray-400">CPU</span>
                                  <span className="font-medium text-creeper">{plan.specs.cpu}</span>
                                </li>
                                <li className="flex justify-between">
                                  <span className="text-gray-400">Storage</span>
                                  <span className="font-medium text-creeper">{plan.specs.storage}</span>
                                </li>
                                <li className="flex justify-between">
                                  <span className="text-gray-400">Bandwidth</span>
                                  <span className="font-medium text-creeper">{plan.specs.bandwidth}</span>
                                </li>
                                <li className="flex justify-between">
                                  <span className="text-gray-400">DDoS Protection</span>
                                  <span className="font-medium text-creeper">{plan.specs.protection}</span>
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
                                href="https://billing.creepercastle.in/index.php?rp=/store/vps-hosting" 
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
                </TabsContent>
              </Tabs>
              
              {/* Use Cases Section */}
              <div className="mt-20">
                <h2 className="text-3xl font-bold mb-8 text-center">
                  Perfect for <span className="text-creeper">Many Use Cases</span>
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  <div className="bg-navy-light p-6 rounded-lg border border-gray-800">
                    <h3 className="text-xl font-semibold mb-3 flex items-center">
                      <Server className="mr-2 text-creeper h-5 w-5" /> 
                      Large Minecraft Communities
                    </h3>
                    <p className="text-gray-400">
                      Host multiple Minecraft servers with customized configurations for your community.
                    </p>
                  </div>
                  
                  <div className="bg-navy-light p-6 rounded-lg border border-gray-800">
                    <h3 className="text-xl font-semibold mb-3 flex items-center">
                      <Server className="mr-2 text-creeper h-5 w-5" /> 
                      Game Server Networks
                    </h3>
                    <p className="text-gray-400">
                      Run multiple game servers simultaneously with powerful resources and complete control.
                    </p>
                  </div>
                  
                  <div className="bg-navy-light p-6 rounded-lg border border-gray-800">
                    <h3 className="text-xl font-semibold mb-3 flex items-center">
                      <Server className="mr-2 text-creeper h-5 w-5" /> 
                      Web Hosting
                    </h3>
                    <p className="text-gray-400">
                      Host websites, applications, and databases with high performance and reliability.
                    </p>
                  </div>
                  
                  <div className="bg-navy-light p-6 rounded-lg border border-gray-800">
                    <h3 className="text-xl font-semibold mb-3 flex items-center">
                      <Server className="mr-2 text-creeper h-5 w-5" /> 
                      Development Environments
                    </h3>
                    <p className="text-gray-400">
                      Create isolated development and testing environments with full root access.
                    </p>
                  </div>
                  
                  <div className="bg-navy-light p-6 rounded-lg border border-gray-800">
                    <h3 className="text-xl font-semibold mb-3 flex items-center">
                      <Server className="mr-2 text-creeper h-5 w-5" /> 
                      Business Applications
                    </h3>
                    <p className="text-gray-400">
                      Run business applications with enterprise-grade security and performance.
                    </p>
                  </div>
                  
                  <div className="bg-navy-light p-6 rounded-lg border border-gray-800">
                    <h3 className="text-xl font-semibold mb-3 flex items-center">
                      <Server className="mr-2 text-creeper h-5 w-5" /> 
                      Custom Solutions
                    </h3>
                    <p className="text-gray-400">
                      Create your own custom server environment with complete control over the operating system and software.
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Custom Solutions CTA */}
              <div className="mt-16 text-center">
                <h2 className="text-2xl md:text-3xl font-bold mb-6">
                  Need <span className="text-creeper">Custom Configuration</span>?
                </h2>
                <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                  Contact our team for a custom VPS solution tailored to your specific needs.
                  We can provide custom hardware configurations and specialized setups.
                </p>
                <Button className="minecraft-btn text-lg py-6 px-8" asChild>
                  <a href="https://discord.gg/RuQ9neH56S" target="_blank" rel="noopener noreferrer">
                    Get Custom Quote
                  </a>
                </Button>
              </div>
            </div>
          </section>
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default VpsPlans;
