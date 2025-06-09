
import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Shield, 
  Settings, 
  BarChart3, 
  FileText, 
  Users, 
  Database, 
  Terminal, 
  Clock,
  Zap,
  Lock,
  Eye,
  Upload
} from "lucide-react";
import { motion } from "framer-motion";

const CreeperPanel = () => {
  const panelStructuredData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "CreeperPanel - Pterodactyl Game Panel",
    "description": "Advanced Pterodactyl-based game server management panel with enhanced features for Minecraft hosting",
    "url": "https://creepercastle.cloud/creeperpanel",
    "applicationCategory": "GameApplication",
    "operatingSystem": "Web-based",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "INR",
      "availability": "https://schema.org/InStock"
    },
    "provider": {
      "@type": "Organization",
      "name": "CreeperCastle.cloud"
    },
    "featureList": [
      "Real-time server monitoring",
      "File management system",
      "User permission controls",
      "Automated backups",
      "Resource usage tracking",
      "Console access",
      "Plugin management",
      "Database management"
    ]
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
        "name": "CreeperPanel",
        "item": "https://creepercastle.cloud/creeperpanel"
      }
    ]
  };

  const features = [
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Advanced Security",
      description: "Multi-layer security with SSL encryption, secure file uploads, and permission-based access control."
    },
    {
      icon: <BarChart3 className="h-8 w-8" />,
      title: "Real-time Monitoring",
      description: "Live server statistics, resource usage tracking, and performance metrics at your fingertips."
    },
    {
      icon: <FileText className="h-8 w-8" />,
      title: "File Manager",
      description: "Intuitive web-based file management with syntax highlighting, bulk operations, and instant editing."
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "User Management",
      description: "Granular permission system allowing you to control user access and server privileges."
    },
    {
      icon: <Database className="h-8 w-8" />,
      title: "Database Control",
      description: "Built-in MySQL database management with phpMyAdmin integration for easy database operations."
    },
    {
      icon: <Terminal className="h-8 w-8" />,
      title: "Console Access",
      description: "Full console access with command history, auto-completion, and real-time log viewing."
    },
    {
      icon: <Clock className="h-8 w-8" />,
      title: "Scheduled Tasks",
      description: "Automate server restarts, backups, and maintenance tasks with flexible scheduling options."
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "One-Click Actions",
      description: "Quick server controls for start, stop, restart, and kill operations with instant response."
    },
    {
      icon: <Lock className="h-8 w-8" />,
      title: "Backup System",
      description: "Automated and manual backup solutions with easy restore functionality and cloud storage."
    },
    {
      icon: <Eye className="h-8 w-8" />,
      title: "Activity Logs",
      description: "Comprehensive logging system tracking all user actions and server events for security auditing."
    },
    {
      icon: <Upload className="h-8 w-8" />,
      title: "Bulk Operations",
      description: "Upload, download, and manage multiple files simultaneously with drag-and-drop support."
    },
    {
      icon: <Settings className="h-8 w-8" />,
      title: "Custom Configuration",
      description: "Advanced server configuration options with template support and environment variable management."
    }
  ];

  return (
    <>
      <Helmet>
        <title>CreeperPanel - Advanced Pterodactyl Game Server Management | CreeperCastle.cloud</title>
        <meta 
          name="description" 
          content="Experience CreeperPanel - our enhanced Pterodactyl-based game server management system with advanced security, real-time monitoring, and intuitive controls for Minecraft hosting."
        />
        <meta
          name="keywords"
          content="pterodactyl panel, game server management, minecraft panel, server control panel, creeperpanel, pterodactyl hosting india, game server dashboard, minecraft server management, server administration panel"
        />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://creepercastle.cloud/creeperpanel" />
        <meta property="og:title" content="CreeperPanel - Advanced Pterodactyl Game Server Management" />
        <meta property="og:description" content="Experience our enhanced Pterodactyl-based game server management system with advanced features for Minecraft hosting." />
        <meta property="og:image" content="https://creepercastle.cloud/lovable-uploads/570fb7e4-e36a-4bb5-a9ef-be9e7ae57b15.png" />
        <meta property="og:image:alt" content="CreeperPanel Dashboard Interface" />
        <meta property="og:site_name" content="CreeperCastle.cloud" />
        <meta property="og:locale" content="en_IN" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="CreeperPanel - Advanced Game Server Management 🎮" />
        <meta name="twitter:description" content="Manage your Minecraft servers with our enhanced Pterodactyl panel featuring advanced security and real-time monitoring." />
        <meta name="twitter:image" content="https://creepercastle.cloud/lovable-uploads/570fb7e4-e36a-4bb5-a9ef-be9e7ae57b15.png" />
        
        {/* Additional SEO tags */}
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <meta name="author" content="CreeperCastle.cloud" />
        <meta name="geo.region" content="IN" />
        <meta name="geo.placename" content="Mumbai, Delhi" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://creepercastle.cloud/creeperpanel" />
        
        {/* JSON-LD Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify(panelStructuredData)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbStructuredData)}
        </script>
      </Helmet>
      
      <div className="flex flex-col min-h-screen bg-navy text-white">
        <div className="fixed inset-0 z-0 pointer-events-none">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20" 
            style={{ backgroundImage: 'url("/lovable-uploads/570fb7e4-e36a-4bb5-a9ef-be9e7ae57b15.png")' }}
          ></div>
          
          <div className="absolute inset-0 bg-gradient-to-b from-navy-dark/90 via-navy/80 to-navy-light/70"></div>
        </div>
        
        <Navbar />
        
        <main className="flex-grow pt-24 relative z-10">
          {/* Hero Section */}
          <section className="py-16">
            <div className="container mx-auto px-4 text-center">
              <motion.h1 
                className="text-4xl md:text-6xl font-bold mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <span className="text-creeper">Creeper</span>Panel
              </motion.h1>
              <motion.p 
                className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Advanced Pterodactyl-based game server management system with enhanced features, 
                security, and intuitive controls designed specifically for Minecraft hosting excellence.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <Button className="minecraft-btn text-lg px-8 py-3" asChild>
                  <a href="https://billing.creepercastle.in/" target="_blank" rel="noopener noreferrer">
                    Try CreeperPanel Now
                  </a>
                </Button>
              </motion.div>
            </div>
          </section>

          {/* Features Grid */}
          <section className="py-16">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Powerful <span className="text-creeper">Features</span>
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Every feature designed to make server management effortless and efficient
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <Card className="bg-navy-light border-gray-800 hover:border-creeper transition-all duration-300 hover:shadow-lg hover:shadow-creeper/20 h-full">
                      <CardHeader>
                        <div className="mb-4 p-3 bg-creeper/20 rounded-lg w-fit text-creeper">
                          {feature.icon}
                        </div>
                        <CardTitle className="text-xl">{feature.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <CardDescription className="text-gray-400">
                          {feature.description}
                        </CardDescription>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Key Benefits */}
          <section className="py-16">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <Card className="bg-navy-light border-gray-800">
                  <CardHeader>
                    <CardTitle className="text-3xl text-center mb-6">
                      Why Choose <span className="text-creeper">CreeperPanel</span>?
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="space-y-6">
                        <div>
                          <h3 className="font-semibold text-lg mb-2 text-creeper">User-Friendly Interface</h3>
                          <p className="text-gray-400">
                            Intuitive design that makes server management accessible to both beginners and experts.
                          </p>
                        </div>
                        <div>
                          <h3 className="font-semibold text-lg mb-2 text-creeper">Lightning Fast</h3>
                          <p className="text-gray-400">
                            Optimized for speed with instant response times and minimal resource usage.
                          </p>
                        </div>
                        <div>
                          <h3 className="font-semibold text-lg mb-2 text-creeper">Mobile Responsive</h3>
                          <p className="text-gray-400">
                            Manage your servers on-the-go with our fully responsive mobile interface.
                          </p>
                        </div>
                      </div>
                      <div className="space-y-6">
                        <div>
                          <h3 className="font-semibold text-lg mb-2 text-creeper">Regular Updates</h3>
                          <p className="text-gray-400">
                            Continuous improvements and new features based on community feedback.
                          </p>
                        </div>
                        <div>
                          <h3 className="font-semibold text-lg mb-2 text-creeper">24/7 Support</h3>
                          <p className="text-gray-400">
                            Expert support team ready to help you with any panel-related questions.
                          </p>
                        </div>
                        <div>
                          <h3 className="font-semibold text-lg mb-2 text-creeper">Free with Hosting</h3>
                          <p className="text-gray-400">
                            Included free with all CreeperCastle hosting plans - no additional cost.
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-16">
            <div className="container mx-auto px-4 text-center">
              <Card className="bg-gradient-to-r from-creeper/20 to-navy-light border-creeper/30 max-w-4xl mx-auto">
                <CardContent className="py-12">
                  <h2 className="text-3xl md:text-4xl font-bold mb-6">
                    Ready to Experience <span className="text-creeper">CreeperPanel</span>?
                  </h2>
                  <p className="text-xl text-gray-300 mb-8">
                    Get started with our Minecraft hosting plans and access CreeperPanel instantly
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button className="minecraft-btn text-lg px-8 py-3" asChild>
                      <a href="https://billing.creepercastle.in/index.php?rp=/store/minecraft-performance-servers" target="_blank" rel="noopener noreferrer">
                        View Minecraft Plans
                      </a>
                    </Button>
                    <Button variant="outline" className="text-lg px-8 py-3 border-creeper text-creeper hover:bg-creeper hover:text-navy" asChild>
                      <a href="https://discord.gg/RuQ9neH56S" target="_blank" rel="noopener noreferrer">
                        Ask Questions
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default CreeperPanel;
