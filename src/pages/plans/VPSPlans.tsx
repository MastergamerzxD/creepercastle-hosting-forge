import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Server } from "lucide-react";
import { motion } from "framer-motion";

const vpsPlans = [
  {
    name: "Creeper Small",
    price: "₹399",
    logo: "/lovable-uploads/2e0d644d-6f7e-43e0-93e8-2efabb828007.png",
    specs: {
      cpu: "Intel Xeon 2667/v4 💫",
      cores: "2V Cores 🚀",
      baseFreq: "Base frequency @3.2ghz 🚀",
      turboFreq: "Turbo frequency @3.8 ghz 🚀",
      ram: "4 GB DDR4 ECC RAM 🪄",
      storage: "20 GB NVMe Storage🪄",
      network: "Upto 1Gbps network speed🛜",
      location: "India, Mumbai🚩",
      ddos: "OVH-DDOS Protect Shield🛡️",
      mitigation: "500 Gbps Smart MITIGATION🛡️",
      rdns: "RDNS Facility Available✅"
    },
    buyLink: "https://billing.creepercastle.in/products/vps-hosting/creeper-mini",
    highlighted: false
  },
  {
    name: "CreeperCastle Knight",
    price: "₹689",
    logo: "/lovable-uploads/92e056f5-c85f-4f06-9432-7c5ca32fe8b2.png",
    specs: {
      cpu: "Intel Xeon 2667/v4 💫",
      cores: "4V Cores 🚀",
      baseFreq: "Base frequency @3.2ghz 🚀",
      turboFreq: "Turbo frequency @3.8 ghz 🚀",
      ram: "8 GB DDR4 ECC RAM 🪄",
      storage: "40 GB NVMe Storage🪄",
      network: "Upto 1Gbps network speed🛜",
      location: "India, Mumbai🚩",
      ddos: "OVH-DDOS Protect Shield🛡️",
      mitigation: "500 Gbps Smart MITIGATION🛡️",
      rdns: "RDNS Facility Available✅"
    },
    buyLink: "https://billing.creepercastle.in/products/vps-hosting/creepercastle-knight",
    highlighted: true
  },
  {
    name: "CreeperCastle Titan",
    price: "₹1,299",
    logo: "/lovable-uploads/592d5824-5311-47bb-beb0-5aae9ff5c280.png",
    specs: {
      cpu: "Intel Xeon 2667/v4 💫",
      cores: "6V Cores 🚀",
      baseFreq: "Base frequency @3.2ghz 🚀",
      turboFreq: "Turbo frequency @3.8 ghz 🚀",
      ram: "16 GB DDR4 ECC RAM 🪄",
      storage: "60 GB NVMe Storage🪄",
      network: "Upto 1Gbps network speed🛜",
      location: "India, Mumbai🚩",
      ddos: "OVH-DDOS Protect Shield🛡️",
      mitigation: "500 Gbps Smart MITIGATION🛡️",
      rdns: "RDNS Facility Available✅"
    },
    buyLink: "https://billing.creepercastle.in/products/vps-hosting/creepercastle-titan",
    highlighted: false
  },
  {
    name: "CreeperCastle Guardian",
    price: "₹1,999",
    logo: "/lovable-uploads/102f77a4-d71f-456c-b542-1f98a55eb506.png",
    specs: {
      cpu: "Intel Xeon 2667/v4 💫",
      cores: "8V Cores 🚀",
      baseFreq: "Base frequency @3.2ghz 🚀",
      turboFreq: "Turbo frequency @3.8 ghz 🚀",
      ram: "32 GB DDR4 ECC RAM 🪄",
      storage: "100 GB NVMe Storage🪄",
      network: "Upto 1Gbps network speed🛜",
      location: "India, Mumbai🚩",
      ddos: "OVH-DDOS Protect Shield🛡️",
      mitigation: "500 Gbps Smart MITIGATION🛡️",
      rdns: "RDNS Facility Available✅"
    },
    buyLink: "https://billing.creepercastle.in/products/vps-hosting/creepercastle-guardian",
    highlighted: false
  },
  {
    name: "CreeperCastle Overlord",
    price: "₹2,999",
    logo: "/lovable-uploads/c78b0c32-1019-4b21-a48b-1581857db978.png",
    specs: {
      cpu: "Intel Xeon 2667/v4 💫",
      cores: "12V Cores 🚀",
      baseFreq: "Base frequency @3.2ghz 🚀",
      turboFreq: "Turbo frequency @3.8 ghz 🚀",
      ram: "64 GB DDR4 ECC RAM 🪄",
      storage: "200 GB NVMe Storage🪄",
      network: "Upto 1Gbps network speed🛜",
      location: "India, Mumbai🚩",
      ddos: "OVH-DDOS Protect Shield🛡️",
      mitigation: "500 Gbps Smart MITIGATION🛡️",
      rdns: "RDNS Facility Available✅"
    },
    buyLink: "https://billing.creepercastle.in/products/vps-hosting/creepercastle-overlord",
    highlighted: false
  }
];

const VPSPlans = () => {
  return (
    <>
      <Helmet>
        <title>VPS Hosting Plans India - Starting from ₹399/month | CreeperCastle</title>
        <meta 
          name="description" 
          content="Professional VPS hosting plans in India starting from ₹399/month. Intel Xeon processors, NVMe storage, DDoS protection. Choose from 5 powerful VPS plans."
        />
        <meta
          name="keywords"
          content="vps hosting india, virtual private server, custom vps, dedicated hosting, root access vps, linux vps hosting, windows vps hosting, mumbai vps"
        />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://creepercastle.cloud/plans/vps" />
        <meta property="og:title" content="VPS Hosting Plans India | Starting ₹399/month | CreeperCastle" />
        <meta property="og:description" content="Professional VPS hosting plans with Intel Xeon processors, NVMe storage, and DDoS protection. Plans from ₹399 to ₹2999/month." />
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
                  Professional VPS hosting with Intel Xeon processors, NVMe storage, and enterprise-grade DDoS protection
                </motion.p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                {vpsPlans.map((plan, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 * index }}
                  >
                    <Card 
                      className={`bg-navy-light ${plan.highlighted ? 'border-2 border-creeper relative' : 'border border-gray-800'} hover:transform hover:-translate-y-2 transition-all duration-300 h-full`}
                    >
                      {plan.highlighted && (
                        <div className="absolute top-0 right-0 bg-creeper text-navy-dark font-medium text-sm px-4 py-1 rounded-bl-lg">
                          Most Popular
                        </div>
                      )}
                      <CardHeader className="text-center">
                        <div className="mx-auto mb-4">
                          <img 
                            src={plan.logo} 
                            alt={`${plan.name} logo`}
                            className="h-16 w-auto mx-auto"
                          />
                        </div>
                        <CardTitle className="text-2xl">{plan.name}</CardTitle>
                        <div className="flex items-baseline justify-center mt-2">
                          <span className="text-3xl font-bold text-creeper">{plan.price}</span>
                          <span className="text-lg text-gray-400 ml-1">/month</span>
                        </div>
                      </CardHeader>
                      <CardContent className="flex-1">
                        <div className="space-y-4">
                          <div className="border-t border-gray-700 pt-4">
                            <h4 className="font-medium mb-3 text-creeper">Specifications:</h4>
                            <ul className="space-y-2 text-sm">
                              <li className="flex items-center">
                                <span className="text-gray-300">{plan.specs.cpu}</span>
                              </li>
                              <li className="flex items-center">
                                <span className="text-gray-300">{plan.specs.cores}</span>
                              </li>
                              <li className="flex items-center">
                                <span className="text-gray-300">{plan.specs.baseFreq}</span>
                              </li>
                              <li className="flex items-center">
                                <span className="text-gray-300">{plan.specs.turboFreq}</span>
                              </li>
                              <li className="flex items-center">
                                <span className="text-gray-300">{plan.specs.ram}</span>
                              </li>
                              <li className="flex items-center">
                                <span className="text-gray-300">{plan.specs.storage}</span>
                              </li>
                              <li className="flex items-center">
                                <span className="text-gray-300">{plan.specs.network}</span>
                              </li>
                              <li className="flex items-center">
                                <span className="text-gray-300">{plan.specs.location}</span>
                              </li>
                              <li className="flex items-center">
                                <span className="text-gray-300">{plan.specs.ddos}</span>
                              </li>
                              <li className="flex items-center">
                                <span className="text-gray-300">{plan.specs.mitigation}</span>
                              </li>
                              <li className="flex items-center">
                                <span className="text-gray-300">{plan.specs.rdns}</span>
                              </li>
                            </ul>
                          </div>
                          
                          <div className="mt-6">
                            <Button className="w-full minecraft-btn" asChild>
                              <a 
                                href={plan.buyLink} 
                                target="_blank" 
                                rel="noopener noreferrer"
                              >
                                Buy Now
                              </a>
                            </Button>
                          </div>
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