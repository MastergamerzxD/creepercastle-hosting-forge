
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Wifi, Shield, Zap, Clock, Server } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const LocationsSection = () => {
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

  const locations = [
    {
      city: "Delhi NCR (Noida)",
      description: "Our primary data center in Noida offers ultra-low latency for North Indian players",
      ping: "< 5ms",
      features: ["Tier-3 Data Center", "99.9% Uptime", "24/7 Monitoring"],
      icon: MapPin
    },
    {
      city: "Mumbai",
      description: "Strategic location for optimal connectivity across Western and Southern India",
      ping: "< 8ms",
      features: ["High-Speed Network", "DDoS Protection", "Premium Hardware"],
      icon: MapPin
    }
  ];

  const services = [
    {
      title: "Minecraft Performance Servers",
      description: "High-performance Minecraft hosting with instant setup and premium features",
      icon: Server,
      color: "text-creeper",
      bgColor: "bg-creeper/10",
      route: "/plans/minecraft"
    },
    {
      title: "CreeperShield",
      description: "Advanced DDoS protection and security solutions for your servers",
      icon: Shield,
      color: "text-blue-400",
      bgColor: "bg-blue-400/10",
      route: "/plans/creepershield"
    },
    {
      title: "VPS",
      description: "Powerful virtual private servers for advanced server management",
      icon: Zap,
      color: "text-purple-400",
      bgColor: "bg-purple-400/10",
      route: "/plans/vps"
    }
  ];

  return (
    <section className="py-20 relative overflow-hidden" id="locations">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-4"
            variants={itemVariants}
          >
            Strategic <span className="text-creeper">Server Locations</span>
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-300 max-w-3xl mx-auto"
            variants={itemVariants}
          >
            Optimally positioned data centers across India for the best gaming experience
          </motion.p>
        </motion.div>

        {/* Location Cards */}
        <motion.div 
          className="grid md:grid-cols-2 gap-8 mb-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {locations.map((location, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="bg-navy-light border-gray-700 hover:border-creeper/50 transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex items-start mb-6">
                    <div className="p-3 bg-creeper/10 rounded-full mr-4">
                      <location.icon className="h-6 w-6 text-creeper" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white mb-2">{location.city}</h3>
                      <p className="text-gray-300 mb-4">{location.description}</p>
                      <div className="flex items-center mb-4">
                        <Wifi className="h-4 w-4 text-creeper mr-2" />
                        <span className="text-sm font-medium">Latency: {location.ping}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    {location.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center">
                        <div className="w-2 h-2 bg-creeper rounded-full mr-3"></div>
                        <span className="text-gray-300 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Services Section */}
        <motion.div 
          className="text-center mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.h3 
            className="text-2xl md:text-3xl font-bold mb-4"
            variants={itemVariants}
          >
            Choose Your <span className="text-creeper">Service</span>
          </motion.h3>
          <motion.p 
            className="text-lg text-gray-300 max-w-2xl mx-auto"
            variants={itemVariants}
          >
            Premium hosting solutions designed for every gaming need
          </motion.p>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {services.map((service, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="bg-navy-light border-gray-700 hover:border-creeper/50 transition-all duration-300 group h-full">
                <CardContent className="p-8 text-center h-full flex flex-col">
                  <div className={`w-16 h-16 ${service.bgColor} rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform`}>
                    <service.icon className={`h-8 w-8 ${service.color}`} />
                  </div>
                  
                  <h4 className="text-xl font-bold text-white mb-4">{service.title}</h4>
                  <p className="text-gray-300 mb-6 flex-1">{service.description}</p>
                  
                  <Button 
                    className="minecraft-btn w-full group-hover:scale-105 transition-transform"
                    asChild
                  >
                    <Link to={service.route}>
                      Explore Plans
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Performance Stats */}
        <motion.div 
          className="mt-20 text-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
            variants={itemVariants}
          >
            <div className="text-center">
              <div className="text-3xl font-bold text-creeper mb-2">99.9%</div>
              <div className="text-gray-400 text-sm">Uptime Guarantee</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-creeper mb-2">&lt;5ms</div>
              <div className="text-gray-400 text-sm">Average Latency</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-creeper mb-2">24/7</div>
              <div className="text-gray-400 text-sm">Expert Support</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-creeper mb-2">2</div>
              <div className="text-gray-400 text-sm">Premium Locations</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default LocationsSection;
