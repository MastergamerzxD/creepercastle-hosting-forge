
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { MapPin, Server, Info, ArrowRight } from "lucide-react";
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

  // Location data
  const locations = [
    {
      city: "Delhi",
      country: "India",
      latency: "5-15ms",
      specs: "NVMe SSD, Intel Xeon CPUs, DDR4 RAM",
      features: ["Primary data center", "24/7 on-site staff", "99.9% uptime guarantee", "CreeperShield enabled"],
      isPrimary: true,
    },
    {
      city: "Mumbai",
      country: "India",
      latency: "15-25ms",
      specs: "NVMe SSD, AMD EPYC CPUs, DDR4 RAM",
      features: ["Business-grade infrastructure", "Redundant network", "99.9% uptime guarantee", "CreeperShield enabled"],
      isPrimary: false,
    },
    {
      city: "Bangalore",
      country: "India",
      latency: "25-35ms",
      specs: "NVMe SSD, Intel Xeon CPUs, DDR4 RAM",
      features: ["Enterprise-grade hardware", "Fiber connectivity", "99.9% uptime guarantee", "CreeperShield enabled"],
      isPrimary: false,
    }
  ];

  return (
    <>
      <Helmet>
        <title>Server Locations | CreeperCastle.cloud</title>
        <meta 
          name="description" 
          content="Discover our strategically located Minecraft hosting servers across India. Low latency, high performance infrastructure optimized for Indian players."
        />
        <meta 
          name="keywords" 
          content="minecraft server locations, india minecraft hosting, low latency minecraft, delhi server, mumbai server, bangalore server, india game servers"
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
              <div className="text-center max-w-4xl mx-auto">
                <motion.h1 
                  className="text-4xl md:text-5xl font-bold mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  Our <span className="text-creeper">Server Locations</span>
                </motion.h1>
                <motion.p 
                  className="text-xl text-gray-300 mb-8"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  We've strategically placed our infrastructure across India to provide the 
                  lowest possible latency for Indian Minecraft players. Experience smooth gameplay 
                  with minimal lag no matter where you are in the country.
                </motion.p>
                
                <motion.div 
                  className="relative h-64 md:h-80 lg:h-96 mb-12 rounded-xl overflow-hidden"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  {/* Map of India with highlighted server locations */}
                  <div className="absolute inset-0 bg-navy-light border border-gray-800 rounded-xl">
                    <img 
                      src="/lovable-uploads/bbf2f332-d50e-4f8c-8b64-111e940e56e1.png" 
                      alt="Map of India with server locations" 
                      className="w-full h-full object-contain p-4"
                    />
                    
                    {/* Server location markers */}
                    <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/4">
                      <div className="server-dot"></div>
                      <div className="mt-2 bg-navy-dark/80 px-2 py-1 rounded text-xs text-center">Delhi</div>
                    </div>
                    
                    <div className="absolute top-1/2 left-1/4 transform -translate-x-1/2 -translate-y-1/2">
                      <div className="server-dot"></div>
                      <div className="mt-2 bg-navy-dark/80 px-2 py-1 rounded text-xs text-center">Mumbai</div>
                    </div>
                    
                    <div className="absolute bottom-1/4 right-1/3 transform translate-x-1/2 translate-y-1/4">
                      <div className="server-dot"></div>
                      <div className="mt-2 bg-navy-dark/80 px-2 py-1 rounded text-xs text-center">Bangalore</div>
                    </div>
                  </div>
                </motion.div>
                
                <motion.div
                  className="flex flex-wrap justify-center gap-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                >
                  <div className="flex items-center px-4 py-2 bg-navy-light rounded-lg border border-gray-800">
                    <Server className="h-5 w-5 text-creeper mr-2" />
                    <span className="text-sm font-medium">3 Data Centers</span>
                  </div>
                  
                  <div className="flex items-center px-4 py-2 bg-navy-light rounded-lg border border-gray-800">
                    <Info className="h-5 w-5 text-creeper mr-2" />
                    <span className="text-sm font-medium">99.9% Uptime</span>
                  </div>
                  
                  <div className="flex items-center px-4 py-2 bg-navy-light rounded-lg border border-gray-800">
                    <MapPin className="h-5 w-5 text-creeper mr-2" />
                    <span className="text-sm font-medium">Low Latency</span>
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
                  Our Data <span className="text-creeper">Centers</span>
                </h2>
                <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                  Explore our state-of-the-art data centers powering your Minecraft experience
                </p>
              </div>
              
              <motion.div 
                className="grid grid-cols-1 md:grid-cols-3 gap-8"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                {locations.map((location, index) => (
                  <motion.div key={index} variants={itemVariants}>
                    <Card className={`bg-navy-light h-full ${location.isPrimary ? 'border-creeper' : 'border-gray-800 hover:border-creeper/50 transition-all'}`}>
                      <div className="p-6">
                        <div className="flex items-center mb-4">
                          <MapPin className="h-6 w-6 text-creeper mr-3" />
                          <div>
                            <h3 className="text-xl font-bold">{location.city}</h3>
                            <p className="text-gray-400">{location.country}</p>
                          </div>
                          {location.isPrimary && (
                            <span className="ml-auto bg-creeper text-navy-dark text-xs font-medium px-2 py-1 rounded">
                              Primary
                            </span>
                          )}
                        </div>
                        
                        <div className="space-y-4 mb-6">
                          <div>
                            <div className="text-sm text-gray-400">Average Latency</div>
                            <div className="font-medium">{location.latency}</div>
                          </div>
                          
                          <div>
                            <div className="text-sm text-gray-400">Hardware Specs</div>
                            <div className="font-medium">{location.specs}</div>
                          </div>
                        </div>
                        
                        <ul className="space-y-2 mb-6">
                          {location.features.map((feature, i) => (
                            <li key={i} className="flex items-start text-sm">
                              <ArrowRight className="h-4 w-4 text-creeper mr-2 mt-0.5 flex-shrink-0" />
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                        
                        <Button className="w-full minecraft-btn" asChild>
                          <a href="https://billing.creepercastle.in" target="_blank" rel="noopener noreferrer">
                            Choose This Location
                          </a>
                        </Button>
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
