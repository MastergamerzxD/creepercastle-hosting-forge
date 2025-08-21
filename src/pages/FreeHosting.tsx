import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, X, Zap, Shield, Clock, Users, Star, Gift, ExternalLink } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StructuredData from "@/components/StructuredData";

const FreeHosting = () => {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  const freeFeatures = [
    { icon: X, text: "Not 24/7 uptime", available: false },
    { icon: X, text: "Limited performance", available: false },
    { icon: Check, text: "Always free of cost", available: true },
    { icon: X, text: "No dedicated support", available: false },
    { icon: X, text: "No premium game panel", available: false },
    { icon: Check, text: "2GB RAM included", available: true },
    { icon: Check, text: "50% CPU allocation", available: true },
  ];

  const paidFeatures = [
    { icon: Check, text: "24/7 uptime guarantee", available: true },
    { icon: Check, text: "High performance hardware", available: true },
    { icon: Check, text: "Value for money pricing", available: true },
    { icon: Check, text: "24/7 dedicated support", available: true },
    { icon: Check, text: "Premium game panel", available: true },
    { icon: Check, text: "DDoS protection included", available: true },
    { icon: Check, text: "Full resource allocation", available: true },
  ];

  return (
    <>
      <Helmet>
        <title>Free Minecraft Server Hosting - 2GB RAM | CreeperCastle.cloud</title>
        <meta name="description" content="Get your FREE Minecraft server with 2GB RAM and 50% CPU. Start hosting your Minecraft world today at no cost with CreeperCastle's free hosting service." />
        <meta name="keywords" content="free minecraft server hosting, free minecraft hosting, 2gb ram minecraft server, free game hosting, minecraft server free" />
        <link rel="canonical" href="https://creepercastle.cloud/free-hosting" />
        <meta property="og:title" content="Free Minecraft Server Hosting - 2GB RAM | CreeperCastle.cloud" />
        <meta property="og:description" content="Get your FREE Minecraft server with 2GB RAM and 50% CPU. Start hosting your Minecraft world today at no cost." />
        <meta property="og:url" content="https://creepercastle.cloud/free-hosting" />
        <meta property="og:type" content="website" />
        <meta name="twitter:title" content="Free Minecraft Server Hosting - 2GB RAM | CreeperCastle.cloud" />
        <meta name="twitter:description" content="Get your FREE Minecraft server with 2GB RAM and 50% CPU. Start hosting your Minecraft world today at no cost." />
      </Helmet>

      <StructuredData 
        type="website"
        data={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          "name": "Free Minecraft Server Hosting",
          "description": "Get your FREE Minecraft server with 2GB RAM and 50% CPU allocation",
          "url": "https://creepercastle.cloud/free-hosting",
          "mainEntity": {
            "@type": "Service",
            "name": "Free Minecraft Server Hosting",
            "description": "Free Minecraft server hosting with 2GB RAM and 50% CPU",
            "provider": {
              "@type": "Organization",
              "name": "CreeperCastle.cloud"
            }
          }
        }}
      />
      
      <div className="min-h-screen bg-gradient-to-br from-navy-dark via-navy-dark to-navy-light">
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: "url('/creeper-pattern.png')",
            backgroundSize: "100px 100px",
            backgroundRepeat: "repeat",
            animation: "float 20s ease-in-out infinite"
          }}
        />
        
        <Navbar />
        
        <main className="relative pt-24 pb-16">
          <div className="container mx-auto px-4">
            {/* Hero Section */}
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 bg-creeper/20 text-creeper px-4 py-2 rounded-full text-sm font-medium mb-6 border border-creeper/30">
                <Gift className="h-4 w-4" />
                FREE HOSTING IS NOW LIVE!
              </div>
              
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-creeper to-white bg-clip-text text-transparent">
                Free Minecraft
                <br />
                Server Hosting
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
                Get your <span className="text-creeper font-semibold">FREE</span> Minecraft server with 
                <span className="text-creeper font-semibold"> 2GB RAM</span> and 
                <span className="text-creeper font-semibold"> 50% CPU</span> allocation
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
                <Button 
                  size="lg" 
                  className="minecraft-btn text-xl px-12 py-8 h-auto group relative overflow-hidden" 
                  asChild
                >
                  <a 
                    href="https://free.creepercastle.cloud/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-3"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-creeper/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <Zap className="h-6 w-6" />
                    Get Your Free Server Now
                    <ExternalLink className="h-5 w-5" />
                  </a>
                </Button>
                
                <div className="flex items-center gap-2 text-gray-400">
                  <Clock className="h-5 w-5" />
                  <span>Setup in under 2 minutes</span>
                </div>
              </div>
              
              {/* Stats */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                <div className="text-center">
                  <div className="text-3xl font-bold text-creeper mb-2">2GB</div>
                  <div className="text-gray-300">RAM Memory</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-creeper mb-2">50%</div>
                  <div className="text-gray-300">CPU Allocation</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-creeper mb-2">∞</div>
                  <div className="text-gray-300">Always Free</div>
                </div>
              </div>
            </div>

            {/* Comparison Section */}
            <div className="mb-16">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
                  Free vs <span className="text-creeper">Paid</span> Hosting
                </h2>
                <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                  Compare our free hosting with premium paid plans to choose what's right for you
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                {/* Free Hosting Card */}
                <Card 
                  className="relative overflow-hidden border-2 border-green-500/30 bg-gradient-to-br from-green-900/20 to-green-800/10 hover:from-green-900/30 hover:to-green-800/20 transition-all duration-300"
                  onMouseEnter={() => setHoveredCard('free')}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  <div className="absolute top-0 right-0 bg-green-500 text-navy-dark font-bold text-xs px-3 py-1 rounded-bl-lg">
                    FREE FOREVER
                  </div>
                  
                  <CardHeader className="text-center pb-6">
                    <div className="mx-auto mb-4 p-3 bg-green-500/20 rounded-full w-fit">
                      <Gift className="h-8 w-8 text-green-400" />
                    </div>
                    <CardTitle className="text-2xl text-white mb-2">Free Servers</CardTitle>
                    <CardDescription className="text-green-200">
                      Perfect for beginners and testing
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent>
                    <div className="space-y-4">
                      {freeFeatures.map((feature, index) => (
                        <div key={index} className="flex items-center gap-3">
                          <div className={`p-1 rounded-full ${feature.available ? 'bg-green-500/20' : 'bg-red-500/20'}`}>
                            <feature.icon className={`h-4 w-4 ${feature.available ? 'text-green-400' : 'text-red-400'}`} />
                          </div>
                          <span className={`text-sm ${feature.available ? 'text-gray-200' : 'text-gray-400'}`}>
                            {feature.text}
                          </span>
                        </div>
                      ))}
                    </div>
                    
                    <div className="mt-6 pt-6 border-t border-green-500/20">
                      <Button 
                        className="w-full bg-green-600 hover:bg-green-700 text-white border-green-500" 
                        asChild
                      >
                        <a href="https://free.creepercastle.cloud/" target="_blank" rel="noopener noreferrer">
                          Get Free Server
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                {/* Paid Hosting Card */}
                <Card 
                  className="relative overflow-hidden border-2 border-creeper/30 bg-gradient-to-br from-creeper/20 to-creeper/10 hover:from-creeper/30 hover:to-creeper/20 transition-all duration-300"
                  onMouseEnter={() => setHoveredCard('paid')}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  <div className="absolute top-0 right-0 bg-creeper text-navy-dark font-bold text-xs px-3 py-1 rounded-bl-lg">
                    PREMIUM
                  </div>
                  
                  <CardHeader className="text-center pb-6">
                    <div className="mx-auto mb-4 p-3 bg-creeper/20 rounded-full w-fit">
                      <Star className="h-8 w-8 text-creeper" />
                    </div>
                    <CardTitle className="text-2xl text-white mb-2">Paid Servers</CardTitle>
                    <CardDescription className="text-creeper">
                      Professional hosting solutions
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent>
                    <div className="space-y-4">
                      {paidFeatures.map((feature, index) => (
                        <div key={index} className="flex items-center gap-3">
                          <div className="p-1 rounded-full bg-creeper/20">
                            <feature.icon className="h-4 w-4 text-creeper" />
                          </div>
                          <span className="text-sm text-gray-200">
                            {feature.text}
                          </span>
                        </div>
                      ))}
                    </div>
                    
                    <div className="mt-6 pt-6 border-t border-creeper/20">
                      <Button 
                        className="w-full minecraft-btn" 
                        asChild
                      >
                        <a href="/plans/minecraft">
                          View Paid Plans
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Features Section */}
            <div className="text-center mb-16">
              <h3 className="text-2xl md:text-3xl font-bold mb-8 text-white">
                What You Get with <span className="text-creeper">Free Hosting</span>
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
                <div className="text-center p-6 rounded-lg bg-navy-light/50 border border-creeper/20">
                  <Zap className="h-8 w-8 text-creeper mx-auto mb-4" />
                  <h4 className="font-semibold text-white mb-2">2GB RAM</h4>
                  <p className="text-gray-300 text-sm">Enough memory for small to medium servers</p>
                </div>
                
                <div className="text-center p-6 rounded-lg bg-navy-light/50 border border-creeper/20">
                  <Users className="h-8 w-8 text-creeper mx-auto mb-4" />
                  <h4 className="font-semibold text-white mb-2">Multiple Players</h4>
                  <p className="text-gray-300 text-sm">Support for multiple concurrent players</p>
                </div>
                
                <div className="text-center p-6 rounded-lg bg-navy-light/50 border border-creeper/20">
                  <Shield className="h-8 w-8 text-creeper mx-auto mb-4" />
                  <h4 className="font-semibold text-white mb-2">Basic Protection</h4>
                  <p className="text-gray-300 text-sm">Essential server security measures</p>
                </div>
                
                <div className="text-center p-6 rounded-lg bg-navy-light/50 border border-creeper/20">
                  <Clock className="h-8 w-8 text-creeper mx-auto mb-4" />
                  <h4 className="font-semibold text-white mb-2">Quick Setup</h4>
                  <p className="text-gray-300 text-sm">Get started in under 2 minutes</p>
                </div>
              </div>
            </div>

            {/* CTA Section */}
            <div className="text-center bg-gradient-to-r from-creeper/10 to-transparent p-8 rounded-lg border border-creeper/20">
              <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white">
                Ready to Start Your <span className="text-creeper">Free</span> Minecraft Adventure?
              </h3>
              <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                Join thousands of players who have already started their Minecraft journey with our free hosting service.
              </p>
              
              <Button 
                size="lg" 
                className="minecraft-btn text-xl px-12 py-8 h-auto group" 
                asChild
              >
                <a 
                  href="https://free.creepercastle.cloud/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-3"
                >
                  <Gift className="h-6 w-6" />
                  Create Your Free Server
                  <ExternalLink className="h-5 w-5" />
                </a>
              </Button>
              
              <p className="text-xs text-gray-500 mt-4">
                No credit card required • Instant setup • Always free
              </p>
            </div>
          </div>
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default FreeHosting;