
import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Server, Zap, Shield, Clock } from "lucide-react";
import { motion } from "framer-motion";

const minecraftPlans = [
  {
    name: "Starter",
    price: 99,
    specs: {
      ram: "2GB",
      cpu: "1 vCore",
      storage: "30GB NVMe SSD",
      players: "Up to 15 players"
    },
    features: [
      "Instant Setup",
      "One-Click Plugin Installation", 
      "Automatic Backups",
      "24/7 Support",
      "99.9% Uptime",
      "DDoS Protection"
    ]
  },
  {
    name: "Growth",
    price: 199,
    specs: {
      ram: "4GB",
      cpu: "2 vCores",
      storage: "60GB NVMe SSD",
      players: "Up to 30 players"
    },
    features: [
      "Instant Setup",
      "One-Click Plugin Installation",
      "Automatic Backups",
      "24/7 Priority Support",
      "99.9% Uptime",
      "Enhanced DDoS Protection",
      "Custom Server Icon",
      "Performance Monitoring"
    ],
    highlighted: true
  },
  {
    name: "Pro",
    price: 336,
    specs: {
      ram: "6GB",
      cpu: "3 vCores", 
      storage: "90GB NVMe SSD",
      players: "Up to 50 players"
    },
    features: [
      "Instant Setup",
      "One-Click Plugin Installation",
      "Automatic Backups",
      "24/7 Priority Support",
      "99.9% Uptime",
      "Premium DDoS Protection",
      "Custom Server Icon",
      "Performance Monitoring",
      "Database Access",
      "Advanced Configuration"
    ]
  },
  {
    name: "Elite",
    price: 504,
    specs: {
      ram: "8GB",
      cpu: "4 vCores",
      storage: "120GB NVMe SSD", 
      players: "Up to 70 players"
    },
    features: [
      "Instant Setup",
      "One-Click Plugin Installation",
      "Automatic Backups", 
      "24/7 Premium Support",
      "99.9% Uptime",
      "Premium DDoS Protection",
      "Custom Server Icon",
      "Performance Monitoring",
      "Database Access",
      "Advanced Configuration",
      "Dedicated Support Agent",
      "Custom Server Setup"
    ]
  },
  {
    name: "Ultimate",
    price: 672,
    specs: {
      ram: "12GB",
      cpu: "6 vCores",
      storage: "180GB NVMe SSD",
      players: "Up to 100+ players"
    },
    features: [
      "Instant Setup",
      "One-Click Plugin Installation",
      "Automatic Backups",
      "24/7 Premium Support", 
      "99.9% Uptime",
      "Premium DDoS Protection",
      "Custom Server Icon",
      "Performance Monitoring",
      "Database Access",
      "Advanced Configuration",
      "Dedicated Support Agent",
      "Custom Server Setup",
      "Priority Resource Allocation",
      "Advanced Analytics"
    ]
  }
];

const MinecraftPlans = () => {
  // Enhanced JSON-LD structured data for better SEO
  const minecraftStructuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Minecraft Server Hosting",
    "description": "Premium Minecraft server hosting in India with instant setup, NVMe storage, DDoS protection and 24/7 support",
    "provider": {
      "@type": "Organization",
      "name": "CreeperCastle.cloud",
      "url": "https://creepercastle.cloud",
      "logo": "https://creepercastle.cloud/lovable-uploads/a5ede7d4-e1bf-4925-84dd-4b075648dc11.png",
      "sameAs": [
        "https://discord.gg/RuQ9neH56S"
      ]
    },
    "serviceType": "Game Server Hosting",
    "category": "Web Hosting",
    "offers": minecraftPlans.map((plan, index) => ({
      "@type": "Offer",
      "name": plan.name,
      "description": `${plan.specs.ram} RAM, ${plan.specs.cpu}, ${plan.specs.storage} storage, ${plan.specs.players}`,
      "price": plan.price.toString(),
      "priceCurrency": "INR",
      "availability": "https://schema.org/InStock",
      "validFrom": "2024-01-01",
      "priceValidUntil": "2025-12-31"
    }))
  };

  const breadcrumbStructuredData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://creepercastle.cloud/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Plans",
        "item": "https://creepercastle.cloud/plans"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Minecraft Hosting",
        "item": "https://creepercastle.cloud/plans/minecraft"
      }
    ]
  };

  return (
    <>
      <Helmet>
        <title>Minecraft Server Hosting Plans India | Starting ₹99/Month | CreeperCastle.cloud</title>
        <meta 
          name="description" 
          content="Best Minecraft server hosting in India starting at ₹99/month. Instant setup, NVMe storage, DDoS protection, 24/7 support. Java & Bedrock edition support."
        />
        <meta
          name="keywords"
          content="minecraft server hosting india, minecraft hosting plans, cheap minecraft hosting, minecraft server rental, java minecraft hosting, bedrock minecraft hosting, minecraft smp hosting, modded minecraft hosting, minecraft server india pricing"
        />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://creepercastle.cloud/plans/minecraft" />
        <meta property="og:title" content="Minecraft Server Hosting Plans | Starting ₹99/Month in India" />
        <meta property="og:description" content="Premium Minecraft hosting with instant setup, NVMe storage, and DDoS protection. Plans starting at ₹99/month with 24/7 support." />
        <meta property="og:image" content="https://creepercastle.cloud/lovable-uploads/a5ede7d4-e1bf-4925-84dd-4b075648dc11.png" />
        <meta property="og:image:alt" content="Minecraft Server Hosting Plans" />
        <meta property="og:site_name" content="CreeperCastle.cloud" />
        <meta property="og:locale" content="en_IN" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Minecraft Hosting Plans - Starting ₹99/Month 🎮" />
        <meta name="twitter:description" content="Premium Minecraft server hosting in India with instant setup and 24/7 support. Java & Bedrock edition support." />
        <meta name="twitter:image" content="https://creepercastle.cloud/lovable-uploads/a5ede7d4-e1bf-4925-84dd-4b075648dc11.png" />
        
        {/* Additional SEO tags */}
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <meta name="author" content="CreeperCastle.cloud" />
        <meta name="publisher" content="CreeperCastle.cloud" />
        <meta name="theme-color" content="#50C878" />
        <meta name="geo.region" content="IN" />
        <meta name="geo.placename" content="Mumbai, Delhi" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://creepercastle.cloud/plans/minecraft" />
        
        {/* JSON-LD Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify(minecraftStructuredData)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbStructuredData)}
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
                  Minecraft <span className="text-creeper">Hosting Plans</span>
                </motion.h1>
                <motion.p 
                  className="text-xl text-gray-300 max-w-3xl mx-auto"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  High-performance Minecraft servers with instant setup, one-click plugin installation,
                  and 24/7 expert support. Perfect for any size community.
                </motion.p>
              </div>
              
              <motion.div 
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 max-w-7xl mx-auto"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                {minecraftPlans.map((plan, index) => (
                  <Card 
                    key={index} 
                    className={`bg-navy-light ${plan.highlighted ? 'border-2 border-creeper relative' : 'border border-gray-800'} hover:transform hover:-translate-y-2 transition-all duration-300`}
                  >
                    {plan.highlighted && (
                      <div className="absolute top-0 right-0 bg-creeper text-navy-dark font-medium text-sm px-3 py-1 rounded-bl-lg">
                        Popular
                      </div>
                    )}
                    <CardHeader className="text-center">
                      <div className="mx-auto mb-4">
                        <Server className="h-8 w-8 text-creeper" />
                      </div>
                      <CardTitle className="text-xl">{plan.name}</CardTitle>
                      <div className="flex items-baseline justify-center mt-2">
                        <span className="text-3xl font-bold">₹{plan.price}</span>
                        <span className="text-gray-400 ml-1">/month</span>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="text-center space-y-2">
                          <div className="flex justify-between text-sm">
                            <span className="text-gray-400">RAM:</span>
                            <span className="text-creeper">{plan.specs.ram}</span>
                          </div>
                          <div className="flex justify-between text-sm">
                            <span className="text-gray-400">CPU:</span>
                            <span className="text-creeper">{plan.specs.cpu}</span>
                          </div>
                          <div className="flex justify-between text-sm">
                            <span className="text-gray-400">Storage:</span>
                            <span className="text-creeper">{plan.specs.storage}</span>
                          </div>
                          <div className="flex justify-between text-sm">
                            <span className="text-gray-400">Players:</span>
                            <span className="text-creeper">{plan.specs.players}</span>
                          </div>
                        </div>
                        
                        <div className="border-t border-gray-700 pt-4">
                          <ul className="space-y-2">
                            {plan.features.slice(0, 4).map((feature, i) => (
                              <li key={i} className="flex items-start">
                                <Check className="h-4 w-4 text-creeper mr-2 mt-0.5 flex-shrink-0" />
                                <span className="text-xs text-gray-300">{feature}</span>
                              </li>
                            ))}
                            {plan.features.length > 4 && (
                              <li className="text-xs text-gray-400">
                                +{plan.features.length - 4} more features
                              </li>
                            )}
                          </ul>
                        </div>
                        
                        <Button className="w-full minecraft-btn mt-4" asChild>
                          <a 
                            href="https://billing.creepercastle.in/index.php?rp=/store/minecraft-hosting" 
                            target="_blank" 
                            rel="noopener noreferrer"
                          >
                            Order Now
                          </a>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </motion.div>
              
              {/* Features Section */}
              <div className="mt-20">
                <div className="max-w-6xl mx-auto">
                  <h2 className="text-3xl font-bold mb-12 text-center">
                    Why Choose Our <span className="text-creeper">Minecraft Hosting</span>?
                  </h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <div className="text-center">
                      <div className="p-4 bg-creeper/20 rounded-full w-fit mx-auto mb-4">
                        <Zap className="h-8 w-8 text-creeper" />
                      </div>
                      <h3 className="font-semibold mb-2">Instant Setup</h3>
                      <p className="text-gray-400 text-sm">
                        Your server is ready in seconds, not hours
                      </p>
                    </div>
                    
                    <div className="text-center">
                      <div className="p-4 bg-creeper/20 rounded-full w-fit mx-auto mb-4">
                        <Shield className="h-8 w-8 text-creeper" />
                      </div>
                      <h3 className="font-semibold mb-2">DDoS Protection</h3>
                      <p className="text-gray-400 text-sm">
                        Advanced protection keeps your server online
                      </p>
                    </div>
                    
                    <div className="text-center">
                      <div className="p-4 bg-creeper/20 rounded-full w-fit mx-auto mb-4">
                        <Server className="h-8 w-8 text-creeper" />
                      </div>
                      <h3 className="font-semibold mb-2">High Performance</h3>
                      <p className="text-gray-400 text-sm">
                        NVMe SSDs and high-frequency CPUs for lag-free gaming
                      </p>
                    </div>
                    
                    <div className="text-center">
                      <div className="p-4 bg-creeper/20 rounded-full w-fit mx-auto mb-4">
                        <Clock className="h-8 w-8 text-creeper" />
                      </div>
                      <h3 className="font-semibold mb-2">24/7 Support</h3>
                      <p className="text-gray-400 text-sm">
                        Expert support team available around the clock
                      </p>
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

export default MinecraftPlans;
