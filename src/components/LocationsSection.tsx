
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MapPin, Globe, Wifi, Server } from "lucide-react";

const locations = [
  {
    region: "North America",
    locations: [
      { city: "New York", country: "USA", ping: "< 10ms", specs: "AMD EPYC 7713, NVMe SSD" },
      { city: "Los Angeles", country: "USA", ping: "< 15ms", specs: "AMD EPYC 7713, NVMe SSD" },
      { city: "Chicago", country: "USA", ping: "< 12ms", specs: "AMD EPYC 7713, NVMe SSD" },
      { city: "Dallas", country: "USA", ping: "< 14ms", specs: "AMD EPYC 7713, NVMe SSD" },
      { city: "Toronto", country: "Canada", ping: "< 18ms", specs: "AMD EPYC 7713, NVMe SSD" },
    ]
  },
  {
    region: "Europe",
    locations: [
      { city: "London", country: "UK", ping: "< 8ms", specs: "AMD EPYC 7713, NVMe SSD" },
      { city: "Frankfurt", country: "Germany", ping: "< 11ms", specs: "AMD EPYC 7713, NVMe SSD" },
      { city: "Amsterdam", country: "Netherlands", ping: "< 9ms", specs: "AMD EPYC 7713, NVMe SSD" },
      { city: "Paris", country: "France", ping: "< 12ms", specs: "AMD EPYC 7713, NVMe SSD" },
    ]
  },
  {
    region: "Asia Pacific",
    locations: [
      { city: "Tokyo", country: "Japan", ping: "< 14ms", specs: "AMD EPYC 7713, NVMe SSD" },
      { city: "Singapore", country: "Singapore", ping: "< 16ms", specs: "AMD EPYC 7713, NVMe SSD" },
      { city: "Sydney", country: "Australia", ping: "< 21ms", specs: "AMD EPYC 7713, NVMe SSD" },
    ]
  }
];

const LocationsSection = () => {
  const [activeRegion, setActiveRegion] = useState("North America");

  return (
    <section className="py-20 bg-navy" id="locations">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Global <span className="text-creeper">Server Locations</span></h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Choose from our strategically placed datacenters around the world for the lowest latency.
          </p>
        </div>
        
        <div className="relative">
          {/* World Map with Server Locations */}
          <div className="relative w-full h-[400px] mb-8 bg-navy-light rounded-xl overflow-hidden border border-gray-800">
            <div className="absolute inset-0 opacity-40 bg-[url('https://cdn.pixabay.com/photo/2022/01/11/21/48/world-map-69314_1280.png')] bg-no-repeat bg-center bg-contain"></div>
            
            {/* North America */}
            <div className="server-dot left-[20%] top-[30%]"></div>
            <div className="server-dot left-[15%] top-[35%]"></div>
            <div className="server-dot left-[22%] top-[28%]"></div>
            <div className="server-dot left-[19%] top-[32%]"></div>
            <div className="server-dot left-[24%] top-[25%]"></div>
            
            {/* Europe */}
            <div className="server-dot left-[45%] top-[22%]"></div>
            <div className="server-dot left-[47%] top-[24%]"></div>
            <div className="server-dot left-[46%] top-[20%]"></div>
            <div className="server-dot left-[48%] top-[23%]"></div>
            
            {/* Asia Pacific */}
            <div className="server-dot left-[75%] top-[30%]"></div>
            <div className="server-dot left-[68%] top-[40%]"></div>
            <div className="server-dot left-[80%] top-[55%]"></div>
            
            <div className="absolute bottom-4 left-4 bg-navy-dark/80 backdrop-blur-sm p-4 rounded-lg border border-gray-800">
              <h3 className="font-medium mb-2 flex items-center">
                <Globe className="h-5 w-5 mr-2 text-creeper" />
                Server Network
              </h3>
              <ul className="text-sm space-y-1">
                <li className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-creeper mr-2"></div>
                  <span>12 Global Locations</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-creeper mr-2"></div>
                  <span>Premium Tier-1 Network</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-creeper mr-2"></div>
                  <span>Anti-DDoS Protection</span>
                </li>
              </ul>
            </div>
          </div>
          
          {/* Server Location Details */}
          <div className="mt-12">
            <Tabs defaultValue="North America" className="w-full" onValueChange={setActiveRegion}>
              <div className="flex justify-center mb-6">
                <TabsList className="bg-navy-light">
                  {locations.map((region) => (
                    <TabsTrigger 
                      key={region.region} 
                      value={region.region}
                      className="data-[state=active]:bg-creeper data-[state=active]:text-navy-dark"
                    >
                      {region.region}
                    </TabsTrigger>
                  ))}
                </TabsList>
              </div>
              
              {locations.map((region) => (
                <TabsContent key={region.region} value={region.region} className="mt-0">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {region.locations.map((location, index) => (
                      <Card key={index} className="bg-navy-light border-gray-800 hover:border-creeper/50 transition-all">
                        <CardContent className="p-6">
                          <div className="flex items-center mb-4">
                            <MapPin className="h-5 w-5 text-creeper mr-2" />
                            <h3 className="font-medium text-lg">{location.city}, {location.country}</h3>
                          </div>
                          <div className="space-y-3">
                            <div className="flex items-center text-sm">
                              <Wifi className="h-4 w-4 text-gray-400 mr-2" />
                              <span className="text-gray-400">Average Ping: </span>
                              <span className="ml-auto text-creeper font-medium">{location.ping}</span>
                            </div>
                            <div className="flex items-center text-sm">
                              <Server className="h-4 w-4 text-gray-400 mr-2" />
                              <span className="text-gray-400">Hardware: </span>
                              <span className="ml-auto text-white">{location.specs}</span>
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
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationsSection;
