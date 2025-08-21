
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";

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
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30" 
            style={{ backgroundImage: 'url("/lovable-uploads/4fca9c12-4db7-435f-a6c5-3fe7e04cf205.png")' }}
          ></div>
          <div className="absolute inset-0 bg-gradient-to-b from-navy-dark/90 via-navy/80 to-navy-light/70"></div>
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
