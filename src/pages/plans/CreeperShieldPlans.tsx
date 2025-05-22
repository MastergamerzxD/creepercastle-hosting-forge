
import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Shield } from "lucide-react";
import { motion } from "framer-motion";

const creepershieldPlans = [
  {
    name: "Basic Shield",
    price: 84,
    bandwidth: "1 Tbps",
    features: [
      "Layer 3 & 4 Protection",
      "IP Filtration",
      "<1.1ms resolving time",
      "Minecraft Server Protection",
      "Zero Downtime Protection",
      "Automatic Filtering"
    ],
    highlighted: false
  },
  {
    name: "Advanced Shield",
    price: 167,
    bandwidth: "2 Tbps",
    features: [
      "Layer 3, 4 & 7 Protection",
      "Advanced IP Filtration",
      "<1ms resolving time",
      "Minecraft Server Protection",
      "Zero Downtime Protection",
      "Automatic Filtering",
      "Custom Filtering Rules",
      "24/7 Security Team",
      "Real-time Attack Analysis"
    ],
    highlighted: true
  },
  {
    name: "Ultimate Shield",
    price: 250,
    bandwidth: "3 Tbps",
    features: [
      "Layer 3, 4 & 7 Protection",
      "Advanced IP Filtration",
      "<0.8ms resolving time",
      "Minecraft Server Protection",
      "Zero Downtime Protection",
      "Automatic Filtering",
      "Custom Filtering Rules",
      "24/7 Dedicated Security Team",
      "Real-time Attack Analysis",
      "Priority Support",
      "Custom Security Configuration"
    ],
    highlighted: false
  }
];

const CreeperShieldPlans = () => {
  return (
    <>
      <Helmet>
        <title>CreeperShield DDoS Protection | CreeperCastle.cloud</title>
        <meta 
          name="description" 
          content="Advanced DDoS protection specifically designed for Minecraft servers. Keep your server online even during attacks with our CreeperShield protection."
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
                  Creeper<span className="text-creeper">Shield</span> Protection
                </motion.h1>
                <motion.p 
                  className="text-xl text-gray-300 max-w-3xl mx-auto"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  Advanced DDoS protection specifically designed for Minecraft servers.
                  Keep your server online even during the most intense attacks.
                </motion.p>
              </div>
              
              <motion.div 
                className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                {creepershieldPlans.map((plan, index) => (
                  <Card 
                    key={index} 
                    className={`bg-navy-light ${plan.highlighted ? 'border-2 border-creeper relative' : 'border border-gray-800'} hover:transform hover:-translate-y-2 transition-all duration-300`}
                  >
                    {plan.highlighted && (
                      <div className="absolute top-0 right-0 bg-creeper text-navy-dark font-medium text-sm px-4 py-1 rounded-bl-lg">
                        Recommended
                      </div>
                    )}
                    <CardHeader className="text-center">
                      <div className="mx-auto mb-4">
                        <Shield className="h-12 w-12 text-creeper" />
                      </div>
                      <CardTitle className="text-2xl">{plan.name}</CardTitle>
                      <div className="flex items-baseline justify-center mt-2">
                        <span className="text-4xl font-bold">₹{plan.price}</span>
                        <span className="text-gray-400 ml-1">/month</span>
                      </div>
                      <CardDescription className="text-gray-400 mt-2">
                        {plan.bandwidth} Bandwidth
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="pt-4">
                          <ul className="space-y-2">
                            {plan.features.map((feature, i) => (
                              <li key={i} className="flex items-start">
                                <Check className="h-5 w-5 text-creeper mr-2 mt-0.5 flex-shrink-0" />
                                <span className="text-sm text-gray-300">{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        <Button className="w-full minecraft-btn mt-4" asChild>
                          <a 
                            href="https://billing.creepercastle.in/index.php?rp=/store/creepershield" 
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
              
              {/* Additional Information Section */}
              <div className="mt-20">
                <div className="max-w-4xl mx-auto">
                  <h2 className="text-3xl font-bold mb-8 text-center">
                    How <span className="text-creeper">CreeperShield</span> Works
                  </h2>
                  
                  <div className="bg-navy-light p-8 rounded-lg border border-gray-800">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                      <div>
                        <h3 className="text-xl font-semibold mb-4 flex items-center">
                          <Shield className="mr-2 text-creeper h-5 w-5" /> 
                          Multi-Layer Protection
                        </h3>
                        <p className="text-gray-400 mb-4">
                          CreeperShield provides comprehensive protection across multiple layers:
                        </p>
                        <ul className="space-y-2">
                          <li className="flex items-start">
                            <Check className="h-5 w-5 text-creeper mr-2 mt-0.5 flex-shrink-0" />
                            <span className="text-sm text-gray-300">Layer 3 (Network) Protection</span>
                          </li>
                          <li className="flex items-start">
                            <Check className="h-5 w-5 text-creeper mr-2 mt-0.5 flex-shrink-0" />
                            <span className="text-sm text-gray-300">Layer 4 (Transport) Protection</span>
                          </li>
                          <li className="flex items-start">
                            <Check className="h-5 w-5 text-creeper mr-2 mt-0.5 flex-shrink-0" />
                            <span className="text-sm text-gray-300">Layer 7 (Application) Protection with Advanced Shield</span>
                          </li>
                        </ul>
                      </div>
                      
                      <div>
                        <h3 className="text-xl font-semibold mb-4 flex items-center">
                          <Shield className="mr-2 text-creeper h-5 w-5" /> 
                          How It Protects Your Server
                        </h3>
                        <p className="text-gray-400 mb-4">
                          When an attack is detected, CreeperShield:
                        </p>
                        <ul className="space-y-2">
                          <li className="flex items-start">
                            <Check className="h-5 w-5 text-creeper mr-2 mt-0.5 flex-shrink-0" />
                            <span className="text-sm text-gray-300">Identifies and filters malicious traffic</span>
                          </li>
                          <li className="flex items-start">
                            <Check className="h-5 w-5 text-creeper mr-2 mt-0.5 flex-shrink-0" />
                            <span className="text-sm text-gray-300">Routes legitimate players to your server</span>
                          </li>
                          <li className="flex items-start">
                            <Check className="h-5 w-5 text-creeper mr-2 mt-0.5 flex-shrink-0" />
                            <span className="text-sm text-gray-300">Absorbs attack traffic with our high-capacity network</span>
                          </li>
                          <li className="flex items-start">
                            <Check className="h-5 w-5 text-creeper mr-2 mt-0.5 flex-shrink-0" />
                            <span className="text-sm text-gray-300">Maintains your server's performance throughout</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* FAQ Section */}
              <div className="mt-20">
                <h2 className="text-3xl font-bold mb-8 text-center">
                  Frequently Asked <span className="text-creeper">Questions</span>
                </h2>
                
                <div className="max-w-3xl mx-auto space-y-6">
                  <Card className="bg-navy-light border-gray-800">
                    <CardHeader>
                      <CardTitle className="text-xl">Do I need CreeperShield if I already host with CreeperCastle?</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-300">
                        All CreeperCastle Minecraft hosting plans include basic DDoS protection. CreeperShield offers enhanced 
                        protection with higher bandwidth capacity and advanced features. It's recommended for servers that are 
                        frequently targeted or have a large player base.
                      </p>
                    </CardContent>
                  </Card>
                  
                  <Card className="bg-navy-light border-gray-800">
                    <CardHeader>
                      <CardTitle className="text-xl">Can I use CreeperShield with servers hosted elsewhere?</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-300">
                        Yes! CreeperShield is available as a standalone service and can be used with Minecraft servers 
                        hosted on any provider. Our team will help you set up and configure the protection for your specific setup.
                      </p>
                    </CardContent>
                  </Card>
                  
                  <Card className="bg-navy-light border-gray-800">
                    <CardHeader>
                      <CardTitle className="text-xl">How does CreeperShield affect my server performance?</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-300">
                        CreeperShield is designed to have minimal impact on your server's performance. The protection 
                        layer adds less than 1.1ms of latency (or under 1ms with Advanced Shield), which is imperceptible 
                        to players while providing robust protection against attacks.
                      </p>
                    </CardContent>
                  </Card>
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

export default CreeperShieldPlans;
