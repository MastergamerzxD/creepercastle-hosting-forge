
import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Globe } from "lucide-react";

const locations = [
  { city: "Delhi", country: "India", ping: null },
  { city: "Mumbai", country: "India", ping: null }
];

const LocationsSection = () => {
  const [pings, setPings] = useState<{ [key: string]: number | null }>({
    Delhi: null,
    Mumbai: null
  });

  // Simulate ping times (in a real app, this would be an actual ping calculation)
  useEffect(() => {
    const simulatePings = () => {
      const newPings = { ...pings };
      locations.forEach(location => {
        // Random ping between 20ms and 80ms for Delhi and Mumbai
        const randomPing = Math.floor(Math.random() * 60) + 20;
        newPings[location.city] = randomPing;
      });
      setPings(newPings);
    };
    
    simulatePings();
    const interval = setInterval(simulatePings, 5000); // Update pings every 5 seconds
    
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 bg-navy" id="locations">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our <span className="text-creeper">Server Location</span></h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Our strategically placed datacenters in India provide the lowest latency for your gaming experience.
          </p>
        </div>
        
        <div className="relative">
          {/* India Map with Server Locations */}
          <div className="relative w-full h-[400px] mb-8 bg-navy-light rounded-xl overflow-hidden border border-gray-800">
            <div className="absolute inset-0 opacity-70 bg-[url('/lovable-uploads/india-map.png')] bg-no-repeat bg-center bg-contain"></div>
            
            {/* Delhi */}
            <div className="server-dot left-[40%] top-[30%]"></div>
            
            {/* Mumbai */}
            <div className="server-dot left-[30%] top-[55%]"></div>
            
            <div className="absolute bottom-4 left-4 bg-navy-dark/80 backdrop-blur-sm p-4 rounded-lg border border-gray-800">
              <h3 className="font-medium mb-2 flex items-center">
                <Globe className="h-5 w-5 mr-2 text-creeper" />
                India Network
              </h3>
              <ul className="text-sm space-y-1">
                <li className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-creeper mr-2"></div>
                  <span>Delhi - Tier 4 Datacenter</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-creeper mr-2"></div>
                  <span>Mumbai - Tier 4 Datacenter</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-creeper mr-2"></div>
                  <span>CreeperShield Protection</span>
                </li>
              </ul>
            </div>
          </div>
          
          {/* Server Location Details */}
          <div className="mt-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {locations.map((location, index) => (
                <Card key={index} className="bg-navy-light border-gray-800 hover:border-creeper/50 transition-all">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <MapPin className="h-5 w-5 text-creeper mr-2" />
                      <h3 className="font-medium text-lg">{location.city}, {location.country}</h3>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-center text-sm">
                        <span className="text-gray-400">Current Ping: </span>
                        <span className="ml-auto text-creeper font-medium">
                          {pings[location.city] !== null ? `${pings[location.city]}ms` : 'Calculating...'}
                        </span>
                      </div>
                      <div className="pt-3">
                        <div className="h-2 w-full bg-navy rounded overflow-hidden">
                          <div 
                            className="h-full bg-gradient-to-r from-creeper-dark to-creeper"
                            style={{ width: `${Math.floor(80 + Math.random() * 20)}%` }}
                          ></div>
                        </div>
                        <div className="flex justify-between text-xs mt-1">
                          <span className="text-gray-400">Current load</span>
                          <span className="text-creeper">Available</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationsSection;
