
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
                <TabsTrigger value="files" className="data-[state=active]:bg-creeper data-[state=active]:text-navy-dark">
                  File Manager
                </TabsTrigger>
                <TabsTrigger value="console" className="data-[state=active]:bg-creeper data-[state=active]:text-navy-dark">
                  Console
                </TabsTrigger>
              </TabsList>
              
              <div className="border border-gray-800 rounded-xl overflow-hidden">
                <TabsContent value="dashboard" className="m-0">
                  <div className="bg-navy-light p-4">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="font-semibold">Server Dashboard</h3>
                      <div className="flex items-center">
                        <div className="w-2 h-2 rounded-full bg-green-500 mr-2"></div>
                        <span className="text-sm text-green-500">Online</span>
                      </div>
                    </div>
                    
                    <img 
                      src="https://cdn.pixabay.com/photo/2022/01/11/21/48/world-map-6931_1280.png" 
                      alt="Dashboard" 
                      className="w-full aspect-video object-cover rounded-lg opacity-10 mb-4" 
                    />
                    
                    <div className="grid grid-cols-2 gap-4 mt-4">
                      <div className="bg-navy rounded p-4">
                        <h4 className="text-sm text-gray-400 mb-1">CPU Usage</h4>
                        <div className="flex items-end">
                          <span className="text-2xl font-bold">32%</span>
                          <span className="text-xs text-gray-500 ml-1 mb-1">/ 100%</span>
                        </div>
                        <div className="h-2 w-full bg-gray-800 rounded-full mt-2">
                          <div className="h-full bg-creeper rounded-full" style={{ width: '32%' }}></div>
                        </div>
                      </div>
                      
                      <div className="bg-navy rounded p-4">
                        <h4 className="text-sm text-gray-400 mb-1">Memory Usage</h4>
                        <div className="flex items-end">
                          <span className="text-2xl font-bold">2.4</span>
                          <span className="text-xs text-gray-500 ml-1 mb-1">/ 8 GB</span>
                        </div>
                        <div className="h-2 w-full bg-gray-800 rounded-full mt-2">
                          <div className="h-full bg-creeper rounded-full" style={{ width: '30%' }}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>
                
                <TabsContent value="files" className="m-0">
                  <div className="bg-navy-light p-4">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="font-semibold">File Manager</h3>
                      <div className="text-xs bg-navy px-2 py-1 rounded">
                        /home/minecraft/server/
                      </div>
                    </div>
                    
                    <div className="bg-navy rounded border border-gray-800 mb-4">
                      <div className="border-b border-gray-800 px-4 py-3 flex items-center">
                        <FileText className="h-4 w-4 text-gray-400 mr-2" />
                        <span>server.properties</span>
                        <span className="ml-auto text-xs text-gray-500">8.2 KB</span>
                      </div>
                      <div className="border-b border-gray-800 px-4 py-3 flex items-center">
                        <FileText className="h-4 w-4 text-gray-400 mr-2" />
                        <span>server.jar</span>
                        <span className="ml-auto text-xs text-gray-500">35.6 MB</span>
                      </div>
                      <div className="border-b border-gray-800 px-4 py-3 flex items-center">
                        <FileText className="h-4 w-4 text-gray-400 mr-2" />
                        <span>eula.txt</span>
                        <span className="ml-auto text-xs text-gray-500">1 KB</span>
                      </div>
                      <div className="px-4 py-3 flex items-center">
                        <FileText className="h-4 w-4 text-gray-400 mr-2" />
                        <span>ops.json</span>
                        <span className="ml-auto text-xs text-gray-500">0.5 KB</span>
                      </div>
                    </div>
                    
                    <div className="flex space-x-2">
                      <Button size="sm" className="bg-navy hover:bg-navy-light text-white border border-gray-800">Upload</Button>
                      <Button size="sm" className="bg-navy hover:bg-navy-light text-white border border-gray-800">Create File</Button>
                      <Button size="sm" className="bg-navy hover:bg-navy-light text-white border border-gray-800">Create Folder</Button>
                    </div>
                  </div>
                </TabsContent>
                
                <TabsContent value="console" className="m-0">
                  <div className="bg-navy-light p-4">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="font-semibold">Console</h3>
                      <div className="flex space-x-2">
                        <div className="text-xs bg-navy px-2 py-1 rounded flex items-center">
                          <div className="w-2 h-2 rounded-full bg-green-500 mr-2"></div>
                          <span>Connected</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-navy rounded border border-gray-800 h-60 overflow-hidden">
                      <div className="p-4 text-xs font-mono text-gray-400 h-full overflow-y-auto">
                        <p>[12:34:56] [Server thread/INFO]: Starting minecraft server version 1.19.2</p>
                        <p>[12:34:56] [Server thread/INFO]: Loading properties</p>
                        <p>[12:34:56] [Server thread/INFO]: Default game type: SURVIVAL</p>
                        <p>[12:34:56] [Server thread/INFO]: Generating keypair</p>
                        <p>[12:34:57] [Server thread/INFO]: Starting Minecraft server on *:25565</p>
                        <p>[12:34:57] [Server thread/INFO]: Using epoll channel type</p>
                        <p>[12:34:57] [Server thread/INFO]: Preparing level "world"</p>
                        <p>[12:34:58] [Server thread/INFO]: Preparing start region for dimension minecraft:overworld</p>
                        <p>[12:35:02] [Server thread/INFO]: Done (5.123s)! For help, type "help"</p>
                        <p>[12:35:05] [Server thread/INFO]: Player1 joined the game</p>
                        <p>[12:35:15] [Server thread/INFO]: Player2 joined the game</p>
                        <p className="text-green-400">[12:35:28] [Server thread/INFO]: CreeperShield: Protection active</p>
                      </div>
                    </div>
                    
                    <div className="mt-4 flex">
                      <input 
                        type="text" 
                        className="flex-1 bg-navy p-2 rounded-l border border-gray-800 text-sm focus:outline-none focus:ring-1 focus:ring-creeper" 
                        placeholder="Enter command..." 
                      />
                      <Button className="bg-creeper text-navy-dark rounded-l-none font-medium">Send</Button>
                    </div>
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
