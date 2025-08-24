import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Server, Bot, ChevronDown, ChevronUp } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

const vpsPlans = [
  {
    name: "Custom VPS Plan",
    price: "Custom",
    specs: {
      ram: "Tailored to your needs",
      cpu: "As per requirements",
      storage: "Custom allocation",
      bandwidth: "Unmetered",
      protection: "CreeperShield Protection"
    },
    features: [
      "Custom Hardware Configuration",
      "Tailored Resource Allocation",
      "Root Access",
      "Full SSH Access",
      "Choose Your OS",
      "Dedicated Resources",
      "99.9% Uptime SLA",
      "24/7 Priority Support",
      "Custom Setup Assistance"
    ],
    highlighted: true,
    isCustom: true
  }
];

  const discordBotPlans = [
    {
      name: "Coder",
      price: 22,
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
      price: 49,
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
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  const toggleSection = (section: string) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  return (
    <>
      <Helmet>
        <title>VPS Hosting & Other Games India - FiveM, CS2, Valheim Server Hosting | CreeperCastle</title>
        <meta 
          name="description" 
          content="Choose from our custom VPS hosting plans or Discord bot hosting solutions. Custom VPS configurations starting from ₹299 and Discord bot hosting from ₹22/month with 24/7 support."
        />
        <meta
          name="keywords"
          content="vps hosting india, discord bot hosting, custom vps plans, virtual private server india, discord hosting plans, bot hosting service, vps hosting mumbai delhi, custom server solutions"
        />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://creepercastle.cloud/plans/other" />
        <meta property="og:title" content="VPS & Discord Bot Hosting | Custom Solutions | CreeperCastle" />
        <meta property="og:description" content="Custom VPS hosting and Discord bot hosting solutions. Professional hosting starting from ₹22/month with dedicated support." />
        <meta property="og:image" content="https://creepercastle.cloud/lovable-uploads/a5ede7d4-e1bf-4925-84dd-4b075648dc11.png" />
        <meta property="og:image:alt" content="VPS and Discord Bot Hosting Plans" />
        <meta property="og:site_name" content="CreeperCastle.cloud" />
        <meta property="og:locale" content="en_IN" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="VPS & Discord Bot Hosting 🤖 | Custom Solutions" />
        <meta name="twitter:description" content="Custom VPS hosting and Discord bot hosting solutions starting from ₹22/month. Professional support included." />
        <meta name="twitter:image" content="https://creepercastle.cloud/lovable-uploads/a5ede7d4-e1bf-4925-84dd-4b075648dc11.png" />
        
        {/* Additional SEO tags */}
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <meta name="author" content="CreeperCastle.cloud" />
        <meta name="geo.region" content="IN" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://creepercastle.cloud/plans/other" />
      </Helmet>
      
      <div className="flex flex-col min-h-screen bg-navy text-white relative">
        {/* Enhanced background with underwater Minecraft scene */}
        <div className="fixed inset-0 z-0 pointer-events-none">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40" 
            style={{ backgroundImage: 'url("/lovable-uploads/aecdd243-6cbd-4e56-82a8-b494c26108cc.png")' }}
          ></div>
          
          <div className="absolute inset-0 bg-gradient-to-b from-navy-dark/90 via-navy/80 to-navy-light/70"></div>
          
          {/* Animated particles */}
          {Array.from({ length: 10 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute bg-creeper/20 rounded-full"
              initial={{
                width: Math.random() * 6 + 2,
                height: Math.random() * 6 + 2,
                x: Math.random() * 100 + "%",
                y: Math.random() * 100 + "%",
                opacity: Math.random() * 0.5,
              }}
              animate={{
                y: ["-10%", "110%"],
                opacity: [0, 0.6, 0],
              }}
              transition={{
                duration: Math.random() * 15 + 20,
                repeat: Infinity,
                ease: "linear",
                delay: Math.random() * 10,
              }}
            />
          ))}
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
              
              {/* Catalog Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
                {/* VPS Hosting Catalog */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  <Card className="bg-navy-light border border-gray-800 hover:border-creeper transition-all duration-300">
                    <CardHeader className="text-center">
                      <div className="mx-auto mb-4">
                        <Server className="h-16 w-16 text-creeper" />
                      </div>
                      <CardTitle className="text-2xl">VPS Hosting</CardTitle>
                      <CardDescription className="text-gray-400">
                        High-performance virtual private servers with dedicated resources and full root access
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="text-center mb-4">
                        <p className="text-sm text-gray-400 mb-2">Starting from just ₹299</p>
                        <p className="text-3xl font-bold text-creeper">Custom<span className="text-lg text-gray-400"> pricing</span></p>
                      </div>
                      <ul className="space-y-2 mb-6">
                        <li className="flex items-center text-sm">
                          <Check className="h-4 w-4 text-creeper mr-2" />
                          Custom Hardware Configuration
                        </li>
                        <li className="flex items-center text-sm">
                          <Check className="h-4 w-4 text-creeper mr-2" />
                          Tailored Resource Allocation
                        </li>
                        <li className="flex items-center text-sm">
                          <Check className="h-4 w-4 text-creeper mr-2" />
                          Open a ticket on Discord for custom quote
                        </li>
                      </ul>
                      <Button 
                        className="w-full minecraft-btn" 
                        onClick={() => toggleSection('vps')}
                      >
                        View More {expandedSection === 'vps' ? <ChevronUp className="ml-2 h-4 w-4" /> : <ChevronDown className="ml-2 h-4 w-4" />}
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>

                {/* Discord Bot Hosting Catalog */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  <Card className="bg-navy-light border border-gray-800 hover:border-creeper transition-all duration-300">
                    <CardHeader className="text-center">
                      <div className="mx-auto mb-4">
                        <Bot className="h-16 w-16 text-creeper" />
                      </div>
                      <CardTitle className="text-2xl">Discord Bot Hosting</CardTitle>
                      <CardDescription className="text-gray-400">
                        Reliable hosting for your Discord bots with 24/7 uptime and easy deployment
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="text-center mb-4">
                        <p className="text-sm text-gray-400 mb-2">Starting from</p>
                        <p className="text-3xl font-bold text-creeper">₹22<span className="text-lg text-gray-400">/month</span></p>
                      </div>
                      <ul className="space-y-2 mb-6">
                        <li className="flex items-center text-sm">
                          <Check className="h-4 w-4 text-creeper mr-2" />
                          24/7 Bot Hosting
                        </li>
                        <li className="flex items-center text-sm">
                          <Check className="h-4 w-4 text-creeper mr-2" />
                          Node.js & Python Support
                        </li>
                        <li className="flex items-center text-sm">
                          <Check className="h-4 w-4 text-creeper mr-2" />
                          Instant Setup
                        </li>
                      </ul>
                      <Button 
                        className="w-full minecraft-btn" 
                        onClick={() => toggleSection('discord')}
                      >
                        View More {expandedSection === 'discord' ? <ChevronUp className="ml-2 h-4 w-4" /> : <ChevronDown className="ml-2 h-4 w-4" />}
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              </div>

              {/* Expanded VPS Plans */}
              {expandedSection === 'vps' && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.5 }}
                  className="mb-12"
                >
                  <h2 className="text-3xl font-bold mb-8 text-center">
                    Custom VPS <span className="text-creeper">Hosting</span>
                  </h2>
                  <div className="grid grid-cols-1 max-w-md mx-auto">
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
                            <span className="text-2xl text-gray-400">Starting from ₹299</span>
                          </div>
                          <div className="flex items-baseline justify-center mt-1">
                            <span className="text-3xl font-bold text-creeper">Custom Pricing</span>
                          </div>
                          <CardDescription className="text-gray-400 mt-2">
                            Get a personalized VPS solution tailored to your specific needs
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
                            
                            <div className="text-center mt-6 mb-4">
                              <p className="text-sm text-gray-400 mb-2">
                                Ready to get started? Open a ticket on our Discord server for a custom quote!
                              </p>
                            </div>
                            
                            <Button className="w-full minecraft-btn" asChild>
                              <a 
                                href="https://discord.gg/creepercastle" 
                                target="_blank" 
                                rel="noopener noreferrer"
                              >
                                Get Custom Quote on Discord
                              </a>
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* Expanded Discord Bot Plans */}
              {expandedSection === 'discord' && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.5 }}
                  className="mb-12"
                >
                  <h2 className="text-3xl font-bold mb-8 text-center">
                    Discord Bot <span className="text-creeper">Hosting Plans</span>
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
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
                                href={
                                  plan.name === "Coder" ? "https://billing.creepercastle.in/products/discord-bot-hosting/coder" :
                                  plan.name === "Developer" ? "https://billing.creepercastle.in/products/discord-bot-hosting/developer" :
                                  "https://billing.creepercastle.in/products/discord-bot-hosting/"
                                }
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
                  </div>
                </motion.div>
              )}
            </div>
          </section>
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default OtherHosting;