
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
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center max-w-md mx-auto p-8">
        <h1 className="text-6xl font-bold text-gray-800 mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Page Not Found</h2>
        <p className="text-gray-600 mb-6">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <p className="text-sm text-gray-500 mb-8">
          Attempted to access: <code className="bg-gray-200 px-2 py-1 rounded">{location.pathname}</code>
        </p>
        <div className="space-y-3">
          <Button 
            onClick={() => navigate('/')} 
            className="w-full bg-blue-600 hover:bg-blue-700 text-white"
          >
            Go to Homepage
          </Button>
          <Button 
            onClick={() => navigate(-1)} 
            variant="outline" 
            className="w-full"
          >
            Go Back
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
