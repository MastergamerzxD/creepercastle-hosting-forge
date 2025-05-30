import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, MessageCircle, Headphones, Shield, Heart, Star } from "lucide-react";
import { motion } from "framer-motion";

const Discord = () => {
  // Enhanced JSON-LD structured data for better SEO
  const discordStructuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "CreeperCastle Discord Community",
    "description": "Join the largest Minecraft hosting community in India. Get 24/7 support, server management tips, and connect with fellow gamers.",
    "url": "https://creepercastle.cloud/discord",
    "sameAs": [
      "https://discord.gg/RuQ9neH56S"
    ],
    "parentOrganization": {
      "@type": "Organization",
      "name": "CreeperCastle.cloud",
      "url": "https://creepercastle.cloud"
    },
    "memberOf": {
      "@type": "Organization",
      "name": "Discord",
      "url": "https://discord.com"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "customer support",
      "availableLanguage": ["English", "Hindi"],
      "hoursAvailable": "24/7"
    }
  };

  const communityFeatures = [
    {
      icon: Headphones,
      title: "24/7 Support",
      description: "Get instant help from our expert support team and community moderators anytime, anywhere."
    },
    {
      icon: Users,
      title: "Active Community",
      description: "Connect with 3000+ Minecraft server owners, developers, and gaming enthusiasts from India and worldwide."
    },
    {
      icon: MessageCircle,
      title: "Server Management Tips",
      description: "Learn advanced server management, plugin configurations, and optimization techniques from experienced admins."
    },
    {
      icon: Shield,
      title: "Security Discussions",
      description: "Stay updated on the latest security practices, DDoS protection strategies, and server safety measures."
    },
    {
      icon: Heart,
      title: "Friendly Environment",
      description: "Join a welcoming community that supports both beginners and experienced server administrators."
    },
    {
      icon: Star,
      title: "Exclusive Updates",
      description: "Be the first to know about new features, special offers, and beta testing opportunities."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Join CreeperCastle Discord Community | 24/7 Minecraft Server Support & Community</title>
        <meta 
          name="description" 
          content="Join 3000+ Minecraft server owners in India's largest gaming community. Get 24/7 support, server management tips, exclusive updates, and connect with fellow gamers on Discord."
        />
        <meta
          name="keywords"
          content="creepercastle discord, minecraft community india, minecraft server support, gaming discord server, minecraft hosting community, server admin help, minecraft discord india, gaming support community"
        />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://creepercastle.cloud/discord" />
        <meta property="og:title" content="Join CreeperCastle Discord - India's Largest Minecraft Community 🎮" />
        <meta property="og:description" content="Connect with 3000+ Minecraft server owners, get 24/7 support, and learn from gaming experts in our active Discord community." />
        <meta property="og:image" content="https://creepercastle.cloud/lovable-uploads/1a97b5fc-a24e-43f7-9a8a-2b87db8ad1b6.png" />
        <meta property="og:image:alt" content="CreeperCastle Discord Community" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="CreeperCastle Discord Community 🎮" />
        <meta name="twitter:description" content="Join India's largest Minecraft hosting community on Discord. 24/7 support, server tips, and 3000+ active members!" />
        <meta name="twitter:image" content="https://creepercastle.cloud/lovable-uploads/1a97b5fc-a24e-43f7-9a8a-2b87db8ad1b6.png" />
        
        {/* Additional SEO tags */}
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <meta name="author" content="CreeperCastle.cloud" />
        <meta name="publisher" content="CreeperCastle.cloud" />
        <meta name="application-name" content="CreeperCastle Discord" />
        <meta name="theme-color" content="#5865F2" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://creepercastle.cloud/discord" />
        
        {/* JSON-LD Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify(discordStructuredData)}
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
                  Join Our <span className="text-discord">Discord</span> Community
                </motion.h1>
                <motion.p 
                  className="text-xl text-gray-300 max-w-3xl mx-auto mb-8"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  Connect with India's largest Minecraft hosting community. Get instant support, 
                  share experiences, and level up your server management skills with 3000+ active members.
                </motion.p>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  <Button className="bg-discord hover:bg-discord-dark text-white text-lg py-6 px-8 rounded-lg" asChild>
                    <a href="https://discord.gg/RuQ9neH56S" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.317 4.37a19.791 19.791 0 00-4.885-1.515.074.074 0 00-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 00-5.487 0 12.64 12.64 0 00-.617-1.25.077.077 0 00-.079-.037A19.736 19.736 0 003.677 4.37a.07.07 0 00-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 00.031.057 19.9 19.9 0 005.993 3.03.078.078 0 00.084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 00-.041-.106 13.107 13.107 0 01-1.872-.892.077.077 0 01-.008-.128 10.2 10.2 0 00.372-.292.074.074 0 01.077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 01.078.01c.12.098.246.198.373.292a.077.077 0 01-.006.127 12.299 12.299 0 01-1.873.892.077.077 0 00-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 00.084.028 19.839 19.839 0 006.002-3.03.077.077 0 00.032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 00-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
                      </svg>
                      Join Discord Server
                    </a>
                  </Button>
                </motion.div>
              </div>
              
              {/* Community Stats */}
              <motion.div 
                className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <Card className="bg-navy-light border-gray-800 text-center">
                  <CardContent className="pt-6">
                    <div className="text-4xl font-bold text-creeper mb-2">3000+</div>
                    <div className="text-gray-300">Active Members</div>
                  </CardContent>
                </Card>
                
                <Card className="bg-navy-light border-gray-800 text-center">
                  <CardContent className="pt-6">
                    <div className="text-4xl font-bold text-creeper mb-2">24/7</div>
                    <div className="text-gray-300">Support Available</div>
                  </CardContent>
                </Card>
                
                <Card className="bg-navy-light border-gray-800 text-center">
                  <CardContent className="pt-6">
                    <div className="text-4xl font-bold text-creeper mb-2">500+</div>
                    <div className="text-gray-300">Daily Messages</div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Community Features */}
              <motion.div 
                className="mb-16"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                <h2 className="text-3xl font-bold mb-8 text-center">
                  Why Join Our <span className="text-creeper">Community</span>?
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {communityFeatures.map((feature, index) => (
                    <Card key={index} className="bg-navy-light border-gray-800 hover:border-creeper transition-colors">
                      <CardHeader>
                        <div className="flex items-center gap-3">
                          <feature.icon className="h-8 w-8 text-creeper" />
                          <CardTitle className="text-xl">{feature.title}</CardTitle>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-300">{feature.description}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </motion.div>

              {/* Discord Channels Overview */}
              <div className="mb-16">
                <h2 className="text-3xl font-bold mb-8 text-center">
                  Our <span className="text-creeper">Discord Channels</span>
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <Card className="bg-navy-light border-gray-800">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <MessageCircle className="h-6 w-6 text-creeper" />
                        Support Channels
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 text-gray-300">
                        <li>• #general-support - Get help with any hosting issues</li>
                        <li>• #technical-help - Advanced server management assistance</li>
                        <li>• #billing-support - Account and payment related queries</li>
                        <li>• #server-setup - Help with initial server configuration</li>
                      </ul>
                    </CardContent>
                  </Card>
                  
                  <Card className="bg-navy-light border-gray-800">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Users className="h-6 w-6 text-creeper" />
                        Community Channels
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 text-gray-300">
                        <li>• #general-chat - Casual conversations with community</li>
                        <li>• #server-showcase - Show off your amazing servers</li>
                        <li>• #plugin-recommendations - Discover new plugins</li>
                        <li>• #announcements - Important updates and news</li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Community Guidelines */}
              <div className="bg-navy-light p-8 rounded-lg border border-gray-800 mb-16">
                <h2 className="text-2xl font-bold mb-6 text-center">
                  Community <span className="text-creeper">Guidelines</span>
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-semibold mb-4 text-creeper">✅ Do's</h3>
                    <ul className="space-y-2 text-gray-300">
                      <li>• Be respectful and kind to all members</li>
                      <li>• Use appropriate channels for discussions</li>
                      <li>• Help others when you can</li>
                      <li>• Search before asking questions</li>
                      <li>• Share your server experiences</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold mb-4 text-red-400">❌ Don'ts</h3>
                    <ul className="space-y-2 text-gray-300">
                      <li>• No spam or excessive self-promotion</li>
                      <li>• No offensive or inappropriate content</li>
                      <li>• No sharing of pirated content</li>
                      <li>• No harassment or toxic behavior</li>
                      <li>• No off-topic discussions in support channels</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Call to Action */}
              <div className="text-center">
                <h2 className="text-3xl font-bold mb-6">
                  Ready to <span className="text-creeper">Join</span> the Community?
                </h2>
                <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                  Whether you're a beginner or an experienced server admin, our community welcomes everyone. 
                  Join us today and become part of India's most active Minecraft hosting community!
                </p>
                
                <Button className="bg-discord hover:bg-discord-dark text-white text-lg py-6 px-8 rounded-lg" asChild>
                  <a href="https://discord.gg/RuQ9neH56S" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.317 4.37a19.791 19.791 0 00-4.885-1.515.074.074 0 00-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 00-5.487 0 12.64 12.64 0 00-.617-1.25.077.077 0 00-.079-.037A19.736 19.736 0 003.677 4.37a.07.07 0 00-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 00.031.057 19.9 19.9 0 005.993 3.03.078.078 0 00.084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 00-.041-.106 13.107 13.107 0 01-1.872-.892.077.077 0 01-.008-.128 10.2 10.2 0 00.372-.292.074.074 0 01.077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 01.078.01c.12.098.246.198.373.292a.077.077 0 01-.006.127 12.299 12.299 0 01-1.873.892.077.077 0 00-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 00.084.028 19.839 19.839 0 006.002-3.03.077.077 0 00.032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 00-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
                    </svg>
                    Join Our Discord Now
                  </a>
                </Button>
              </div>
            </div>
          </section>
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default Discord;
