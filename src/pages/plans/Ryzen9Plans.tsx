import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Check, Zap, Shield, Database, HardDrive, Cpu, Clock, TrendingUp, Award, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

const Ryzen9Plans = () => {
  const plans = [
    {
      name: 'Amberheart',
      price: '₹299',
      period: '/month',
      description: 'Perfect for small communities',
      ram: '3 GB',
      cpu: '100%',
      storage: '10 GB SSD',
      ports: '2 Additional Ports',
      databases: '2 Databases',
      backups: '2 Backups',
      location: 'Mumbai, India',
      ddos: 'Basic Protection',
      link: 'https://billing.creepercastle.in/products/ryzen-9-minecraft-hosting/amberheart',
      popular: false,
      color: 'from-amber-500/20 to-orange-600/20',
      borderColor: 'border-amber-500/40',
    },
    {
      name: 'Obsidian Crest',
      price: '₹532',
      period: '/month',
      description: 'Ideal for growing servers',
      ram: '6 GB',
      cpu: '200%',
      storage: '20 GB SSD',
      ports: '4 Additional Ports',
      databases: '4 Databases',
      backups: '4 Backups',
      location: 'Mumbai, India',
      ddos: 'Advanced OVH Shield',
      link: 'https://billing.creepercastle.in/products/ryzen-9-minecraft-hosting/obsidian-crest',
      popular: true,
      color: 'from-amber-400/30 to-orange-500/30',
      borderColor: 'border-amber-400/60',
    },
    {
      name: 'Dragon Forge',
      price: '₹987',
      period: '/month',
      description: 'Built for large communities',
      ram: '12 GB',
      cpu: '300%',
      storage: '40 GB SSD',
      ports: '8 Additional Ports',
      databases: '8 Databases',
      backups: '8 Backups',
      location: 'Mumbai, India',
      ddos: 'Advanced OVH Shield',
      link: 'https://billing.creepercastle.in/products/ryzen-9-minecraft-hosting/dragonforge',
      popular: false,
      color: 'from-amber-600/20 to-orange-700/20',
      borderColor: 'border-amber-600/40',
    },
    {
      name: 'Witherfall',
      price: '₹1762',
      period: '/month',
      description: 'Ultimate performance powerhouse',
      ram: '24 GB',
      cpu: '400%',
      storage: '80 GB SSD',
      ports: '16 Additional Ports',
      databases: '16 Databases',
      backups: '16 Backups',
      location: 'Mumbai, India',
      ddos: 'Advanced OVH Shield',
      link: 'https://billing.creepercastle.in/products/ryzen-9-minecraft-hosting/witherfall',
      popular: false,
      color: 'from-amber-700/20 to-orange-800/20',
      borderColor: 'border-amber-700/40',
    },
  ];

  const features = [
    {
      icon: <Cpu className="w-6 h-6" />,
      title: 'AMD Ryzen 9 5900X',
      description: '12-core, 24-thread monster processor delivering unmatched single-thread performance for Minecraft',
      gradient: 'from-amber-500 to-orange-600',
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: 'Extreme Clock Speeds',
      description: 'Up to 4.8 GHz boost clock ensuring lightning-fast tick processing and zero lag',
      gradient: 'from-yellow-500 to-amber-600',
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: 'Superior IPC Performance',
      description: 'Zen 3 architecture delivers 19% better instructions-per-clock than previous generation',
      gradient: 'from-orange-500 to-red-600',
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: 'Advanced DDoS Protection',
      description: 'Enterprise-grade OVH protection shields your server from malicious attacks 24/7',
      gradient: 'from-amber-600 to-orange-700',
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: 'Low Latency Gaming',
      description: 'Optimized networking ensures consistent 20 TPS performance even with hundreds of players',
      gradient: 'from-yellow-600 to-amber-700',
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: 'Premium Hardware',
      description: 'NVMe SSDs, DDR4 RAM, and enterprise-grade components for maximum reliability',
      gradient: 'from-orange-600 to-red-700',
    },
  ];

  return (
    <>
      <Helmet>
        <title>AMD Ryzen 9 5900X Minecraft Hosting India 2025 | Premium Performance ⚡ CreeperCastle</title>
        <meta name="description" content="Experience ultimate Minecraft server performance with AMD Ryzen 9 5900X hosting in India. 4.8GHz boost, NVMe SSD, Advanced DDoS protection. Starting ₹299/mo. Mumbai datacenter with ultra-low latency." />
        <meta name="keywords" content="Ryzen 9 minecraft hosting, AMD Ryzen 9 5900X server hosting India, premium minecraft hosting, high performance minecraft server, Mumbai minecraft hosting, best minecraft hosting India 2025, low latency minecraft, NVMe minecraft hosting, Ryzen gaming server" />
        
        {/* Open Graph */}
        <meta property="og:title" content="AMD Ryzen 9 5900X Minecraft Hosting India | Premium Performance - CreeperCastle" />
        <meta property="og:description" content="Ultimate Minecraft server performance with AMD Ryzen 9 5900X. 4.8GHz boost, NVMe SSD, Advanced DDoS protection. Starting ₹299/mo in Mumbai." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://creepercastle.cloud/plans/ryzen9" />
        <meta property="og:image" content="https://creepercastle.cloud/lovable-uploads/394abece-307b-48f2-8c38-4d2123607648.png" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="AMD Ryzen 9 5900X Minecraft Hosting India | CreeperCastle" />
        <meta name="twitter:description" content="Ultimate Minecraft performance with Ryzen 9 5900X. 4.8GHz, NVMe, DDoS protection. ₹299/mo" />
        <meta name="twitter:image" content="https://creepercastle.cloud/lovable-uploads/394abece-307b-48f2-8c38-4d2123607648.png" />
        
        <link rel="canonical" href="https://creepercastle.cloud/plans/ryzen9" />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            "name": "AMD Ryzen 9 5900X Minecraft Server Hosting",
            "description": "Premium Minecraft server hosting powered by AMD Ryzen 9 5900X processors in Mumbai, India",
            "brand": {
              "@type": "Brand",
              "name": "CreeperCastle"
            },
            "offers": {
              "@type": "AggregateOffer",
              "lowPrice": "299",
              "highPrice": "1762",
              "priceCurrency": "INR",
              "availability": "https://schema.org/InStock"
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.9",
              "reviewCount": "500"
            }
          })}
        </script>
      </Helmet>

      <div className="flex flex-col min-h-screen bg-navy text-white relative">
        {/* Enhanced background with underwater Minecraft scene */}
        <div className="fixed inset-0 z-0 pointer-events-none">
          {/* Background image overlay with underwater Minecraft scene */}
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40" 
            style={{ backgroundImage: 'url("/lovable-uploads/aecdd243-6cbd-4e56-82a8-b494c26108cc.png")' }}
          ></div>
          
          {/* Gradient overlay for better text visibility */}
          <div className="absolute inset-0 bg-gradient-to-b from-navy-dark/90 via-navy/80 to-navy-light/70"></div>
          
          {/* Animated particles */}
          {Array.from({ length: 10 }).map((_, i) => (
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

        <main className="flex-grow pt-16 relative z-10">
          {/* Hero Section */}
          <section className="pt-32 pb-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-amber-500/5 via-orange-600/10 to-amber-500/5 animate-pulse-slow" />
          <div className="absolute inset-0 bg-grid opacity-20" />
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="container mx-auto px-4 relative z-10"
          >
            <div className="text-center max-w-5xl mx-auto">
              <motion.div
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5 }}
                className="inline-block mb-6"
              >
                <Badge className="bg-gradient-to-r from-amber-500 to-orange-600 text-white px-6 py-2 text-lg border-none shadow-lg shadow-amber-500/50">
                  <Sparkles className="w-4 h-4 mr-2 inline" />
                  Premium Performance Unleashed
                </Badge>
              </motion.div>
              
              <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-amber-400 via-orange-500 to-amber-600 bg-clip-text text-transparent leading-tight">
                AMD Ryzen 9 5900X
                <br />
                <span className="text-white">Minecraft Hosting</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed max-w-3xl mx-auto">
                Dominate with the most powerful gaming processor. Experience unparalleled performance, 
                <span className="text-amber-400 font-semibold"> zero lag</span>, and 
                <span className="text-orange-400 font-semibold"> extreme clock speeds</span> that keep your server at peak performance 24/7.
              </p>

              <div className="flex flex-wrap justify-center gap-4 mb-12">
                <div className="bg-gradient-to-r from-amber-500/20 to-orange-600/20 backdrop-blur-sm border border-amber-500/40 rounded-lg px-6 py-4">
                  <div className="text-3xl font-bold text-amber-400">4.8 GHz</div>
                  <div className="text-sm text-gray-300">Boost Clock</div>
                </div>
                <div className="bg-gradient-to-r from-amber-500/20 to-orange-600/20 backdrop-blur-sm border border-amber-500/40 rounded-lg px-6 py-4">
                  <div className="text-3xl font-bold text-orange-400">12 Cores</div>
                  <div className="text-sm text-gray-300">24 Threads</div>
                </div>
                <div className="bg-gradient-to-r from-amber-500/20 to-orange-600/20 backdrop-blur-sm border border-amber-500/40 rounded-lg px-6 py-4">
                  <div className="text-3xl font-bold text-amber-300">Zen 3</div>
                  <div className="text-sm text-gray-300">Architecture</div>
                </div>
              </div>

              <Button 
                size="lg" 
                className="bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white px-8 py-6 text-lg font-bold shadow-2xl shadow-amber-500/50 hover:shadow-amber-600/60 transition-all duration-300 hover:scale-105"
                asChild
              >
                <a href="#plans">
                  <Zap className="w-5 h-5 mr-2" />
                  View Premium Plans
                </a>
              </Button>
            </div>
          </motion.div>
        </section>

        {/* Features Grid */}
        <section className="py-20 relative">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
                Why <span className="bg-gradient-to-r from-amber-400 to-orange-600 bg-clip-text text-transparent">Ryzen 9 5900X</span> Dominates
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                The ultimate gaming processor engineered for extreme Minecraft server performance
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="bg-gradient-to-br from-navy-dark/80 to-black/80 border-amber-500/30 hover:border-amber-500/60 transition-all duration-300 hover:shadow-2xl hover:shadow-amber-500/20 h-full backdrop-blur-sm">
                    <CardHeader>
                      <div className={`w-14 h-14 rounded-lg bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-4 shadow-lg`}>
                        {feature.icon}
                      </div>
                      <CardTitle className="text-xl text-white">{feature.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-400 leading-relaxed">{feature.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Plans */}
        <section id="plans" className="py-20 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-amber-500/5 to-transparent" />
          
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
                Choose Your <span className="bg-gradient-to-r from-amber-400 to-orange-600 bg-clip-text text-transparent">Power Level</span>
              </h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                Premium Ryzen 9 5900X plans designed to unleash maximum performance
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {plans.map((plan, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="h-full"
                >
                  <Card className={`relative overflow-hidden bg-gradient-to-br ${plan.color} backdrop-blur-sm border-2 ${plan.borderColor} hover:border-amber-400 transition-all duration-300 hover:shadow-2xl hover:shadow-amber-500/30 h-full flex flex-col ${plan.popular ? 'scale-105 lg:scale-110' : ''}`}>
                    {plan.popular && (
                      <div className="absolute top-0 right-0 bg-gradient-to-r from-amber-500 to-orange-600 text-white px-4 py-1 text-sm font-bold rounded-bl-lg shadow-lg">
                        MOST POPULAR
                      </div>
                    )}
                    
                    <CardHeader className="text-center pb-4">
                      <CardTitle className="text-3xl font-bold bg-gradient-to-r from-amber-400 to-orange-600 bg-clip-text text-transparent mb-2">
                        {plan.name}
                      </CardTitle>
                      <CardDescription className="text-gray-300 text-sm mb-4">
                        {plan.description}
                      </CardDescription>
                      <div className="text-5xl font-bold text-white mb-1">
                        {plan.price}
                      </div>
                      <div className="text-gray-400">{plan.period}</div>
                    </CardHeader>

                    <CardContent className="flex-grow space-y-3 text-sm">
                      <div className="flex items-start gap-2">
                        <Cpu className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-300"><strong className="text-white">Ryzen 9 5900X</strong> - {plan.cpu} CPU</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-300"><strong className="text-white">{plan.ram}</strong> DDR4 RAM</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <HardDrive className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-300"><strong className="text-white">{plan.storage}</strong> NVMe</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-300">{plan.ports}</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <Database className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-300">{plan.databases}</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-300">{plan.backups}</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-300">{plan.location}</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <Shield className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-300">{plan.ddos}</span>
                      </div>
                    </CardContent>

                    <CardFooter className="pt-4">
                      <Button 
                        className="w-full bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white font-bold py-6 shadow-lg shadow-amber-500/30 hover:shadow-amber-600/40 transition-all duration-300 hover:scale-105"
                        asChild
                      >
                        <a href={plan.link} target="_blank" rel="noopener noreferrer">
                          Get Started Now
                        </a>
                      </Button>
                    </CardFooter>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-amber-500/10 via-orange-600/20 to-amber-500/10" />
          <div className="container mx-auto px-4 text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl mx-auto"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                Ready to Experience <span className="bg-gradient-to-r from-amber-400 to-orange-600 bg-clip-text text-transparent">Legendary Performance</span>?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Join hundreds of satisfied server owners who chose premium Ryzen 9 power for their communities
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white px-8 py-6 text-lg font-bold shadow-2xl shadow-amber-500/50 hover:shadow-amber-600/60 transition-all duration-300 hover:scale-105"
                  asChild
                >
                  <a href="#plans">
                    <Zap className="w-5 h-5 mr-2" />
                    Get Started Today
                  </a>
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  className="border-2 border-amber-500 text-amber-400 hover:bg-amber-500/10 px-8 py-6 text-lg font-bold backdrop-blur-sm"
                  asChild
                >
                  <a href="/discord">
                    Join Our Discord
                  </a>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        </main>

        <Footer />
      </div>
    </>
  );
};

export default Ryzen9Plans;
