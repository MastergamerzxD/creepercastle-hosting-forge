
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const NotFound = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <>
      <title>Page Not Found | CreeperCastle - Return to Minecraft Hosting</title>
      <div className="flex flex-col min-h-screen bg-navy text-white">
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
        
        <div className="min-h-screen flex items-center justify-center relative z-10">
          <div className="text-center max-w-md mx-auto p-8">
            <h1 className="text-6xl font-bold text-creeper mb-4">404</h1>
            <h2 className="text-2xl font-semibold text-white mb-4">Page Not Found</h2>
            <p className="text-gray-300 mb-6">
              The page you're looking for doesn't exist or has been moved.
            </p>
            <p className="text-sm text-gray-400 mb-8">
              Attempted to access: <code className="bg-navy-light px-2 py-1 rounded">{location.pathname}</code>
            </p>
            <div className="space-y-3">
              <Button 
                onClick={() => navigate('/')} 
                className="w-full minecraft-btn"
              >
                Go to Homepage
              </Button>
              <Button 
                onClick={() => navigate(-1)} 
                variant="outline" 
                className="w-full border-gray-600 text-gray-300 hover:bg-gray-800"
              >
                Go Back
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotFound;
