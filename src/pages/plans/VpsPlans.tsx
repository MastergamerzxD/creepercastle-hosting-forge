
import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Server } from "lucide-react";
import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const vpsPlans = [
  {
    name: "VPS - 32GB",
    price: 3300,
    specs: {
      ram: "32GB",
      cpu: "10 vCores",
      storage: "300GB NVMe SSD",
      bandwidth: "Unmetered",
      protection: "CreeperShield Protection"
    },
    features: [
      "Root Access",
      "Full SSH Access",
      "Choose Your OS",
      "Dedicated Resources",
      "99.9% Uptime SLA",
      "24/7 Support"
    ]
  },
  {
    name: "VPS - 48GB",
    price: 4800,
    specs: {
      ram: "48GB",
      cpu: "12 vCores",
      storage: "400GB NVMe SSD",
      bandwidth: "Unmetered",
      protection: "CreeperShield Protection"
    },
    features: [
      "Root Access",
      "Full SSH Access",
      "Choose Your OS",
      "Dedicated Resources",
      "99.9% Uptime SLA",
      "24/7 Priority Support",
      "Automatic Backups",
      "Managed Firewall"
    ],
    highlighted: true
  },
  {
    name: "VPS - 64GB",
    price: 6800,
    specs: {
      ram: "64GB",
      cpu: "16 vCores",
      storage: "500GB NVMe SSD",
      bandwidth: "Unmetered",
      protection: "Premium DDoS Protection"
    },
    features: [
      "Root Access",
      "Full SSH Access",
      "Choose Your OS",
      "Dedicated Resources",
      "99.9% Uptime SLA",
      "24/7 Priority Support",
      "Daily Backups",
      "Managed Firewall",
      "Resource Monitoring",
      "Performance Optimization"
    ]
  }
];

const highPerfVpsPlans = [
  {
    name: "VPS - 96GB",
    price: 8400,
    specs: {
      ram: "96GB",
      cpu: "20 vCores",
      storage: "800GB NVMe SSD",
      bandwidth: "Unmetered",
      protection: "Premium DDoS Protection"
    },
    features: [
      "Root Access",
      "Full SSH Access",
      "Choose Your OS",
      "Dedicated Resources",
      "99.99% Uptime SLA",
      "24/7 Premium Support",
      "2x Daily Backups",
      "Advanced Firewall",
      "Resource Monitoring",
      "Performance Optimization",
      "Dedicated Support Team"
    ]
  },
  {
    name: "VPS - 128GB",
    price: 12500,
    specs: {
      ram: "128GB",
      cpu: "24 vCores",
      storage: "1TB NVMe SSD",
      bandwidth: "Unmetered",
      protection: "Enterprise DDoS Protection"
    },
    features: [
      "Root Access",
      "Full SSH Access",
      "Choose Your OS",
      "Dedicated Resources",
      "99.99% Uptime SLA",
      "24/7 Premium Support",
      "3x Daily Backups",
      "Advanced Firewall",
      "Resource Monitoring",
      "Performance Optimization",
      "Dedicated Support Team",
      "Custom Setup Assistance",
      "Hardware Redundancy"
    ],
    highlighted: true
  },
  {
    name: "VPS - 256GB",
    price: 24000,
    specs: {
      ram: "256GB",
      cpu: "32 vCores",
      storage: "2TB NVMe SSD",
      bandwidth: "Unmetered",
      protection: "Enterprise DDoS Protection"
    },
    features: [
      "Root Access",
      "Full SSH Access",
      "Choose Your OS",
      "Dedicated Resources",
      "99.99% Uptime SLA",
      "24/7 Premium Support",
      "3x Daily Backups",
      "Advanced Firewall",
      "Resource Monitoring",
      "Performance Optimization",
      "Dedicated Support Team",
      "Custom Setup Assistance",
      "Hardware Redundancy",
      "Priority Resource Allocation",
      "Enterprise Support Channel"
    ]
  }
];

const VpsPlans = () => {
  // Enhanced JSON-LD structured data for better SEO
  const vpsStructuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "VPS Hosting Solutions",
    "description": "Enterprise-grade VPS hosting in India with dedicated resources, complete root access, and premium hardware",
    "provider": {
      "@type": "Organization",
      "name": "CreeperCastle.cloud",
      "url": "https://creepercastle.cloud",
      "logo": "https://creepercastle.cloud/lovable-uploads/a5ede7d4-e1bf-4925-84dd-4b075648dc11.png",
      "sameAs": [
        "https://discord.gg/RuQ9neH56S"
      ]
    },
    "serviceType": "VPS Hosting",
    "category": "Web Hosting",
    "offers": [...vpsPlans, ...highPerfVpsPlans].map((plan, index) => ({
      "@type": "Offer",
      "name": plan.name,
      "description": `${plan.specs.ram} RAM, ${plan.specs.cpu}, ${plan.specs.storage} storage`,
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
        "name": "VPS Hosting",
        "item": "https://creepercastle.cloud/plans/vps"
      }
    ]
  };

  const renderPlanCard = (plan: any, index: number) => (
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
          <Server className="h-12 w-12 text-creeper" />
        </div>
        <CardTitle className="text-2xl">{plan.name}</CardTitle>
        <div className="flex items-baseline justify-center mt-2">
          <span className="text-4xl font-bold">₹{plan.price}</span>
          <span className="text-gray-400 ml-1">/month</span>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="space-y-2">
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
              <span className="text-gray-400">Bandwidth:</span>
              <span className="text-creeper">{plan.specs.bandwidth}</span>
            </div>
          </div>
          
          <div className="border-t border-gray-700 pt-4">
            <ul className="space-y-2">
              {plan.features.map((feature: string, i: number) => (
                <li key={i} className="flex items-start">
                  <Check className="h-5 w-5 text-creeper mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-gray-300">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <Button className="w-full minecraft-btn mt-4" asChild>
            <a 
              href="https://billing.creepercastle.in/index.php?rp=/store/vps-hosting" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              Order Now
            </a>
          </Button>
        </div>
      </CardContent>
    </Card>
  );

  return (
    <>
      <Helmet>
        <title>VPS Hosting Plans India | Enterprise-Grade Virtual Servers | CreeperCastle.cloud</title>
        <meta 
          name="description" 
          content="Enterprise-grade VPS hosting in India starting at ₹3,300/month. Dedicated resources, root access, NVMe storage, DDoS protection. Perfect for applications and game servers."
        />
        <meta
          name="keywords"
          content="vps hosting india, virtual private server india, linux vps hosting, windows vps hosting, dedicated vps india, enterprise vps hosting, managed vps india, cheap vps hosting, high performance vps, mumbai vps hosting, delhi vps hosting"
        />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://creepercastle.cloud/plans/vps" />
        <meta property="og:title" content="VPS Hosting Plans India | Enterprise-Grade Virtual Servers" />
        <meta property="og:description" content="Enterprise-grade VPS hosting with dedicated resources, root access, and premium hardware. Starting at ₹3,300/month with 24/7 support." />
        <meta property="og:image" content="https://creepercastle.cloud/lovable-uploads/a5ede7d4-e1bf-4925-84dd-4b075648dc11.png" />
        <meta property="og:image:alt" content="VPS Hosting Plans" />
        <meta property="og:site_name" content="CreeperCastle.cloud" />
        <meta property="og:locale" content="en_IN" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="VPS Hosting Plans - Enterprise-Grade Servers 🖥️" />
        <meta name="twitter:description" content="High-performance VPS hosting in India with dedicated resources and enterprise-grade hardware. Starting at ₹3,300/month." />
        <meta name="twitter:image" content="https://creepercastle.cloud/lovable-uploads/a5ede7d4-e1bf-4925-84dd-4b075648dc11.png" />
        
        {/* Additional SEO tags */}
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <meta name="author" content="CreeperCastle.cloud" />
        <meta name="publisher" content="CreeperCastle.cloud" />
        <meta name="theme-color" content="#50C878" />
        <meta name="geo.region" content="IN" />
        <meta name="geo.placename" content="Mumbai, Delhi" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://creepercastle.cloud/plans/vps" />
        
        {/* JSON-LD Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify(vpsStructuredData)}
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
                  VPS <span className="text-creeper">Hosting Plans</span>
                </motion.h1>
                <motion.p 
                  className="text-xl text-gray-300 max-w-3xl mx-auto"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  Enterprise-grade VPS solutions with dedicated resources, complete control, 
                  and enterprise-grade hardware in premium Indian data centers.
                </motion.p>
              </div>
              
              <Tabs defaultValue="standard" className="max-w-7xl mx-auto">
                <TabsList className="grid w-full grid-cols-2 mb-8">
                  <TabsTrigger value="standard">Standard VPS</TabsTrigger>
                  <TabsTrigger value="high-performance">High-Performance VPS</TabsTrigger>
                </TabsList>
                
                <TabsContent value="standard">
                  <motion.div 
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                  >
                    {vpsPlans.map(renderPlanCard)}
                  </motion.div>
                </TabsContent>
                
                <TabsContent value="high-performance">
                  <motion.div 
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                  >
                    {highPerfVpsPlans.map(renderPlanCard)}
                  </motion.div>
                </TabsContent>
              </Tabs>
              
              {/* Additional Information */}
              <div className="mt-20">
                <div className="max-w-4xl mx-auto">
                  <h2 className="text-3xl font-bold mb-8 text-center">
                    Why Choose Our <span className="text-creeper">VPS Hosting</span>?
                  </h2>
                  
                  <div className="bg-navy-light p-8 rounded-lg border border-gray-800">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div>
                        <h3 className="text-xl font-semibold mb-4">Enterprise Features</h3>
                        <ul className="space-y-2">
                          <li className="flex items-start">
                            <Check className="h-5 w-5 text-creeper mr-2 mt-0.5 flex-shrink-0" />
                            <span className="text-sm text-gray-300">Full root access and SSH control</span>
                          </li>
                          <li className="flex items-start">
                            <Check className="h-5 w-5 text-creeper mr-2 mt-0.5 flex-shrink-0" />
                            <span className="text-sm text-gray-300">Choice of Linux distributions</span>
                          </li>
                          <li className="flex items-start">
                            <Check className="h-5 w-5 text-creeper mr-2 mt-0.5 flex-shrink-0" />
                            <span className="text-sm text-gray-300">Dedicated CPU and RAM resources</span>
                          </li>
                          <li className="flex items-start">
                            <Check className="h-5 w-5 text-creeper mr-2 mt-0.5 flex-shrink-0" />
                            <span className="text-sm text-gray-300">High-speed NVMe SSD storage</span>
                          </li>
                        </ul>
                      </div>
                      
                      <div>
                        <h3 className="text-xl font-semibold mb-4">Reliability & Support</h3>
                        <ul className="space-y-2">
                          <li className="flex items-start">
                            <Check className="h-5 w-5 text-creeper mr-2 mt-0.5 flex-shrink-0" />
                            <span className="text-sm text-gray-300">99.9% uptime guarantee</span>
                          </li>
                          <li className="flex items-start">
                            <Check className="h-5 w-5 text-creeper mr-2 mt-0.5 flex-shrink-0" />
                            <span className="text-sm text-gray-300">24/7 expert technical support</span>
                          </li>
                          <li className="flex items-start">
                            <Check className="h-5 w-5 text-creeper mr-2 mt-0.5 flex-shrink-0" />
                            <span className="text-sm text-gray-300">Advanced DDoS protection</span>
                          </li>
                          <li className="flex items-start">
                            <Check className="h-5 w-5 text-creeper mr-2 mt-0.5 flex-shrink-0" />
                            <span className="text-sm text-gray-300">Automated backup solutions</span>
                          </li>
                        </ul>
                      </div>
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

export default VpsPlans;
