import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Server, Bot } from "lucide-react";
import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const vpsPlans = [
  {
    name: "VPS - 32GB",
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
    name: "VPS - 48GB",
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
    name: "VPS - 64GB",
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

const highPerfVpsPlans = [
  {
    name: "VPS - 96GB",
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
    name: "VPS - 128GB",
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
  },
  {
    name: "VPS - 256GB",
    price: 24000,
    specs: {
      ram: "256GB",
      cpu: "32 vCores",
      storage: "2TB NVMe SSD",
      bandwidth: "Unmetered",
      protection: "Enterprise DDoS Protection"
    },
    features: [
      "Root Access",
      "Full SSH Access",
      "Choose Your OS",
      "Dedicated Resources",
      "100% Uptime SLA",
      "24/7 Premium Support",
      "4x Daily Backups",
      "Advanced Firewall",
      "Resource Monitoring",
      "Performance Optimization",
      "Dedicated Support Team",
      "Custom Setup Assistance",
      "Hardware Redundancy",
      "Priority Resource Allocation",
      "Enterprise Support"
    ]
  }
];

const discordBotPlans = [
  {
    name: "Coder",
    price: 299,
    specs: {
      ram: "512MB",
      cpu: "100%",
      storage: "2GB SSD",
      ports: "2 Additional Ports",
      backups: "2 Backup Limit",
      databases: "2 Databases"
    },
    features: [
      "24/7 Bot Hosting",
      "SSH Access",
      "Node.js & Python Support",
      "Instant Setup",
      "99.9% Uptime",
      "Community Support"
    ]
  },
  {
    name: "Developer",
    price: 499,
    specs: {
      ram: "1GB",
      cpu: "200%",
      storage: "4GB SSD",
      ports: "4 Additional Ports",
      backups: "4 Backup Limit",
      databases: "4 Databases"
    },
    features: [
      "24/7 Bot Hosting",
      "SSH Access",
      "Node.js & Python Support",
      "Instant Setup",
      "99.9% Uptime",
      "Priority Support",
      "Advanced Monitoring",
      "Custom Modules"
    ],
    highlighted: true
  }
];

const OtherHosting = () => {
  return (
    <>
      <Helmet>
        <title>Other Hosting Plans | VPS & Discord Bot Hosting | CreeperCastle.cloud</title>
        <meta 
          name="description" 
          content="Choose from our VPS hosting plans or Discord bot hosting solutions. High-performance servers with dedicated resources and 24/7 support."
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
                  Other <span className="text-creeper">Hosting Plans</span>
                </motion.h1>
                <motion.p 
                  className="text-xl text-gray-300 max-w-3xl mx-auto"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  Choose from our VPS hosting or Discord bot hosting solutions.
                </motion.p>
              </div>
              
              <Tabs defaultValue="vps" className="w-full max-w-6xl mx-auto">
                <TabsList className="grid grid-cols-2 mb-8 bg-navy-light border border-gray-800">
                  <TabsTrigger value="vps" className="text-lg py-3">VPS Plans</TabsTrigger>
                  <TabsTrigger value="discord-bot" className="text-lg py-3">Discord Bot Hosting</TabsTrigger>
                </TabsList>
                
                <TabsContent value="vps">
                  <Tabs defaultValue="standard" className="w-full">
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
                        className="grid grid-cols-1 md:grid-cols-3 gap-8"
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
                </TabsContent>
                
                <TabsContent value="discord-bot">
                  <motion.div 
                    className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                  >
                    {discordBotPlans.map((plan, index) => (
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
                            <Bot className="h-12 w-12 text-creeper" />
                          </div>
                          <CardTitle className="text-2xl">{plan.name}</CardTitle>
                          <div className="flex items-baseline justify-center mt-2">
                            <span className="text-4xl font-bold">₹{plan.price}</span>
                            <span className="text-gray-400 ml-1">/month</span>
                          </div>
                          <CardDescription className="text-gray-400 mt-2">
                            Discord bot hosting made simple
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
                                  <span className="text-gray-400">Additional Ports</span>
                                  <span className="font-medium text-creeper">{plan.specs.ports}</span>
                                </li>
                                <li className="flex justify-between">
                                  <span className="text-gray-400">Backup Limit</span>
                                  <span className="font-medium text-creeper">{plan.specs.backups}</span>
                                </li>
                                <li className="flex justify-between">
                                  <span className="text-gray-400">Databases</span>
                                  <span className="font-medium text-creeper">{plan.specs.databases}</span>
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
                                href="https://billing.creepercastle.in/index.php?rp=/store/discord-bot-hosting" 
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
            </div>
          </section>
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default OtherHosting;