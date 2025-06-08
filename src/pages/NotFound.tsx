
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Home, Search } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <>
      <Helmet>
        <title>404 - Page Not Found | CreeperCastle.cloud Minecraft Hosting</title>
        <meta 
          name="description" 
          content="The page you're looking for doesn't exist. Return to CreeperCastle.cloud homepage for premium Minecraft server hosting in India."
        />
        <meta name="robots" content="noindex, nofollow" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="404 - Page Not Found | CreeperCastle.cloud" />
        <meta property="og:description" content="The page you're looking for doesn't exist. Return to our homepage for premium Minecraft hosting." />
        <meta property="og:image" content="https://creepercastle.cloud/lovable-uploads/a5ede7d4-e1bf-4925-84dd-4b075648dc11.png" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="404 - Page Not Found" />
        <meta name="twitter:description" content="The page you're looking for doesn't exist. Return to CreeperCastle.cloud homepage." />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://creepercastle.cloud/" />
      </Helmet>
      
      <div className="min-h-screen flex items-center justify-center bg-navy text-white">
        <div className="text-center px-4">
          <div className="mb-8">
            <h1 className="text-6xl md:text-8xl font-bold text-creeper mb-4">404</h1>
            <h2 className="text-2xl md:text-3xl font-semibold mb-4">Page Not Found</h2>
            <p className="text-lg text-gray-300 mb-8 max-w-md mx-auto">
              Oops! The page you're looking for doesn't exist. It might have been moved or deleted.
            </p>
          </div>
          
          <div className="space-y-4">
            <Button className="minecraft-btn" asChild>
              <a href="/" className="inline-flex items-center space-x-2">
                <Home className="h-4 w-4" />
                <span>Return to Home</span>
              </a>
            </Button>
            
            <div className="text-sm text-gray-400">
              <p>If you believe this is an error, please contact our support team.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotFound;
