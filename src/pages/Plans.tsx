
import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Server, Shield, Database, Cloud } from "lucide-react";
import { motion } from "framer-motion";

const Plans = () => {
  // Animation variants for staggered animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <>
      <Helmet>
        <title>Minecraft Hosting Plans | CreeperCastle.cloud</title>
        <meta 
          name="description" 
          content="Explore our range of Minecraft server hosting plans - from budget-friendly options to high-performance dedicated servers. Find the perfect plan for your Minecraft community."
        />
        <meta 
          name="keywords" 
          content="minecraft hosting plans, minecraft server packages, java server hosting, bedrock server hosting, modded minecraft hosting, budget minecraft server, premium minecraft hosting"
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
              <div className="text-center mb-16">
                <h1 className="text-4xl md:text-5xl font-bold mb-6">
                  Minecraft Server <span className="text-creeper">Hosting Plans</span>
                </h1>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Choose from our wide range of Minecraft hosting options, designed to meet 
                  every need from small friend groups to large communities.
                </p>
              </div>
            </div>
          </section>
          
          {/* Game Server Plans */}
          <section className="py-16 bg-navy-dark/50">
            <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Game <span className="text-creeper">Server Plans</span>
                </h2>
                <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                  Premium Minecraft hosting with instant deployment and 24/7 support
                </p>
              </div>
              
              <motion.div 
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                {/* Budget Plan */}
                <motion.div variants={itemVariants}>
                  <Card className="bg-navy-light border-gray-800 hover:border-creeper/50 transition-all">
                    <CardHeader>
                      <div className="flex items-center justify-center mb-4">
                        <Server className="h-12 w-12 text-creeper" />
                      </div>
                      <CardTitle className="text-2xl font-bold text-center">Budget Plan</CardTitle>
                      <div className="text-center">
                        <span className="text-3xl font-bold">₹99</span>
                        <span className="text-gray-400">/month</span>
                      </div>
                      <CardDescription className="text-center text-gray-400">
                        Perfect for small friend groups
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        <li className="flex items-center">
                          <Check className="h-5 w-5 text-creeper mr-2 flex-shrink-0" />
                          <span>2GB RAM</span>
                        </li>
                        <li className="flex items-center">
                          <Check className="h-5 w-5 text-creeper mr-2 flex-shrink-0" />
                          <span>1 vCore CPU</span>
                        </li>
                        <li className="flex items-center">
                          <Check className="h-5 w-5 text-creeper mr-2 flex-shrink-0" />
                          <span>30GB NVMe Storage</span>
                        </li>
                        <li className="flex items-center">
                          <Check className="h-5 w-5 text-creeper mr-2 flex-shrink-0" />
                          <span>10 Player Slots</span>
                        </li>
                        <li className="flex items-center">
                          <Check className="h-5 w-5 text-creeper mr-2 flex-shrink-0" />
                          <span>Basic DDoS Protection</span>
                        </li>
                      </ul>
                      <Button className="w-full minecraft-btn mt-6" asChild>
                        <a href="https://billing.creepercastle.in/index.php?rp=/store/minecraft-performance-servers" target="_blank" rel="noopener noreferrer">
                          Get Started
                        </a>
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
                
                {/* Standard Plan */}
                <motion.div variants={itemVariants}>
                  <Card className="bg-navy-light border-creeper relative">
                    <div className="absolute top-0 right-0 bg-creeper text-navy-dark font-medium text-sm px-4 py-1 rounded-bl-lg">
                      Popular
                    </div>
                    <CardHeader>
                      <div className="flex items-center justify-center mb-4">
                        <Database className="h-12 w-12 text-creeper" />
                      </div>
                      <CardTitle className="text-2xl font-bold text-center">Standard Plan</CardTitle>
                      <div className="text-center">
                        <span className="text-3xl font-bold">₹249</span>
                        <span className="text-gray-400">/month</span>
                      </div>
                      <CardDescription className="text-center text-gray-400">
                        Ideal for growing communities
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        <li className="flex items-center">
                          <Check className="h-5 w-5 text-creeper mr-2 flex-shrink-0" />
                          <span>5GB RAM</span>
                        </li>
                        <li className="flex items-center">
                          <Check className="h-5 w-5 text-creeper mr-2 flex-shrink-0" />
                          <span>2 vCore CPU</span>
                        </li>
                        <li className="flex items-center">
                          <Check className="h-5 w-5 text-creeper mr-2 flex-shrink-0" />
                          <span>75GB NVMe Storage</span>
                        </li>
                        <li className="flex items-center">
                          <Check className="h-5 w-5 text-creeper mr-2 flex-shrink-0" />
                          <span>30 Player Slots</span>
                        </li>
                        <li className="flex items-center">
                          <Check className="h-5 w-5 text-creeper mr-2 flex-shrink-0" />
                          <span>CreeperShield Protection</span>
                        </li>
                        <li className="flex items-center">
                          <Check className="h-5 w-5 text-creeper mr-2 flex-shrink-0" />
                          <span>One-Click Plugin Installer</span>
                        </li>
                      </ul>
                      <Button className="w-full minecraft-btn mt-6" asChild>
                        <a href="https://billing.creepercastle.in/index.php?rp=/store/minecraft-performance-servers" target="_blank" rel="noopener noreferrer">
                          Get Started
                        </a>
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
                
                {/* Premium Plan */}
                <motion.div variants={itemVariants}>
                  <Card className="bg-navy-light border-gray-800 hover:border-creeper/50 transition-all">
                    <CardHeader>
                      <div className="flex items-center justify-center mb-4">
                        <Cloud className="h-12 w-12 text-creeper" />
                      </div>
                      <CardTitle className="text-2xl font-bold text-center">Premium Plan</CardTitle>
                      <div className="text-center">
                        <span className="text-3xl font-bold">₹499</span>
                        <span className="text-gray-400">/month</span>
                      </div>
                      <CardDescription className="text-center text-gray-400">
                        For established communities
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        <li className="flex items-center">
                          <Check className="h-5 w-5 text-creeper mr-2 flex-shrink-0" />
                          <span>10GB RAM</span>
                        </li>
                        <li className="flex items-center">
                          <Check className="h-5 w-5 text-creeper mr-2 flex-shrink-0" />
                          <span>4 vCore CPU</span>
                        </li>
                        <li className="flex items-center">
                          <Check className="h-5 w-5 text-creeper mr-2 flex-shrink-0" />
                          <span>150GB NVMe Storage</span>
                        </li>
                        <li className="flex items-center">
                          <Check className="h-5 w-5 text-creeper mr-2 flex-shrink-0" />
                          <span>Unlimited Player Slots</span>
                        </li>
                        <li className="flex items-center">
                          <Check className="h-5 w-5 text-creeper mr-2 flex-shrink-0" />
                          <span>Advanced DDoS Protection</span>
                        </li>
                        <li className="flex items-center">
                          <Check className="h-5 w-5 text-creeper mr-2 flex-shrink-0" />
                          <span>Priority Support</span>
                        </li>
                      </ul>
                      <Button className="w-full minecraft-btn mt-6" asChild>
                        <a href="https://billing.creepercastle.in/index.php?rp=/store/minecraft-performance-servers" target="_blank" rel="noopener noreferrer">
                          Get Started
                        </a>
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              </motion.div>
            </div>
          </section>
          
          {/* VPS Hosting Section */}
          <section className="py-16 bg-navy-light/30">
            <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  VPS <span className="text-creeper">Hosting</span>
                </h2>
                <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                  High-performance VPS solutions for advanced users and larger communities
                </p>
              </div>
              
              <motion.div 
                className="grid grid-cols-1 md:grid-cols-3 gap-8"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                viewport={{ once: true }}
              >
                {/* Basic VPS */}
                <motion.div variants={itemVariants}>
                  <Card className="bg-navy-light border-gray-800 hover:border-creeper/50 transition-all h-full">
                    <CardHeader>
                      <div className="flex items-center justify-center mb-4">
                        <Server className="h-12 w-12 text-creeper" />
                      </div>
                      <CardTitle className="text-2xl font-bold text-center">Basic VPS</CardTitle>
                      <div className="text-center">
                        <span className="text-3xl font-bold">₹3300</span>
                        <span className="text-gray-400">/month</span>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        <li className="flex items-center">
                          <Check className="h-5 w-5 text-creeper mr-2 flex-shrink-0" />
                          <span>32GB RAM</span>
                        </li>
                        <li className="flex items-center">
                          <Check className="h-5 w-5 text-creeper mr-2 flex-shrink-0" />
                          <span>10 vCores</span>
                        </li>
                        <li className="flex items-center">
                          <Check className="h-5 w-5 text-creeper mr-2 flex-shrink-0" />
                          <span>300GB NVMe SSD</span>
                        </li>
                        <li className="flex items-center">
                          <Check className="h-5 w-5 text-creeper mr-2 flex-shrink-0" />
                          <span>Root Access</span>
                        </li>
                        <li className="flex items-center">
                          <Check className="h-5 w-5 text-creeper mr-2 flex-shrink-0" />
                          <span>CreeperShield Protection</span>
                        </li>
                      </ul>
                      <Button className="w-full minecraft-btn mt-6" asChild>
                        <a href="https://billing.creepercastle.in/index.php?rp=/store/vps-hosting" target="_blank" rel="noopener noreferrer">
                          Get Started
                        </a>
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
                
                {/* Advanced VPS */}
                <motion.div variants={itemVariants}>
                  <Card className="bg-navy-light border-gray-800 hover:border-creeper/50 transition-all h-full">
                    <CardHeader>
                      <div className="flex items-center justify-center mb-4">
                        <Server className="h-12 w-12 text-creeper" />
                      </div>
                      <CardTitle className="text-2xl font-bold text-center">Advanced VPS</CardTitle>
                      <div className="text-center">
                        <span className="text-3xl font-bold">₹4800</span>
                        <span className="text-gray-400">/month</span>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        <li className="flex items-center">
                          <Check className="h-5 w-5 text-creeper mr-2 flex-shrink-0" />
                          <span>48GB RAM</span>
                        </li>
                        <li className="flex items-center">
                          <Check className="h-5 w-5 text-creeper mr-2 flex-shrink-0" />
                          <span>12 vCores</span>
                        </li>
                        <li className="flex items-center">
                          <Check className="h-5 w-5 text-creeper mr-2 flex-shrink-0" />
                          <span>400GB NVMe SSD</span>
                        </li>
                        <li className="flex items-center">
                          <Check className="h-5 w-5 text-creeper mr-2 flex-shrink-0" />
                          <span>Root Access</span>
                        </li>
                        <li className="flex items-center">
                          <Check className="h-5 w-5 text-creeper mr-2 flex-shrink-0" />
                          <span>CreeperShield Protection</span>
                        </li>
                        <li className="flex items-center">
                          <Check className="h-5 w-5 text-creeper mr-2 flex-shrink-0" />
                          <span>Priority Support</span>
                        </li>
                      </ul>
                      <Button className="w-full minecraft-btn mt-6" asChild>
                        <a href="https://billing.creepercastle.in/index.php?rp=/store/vps-hosting" target="_blank" rel="noopener noreferrer">
                          Get Started
                        </a>
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
                
                {/* Enterprise VPS */}
                <motion.div variants={itemVariants}>
                  <Card className="bg-navy-light border-gray-800 hover:border-creeper/50 transition-all h-full">
                    <CardHeader>
                      <div className="flex items-center justify-center mb-4">
                        <Server className="h-12 w-12 text-creeper" />
                      </div>
                      <CardTitle className="text-2xl font-bold text-center">Enterprise VPS</CardTitle>
                      <div className="text-center">
                        <span className="text-3xl font-bold">₹6800</span>
                        <span className="text-gray-400">/month</span>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        <li className="flex items-center">
                          <Check className="h-5 w-5 text-creeper mr-2 flex-shrink-0" />
                          <span>64GB RAM</span>
                        </li>
                        <li className="flex items-center">
                          <Check className="h-5 w-5 text-creeper mr-2 flex-shrink-0" />
                          <span>16 vCores</span>
                        </li>
                        <li className="flex items-center">
                          <Check className="h-5 w-5 text-creeper mr-2 flex-shrink-0" />
                          <span>500GB NVMe SSD</span>
                        </li>
                        <li className="flex items-center">
                          <Check className="h-5 w-5 text-creeper mr-2 flex-shrink-0" />
                          <span>Root Access</span>
                        </li>
                        <li className="flex items-center">
                          <Check className="h-5 w-5 text-creeper mr-2 flex-shrink-0" />
                          <span>Premium DDoS Protection</span>
                        </li>
                        <li className="flex items-center">
                          <Check className="h-5 w-5 text-creeper mr-2 flex-shrink-0" />
                          <span>24/7 Priority Support</span>
                        </li>
                      </ul>
                      <Button className="w-full minecraft-btn mt-6" asChild>
                        <a href="https://billing.creepercastle.in/index.php?rp=/store/vps-hosting" target="_blank" rel="noopener noreferrer">
                          Get Started
                        </a>
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              </motion.div>
            </div>
          </section>
          
          {/* CreeperShield Protection Plans */}
          <section className="py-16 bg-navy-dark/50">
            <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  CreeperShield <span className="text-creeper">Protection</span>
                </h2>
                <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                  Advanced DDoS protection services for your Minecraft servers
                </p>
              </div>
              
              <motion.div 
                className="grid grid-cols-1 md:grid-cols-2 gap-8"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                viewport={{ once: true }}
              >
                {/* Basic Shield */}
                <motion.div variants={itemVariants}>
                  <Card className="bg-navy-light border-gray-800 hover:border-creeper/50 transition-all">
                    <CardHeader>
                      <div className="flex items-center justify-center mb-4">
                        <Shield className="h-12 w-12 text-creeper" />
                      </div>
                      <CardTitle className="text-2xl font-bold text-center">Basic Shield</CardTitle>
                      <div className="text-center">
                        <span className="text-3xl font-bold">₹84</span>
                        <span className="text-gray-400">/month</span>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        <li className="flex items-center">
                          <Check className="h-5 w-5 text-creeper mr-2 flex-shrink-0" />
                          <span>1 Tbps Bandwidth</span>
                        </li>
                        <li className="flex items-center">
                          <Check className="h-5 w-5 text-creeper mr-2 flex-shrink-0" />
                          <span>Layer 3 & 4 Protection</span>
                        </li>
                        <li className="flex items-center">
                          <Check className="h-5 w-5 text-creeper mr-2 flex-shrink-0" />
                          <span>IP Filtration</span>
                        </li>
                        <li className="flex items-center">
                          <Check className="h-5 w-5 text-creeper mr-2 flex-shrink-0" />
                          <span>Less than 1.1ms resolving time</span>
                        </li>
                        <li className="flex items-center">
                          <Check className="h-5 w-5 text-creeper mr-2 flex-shrink-0" />
                          <span>Zero Downtime Protection</span>
                        </li>
                      </ul>
                      <Button className="w-full minecraft-btn mt-6" asChild>
                        <a href="https://billing.creepercastle.in/index.php?rp=/store/creepershield" target="_blank" rel="noopener noreferrer">
                          Get Started
                        </a>
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
                
                {/* Advanced Shield */}
                <motion.div variants={itemVariants}>
                  <Card className="bg-navy-light border-creeper">
                    <CardHeader>
                      <div className="flex items-center justify-center mb-4">
                        <Shield className="h-12 w-12 text-creeper" />
                      </div>
                      <CardTitle className="text-2xl font-bold text-center">Advanced Shield</CardTitle>
                      <div className="text-center">
                        <span className="text-3xl font-bold">₹167</span>
                        <span className="text-gray-400">/month</span>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        <li className="flex items-center">
                          <Check className="h-5 w-5 text-creeper mr-2 flex-shrink-0" />
                          <span>2 Tbps Bandwidth</span>
                        </li>
                        <li className="flex items-center">
                          <Check className="h-5 w-5 text-creeper mr-2 flex-shrink-0" />
                          <span>Layer 3, 4 & 7 Protection</span>
                        </li>
                        <li className="flex items-center">
                          <Check className="h-5 w-5 text-creeper mr-2 flex-shrink-0" />
                          <span>Advanced IP Filtration</span>
                        </li>
                        <li className="flex items-center">
                          <Check className="h-5 w-5 text-creeper mr-2 flex-shrink-0" />
                          <span>Sub 1ms resolving time</span>
                        </li>
                        <li className="flex items-center">
                          <Check className="h-5 w-5 text-creeper mr-2 flex-shrink-0" />
                          <span>Zero Downtime Protection</span>
                        </li>
                        <li className="flex items-center">
                          <Check className="h-5 w-5 text-creeper mr-2 flex-shrink-0" />
                          <span>24/7 Security Team</span>
                        </li>
                      </ul>
                      <Button className="w-full minecraft-btn mt-6" asChild>
                        <a href="https://billing.creepercastle.in/index.php?rp=/store/creepershield" target="_blank" rel="noopener noreferrer">
                          Get Started
                        </a>
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              </motion.div>
            </div>
          </section>
          
          {/* FAQs */}
          <section className="py-16">
            <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Frequently Asked <span className="text-creeper">Questions</span>
                </h2>
              </div>
              
              <div className="max-w-3xl mx-auto space-y-6">
                <Card className="bg-navy-light border-gray-800">
                  <CardHeader>
                    <CardTitle className="text-xl">How do I choose the right plan?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300">
                      Consider how many players will be on your server at once, what mods or plugins you'll use, 
                      and your budget. For vanilla servers with few players, our Budget plan works well. 
                      For modded servers or more players, consider our Standard or Premium plans. 
                      For complete control, check out our VPS options.
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="bg-navy-light border-gray-800">
                  <CardHeader>
                    <CardTitle className="text-xl">Do you offer refunds?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300">
                      We offer a 24-hour money-back guarantee on all new Minecraft server hosting plans if you're not satisfied with our service. 
                      Simply contact our support team within 24 hours of your purchase for assistance.
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="bg-navy-light border-gray-800">
                  <CardHeader>
                    <CardTitle className="text-xl">What is CreeperShield protection?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300">
                      CreeperShield is our advanced DDoS protection system designed specifically for Minecraft servers. 
                      It offers layer 3 & 4 protection, automatic filtering, and ensures your server stays online even during attacks. 
                      All our Minecraft hosting plans include some level of DDoS protection.
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="bg-navy-light border-gray-800">
                  <CardHeader>
                    <CardTitle className="text-xl">Can I upgrade my plan later?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300">
                      Yes! You can easily upgrade your plan at any time as your community grows. 
                      Our system allows for seamless upgrades with minimal downtime, and all your server data will be transferred automatically.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default Plans;
