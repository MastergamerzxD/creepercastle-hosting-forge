
import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Server, Zap, Gift, Clock, Users, Shield, Check, X, Crown, Headphones } from "lucide-react";
import { motion } from "framer-motion";

const FreeHosting = () => {
  return (
    <>
      <Helmet>
        <title>Free MineCraft Hosting by CreeperCastle is now Live !</title>
        <meta name="description" content="Get your FREE Minecraft server with 2GB RAM and 200% CPU power! Start your gaming journey today with CreeperCastle's free hosting plan." />
        <meta name="keywords" content="free minecraft hosting, free minecraft server, free hosting india, minecraft server free, 2gb ram minecraft server, free minecraft hosting india" />
        
        <meta property="og:title" content="Free MineCraft Hosting by CreeperCastle is now Live !" />
        <meta property="og:description" content="Get your FREE Minecraft server with 2GB RAM and 200% CPU power! Start your gaming journey today." />
        <meta property="og:image" content="https://creepercastle.cloud/lovable-uploads/a5ede7d4-e1bf-4925-84dd-4b075648dc11.png" />
        <meta property="og:url" content="https://creepercastle.cloud/free-hosting" />
        
        <link rel="canonical" href="https://creepercastle.cloud/free-hosting" />
      </Helmet>

      <div className="flex flex-col min-h-screen bg-navy text-white">
        {/* Enhanced background */}
        <div className="fixed inset-0 z-0 pointer-events-none">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30" 
            style={{ backgroundImage: 'url("/lovable-uploads/aecdd243-6cbd-4e56-82a8-b494c26108cc.png")' }}
          ></div>
          <div className="absolute inset-0 bg-gradient-to-br from-navy-dark/95 via-navy/90 to-navy-light/80"></div>
        </div>

        <Navbar />
        
        <main className="flex-grow pt-16 relative z-10">
          {/* Hero Section */}
          <section className="py-20 text-center">
            <div className="container mx-auto px-4">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="max-w-4xl mx-auto"
              >
                <div className="flex items-center justify-center mb-6">
                  <Gift className="h-16 w-16 text-creeper mr-4" />
                  <h1 className="text-5xl md:text-7xl font-bold">
                    Free <span className="text-creeper">Minecraft</span> Hosting
                  </h1>
                </div>
                
                <h2 className="text-2xl md:text-3xl text-gray-300 mb-8">
                  Get Your FREE Server with 2GB RAM & 200% CPU Power
                </h2>
                
                <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
                  Start your Minecraft journey today with our completely free hosting plan. 
                  No credit card required, no hidden fees - just pure gaming fun!
                </p>

                {/* CTA Button - Prominently displayed */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="mb-16"
                >
                  <Button 
                    size="lg" 
                    className="minecraft-btn text-2xl px-12 py-6 h-auto font-bold shadow-2xl hover:shadow-creeper/50 transition-all duration-300 transform hover:scale-105"
                    asChild
                  >
                    <a 
                      href="https://free.creepercastle.cloud/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-4"
                    >
                      <Server className="h-8 w-8" />
                      Get Your FREE Server Now!
                    </a>
                  </Button>
                </motion.div>
              </motion.div>
            </div>
          </section>

          {/* Features Section */}
          <section className="py-16 bg-navy-light">
            <div className="container mx-auto px-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <h2 className="text-4xl font-bold text-center mb-12">
                  What You Get <span className="text-creeper">FREE</span>
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {/* RAM Card */}
                  <Card className="bg-navy border-gray-800 hover:border-creeper/50 transition-all duration-300 hover:transform hover:-translate-y-2">
                    <CardHeader className="text-center">
                      <div className="w-16 h-16 bg-creeper/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                        <Server className="h-8 w-8 text-creeper" />
                      </div>
                      <CardTitle className="text-2xl">2GB RAM</CardTitle>
                      <CardDescription>Plenty of memory for your Minecraft adventures</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-400 text-center">
                        Enough RAM to run vanilla Minecraft smoothly with friends
                      </p>
                    </CardContent>
                  </Card>

                  {/* CPU Card */}
                  <Card className="bg-navy border-gray-800 hover:border-creeper/50 transition-all duration-300 hover:transform hover:-translate-y-2">
                    <CardHeader className="text-center">
                      <div className="w-16 h-16 bg-creeper/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                        <Zap className="h-8 w-8 text-creeper" />
                      </div>
                      <CardTitle className="text-2xl">200% CPU</CardTitle>
                      <CardDescription>Powerful processing for lag-free gameplay</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-400 text-center">
                        High-performance CPU allocation for smooth server performance
                      </p>
                    </CardContent>
                  </Card>

                  {/* Instant Setup Card */}
                  <Card className="bg-navy border-gray-800 hover:border-creeper/50 transition-all duration-300 hover:transform hover:-translate-y-2">
                    <CardHeader className="text-center">
                      <div className="w-16 h-16 bg-creeper/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                        <Clock className="h-8 w-8 text-creeper" />
                      </div>
                      <CardTitle className="text-2xl">Instant Setup</CardTitle>
                      <CardDescription>Your server ready in seconds</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-400 text-center">
                        No waiting time - start playing immediately after signup
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </motion.div>
            </div>
          </section>

          {/* Comparison Section */}
          <section className="py-16">
            <div className="container mx-auto px-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="max-w-6xl mx-auto"
              >
                <h2 className="text-4xl font-bold text-center mb-12">
                  Free vs <span className="text-creeper">Premium</span> Hosting
                </h2>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {/* Free Servers Card */}
                  <Card className="bg-navy-light border-gray-700 relative">
                    <CardHeader className="text-center pb-6">
                      <div className="w-16 h-16 bg-blue-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                        <Gift className="h-8 w-8 text-blue-400" />
                      </div>
                      <CardTitle className="text-2xl text-blue-400">Free Servers</CardTitle>
                      <CardDescription className="text-lg">Perfect for getting started</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex items-center gap-3">
                        <X className="h-5 w-5 text-red-400 flex-shrink-0" />
                        <span className="text-gray-300">Not 24/7 availability</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <X className="h-5 w-5 text-red-400 flex-shrink-0" />
                        <span className="text-gray-300">Limited performance compared to premium</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Check className="h-5 w-5 text-creeper flex-shrink-0" />
                        <span className="text-gray-300">Always free of cost</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <X className="h-5 w-5 text-red-400 flex-shrink-0" />
                        <span className="text-gray-300">No dedicated support</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <X className="h-5 w-5 text-red-400 flex-shrink-0" />
                        <span className="text-gray-300">No premium game panel</span>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Premium Servers Card */}
                  <Card className="bg-gradient-to-br from-creeper/10 to-creeper/5 border-creeper/50 relative">
                    <div className="absolute top-4 right-4">
                      <Crown className="h-6 w-6 text-creeper" />
                    </div>
                    <CardHeader className="text-center pb-6">
                      <div className="w-16 h-16 bg-creeper/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                        <Server className="h-8 w-8 text-creeper" />
                      </div>
                      <CardTitle className="text-2xl text-creeper">Premium Servers</CardTitle>
                      <CardDescription className="text-lg">Professional hosting experience</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex items-center gap-3">
                        <Check className="h-5 w-5 text-creeper flex-shrink-0" />
                        <span className="text-gray-300">24/7 uptime guarantee</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Check className="h-5 w-5 text-creeper flex-shrink-0" />
                        <span className="text-gray-300">High performance hardware</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Check className="h-5 w-5 text-creeper flex-shrink-0" />
                        <span className="text-gray-300">Value for money pricing</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Check className="h-5 w-5 text-creeper flex-shrink-0" />
                        <span className="text-gray-300">24/7 dedicated support</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Check className="h-5 w-5 text-creeper flex-shrink-0" />
                        <span className="text-gray-300">Advanced DDoS protection</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Check className="h-5 w-5 text-creeper flex-shrink-0" />
                        <span className="text-gray-300">Premium CreeperPanel game panel</span>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <div className="text-center mt-8">
                  <p className="text-gray-400 mb-6">
                    Ready to upgrade? Check out our premium plans for the ultimate Minecraft hosting experience.
                  </p>
                  <Button variant="outline" className="border-creeper text-creeper hover:bg-creeper/10" asChild>
                    <a href="/plans/minecraft">View Premium Plans</a>
                  </Button>
                </div>
              </motion.div>
            </div>
          </section>

          {/* Benefits Section */}
          <section className="py-16 bg-navy-light">
            <div className="container mx-auto px-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="max-w-4xl mx-auto"
              >
                <h2 className="text-4xl font-bold text-center mb-12">
                  Why Choose Our <span className="text-creeper">Free Hosting</span>?
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-creeper/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Users className="h-6 w-6 text-creeper" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Community Support</h3>
                      <p className="text-gray-400">
                        Join thousands of players in our Discord community for help and friends
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-creeper/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Shield className="h-6 w-6 text-creeper" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Basic DDoS Protection</h3>
                      <p className="text-gray-400">
                        Your free server comes with basic protection against attacks
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-creeper/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Server className="h-6 w-6 text-creeper" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Easy Management</h3>
                      <p className="text-gray-400">
                        User-friendly control panel to manage your server effortlessly
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-creeper/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Gift className="h-6 w-6 text-creeper" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">No Hidden Costs</h3>
                      <p className="text-gray-400">
                        Completely free with no credit card required or surprise charges
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </section>

          {/* Final CTA Section */}
          <section className="py-20 bg-navy text-center">
            <div className="container mx-auto px-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="max-w-2xl mx-auto"
              >
                <h2 className="text-4xl font-bold mb-6">
                  Ready to Start Your <span className="text-creeper">Minecraft Adventure</span>?
                </h2>
                <p className="text-xl text-gray-400 mb-8">
                  Join thousands of players who have already started their free servers!
                </p>
                
                <Button 
                  size="lg" 
                  className="minecraft-btn text-xl px-10 py-5 h-auto font-bold shadow-2xl hover:shadow-creeper/50 transition-all duration-300 transform hover:scale-105"
                  asChild
                >
                  <a 
                    href="https://free.creepercastle.cloud/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-3"
                  >
                    <Server className="h-6 w-6" />
                    Launch Your Free Server
                  </a>
                </Button>
              </motion.div>
            </div>
          </section>
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default FreeHosting;
