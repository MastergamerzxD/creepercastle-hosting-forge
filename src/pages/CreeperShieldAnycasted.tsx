import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Shield, Globe, Zap, Eye, Lock, MapPin, Clock, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";

// Plan data for CreeperShield Anycasted
const anycastedPlans = [
  {
    name: "Anycasted Wither",
    price: "₹299",
    bandwidth: "1 TB",
    features: [
      "1 TB Monthly Anycasted Traffic",
      "Bot Attack Protection", 
      "Backend IP Hidden",
      "IP Firewall Protection",
      "Mumbai Location",
      "Minecraft TCP Connection Only"
    ],
    highlighted: false,
    buyLink: "https://billing.creepercastle.in/index.php?rp=/store/creepershield-anycasted"
  },
  {
    name: "Anycasted Warden", 
    price: "₹499",
    bandwidth: "5 TB",
    features: [
      "5 TB Monthly Anycasted Traffic",
      "Full Layer 3/4 Protection",
      "Detailed DDoS Analysis via Email",
      "No Ping Spikes During DDoS",
      "Bot Attack Protection",
      "Backend IP Hidden", 
      "IP Firewall Protection",
      "Mumbai Location",
      "Minecraft TCP Connection Only"
    ],
    highlighted: true,
    buyLink: "https://billing.creepercastle.in/index.php?rp=/store/creepershield-anycasted"
  }
];

const CreeperShieldAnycasted = () => {
  useEffect(() => {
    document.title = "CreeperShield Anycasted - Advanced DDoS Protection | CreeperCastle.cloud";
    window.scrollTo(0, 0);
  }, []);

  // Structured data for SEO
  const anycastedStructuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "CreeperShield Anycasted DDoS Protection",
    "description": "Advanced anycasted DDoS protection for Minecraft servers with up to 17 Tbps capacity, Mumbai location, and comprehensive security features.",
    "provider": {
      "@type": "Organization", 
      "name": "CreeperCastle.cloud"
    },
    "areaServed": "India",
    "offers": anycastedPlans.map(plan => ({
      "@type": "Offer",
      "name": plan.name,
      "price": plan.price.replace('₹', ''),
      "priceCurrency": "INR",
      "description": `${plan.name} - ${plan.bandwidth} bandwidth with advanced DDoS protection`
    }))
  };

  const faqStructuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage", 
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What makes CreeperShield Anycasted special?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "CreeperShield Anycasted provides up to 17 Tbps DDoS protection capacity with Mumbai location deployment, ensuring your Minecraft server stays protected against even the largest attacks."
        }
      },
      {
        "@type": "Question",
        "name": "How does anycasted protection work?",
        "acceptedAnswer": {
          "@type": "Answer", 
          "text": "Anycasted protection distributes traffic across multiple servers globally, allowing us to absorb and mitigate DDoS attacks before they reach your Minecraft server."
        }
      },
      {
        "@type": "Question",
        "name": "Can I use this with non-Minecraft servers?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Currently, CreeperShield Anycasted is optimized specifically for Minecraft TCP connections only."
        }
      }
    ]
  };

  return (
    <>
      <Navbar />
      <Helmet>
        <title>CreeperShield Anycasted - 17 Tbps DDoS Protection for Minecraft | Mumbai Location</title>
        <meta 
          name="description" 
          content="Advanced anycasted DDoS protection for Minecraft servers. Up to 17 Tbps capacity, Mumbai location, hidden backend IP, and detailed attack analysis. Starting ₹299/month." 
        />
        <meta name="keywords" content="minecraft ddos protection, anycasted protection, minecraft security, ddos mitigation, minecraft server protection, mumbai server protection, minecraft firewall" />
        
        {/* Open Graph */}
        <meta property="og:title" content="CreeperShield Anycasted - Advanced DDoS Protection" />
        <meta property="og:description" content="Protect your Minecraft server with our advanced anycasted DDoS protection. Up to 17 Tbps capacity with Mumbai location deployment." />
        <meta property="og:type" content="product" />
        <meta property="og:url" content="https://creepercastle.cloud/plans/creepershield-anycasted" />
        
        {/* Twitter */}
        <meta name="twitter:title" content="CreeperShield Anycasted - Advanced DDoS Protection" />
        <meta name="twitter:description" content="Protect your Minecraft server with our advanced anycasted DDoS protection. Up to 17 Tbps capacity with Mumbai location deployment." />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify(anycastedStructuredData)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(faqStructuredData)}
        </script>
        
        <link rel="canonical" href="https://creepercastle.cloud/plans/creepershield-anycasted" />
      </Helmet>

      <div className="min-h-screen bg-navy text-white">
        {/* Hero Section */}
        <section className="pt-24 pb-16 bg-gradient-to-b from-navy-dark to-navy">
          <div className="container mx-auto px-4">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <motion.div 
                className="inline-flex items-center justify-center w-20 h-20 bg-creeper/20 rounded-full mb-6"
                whileHover={{ scale: 1.1, rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                <Globe className="h-10 w-10 text-creeper" />
              </motion.div>
              
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                CreeperShield <span className="text-creeper">Anycasted</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
                Revolutionary anycasted DDoS protection for Minecraft servers with <span className="text-creeper font-bold">17 Tbps capacity</span>. 
                Mumbai location deployment ensures maximum protection for your gaming community.
              </p>
              
              <div className="flex flex-wrap justify-center gap-4 mb-8">
                <Badge variant="secondary" className="bg-creeper/20 text-creeper border-creeper/50 px-4 py-2">
                  <MapPin className="h-4 w-4 mr-2" />
                  Mumbai Location
                </Badge>
                <Badge variant="secondary" className="bg-creeper/20 text-creeper border-creeper/50 px-4 py-2">
                  <Shield className="h-4 w-4 mr-2" />
                  17 Tbps Capacity
                </Badge>
                <Badge variant="secondary" className="bg-creeper/20 text-creeper border-creeper/50 px-4 py-2">
                  <Zap className="h-4 w-4 mr-2" />
                  Instant Deployment
                </Badge>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 bg-navy-light">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Anycasted Protection?</h2>
              <p className="text-gray-300 text-lg">Advanced technology meets uncompromising security</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <motion.div 
                className="bg-navy rounded-xl p-6 border border-gray-800"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <Globe className="h-12 w-12 text-creeper mb-4" />
                <h3 className="text-xl font-bold mb-3">Global Anycast Network</h3>
                <p className="text-gray-300">Traffic distributed across multiple nodes worldwide for maximum resilience against attacks.</p>
              </motion.div>

              <motion.div 
                className="bg-navy rounded-xl p-6 border border-gray-800"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <Eye className="h-12 w-12 text-creeper mb-4" />
                <h3 className="text-xl font-bold mb-3">Hidden Backend IP</h3>
                <p className="text-gray-300">Your Minecraft server's real IP stays completely hidden from potential attackers.</p>
              </motion.div>

              <motion.div 
                className="bg-navy rounded-xl p-6 border border-gray-800"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <Lock className="h-12 w-12 text-creeper mb-4" />
                <h3 className="text-xl font-bold mb-3">Advanced Firewall</h3>
                <p className="text-gray-300">Intelligent IP filtering and bot protection to keep malicious traffic at bay.</p>
              </motion.div>

              <motion.div 
                className="bg-navy rounded-xl p-6 border border-gray-800"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <MapPin className="h-12 w-12 text-creeper mb-4" />
                <h3 className="text-xl font-bold mb-3">Mumbai Location</h3>
                <p className="text-gray-300">Optimized for Indian players with low latency and high performance connectivity.</p>
              </motion.div>

              <motion.div 
                className="bg-navy rounded-xl p-6 border border-gray-800"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <TrendingUp className="h-12 w-12 text-creeper mb-4" />
                <h3 className="text-xl font-bold mb-3">Detailed Analytics</h3>
                <p className="text-gray-300">Comprehensive DDoS attack reports sent directly to your email for transparency.</p>
              </motion.div>

              <motion.div 
                className="bg-navy rounded-xl p-6 border border-gray-800"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <Clock className="h-12 w-12 text-creeper mb-4" />
                <h3 className="text-xl font-bold mb-3">Zero Ping Spikes</h3>
                <p className="text-gray-300">Maintain smooth gameplay even during active DDoS attacks with our advanced mitigation.</p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Pricing Plans */}
        <section className="py-20 bg-navy">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Choose Your Protection Level</h2>
              <p className="text-gray-300 text-lg">Professional DDoS protection tailored for Minecraft servers</p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {anycastedPlans.map((plan, index) => (
                <motion.div
                  key={plan.name}
                  className={`relative ${plan.highlighted ? 'lg:scale-105' : ''}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className={`h-full ${plan.highlighted ? 'border-2 border-creeper bg-navy-light' : 'border border-gray-800 bg-navy-light'}`}>
                    {plan.highlighted && (
                      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                        <Badge className="bg-creeper text-navy-dark font-bold px-4 py-1">
                          Recommended
                        </Badge>
                      </div>
                    )}
                    
                    <CardContent className="p-8">
                      <div className="text-center mb-8">
                        <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                        <div className="mb-4">
                          <span className="text-4xl font-bold text-creeper">{plan.price}</span>
                          <span className="text-gray-400 ml-2">/month</span>
                        </div>
                        <p className="text-gray-300">
                          <span className="font-bold text-creeper">{plan.bandwidth}</span> Monthly Bandwidth
                        </p>
                      </div>
                      
                      <div className="space-y-4 mb-8">
                        {plan.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center">
                            <div className="w-5 h-5 rounded-full bg-creeper/20 flex items-center justify-center mr-3 flex-shrink-0">
                              <div className="w-2 h-2 bg-creeper rounded-full"></div>
                            </div>
                            <span className="text-gray-300">{feature}</span>
                          </div>
                        ))}
                      </div>
                      
                      <Button 
                        className={`w-full minecraft-btn ${plan.highlighted ? 'minecraft-btn-primary' : ''}`}
                        asChild
                      >
                        <a href={plan.buyLink} target="_blank" rel="noopener noreferrer">
                          Get Started - {plan.price}/month
                        </a>
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Technical Specifications */}
        <section className="py-16 bg-navy-light">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Technical Specifications</h2>
              <p className="text-gray-300 text-lg">Built for performance and reliability</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-navy rounded-xl p-6 text-center border border-gray-800">
                <h3 className="text-2xl font-bold text-creeper mb-2">17 Tbps</h3>
                <p className="text-gray-300">Maximum Protection Capacity</p>
              </div>
              <div className="bg-navy rounded-xl p-6 text-center border border-gray-800">
                <h3 className="text-2xl font-bold text-creeper mb-2">&lt; 1ms</h3>
                <p className="text-gray-300">Additional Latency</p>
              </div>
              <div className="bg-navy rounded-xl p-6 text-center border border-gray-800">
                <h3 className="text-2xl font-bold text-creeper mb-2">24/7</h3>
                <p className="text-gray-300">Monitoring & Protection</p>
              </div>
              <div className="bg-navy rounded-xl p-6 text-center border border-gray-800">
                <h3 className="text-2xl font-bold text-creeper mb-2">TCP Only</h3>
                <p className="text-gray-300">Minecraft Protocol Support</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-navy-dark to-navy">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Secure Your Server?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Join thousands of server owners who trust CreeperShield Anycasted for their DDoS protection needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="minecraft-btn" asChild>
                  <a href="https://billing.creepercastle.in/index.php?rp=/store/creepershield-anycasted" target="_blank" rel="noopener noreferrer">
                    Get Protection Now
                  </a>
                </Button>
                <Button variant="outline" className="border-creeper text-creeper hover:bg-creeper/10" asChild>
                  <a href="https://discord.gg/RuQ9neH56S" target="_blank" rel="noopener noreferrer">
                    Ask Questions on Discord
                  </a>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default CreeperShieldAnycasted;