
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
    price: 399,
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
  // Enhanced JSON-LD structured data for better SEO
  const creepershieldStructuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "CreeperShield DDoS Protection",
    "description": "Advanced DDoS protection service for Minecraft servers with up to 3 Tbps mitigation capacity. Layer 3, 4 & 7 protection with real-time monitoring.",
    "provider": {
      "@type": "Organization",
      "name": "CreeperCastle.cloud",
      "url": "https://creepercastle.cloud",
      "logo": "https://creepercastle.cloud/lovable-uploads/1a97b5fc-a24e-43f7-9a8a-2b87db8ad1b6.png",
      "sameAs": [
        "https://discord.gg/RuQ9neH56S"
      ]
    },
    "serviceType": "DDoS Protection Service",
    "category": "Cybersecurity",
    "offers": creepershieldPlans.map((plan, index) => ({
      "@type": "Offer",
      "name": plan.name,
      "description": `${plan.bandwidth} DDoS protection with ${plan.features.length} security features`,
      "price": plan.price.toString(),
      "priceCurrency": "INR",
      "availability": "https://schema.org/InStock",
      "validFrom": "2024-01-01",
      "priceValidUntil": "2025-12-31"
    })),
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "DDoS Protection Plans",
      "itemListElement": creepershieldPlans.map((plan, index) => ({
        "@type": "Offer",
        "position": index + 1,
        "itemOffered": {
          "@type": "Service",
          "name": plan.name,
          "description": `${plan.bandwidth} bandwidth DDoS protection`
        },
        "price": plan.price.toString(),
        "priceCurrency": "INR"
      }))
    }
  };

  // FAQ structured data for rich snippets
  const shieldFaqStructuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is CreeperShield DDoS protection?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "CreeperShield is an advanced DDoS protection service specifically designed for Minecraft servers. It provides multi-layer protection with up to 3 Tbps mitigation capacity to keep your server online during attacks."
        }
      },
      {
        "@type": "Question",
        "name": "How does CreeperShield protect my Minecraft server?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "CreeperShield uses advanced filtering algorithms to detect and block malicious traffic while allowing legitimate players to connect. It provides Layer 3, 4, and 7 protection with real-time monitoring and automatic mitigation."
        }
      },
      {
        "@type": "Question",
        "name": "Can I use CreeperShield with servers hosted elsewhere?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes! CreeperShield is available as a standalone service and can be used with Minecraft servers hosted on any provider. Our team will help you set up and configure the protection for your specific setup."
        }
      },
      {
        "@type": "Question",
        "name": "What types of DDoS attacks does CreeperShield block?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "CreeperShield blocks all types of DDoS attacks including SYN floods, UDP floods, volumetric attacks, application layer attacks, and Minecraft-specific attack vectors with advanced pattern recognition."
        }
      }
    ]
  };

  return (
    <>
      <Helmet>
        <title>CreeperShield - Best DDoS Protection for Minecraft Servers India | Up to 3 Tbps Capacity</title>
        <meta 
          name="description" 
          content="Advanced DDoS protection for Minecraft servers starting at ₹84/month. Up to 3 Tbps mitigation capacity, Layer 3-7 protection, real-time monitoring. Keep your server online 24/7."
        />
        <meta
          name="keywords"
          content="minecraft ddos protection india, ddos mitigation minecraft, minecraft server security, anti ddos minecraft, minecraft server protection, ddos shield minecraft, creepershield protection, minecraft cybersecurity, game server ddos protection, minecraft anti attack"
        />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://creepercastle.cloud/plans/creepershield" />
        <meta property="og:title" content="CreeperShield - Advanced DDoS Protection for Minecraft Servers | 3 Tbps Capacity" />
        <meta property="og:description" content="Keep your Minecraft server online with advanced DDoS protection. Up to 3 Tbps mitigation, Layer 3-7 protection, real-time monitoring starting at ₹84/month." />
        <meta property="og:image" content="https://creepercastle.cloud/lovable-uploads/1a97b5fc-a24e-43f7-9a8a-2b87db8ad1b6.png" />
        <meta property="og:image:alt" content="CreeperShield DDoS Protection" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="CreeperShield - DDoS Protection for Minecraft 🛡️" />
        <meta name="twitter:description" content="Advanced DDoS protection with up to 3 Tbps capacity. Keep your Minecraft server online even during large-scale attacks." />
        <meta name="twitter:image" content="https://creepercastle.cloud/lovable-uploads/1a97b5fc-a24e-43f7-9a8a-2b87db8ad1b6.png" />
        
        {/* Additional SEO tags */}
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <meta name="author" content="CreeperCastle.cloud" />
        <meta name="publisher" content="CreeperCastle.cloud" />
        <meta name="application-name" content="CreeperShield" />
        <meta name="theme-color" content="#50C878" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://creepercastle.cloud/plans/creepershield" />
        
        {/* JSON-LD Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify(creepershieldStructuredData)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(shieldFaqStructuredData)}
        </script>
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
