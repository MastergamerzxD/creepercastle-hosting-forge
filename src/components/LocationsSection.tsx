
import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Globe } from "lucide-react";
import { motion } from "framer-motion";

const locations = [
  { city: "Delhi", country: "India", ping: null },
  { city: "Mumbai", country: "India", ping: null }
];

const LocationsSection = () => {
  const [pings, setPings] = useState<{ [key: string]: number | null }>({
    Delhi: null,
    Mumbai: null
  });

  // Simulate ping times (in a real app, this would be an actual ping calculation)
  useEffect(() => {
    const simulatePings = () => {
      const newPings = { ...pings };
      locations.forEach(location => {
        // Random ping between 20ms and 80ms for Delhi and Mumbai
        const randomPing = Math.floor(Math.random() * 60) + 20;
        newPings[location.city] = randomPing;
      });
      setPings(newPings);
    };
    
    simulatePings();
    const interval = setInterval(simulatePings, 5000); // Update pings every 5 seconds
    
    return () => clearInterval(interval);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  return (
    <section className="py-20 bg-navy relative" id="locations">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <motion.div 
          className="absolute w-1/2 h-1/2 bg-creeper/5 rounded-full blur-[100px] top-0 right-0"
          animate={{ 
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
            y: [0, -30, 0]
          }}
          transition={{ 
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute w-1/3 h-1/3 bg-creeper/5 rounded-full blur-[80px] bottom-20 left-1/4"
          animate={{ 
            scale: [1.2, 1, 1.2],
            x: [0, -30, 0],
            y: [0, 40, 0]
          }}
          transition={{ 
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div className="inline-block mb-2">
            <motion.div 
              className="w-20 h-1 bg-creeper mx-auto"
              animate={{ width: ["0%", "100%", "0%"] }}
              transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
            />
          </motion.div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our <span className="text-creeper">Server Locations</span></h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Our strategically placed datacenters in India provide the lowest latency for your gaming experience.
          </p>
        </motion.div>
        
        <div className="relative">
          {/* India Map with Server Locations */}
          <motion.div 
            className="relative w-full h-[400px] mb-8 bg-navy-light rounded-xl overflow-hidden border border-gray-800 animate-glow"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div 
              className="absolute inset-0 opacity-70"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 0.7 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <img 
                src="/lovable-uploads/bbf2f332-d50e-4f8c-8b64-111e940e56e1.png" 
                alt="India Map" 
                className="object-contain w-full h-full opacity-50"
              />
            </motion.div>
            
            {/* Delhi */}
            <motion.div 
              className="absolute left-[48%] top-[30%] w-4 h-4 bg-creeper rounded-full animate-pulse-slow shadow-lg shadow-creeper/50 group"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              <motion.div 
                className="absolute w-10 h-10 bg-creeper/20 rounded-full -left-3 -top-3"
                animate={{ scale: [1, 1.5, 1], opacity: [0.7, 0, 0.7] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <div className="absolute w-6 h-6 bg-creeper/30 rounded-full -left-1 -top-1 animate-ping"></div>
              <div className="hidden group-hover:block absolute -top-10 left-1/2 -translate-x-1/2 bg-navy-dark px-3 py-1.5 rounded-md border border-creeper/30 whitespace-nowrap font-medium">
                Delhi
              </div>
            </motion.div>
            
            {/* Mumbai */}
            <motion.div 
              className="absolute left-[44%] top-[55%] w-4 h-4 bg-creeper rounded-full animate-pulse-slow shadow-lg shadow-creeper/50 group"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 1 }}
            >
              <motion.div 
                className="absolute w-10 h-10 bg-creeper/20 rounded-full -left-3 -top-3"
                animate={{ scale: [1, 1.5, 1], opacity: [0.7, 0, 0.7] }}
                transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
              />
              <div className="absolute w-6 h-6 bg-creeper/30 rounded-full -left-1 -top-1 animate-ping"></div>
              <div className="hidden group-hover:block absolute -top-10 left-1/2 -translate-x-1/2 bg-navy-dark px-3 py-1.5 rounded-md border border-creeper/30 whitespace-nowrap font-medium">
                Mumbai
              </div>
            </motion.div>
            
            {/* Connection lines between servers */}
            <motion.div 
              className="absolute left-[46%] top-[30%] w-0.5 h-[25%] bg-gradient-to-b from-creeper via-creeper/50 to-creeper"
              initial={{ height: 0, opacity: 0 }}
              whileInView={{ height: "25%", opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 1.2 }}
            >
              <motion.div 
                className="absolute w-1 h-3 bg-creeper rounded-full top-1/2 -left-[1.5px]"
                animate={{ y: [0, 100], opacity: [1, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop" }}
              />
            </motion.div>
            
            <motion.div 
              className="absolute bottom-4 left-4 bg-navy-dark/80 backdrop-blur-sm p-4 rounded-lg border border-gray-800 pixel-animate"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 1.2 }}
            >
              <h3 className="font-medium mb-2 flex items-center">
                <Globe className="h-5 w-5 mr-2 text-creeper" />
                India Network
              </h3>
              <ul className="text-sm space-y-1">
                <motion.li 
                  className="flex items-center"
                  whileHover={{ x: 3 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <div className="w-2 h-2 rounded-full bg-creeper mr-2 animate-pulse-slow"></div>
                  <span>Delhi - Tier 4 Datacenter</span>
                </motion.li>
                <motion.li 
                  className="flex items-center"
                  whileHover={{ x: 3 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <div className="w-2 h-2 rounded-full bg-creeper mr-2 animate-pulse-slow animation-delay-500"></div>
                  <span>Mumbai - Tier 4 Datacenter</span>
                </motion.li>
                <motion.li 
                  className="flex items-center"
                  whileHover={{ x: 3 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <div className="w-2 h-2 rounded-full bg-creeper mr-2 animate-pulse-slow animation-delay-1000"></div>
                  <span>CreeperShield Protection</span>
                </motion.li>
              </ul>
            </motion.div>
          </motion.div>
          
          {/* Server Location Details */}
          <motion.div 
            className="mt-12"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {locations.map((location, index) => (
                <motion.div key={index} variants={itemVariants} transition={{ duration: 0.5 }}>
                  <Card className="bg-navy-light border-gray-800 hover:border-creeper/50 transition-all duration-300 hover:shadow-lg hover:shadow-creeper/20 pixel-animate">
                    <CardContent className="p-6">
                      <div className="flex items-center mb-4">
                        <MapPin className="h-5 w-5 text-creeper mr-2" />
                        <h3 className="font-medium text-lg">{location.city}, {location.country}</h3>
                      </div>
                      <div className="space-y-3">
                        <div className="flex items-center text-sm">
                          <span className="text-gray-400">Current Ping: </span>
                          <motion.span 
                            className="ml-auto text-creeper font-medium"
                            key={pings[location.city]}
                            initial={{ opacity: 0, y: -5 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.2 }}
                          >
                            {pings[location.city] !== null ? `${pings[location.city]}ms` : 'Calculating...'}
                          </motion.span>
                        </div>
                        <div className="pt-3">
                          <div className="h-2 w-full bg-navy rounded overflow-hidden">
                            <motion.div 
                              className="h-full bg-gradient-to-r from-creeper-dark to-creeper animate-shine"
                              style={{ width: `${Math.floor(80 + Math.random() * 20)}%` }}
                              initial={{ width: 0 }}
                              whileInView={{ width: `${Math.floor(80 + Math.random() * 20)}%` }}
                              viewport={{ once: true }}
                              transition={{ duration: 0.8, delay: 0.2 * index }}
                            ></motion.div>
                          </div>
                          <div className="flex justify-between text-xs mt-1">
                            <span className="text-gray-400">Current load</span>
                            <span className="text-creeper">Available</span>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default LocationsSection;
