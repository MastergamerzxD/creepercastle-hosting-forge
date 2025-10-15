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
      cpu: "AMD EPYC 4244P 💫",
      cores: "2V Cores 🚀",
      baseFreq: "Base frequency @3.8ghz 🚀",
      turboFreq: "Turbo frequency @5.1 ghz 🚀",
      ram: "4 GB DDR4 ECC RAM 🪄",
      storage: "20 GB NVMe Storage🪄",
      network: "Upto 1Gbps network speed🛜",
      location: "India, Mumbai🚩",
      ddos: "OVH-DDOS Protect Shield🛡️",
      mitigation: "17 Tbps Smart MITIGATION🛡️",
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
      cpu: "AMD EPYC 4244P 💫",
      cores: "4V Cores 🚀",
      baseFreq: "Base frequency @3.8ghz 🚀",
      turboFreq: "Turbo frequency @5.1 ghz 🚀",
      ram: "8 GB DDR4 ECC RAM 🪄",
      storage: "40 GB NVMe Storage🪄",
      network: "Upto 1Gbps network speed🛜",
      location: "India, Mumbai🚩",
      ddos: "OVH-DDOS Protect Shield🛡️",
      mitigation: "17 Tbps Smart MITIGATION🛡️",
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
      cpu: "AMD EPYC 4244P 💫",
      cores: "6V Cores 🚀",
      baseFreq: "Base frequency @3.8ghz 🚀",
      turboFreq: "Turbo frequency @5.1 ghz 🚀",
      ram: "16 GB DDR4 ECC RAM 🪄",
      storage: "60 GB NVMe Storage🪄",
      network: "Upto 1Gbps network speed🛜",
      location: "India, Mumbai🚩",
      ddos: "OVH-DDOS Protect Shield🛡️",
      mitigation: "17 Tbps Smart MITIGATION🛡️",
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
      cpu: "AMD EPYC 4244P 💫",
      cores: "8V Cores 🚀",
      baseFreq: "Base frequency @3.8ghz 🚀",
      turboFreq: "Turbo frequency @5.1 ghz 🚀",
      ram: "32 GB DDR4 ECC RAM 🪄",
      storage: "100 GB NVMe Storage🪄",
      network: "Upto 1Gbps network speed🛜",
      location: "India, Mumbai🚩",
      ddos: "OVH-DDOS Protect Shield🛡️",
      mitigation: "17 Tbps Smart MITIGATION🛡️",
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
      cpu: "AMD EPYC 4244P 💫",
      cores: "12V Cores 🚀",
      baseFreq: "Base frequency @3.8ghz 🚀",
      turboFreq: "Turbo frequency @5.1 ghz 🚀",
      ram: "64 GB DDR4 ECC RAM 🪄",
      storage: "200 GB NVMe Storage🪄",
      network: "Upto 1Gbps network speed🛜",
      location: "India, Mumbai🚩",
      ddos: "OVH-DDOS Protect Shield🛡️",
      mitigation: "17 Tbps Smart MITIGATION🛡️",
      rdns: "RDNS Facility Available✅"
    },
    buyLink: "https://billing.creepercastle.in/products/vps-hosting/creepercastle-overlord",
    highlighted: false
  },
  {
    name: "Custom VPS Plan",
    price: "Custom",
    logo: "/lovable-uploads/a5ede7d4-e1bf-4925-84dd-4b075648dc11.png",
    specs: {
      cpu: "AMD EPYC 4244P (Custom) 💫",
      cores: "Custom Cores 🚀",
      baseFreq: "Optimized Performance 🚀",
      turboFreq: "Maximum Efficiency 🚀",
      ram: "Custom RAM Configuration 🪄",
      storage: "Flexible Storage Options 🪄",
      network: "Dedicated Bandwidth 🛜",
      location: "Multiple Locations Available 🚩",
      ddos: "Enterprise DDoS Protection 🛡️",
      mitigation: "Advanced Security 🛡️",
      rdns: "Full Management Support ✅"
    },
    buyLink: "https://discord.gg/creepercastle",
    highlighted: false,
    isCustom: true
  }
];

const VPSPlans = () => {
  return (
    <>
      <Helmet>
        <title>Best VPS Hosting India 2025 | AMD EPYC 4244P 5.1GHz | Mumbai ₹399</title>
        <meta 
          name="description" 
          content="⚡ Premium VPS India: AMD EPYC 4244P 5.1GHz, NVMe SSD, 17Tbps DDoS protection, Mumbai datacenter. Root access, KVM, ECC RAM. Starting ₹399/mo. Instant setup!"
        />
        <meta
          name="keywords"
          content="best vps hosting india 2025, amd epyc 4244p vps, cheap vps india, kvm vps hosting mumbai, nvme vps india, dedicated vps india, root access vps, linux vps india, windows vps india, gaming vps india, ddos protected vps, ecc ram vps, 5.1ghz vps india, premium vps mumbai, virtual private server india, vps with rdns india"
        />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://creepercastle.cloud/plans/vps" />
        <meta property="og:title" content="VPS Hosting India - AMD EPYC 4244P | Starting ₹399/month | CreeperCastle" />
        <meta property="og:description" content="Premium VPS hosting with AMD EPYC 4244P processors, up to 5.1GHz turbo boost, NVMe storage, and 17 Tbps DDoS protection. Plans from ₹399 to ₹2999/month." />
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
                  className="text-xl text-gray-300 max-w-3xl mx-auto mb-12"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  Experience premium VPS hosting powered by the latest <span className="text-creeper font-bold">AMD EPYC 4244P</span> processors with blazing-fast NVMe storage and enterprise-grade DDoS protection
                </motion.p>

                {/* Features Section */}
                <motion.div 
                  className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  <motion.div 
                    className="bg-navy-light/50 backdrop-blur-sm border border-gray-700/50 rounded-lg p-6 text-center hover:border-creeper/50 transition-all duration-300"
                    whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(124, 252, 0, 0.3)" }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="bg-creeper/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Server className="h-8 w-8 text-creeper" />
                    </div>
                    <h3 className="text-xl font-bold text-creeper mb-3">Elite Gaming Performance</h3>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      Powered by the cutting-edge <span className="text-creeper font-bold">AMD EPYC 4244P</span> - an absolute powerhouse for gaming! 
                      With ultra-low latency, blazing-fast NVMe storage, and industry-leading single-core performance, run game servers, 
                      hosting platforms, or any gaming application with zero lag and maximum uptime. This is premium hosting at its finest!
                    </p>
                  </motion.div>

                  <motion.div 
                    className="bg-navy-light/50 backdrop-blur-sm border border-gray-700/50 rounded-lg p-6 text-center hover:border-creeper/50 transition-all duration-300"
                    whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(124, 252, 0, 0.3)" }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="bg-creeper/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl">🛡️</span>
                    </div>
                    <h3 className="text-xl font-bold text-creeper mb-3">💪 Ultimate Military-Grade Protection</h3>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      Protected by OVH's world-class DDoS shield with an <span className="text-creeper font-bold">INSANE 17 Tbps</span> smart mitigation capacity! 
                      Your servers stay online even during the most sophisticated attacks, ensuring 99.9% uptime. 
                      <span className="text-creeper font-semibold"> This is the same protection trusted by Fortune 500 companies - unmatched in the industry!</span>
                    </p>
                  </motion.div>

                  <motion.div 
                    className="bg-navy-light/50 backdrop-blur-sm border border-gray-700/50 rounded-lg p-6 text-center hover:border-creeper/50 transition-all duration-300"
                    whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(124, 252, 0, 0.3)" }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="bg-creeper/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl">💎</span>
                    </div>
                    <h3 className="text-xl font-bold text-creeper mb-3">AMD EPYC 4244P Beast</h3>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      The game-changer! <span className="text-creeper font-bold">AMD EPYC 4244P</span> with 6 cores, 
                      <span className="text-creeper font-semibold"> 3.8GHz base</span> and mind-blowing <span className="text-creeper font-semibold">5.1GHz turbo boost</span>! 
                      This premium processor delivers exceptional performance with ECC RAM for unmatched reliability. 
                      Perfect for demanding workloads, gaming, and high-traffic applications. You simply can't beat this value!
                    </p>
                  </motion.div>
                </motion.div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                {vpsPlans.map((plan, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    whileHover={{ 
                      y: -8, 
                      scale: 1.02,
                      transition: { duration: 0.3 }
                    }}
                    transition={{ duration: 0.6, delay: 0.1 * index, type: "spring", stiffness: 100 }}
                  >
                    <Card 
                      className={`bg-gradient-to-br from-navy-light/80 to-navy-dark/60 backdrop-blur-md ${
                        plan.highlighted 
                          ? 'border-2 border-creeper relative shadow-[0_0_30px_rgba(124,252,0,0.3)] ring-2 ring-creeper/20' 
                          : 'border border-gray-700/50 hover:border-creeper/50'
                      } transition-all duration-500 h-full group overflow-hidden`}
                    >
                      {/* Animated gradient overlay */}
                      <div className="absolute inset-0 bg-gradient-to-br from-creeper/5 via-transparent to-creeper/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                      
                      {/* Animated corner accent */}
                      <motion.div 
                        className="absolute top-0 right-0 w-32 h-32 bg-creeper/10 blur-3xl rounded-full"
                        animate={{
                          scale: [1, 1.2, 1],
                          opacity: [0.3, 0.5, 0.3],
                        }}
                        transition={{
                          duration: 4,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                      />
                      
                      {plan.highlighted && (
                        <motion.div 
                          className="absolute top-0 right-0 bg-gradient-to-br from-creeper to-creeper/80 text-navy-dark font-bold text-sm px-6 py-2 rounded-bl-xl shadow-lg z-10"
                          animate={{
                            boxShadow: [
                              "0 0 15px rgba(124,252,0,0.5)",
                              "0 0 25px rgba(124,252,0,0.8)",
                              "0 0 15px rgba(124,252,0,0.5)"
                            ]
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut"
                          }}
                        >
                          ⭐ MOST POPULAR
                        </motion.div>
                      )}
                      <CardHeader className="text-center relative z-10">
                        <motion.div 
                          className="mx-auto mb-4 relative"
                          whileHover={{ rotate: [0, -5, 5, -5, 0], scale: 1.1 }}
                          transition={{ duration: 0.5 }}
                        >
                          <div className="absolute inset-0 bg-creeper/20 blur-2xl rounded-full scale-150" />
                          <img 
                            src={plan.logo} 
                            alt={`${plan.name} logo`}
                            className="h-20 w-auto mx-auto relative z-10 drop-shadow-[0_0_15px_rgba(124,252,0,0.5)]"
                          />
                        </motion.div>
                        <CardTitle className="text-2xl font-bold bg-gradient-to-r from-white via-creeper to-white bg-clip-text text-transparent">
                          {plan.name}
                        </CardTitle>
                        <div className="flex items-baseline justify-center mt-3 relative">
                          <motion.span 
                            className="text-4xl font-black text-creeper drop-shadow-[0_0_10px_rgba(124,252,0,0.5)]"
                            animate={{
                              textShadow: [
                                "0 0 10px rgba(124,252,0,0.5)",
                                "0 0 20px rgba(124,252,0,0.8)",
                                "0 0 10px rgba(124,252,0,0.5)"
                              ]
                            }}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                              ease: "easeInOut"
                            }}
                          >
                            {plan.price}
                          </motion.span>
                          <span className="text-lg text-gray-400 ml-2 font-medium">/month</span>
                        </div>
                      </CardHeader>
                      <CardContent className="flex-1 relative z-10">
                        <div className="space-y-4">
                          <div className="border-t border-creeper/20 pt-4 relative">
                            <div className="absolute inset-0 bg-gradient-to-b from-creeper/5 to-transparent rounded-lg pointer-events-none" />
                            <h4 className="font-bold mb-4 text-creeper text-lg flex items-center gap-2 relative">
                              <span className="inline-block w-1 h-6 bg-creeper rounded-full animate-pulse" />
                              Premium Specifications
                            </h4>
                            <ul className="space-y-3 text-sm relative">
                              <motion.li 
                                className="flex items-center gap-3 bg-navy-dark/30 p-2 rounded-lg border border-creeper/10 hover:border-creeper/30 transition-all group"
                                whileHover={{ x: 5, backgroundColor: "rgba(124,252,0,0.05)" }}
                              >
                                <span className="text-creeper opacity-70 group-hover:opacity-100 transition-opacity">▸</span>
                                <span className="text-gray-200 group-hover:text-white transition-colors">{plan.specs.cpu}</span>
                              </motion.li>
                              <motion.li 
                                className="flex items-center gap-3 bg-navy-dark/30 p-2 rounded-lg border border-creeper/10 hover:border-creeper/30 transition-all group"
                                whileHover={{ x: 5, backgroundColor: "rgba(124,252,0,0.05)" }}
                              >
                                <span className="text-creeper opacity-70 group-hover:opacity-100 transition-opacity">▸</span>
                                <span className="text-gray-200 group-hover:text-white transition-colors">{plan.specs.cores}</span>
                              </motion.li>
                              <motion.li 
                                className="flex items-center gap-3 bg-navy-dark/30 p-2 rounded-lg border border-creeper/10 hover:border-creeper/30 transition-all group"
                                whileHover={{ x: 5, backgroundColor: "rgba(124,252,0,0.05)" }}
                              >
                                <span className="text-creeper opacity-70 group-hover:opacity-100 transition-opacity">▸</span>
                                <span className="text-gray-200 group-hover:text-white transition-colors">{plan.specs.baseFreq}</span>
                              </motion.li>
                              <motion.li 
                                className="flex items-center gap-3 bg-navy-dark/30 p-2 rounded-lg border border-creeper/10 hover:border-creeper/30 transition-all group"
                                whileHover={{ x: 5, backgroundColor: "rgba(124,252,0,0.05)" }}
                              >
                                <span className="text-creeper opacity-70 group-hover:opacity-100 transition-opacity">▸</span>
                                <span className="text-gray-200 group-hover:text-white transition-colors">{plan.specs.turboFreq}</span>
                              </motion.li>
                              <motion.li 
                                className="flex items-center gap-3 bg-navy-dark/30 p-2 rounded-lg border border-creeper/10 hover:border-creeper/30 transition-all group"
                                whileHover={{ x: 5, backgroundColor: "rgba(124,252,0,0.05)" }}
                              >
                                <span className="text-creeper opacity-70 group-hover:opacity-100 transition-opacity">▸</span>
                                <span className="text-gray-200 group-hover:text-white transition-colors">{plan.specs.ram}</span>
                              </motion.li>
                              <motion.li 
                                className="flex items-center gap-3 bg-navy-dark/30 p-2 rounded-lg border border-creeper/10 hover:border-creeper/30 transition-all group"
                                whileHover={{ x: 5, backgroundColor: "rgba(124,252,0,0.05)" }}
                              >
                                <span className="text-creeper opacity-70 group-hover:opacity-100 transition-opacity">▸</span>
                                <span className="text-gray-200 group-hover:text-white transition-colors">{plan.specs.storage}</span>
                              </motion.li>
                              <motion.li 
                                className="flex items-center gap-3 bg-navy-dark/30 p-2 rounded-lg border border-creeper/10 hover:border-creeper/30 transition-all group"
                                whileHover={{ x: 5, backgroundColor: "rgba(124,252,0,0.05)" }}
                              >
                                <span className="text-creeper opacity-70 group-hover:opacity-100 transition-opacity">▸</span>
                                <span className="text-gray-200 group-hover:text-white transition-colors">{plan.specs.network}</span>
                              </motion.li>
                              <motion.li 
                                className="flex items-center gap-3 bg-navy-dark/30 p-2 rounded-lg border border-creeper/10 hover:border-creeper/30 transition-all group"
                                whileHover={{ x: 5, backgroundColor: "rgba(124,252,0,0.05)" }}
                              >
                                <span className="text-creeper opacity-70 group-hover:opacity-100 transition-opacity">▸</span>
                                <span className="text-gray-200 group-hover:text-white transition-colors">{plan.specs.location}</span>
                              </motion.li>
                              <motion.li 
                                className="flex items-center gap-3 bg-navy-dark/30 p-2 rounded-lg border border-creeper/10 hover:border-creeper/30 transition-all group"
                                whileHover={{ x: 5, backgroundColor: "rgba(124,252,0,0.05)" }}
                              >
                                <span className="text-creeper opacity-70 group-hover:opacity-100 transition-opacity">▸</span>
                                <span className="text-gray-200 group-hover:text-white transition-colors">{plan.specs.ddos}</span>
                              </motion.li>
                              <motion.li 
                                className="flex items-center gap-3 bg-navy-dark/30 p-2 rounded-lg border border-creeper/10 hover:border-creeper/30 transition-all group"
                                whileHover={{ x: 5, backgroundColor: "rgba(124,252,0,0.05)" }}
                              >
                                <span className="text-creeper opacity-70 group-hover:opacity-100 transition-opacity">▸</span>
                                <span className="text-gray-200 group-hover:text-white transition-colors font-bold">{plan.specs.mitigation}</span>
                              </motion.li>
                              <motion.li 
                                className="flex items-center gap-3 bg-navy-dark/30 p-2 rounded-lg border border-creeper/10 hover:border-creeper/30 transition-all group"
                                whileHover={{ x: 5, backgroundColor: "rgba(124,252,0,0.05)" }}
                              >
                                <span className="text-creeper opacity-70 group-hover:opacity-100 transition-opacity">▸</span>
                                <span className="text-gray-200 group-hover:text-white transition-colors">{plan.specs.rdns}</span>
                              </motion.li>
                            </ul>
                          </div>
                          
                          <motion.div 
                            className="mt-6 relative"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                          >
                            <div className="absolute inset-0 bg-gradient-to-r from-creeper/20 via-creeper/40 to-creeper/20 blur-xl rounded-lg animate-pulse" />
                            <Button 
                              className="w-full minecraft-btn relative z-10 font-bold text-base py-6 shadow-[0_0_20px_rgba(124,252,0,0.4)] hover:shadow-[0_0_30px_rgba(124,252,0,0.6)] transition-all duration-300" 
                              asChild
                            >
                              <a 
                                href={plan.isCustom ? plan.buyLink : plan.buyLink} 
                                target="_blank" 
                                rel="noopener noreferrer"
                              >
                                {plan.isCustom ? "🎯 Get Custom Quote" : "🚀 Buy Now"}
                              </a>
                            </Button>
                          </motion.div>
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