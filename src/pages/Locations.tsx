import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { MapPin, Server, Info, ArrowRight, Clock, Network, Shield, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const Locations = () => {
  // Animation variants
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

  // Location data with detailed information
  const locations = [
    {
      city: "Delhi (Noida)",
      country: "India",
      region: "NCR Region",
      latency: "5-15ms",
      specs: "NVMe SSD, Intel Xeon E5-2690 v4, 128GB DDR4 RAM",
      features: [
        "Primary data center with Tier-3 infrastructure", 
        "24/7 on-site technical staff and security", 
        "99.99% uptime guarantee with backup power", 
        "10 Gbps network with multiple ISP redundancy",
        "Enterprise-grade cooling and fire suppression",
        "CreeperShield DDoS protection enabled"
      ],
      isPrimary: true,
      description: "Our flagship data center located in Noida, Delhi NCR. This facility houses our most advanced infrastructure with enterprise-grade hardware and multiple network providers ensuring the lowest latency for Northern and Central India.",
      advantages: [
        "Closest to major Indian population centers",
        "Multiple fiber optic connections to major ISPs",
        "Dedicated 24/7 monitoring and support team",
        "Advanced security with biometric access controls"
      ]
    },
    {
      city: "Mumbai",
      country: "India", 
      region: "Western India",
      latency: "15-25ms",
      specs: "NVMe SSD, AMD EPYC 7543, 64GB DDR4 RAM",
      features: [
        "Tier-2+ data center with premium infrastructure", 
        "24/7 remote monitoring with local support", 
        "99.95% uptime guarantee", 
        "5 Gbps network with ISP redundancy",
        "Advanced cooling systems",
        "CreeperShield DDoS protection enabled"
      ],
      isPrimary: false,
      description: "Strategic location in Mumbai providing excellent connectivity for Western and Southern India. This facility ensures optimal performance for players across the western coast of India.",
      advantages: [
        "Optimal for Western and Southern Indian players",
        "Gateway to international submarine cables", 
        "Business hub connectivity advantages",
        "Backup location for disaster recovery"
      ]
    }
  ];

  // JSON-LD structured data for SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "CreeperCastle.cloud Server Locations",
    "description": "Strategic server locations in Delhi (Noida) and Mumbai providing low-latency Minecraft hosting across India",
    "url": "https://creepercastle.cloud/locations",
    "address": [
      {
        "@type": "PostalAddress",
        "addressLocality": "Noida",
        "addressRegion": "Delhi NCR",
        "addressCountry": "India"
      },
      {
        "@type": "PostalAddress", 
        "addressLocality": "Mumbai",
        "addressRegion": "Maharashtra",
        "addressCountry": "India"
      }
    ]
  };

  return (
    <>
      <Helmet>
        <title>Server Locations - Delhi NCR (Noida) & Mumbai | CreeperCastle.cloud Minecraft Hosting</title>
        <meta 
          name="description" 
          content="Discover CreeperCastle's strategic server locations in Delhi NCR (Noida) and Mumbai. Low latency Minecraft hosting with Tier-3 infrastructure, 24/7 support, and 99.99% uptime across India."
        />
        <meta 
          name="keywords" 
          content="minecraft server locations india, delhi noida minecraft hosting, mumbai minecraft server, low latency minecraft hosting, tier 3 data center india, minecraft hosting delhi ncr, gaming servers mumbai noida"
        />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://creepercastle.cloud/locations" />
        <meta property="og:title" content="Server Locations - Delhi NCR (Noida) & Mumbai | CreeperCastle Minecraft Hosting" />
        <meta property="og:description" content="Strategic server locations across India providing ultra-low latency Minecraft hosting with enterprise infrastructure." />
        <meta property="og:image" content="https://creepercastle.cloud/lovable-uploads/1a97b5fc-a24e-43f7-9a8a-2b87db8ad1b6.png" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="CreeperCastle Server Locations - India" />
        <meta name="twitter:description" content="Low latency Minecraft hosting from Delhi NCR (Noida) and Mumbai with enterprise infrastructure." />
        <meta name="twitter:image" content="https://creepercastle.cloud/lovable-uploads/1a97b5fc-a24e-43f7-9a8a-2b87db8ad1b6.png" />
        
        {/* Additional SEO */}
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large" />
        <link rel="canonical" href="https://creepercastle.cloud/locations" />
        
        {/* JSON-LD Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
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
              <div className="text-center max-w-4xl mx-auto">
                <motion.h1 
                  className="text-4xl md:text-5xl font-bold mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  Our <span className="text-creeper">Strategic Locations</span>
                </motion.h1>
                <motion.p 
                  className="text-xl text-gray-300 mb-8"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  We've strategically positioned our enterprise-grade infrastructure in Delhi NCR (Noida) and Mumbai 
                  to provide the lowest possible latency and highest performance for Indian Minecraft players. 
                  Experience lag-free gameplay with our premium data centers.
                </motion.p>
                
                <motion.div
                  className="flex flex-wrap justify-center gap-4 mb-12"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  <div className="flex items-center px-4 py-2 bg-navy-light rounded-lg border border-gray-800">
                    <Server className="h-5 w-5 text-creeper mr-2" />
                    <span className="text-sm font-medium">2 Premium Data Centers</span>
                  </div>
                  
                  <div className="flex items-center px-4 py-2 bg-navy-light rounded-lg border border-gray-800">
                    <Info className="h-5 w-5 text-creeper mr-2" />
                    <span className="text-sm font-medium">99.99% Uptime</span>
                  </div>
                  
                  <div className="flex items-center px-4 py-2 bg-navy-light rounded-lg border border-gray-800">
                    <MapPin className="h-5 w-5 text-creeper mr-2" />
                    <span className="text-sm font-medium">Ultra Low Latency</span>
                  </div>

                  <div className="flex items-center px-4 py-2 bg-navy-light rounded-lg border border-gray-800">
                    <Shield className="h-5 w-5 text-creeper mr-2" />
                    <span className="text-sm font-medium">Enterprise Security</span>
                  </div>
                </motion.div>
              </div>
            </div>
          </section>
          
          {/* Data Center Details */}
          <section className="py-16 bg-navy-light/30">
            <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Our <span className="text-creeper">Premium Locations</span>
                </h2>
                <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                  Enterprise-grade infrastructure designed for the ultimate Minecraft hosting experience
                </p>
              </div>
              
              <motion.div 
                className="space-y-12"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                {locations.map((location, index) => (
                  <motion.div key={index} variants={itemVariants}>
                    <Card className={`${location.isPrimary ? 'border-creeper bg-gradient-to-r from-navy-light to-navy-light/80' : 'border-gray-800 bg-navy-light'} overflow-hidden`}>
                      <div className="p-8">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                          {/* Location Info */}
                          <div>
                            <div className="flex items-center mb-4">
                              <MapPin className="h-8 w-8 text-creeper mr-4" />
                              <div>
                                <h3 className="text-2xl font-bold flex items-center gap-3">
                                  {location.city}
                                  {location.isPrimary && (
                                    <span className="bg-creeper text-navy-dark text-xs font-medium px-3 py-1 rounded-full">
                                      Primary Hub
                                    </span>
                                  )}
                                </h3>
                                <p className="text-gray-400">{location.region}, {location.country}</p>
                              </div>
                            </div>
                            
                            <p className="text-gray-300 mb-6 leading-relaxed">{location.description}</p>
                            
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                              <div className="flex items-center">
                                <Clock className="h-5 w-5 text-creeper mr-3" />
                                <div>
                                  <div className="text-sm text-gray-400">Avg. Latency</div>
                                  <div className="font-semibold">{location.latency}</div>
                                </div>
                              </div>
                              
                              <div className="flex items-center">
                                <Network className="h-5 w-5 text-creeper mr-3" />
                                <div>
                                  <div className="text-sm text-gray-400">Network</div>
                                  <div className="font-semibold">Premium Tier</div>
                                </div>
                              </div>
                            </div>

                            <div className="mb-6">
                              <div className="text-sm text-gray-400 mb-2">Hardware Specifications</div>
                              <div className="font-medium text-gray-200">{location.specs}</div>
                            </div>
                          </div>
                          
                          {/* Features & Advantages */}
                          <div>
                            <h4 className="text-lg font-semibold mb-4 flex items-center">
                              <Shield className="h-5 w-5 text-creeper mr-2" />
                              Infrastructure Features
                            </h4>
                            <ul className="space-y-2 mb-6">
                              {location.features.map((feature, i) => (
                                <li key={i} className="flex items-start text-sm">
                                  <ArrowRight className="h-4 w-4 text-creeper mr-2 mt-0.5 flex-shrink-0" />
                                  <span className="text-gray-300">{feature}</span>
                                </li>
                              ))}
                            </ul>
                            
                            <h4 className="text-lg font-semibold mb-4 flex items-center">
                              <Zap className="h-5 w-5 text-creeper mr-2" />
                              Location Advantages
                            </h4>
                            <ul className="space-y-2 mb-6">
                              {location.advantages.map((advantage, i) => (
                                <li key={i} className="flex items-start text-sm">
                                  <ArrowRight className="h-4 w-4 text-creeper mr-2 mt-0.5 flex-shrink-0" />
                                  <span className="text-gray-300">{advantage}</span>
                                </li>
                              ))}
                            </ul>

                            <Button className="w-full minecraft-btn" asChild>
                              <a href="https://billing.creepercastle.in" target="_blank" rel="noopener noreferrer">
                                Deploy Server in {location.city}
                              </a>
                            </Button>
                          </div>
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </section>
          
          {/* Network Performance */}
          <section className="py-16">
            <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Network <span className="text-creeper">Performance</span>
                </h2>
                <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                  We're obsessed with providing the best possible connection quality
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <Card className="bg-navy-light border-gray-800">
                  <div className="p-6 text-center">
                    <div className="text-4xl font-bold text-creeper mb-2">99.9%</div>
                    <div className="text-lg font-medium mb-2">Uptime</div>
                    <p className="text-sm text-gray-400">Our servers maintain exceptional reliability with minimal downtime</p>
                  </div>
                </Card>
                
                <Card className="bg-navy-light border-gray-800">
                  <div className="p-6 text-center">
                    <div className="text-4xl font-bold text-creeper mb-2">&lt; 30ms</div>
                    <div className="text-lg font-medium mb-2">Avg. Latency</div>
                    <p className="text-sm text-gray-400">Low ping times for smooth gameplay experience</p>
                  </div>
                </Card>
                
                <Card className="bg-navy-light border-gray-800">
                  <div className="p-6 text-center">
                    <div className="text-4xl font-bold text-creeper mb-2">10 Gbps</div>
                    <div className="text-lg font-medium mb-2">Network</div>
                    <p className="text-sm text-gray-400">High-bandwidth connections with premium routing</p>
                  </div>
                </Card>
                
                <Card className="bg-navy-light border-gray-800">
                  <div className="p-6 text-center">
                    <div className="text-4xl font-bold text-creeper mb-2">24/7</div>
                    <div className="text-lg font-medium mb-2">Monitoring</div>
                    <p className="text-sm text-gray-400">Constant system monitoring and maintenance</p>
                  </div>
                </Card>
              </div>
            </div>
          </section>
          
          {/* Location FAQ */}
          <section className="py-16 bg-navy-dark/50">
            <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Location <span className="text-creeper">FAQs</span>
                </h2>
              </div>
              
              <div className="max-w-3xl mx-auto space-y-6">
                <Card className="bg-navy-light border-gray-800">
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">Which location should I choose?</h3>
                    <p className="text-gray-300">
                      We recommend selecting the data center closest to you and your players for the best connection quality. 
                      Delhi is our primary location and offers the most comprehensive features, but all our data centers 
                      provide excellent performance.
                    </p>
                  </div>
                </Card>
                
                <Card className="bg-navy-light border-gray-800">
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">Can I switch locations later?</h3>
                    <p className="text-gray-300">
                      Yes! You can migrate your server to a different location if needed. Our support team can assist with 
                      this process to ensure minimal downtime during the transition. Contact us for more details.
                    </p>
                  </div>
                </Card>
                
                <Card className="bg-navy-light border-gray-800">
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">Do all locations have the same features?</h3>
                    <p className="text-gray-300">
                      All our locations offer NVMe SSD storage, high-performance CPUs, and our CreeperShield DDoS protection. 
                      However, our Delhi location is our primary data center with the most extensive hardware options and 
                      resource configurations.
                    </p>
                  </div>
                </Card>
              </div>
            </div>
          </section>
          
          {/* CTA Section */}
          <section className="py-16">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Ready to <span className="text-creeper">Get Started</span>?
                </h2>
                <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                  Choose any of our strategically placed data centers and start your 
                  Minecraft server with CreeperCastle today.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <Button className="minecraft-btn text-lg py-6 px-8" asChild>
                    <a href="https://billing.creepercastle.in" target="_blank" rel="noopener noreferrer">
                      Deploy Your Server Now
                    </a>
                  </Button>
                  <Button className="bg-transparent border border-creeper text-creeper hover:bg-creeper/10 text-lg py-6 px-8" asChild>
                    <a href="/contact">Contact Support</a>
                  </Button>
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

export default Locations;
