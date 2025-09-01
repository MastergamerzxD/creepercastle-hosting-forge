import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Server } from "lucide-react";
import { motion } from "framer-motion";

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

const VPSPlans = () => {
  return (
    <>
      <Helmet>
        <title>VPS Hosting Plans India - Custom Virtual Private Servers | CreeperCastle</title>
        <meta 
          name="description" 
          content="Custom VPS hosting plans in India with dedicated resources, full root access, and CreeperShield protection. Starting from ₹299/month with 24/7 support."
        />
        <meta
          name="keywords"
          content="vps hosting india, virtual private server, custom vps, dedicated hosting, root access vps, linux vps hosting, windows vps hosting, mumbai vps"
        />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://creepercastle.cloud/plans/vps" />
        <meta property="og:title" content="Custom VPS Hosting Plans | Dedicated Resources | CreeperCastle" />
        <meta property="og:description" content="Professional VPS hosting with custom configurations starting from ₹299/month. Full root access and dedicated support." />
        <meta property="og:image" content="https://creepercastle.cloud/lovable-uploads/a5ede7d4-e1bf-4925-84dd-4b075648dc11.png" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://creepercastle.cloud/plans/vps" />
      </Helmet>
      
      <div className="flex flex-col min-h-screen bg-navy text-white relative">
        {/* Enhanced background */}
        <div className="fixed inset-0 z-0 pointer-events-none">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40" 
            style={{ backgroundImage: 'url("/lovable-uploads/aecdd243-6cbd-4e56-82a8-b494c26108cc.png")' }}
          ></div>
          
          <div className="absolute inset-0 bg-gradient-to-b from-navy-dark/90 via-navy/80 to-navy-light/70"></div>
          
          {/* Animated particles */}
          {Array.from({ length: 8 }).map((_, i) => (
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
                  VPS <span className="text-creeper">Hosting Plans</span>
                </motion.h1>
                <motion.p 
                  className="text-xl text-gray-300 max-w-3xl mx-auto"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  High-performance virtual private servers with dedicated resources and full root access
                </motion.p>
              </div>
              
              <div className="grid grid-cols-1 max-w-md mx-auto">
                {vpsPlans.map((plan, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                  >
                    <Card 
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
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default VPSPlans;