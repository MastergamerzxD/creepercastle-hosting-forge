
import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Phone, MapPin, MessageSquare, Ticket } from "lucide-react";
import { motion } from "framer-motion";

const ContactPage = () => {
  const contactStructuredData = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Contact CreeperCastle.cloud",
    "description": "Get in touch with CreeperCastle's 24/7 support team for Minecraft hosting assistance",
    "url": "https://creepercastle.cloud/contact",
    "mainEntity": {
      "@type": "Organization",
      "name": "CreeperCastle.cloud",
      "contactPoint": [
        {
          "@type": "ContactPoint",
          "contactType": "customer support",
          "telephone": "+91-9318345643",
          "email": "support@creepercastle.in",
          "availableLanguage": ["English", "Hindi"],
          "areaServed": "IN",
          "hoursAvailable": {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": [
              "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"
            ],
            "opens": "00:00",
            "closes": "23:59"
          }
        }
      ],
      "address": {
        "@type": "PostalAddress",
        "addressCountry": "India",
        "addressRegion": "Mumbai, Delhi"
      }
    }
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
        "name": "Contact Us",
        "item": "https://creepercastle.cloud/contact"
      }
    ]
  };

  return (
    <>
      <Helmet>
        <title>Contact Support 24/7 | CreeperCastle Minecraft Hosting Help India</title>
        <meta 
          name="description" 
          content="💬 Get instant 24/7 support! Phone, WhatsApp, email, ticket system. Call +91 9318345643. Expert help for Minecraft servers, billing, technical issues. We're here for you!"
        />
        <meta
          name="keywords"
          content="creepercastle support, minecraft hosting support india, 24/7 minecraft support, contact minecraft host india, phone support minecraft, whatsapp support minecraft, email support hosting, minecraft technical support india, server support india, billing support, instant minecraft help, ticket system minecraft, fast response support india, call support india"
        />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://creepercastle.cloud/contact" />
        <meta property="og:title" content="Contact CreeperCastle - 24/7 Expert Minecraft Hosting Support" />
        <meta property="og:description" content="Get 24/7 expert support for your Minecraft server hosting needs. Contact our team via phone, WhatsApp, email, or ticket system." />
        <meta property="og:image" content="https://creepercastle.cloud/lovable-uploads/a5ede7d4-e1bf-4925-84dd-4b075648dc11.png" />
        <meta property="og:image:alt" content="Contact CreeperCastle Support Team" />
        <meta property="og:site_name" content="CreeperCastle.cloud" />
        <meta property="og:locale" content="en_IN" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Contact CreeperCastle - 24/7 Minecraft Support 🎮" />
        <meta name="twitter:description" content="Need help with your Minecraft server? Our expert team is available 24/7 via phone, WhatsApp, email, and ticket system." />
        <meta name="twitter:image" content="https://creepercastle.cloud/lovable-uploads/a5ede7d4-e1bf-4925-84dd-4b075648dc11.png" />
        
        {/* Additional SEO tags */}
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <meta name="author" content="CreeperCastle.cloud" />
        <meta name="geo.region" content="IN" />
        <meta name="geo.placename" content="Mumbai, Delhi" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://creepercastle.cloud/contact" />
        
        {/* JSON-LD Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify(contactStructuredData)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbStructuredData)}
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
        
        <main className="flex-grow pt-20 relative z-10">
          <section className="py-12">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <motion.h1 
                  className="text-4xl md:text-5xl font-bold mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  Get Expert <span className="text-creeper">Support</span> 24/7
                </motion.h1>
                <motion.h2 
                  className="text-2xl md:text-3xl text-gray-300 mb-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                >
                  India's Fastest Minecraft Hosting Support Team
                </motion.h2>
                <motion.p 
                  className="text-xl text-gray-300 max-w-3xl mx-auto"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  Need help with your Minecraft server? Our expert support team is available 24/7 via phone, WhatsApp, email, and ticket system with fast response times.
                </motion.p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {/* Phone Support */}
                <Card className="bg-navy-light border-gray-800 hover:border-creeper transition-colors">
                  <CardHeader className="text-center">
                    <div className="mx-auto mb-4 p-3 bg-creeper/20 rounded-full w-fit">
                      <Phone className="h-8 w-8 text-creeper" />
                    </div>
                    <CardTitle className="text-xl">Phone Support</CardTitle>
                    <CardDescription className="text-gray-400">
                      Call us directly for instant help
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-gray-300 mb-2">
                      Speak directly with our support team.
                    </p>
                    <p className="text-creeper font-semibold mb-4">+91 9318345643</p>
                    <Button className="minecraft-btn w-full" asChild>
                      <a href="tel:+919318345643">
                        Call Now
                      </a>
                    </Button>
                  </CardContent>
                </Card>

                {/* WhatsApp Support */}
                <Card className="bg-navy-light border-gray-800 hover:border-creeper transition-colors">
                  <CardHeader className="text-center">
                    <div className="mx-auto mb-4 p-3 bg-creeper/20 rounded-full w-fit">
                      <MessageSquare className="h-8 w-8 text-creeper" />
                    </div>
                    <CardTitle className="text-xl">WhatsApp Support</CardTitle>
                    <CardDescription className="text-gray-400">
                      Message us on WhatsApp
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-gray-300 mb-2">
                      Quick responses via WhatsApp messaging.
                    </p>
                    <p className="text-creeper font-semibold mb-4">+91 9318345643</p>
                    <Button className="minecraft-btn w-full" asChild>
                      <a href="https://wa.me/9318345643" target="_blank" rel="noopener noreferrer">
                        Message Now
                      </a>
                    </Button>
                  </CardContent>
                </Card>

                {/* Ticket System */}
                <Card className="bg-navy-light border-gray-800 hover:border-creeper transition-colors">
                  <CardHeader className="text-center">
                    <div className="mx-auto mb-4 p-3 bg-creeper/20 rounded-full w-fit">
                      <Ticket className="h-8 w-8 text-creeper" />
                    </div>
                    <CardTitle className="text-xl">Client Area Tickets</CardTitle>
                    <CardDescription className="text-gray-400">
                      Track your support requests
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-gray-300 mb-2">
                      Create and manage support tickets.
                    </p>
                    <p className="text-amber-400 text-sm mb-4">Registration required</p>
                    <Button className="minecraft-btn w-full" asChild>
                      <a href="https://billing.creepercastle.in/tickets" target="_blank" rel="noopener noreferrer">
                        Open Now
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              </div>

              {/* Email Support - Separate Row */}
              <div className="mt-8 max-w-2xl mx-auto">
                <Card className="bg-navy-light border-gray-800 hover:border-creeper transition-colors">
                  <CardHeader className="text-center">
                    <div className="mx-auto mb-4 p-3 bg-creeper/20 rounded-full w-fit">
                      <Mail className="h-8 w-8 text-creeper" />
                    </div>
                    <CardTitle className="text-xl">Email Support</CardTitle>
                    <CardDescription className="text-gray-400">
                      Send us detailed queries
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-gray-300 mb-2">
                      For detailed technical issues or business inquiries.
                    </p>
                    <p className="text-creeper font-semibold mb-4">support@creepercastle.in</p>
                    <Button className="minecraft-btn w-full" asChild>
                      <a href="mailto:support@creepercastle.in">
                        Send Email
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              </div>

              {/* Additional Contact Information */}
              <div className="mt-16 max-w-4xl mx-auto">
                <Card className="bg-navy-light border-gray-800">
                  <CardHeader>
                    <CardTitle className="text-2xl text-center mb-6">
                      Why Choose Our <span className="text-creeper">Support Team</span>?
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="space-y-4">
                        <div className="flex items-start space-x-3">
                          <MapPin className="h-5 w-5 text-creeper mt-1" />
                          <div>
                            <h3 className="font-semibold">Server Locations</h3>
                            <p className="text-gray-400 text-sm">Mumbai & Delhi, India</p>
                          </div>
                        </div>
                        <div className="flex items-start space-x-3">
                          <Phone className="h-5 w-5 text-creeper mt-1" />
                          <div>
                            <h3 className="font-semibold">Business Hours</h3>
                            <p className="text-gray-400 text-sm">24/7 Support Available</p>
                          </div>
                        </div>
                      </div>
                      <div className="space-y-4">
                        <div>
                          <h3 className="font-semibold mb-2">Languages Supported</h3>
                          <p className="text-gray-400 text-sm">English, Hindi</p>
                        </div>
                        <div>
                          <h3 className="font-semibold mb-2">Best Support Channel</h3>
                          <p className="text-gray-400 text-sm">Phone & WhatsApp for fastest response times</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default ContactPage;
