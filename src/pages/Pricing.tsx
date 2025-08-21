
import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PricingSection from "@/components/PricingSection";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Check, HelpCircle } from "lucide-react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

const PricingPage = () => {
  return (
    <>
      <Helmet>
        <title>Minecraft Server Pricing India - Affordable Hosting Plans | CreeperCastle Pricing</title>
        <meta 
          name="description" 
          content="Affordable and transparent pricing for Minecraft server hosting. Compare plans and features to find the perfect hosting solution for your Minecraft adventure."
        />
        <meta 
          name="keywords" 
          content="minecraft server pricing, minecraft hosting cost, cheap minecraft server, premium minecraft hosting, minecraft host india, minecraft server price comparison"
        />
      </Helmet>
      
      <div className="flex flex-col min-h-screen bg-navy text-white relative">
        {/* Background elements */}
        <div className="fixed inset-0 z-0 pointer-events-none">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30" 
            style={{ backgroundImage: 'url("/lovable-uploads/4fca9c12-4db7-435f-a6c5-3fe7e04cf205.png")' }}
          ></div>
          
          <div className="absolute inset-0 bg-gradient-to-b from-navy-dark/90 via-navy/80 to-navy-light/70"></div>
        </div>
        
        <Navbar />
        
        <main className="flex-grow pt-16 relative z-10">
          {/* Hero Section */}
          <section className="py-20">
            <div className="container mx-auto px-4">
              <div className="text-center">
                <motion.h1 
                  className="text-4xl md:text-5xl font-bold mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  Transparent <span className="text-creeper">Pricing</span>
                </motion.h1>
                <motion.p 
                  className="text-xl text-gray-300 max-w-3xl mx-auto mb-8"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  Simple, affordable pricing for Minecraft hosting with no hidden fees.
                  All plans include our CreeperShield DDoS protection, 24/7 support, and instant setup.
                </motion.p>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  <Button className="minecraft-btn text-lg py-6 px-8" asChild>
                    <a href="#pricing-options">View Pricing Options</a>
                  </Button>
                </motion.div>
              </div>
            </div>
          </section>
          
          {/* Main Pricing Section */}
          <section id="pricing-options">
            <PricingSection />
          </section>
          
          {/* Pricing Comparison Table */}
          <section className="py-16 bg-navy-light/30">
            <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Plan <span className="text-creeper">Comparison</span>
                </h2>
                <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                  Compare our plans to find the perfect fit for your Minecraft server
                </p>
              </div>
              
              <div className="overflow-x-auto">
                <Table className="w-full border-collapse">
                  <TableHeader className="bg-navy-dark">
                    <TableRow>
                      <TableHead className="text-left text-white font-bold">Feature</TableHead>
                      <TableHead className="text-center text-white font-bold">Budget Plan</TableHead>
                      <TableHead className="text-center text-white font-bold">Standard Plan</TableHead>
                      <TableHead className="text-center text-white font-bold">Premium Plan</TableHead>
                      <TableHead className="text-center text-white font-bold">VPS</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell className="border-t border-gray-800 font-medium">Price (monthly)</TableCell>
                      <TableCell className="border-t border-gray-800 text-center">₹99</TableCell>
                      <TableCell className="border-t border-gray-800 text-center">₹249</TableCell>
                      <TableCell className="border-t border-gray-800 text-center">₹499</TableCell>
                      <TableCell className="border-t border-gray-800 text-center">₹3300+</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="border-t border-gray-800 font-medium">RAM</TableCell>
                      <TableCell className="border-t border-gray-800 text-center">2GB</TableCell>
                      <TableCell className="border-t border-gray-800 text-center">5GB</TableCell>
                      <TableCell className="border-t border-gray-800 text-center">10GB</TableCell>
                      <TableCell className="border-t border-gray-800 text-center">32GB+</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="border-t border-gray-800 font-medium">CPU</TableCell>
                      <TableCell className="border-t border-gray-800 text-center">1 vCore</TableCell>
                      <TableCell className="border-t border-gray-800 text-center">2 vCores</TableCell>
                      <TableCell className="border-t border-gray-800 text-center">4 vCores</TableCell>
                      <TableCell className="border-t border-gray-800 text-center">10 vCores+</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="border-t border-gray-800 font-medium">Storage</TableCell>
                      <TableCell className="border-t border-gray-800 text-center">30GB NVMe</TableCell>
                      <TableCell className="border-t border-gray-800 text-center">75GB NVMe</TableCell>
                      <TableCell className="border-t border-gray-800 text-center">150GB NVMe</TableCell>
                      <TableCell className="border-t border-gray-800 text-center">300GB+ NVMe</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="border-t border-gray-800 font-medium">Player Slots</TableCell>
                      <TableCell className="border-t border-gray-800 text-center">10</TableCell>
                      <TableCell className="border-t border-gray-800 text-center">30</TableCell>
                      <TableCell className="border-t border-gray-800 text-center">Unlimited</TableCell>
                      <TableCell className="border-t border-gray-800 text-center">Unlimited</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="border-t border-gray-800 font-medium">
                        <div className="flex items-center">
                          <span>DDoS Protection</span>
                          <TooltipProvider>
                            <Tooltip>
                              <TooltipTrigger>
                                <HelpCircle className="h-4 w-4 ml-1 text-gray-400" />
                              </TooltipTrigger>
                              <TooltipContent>
                                <p className="w-64">CreeperShield protects your server from DDoS attacks, keeping it online even during attacks.</p>
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                        </div>
                      </TableCell>
                      <TableCell className="border-t border-gray-800 text-center">Basic</TableCell>
                      <TableCell className="border-t border-gray-800 text-center">Standard</TableCell>
                      <TableCell className="border-t border-gray-800 text-center">Advanced</TableCell>
                      <TableCell className="border-t border-gray-800 text-center">CreeperShield</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="border-t border-gray-800 font-medium">Plugins/Mods</TableCell>
                      <TableCell className="border-t border-gray-800 text-center">Unlimited</TableCell>
                      <TableCell className="border-t border-gray-800 text-center">Unlimited</TableCell>
                      <TableCell className="border-t border-gray-800 text-center">Unlimited</TableCell>
                      <TableCell className="border-t border-gray-800 text-center">Unlimited</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="border-t border-gray-800 font-medium">One-Click Installer</TableCell>
                      <TableCell className="border-t border-gray-800 text-center">
                        <Check className="h-5 w-5 text-creeper mx-auto" />
                      </TableCell>
                      <TableCell className="border-t border-gray-800 text-center">
                        <Check className="h-5 w-5 text-creeper mx-auto" />
                      </TableCell>
                      <TableCell className="border-t border-gray-800 text-center">
                        <Check className="h-5 w-5 text-creeper mx-auto" />
                      </TableCell>
                      <TableCell className="border-t border-gray-800 text-center">Root Access</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="border-t border-gray-800 font-medium">Custom Domain</TableCell>
                      <TableCell className="border-t border-gray-800 text-center">
                        <Check className="h-5 w-5 text-creeper mx-auto" />
                      </TableCell>
                      <TableCell className="border-t border-gray-800 text-center">
                        <Check className="h-5 w-5 text-creeper mx-auto" />
                      </TableCell>
                      <TableCell className="border-t border-gray-800 text-center">
                        <Check className="h-5 w-5 text-creeper mx-auto" />
                      </TableCell>
                      <TableCell className="border-t border-gray-800 text-center">
                        <Check className="h-5 w-5 text-creeper mx-auto" />
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="border-t border-gray-800 font-medium">Modpack Support</TableCell>
                      <TableCell className="border-t border-gray-800 text-center">Basic</TableCell>
                      <TableCell className="border-t border-gray-800 text-center">Full Support</TableCell>
                      <TableCell className="border-t border-gray-800 text-center">Full Support</TableCell>
                      <TableCell className="border-t border-gray-800 text-center">Full Support</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="border-t border-gray-800 font-medium">Technical Support</TableCell>
                      <TableCell className="border-t border-gray-800 text-center">Standard</TableCell>
                      <TableCell className="border-t border-gray-800 text-center">Priority</TableCell>
                      <TableCell className="border-t border-gray-800 text-center">24/7 Priority</TableCell>
                      <TableCell className="border-t border-gray-800 text-center">24/7 Priority</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="border-t border-gray-800 font-medium">Automatic Backups</TableCell>
                      <TableCell className="border-t border-gray-800 text-center">Daily</TableCell>
                      <TableCell className="border-t border-gray-800 text-center">2x Daily</TableCell>
                      <TableCell className="border-t border-gray-800 text-center">3x Daily</TableCell>
                      <TableCell className="border-t border-gray-800 text-center">Custom Schedule</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="border-t border-gray-800"></TableCell>
                      <TableCell className="border-t border-gray-800 text-center py-4">
                        <Button className="minecraft-btn" asChild>
                          <a href="https://billing.creepercastle.in/index.php?rp=/store/minecraft-performance-servers" target="_blank" rel="noopener noreferrer">
                            Get Started
                          </a>
                        </Button>
                      </TableCell>
                      <TableCell className="border-t border-gray-800 text-center py-4">
                        <Button className="minecraft-btn" asChild>
                          <a href="https://billing.creepercastle.in/index.php?rp=/store/minecraft-performance-servers" target="_blank" rel="noopener noreferrer">
                            Get Started
                          </a>
                        </Button>
                      </TableCell>
                      <TableCell className="border-t border-gray-800 text-center py-4">
                        <Button className="minecraft-btn" asChild>
                          <a href="https://billing.creepercastle.in/index.php?rp=/store/minecraft-performance-servers" target="_blank" rel="noopener noreferrer">
                            Get Started
                          </a>
                        </Button>
                      </TableCell>
                      <TableCell className="border-t border-gray-800 text-center py-4">
                        <Button className="minecraft-btn" asChild>
                          <a href="https://billing.creepercastle.in/index.php?rp=/store/vps-hosting" target="_blank" rel="noopener noreferrer">
                            Get Started
                          </a>
                        </Button>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </div>
            </div>
          </section>
          
          {/* Custom Plans Section */}
          <section className="py-16">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto bg-navy-light p-8 rounded-xl border border-gray-800">
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-bold mb-4">Need a <span className="text-creeper">Custom Plan</span>?</h2>
                  <p className="text-lg text-gray-300">
                    Don't see a plan that fits your needs? We offer custom solutions tailored to your specific requirements.
                  </p>
                </div>
                
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <ul className="space-y-4">
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-creeper mr-3 mt-1" />
                        <span>Dedicated hardware configurations</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-creeper mr-3 mt-1" />
                        <span>Custom resource allocations</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-creeper mr-3 mt-1" />
                        <span>Special plugin requirements</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-creeper mr-3 mt-1" />
                        <span>Large network solutions</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-creeper mr-3 mt-1" />
                        <span>Enhanced DDoS protection options</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="text-center md:text-right">
                    <p className="text-lg mb-4">Contact our team to discuss your requirements</p>
                    <div className="space-y-4">
                      <Button className="minecraft-btn w-full md:w-auto" asChild>
                        <a href="https://discord.gg/RuQ9neH56S" target="_blank" rel="noopener noreferrer">
                          Join Our Discord
                        </a>
                      </Button>
                      <div className="block md:hidden"></div>
                      <Button className="w-full md:w-auto bg-transparent border border-creeper text-creeper hover:bg-creeper/10" asChild>
                        <a href="/contact">Contact Us</a>
                      </Button>
                    </div>
                  </div>
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

export default PricingPage;
