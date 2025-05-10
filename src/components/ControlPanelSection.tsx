
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Server, Terminal, FileText, Database, Settings, Users } from "lucide-react";

const ControlPanelSection = () => {
  return (
    <section className="py-20 bg-navy-dark" id="control-panel">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Intuitive <span className="text-creeper">Control Panel</span></h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Manage your server with our easy-to-use control panel, designed specifically for Minecraft hosting.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <Tabs defaultValue="dashboard">
              <TabsList className="grid grid-cols-3 mb-8">
                <TabsTrigger value="dashboard" className="data-[state=active]:bg-creeper data-[state=active]:text-navy-dark">
                  Dashboard
                </TabsTrigger>
                <TabsTrigger value="plugins" className="data-[state=active]:bg-creeper data-[state=active]:text-navy-dark">
                  Plugins
                </TabsTrigger>
                <TabsTrigger value="subdomains" className="data-[state=active]:bg-creeper data-[state=active]:text-navy-dark">
                  Subdomains
                </TabsTrigger>
              </TabsList>
              
              <div className="border border-gray-800 rounded-xl overflow-hidden">
                <TabsContent value="dashboard" className="m-0">
                  <div className="bg-navy-light">
                    <img 
                      src="/lovable-uploads/63238f98-9166-4053-9fe5-5c96a6609f1a.png" 
                      alt="CreeperCastle Dashboard" 
                      className="w-full"
                    />
                  </div>
                </TabsContent>
                
                <TabsContent value="plugins" className="m-0">
                  <div className="bg-navy-light">
                    <img 
                      src="/lovable-uploads/e3a29c07-41fc-4248-8f38-ed4db0e30c41.png" 
                      alt="CreeperCastle Plugins Manager" 
                      className="w-full"
                    />
                  </div>
                </TabsContent>
                
                <TabsContent value="subdomains" className="m-0">
                  <div className="bg-navy-light">
                    <img 
                      src="/lovable-uploads/4fca9c12-4db7-435f-a6c5-3fe7e04cf205.png" 
                      alt="CreeperCastle Subdomains Manager" 
                      className="w-full"
                    />
                  </div>
                </TabsContent>
              </div>
            </Tabs>
          </div>
          
          <div className="space-y-8">
            <h3 className="text-2xl font-bold mb-6">Everything You Need in <span className="text-creeper">One Place</span></h3>
            
            <div className="space-y-6">
              <div className="flex">
                <div className="mr-4 p-3 bg-creeper/10 rounded-lg">
                  <Server className="h-6 w-6 text-creeper" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-1">One-Click Installers</h4>
                  <p className="text-gray-400">
                    Install popular modpacks, plugins, and server types with a single click. No technical knowledge required.
                  </p>
                </div>
              </div>
              
              <div className="flex">
                <div className="mr-4 p-3 bg-creeper/10 rounded-lg">
                  <Terminal className="h-6 w-6 text-creeper" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-1">Full Console Access</h4>
                  <p className="text-gray-400">
                    Run commands, monitor logs, and see server activity in real-time through our intuitive console interface.
                  </p>
                </div>
              </div>
              
              <div className="flex">
                <div className="mr-4 p-3 bg-creeper/10 rounded-lg">
                  <Database className="h-6 w-6 text-creeper" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-1">Automated Backups</h4>
                  <p className="text-gray-400">
                    Schedule regular backups and restore your server with a single click if anything goes wrong.
                  </p>
                </div>
              </div>
              
              <div className="flex">
                <div className="mr-4 p-3 bg-creeper/10 rounded-lg">
                  <Users className="h-6 w-6 text-creeper" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-1">Player Management</h4>
                  <p className="text-gray-400">
                    Easily manage player permissions, ban lists, and whitelist through a simple interface.
                  </p>
                </div>
              </div>
              
              <div className="flex">
                <div className="mr-4 p-3 bg-creeper/10 rounded-lg">
                  <Settings className="h-6 w-6 text-creeper" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-1">Advanced Configuration</h4>
                  <p className="text-gray-400">
                    Fine-tune server settings without editing config files manually. Adjust memory allocation, world settings, and more.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="pt-4">
              <Button className="minecraft-btn rounded-md">Tour the Control Panel</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ControlPanelSection;
