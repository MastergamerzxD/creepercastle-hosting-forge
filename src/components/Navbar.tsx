
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Menu, X, Store, ChevronDown, Server, MapPin, Building2, Gamepad2, Bot, Monitor, Shield } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  
  const handleNavigation = (path: string, e: React.MouseEvent) => {
    e.preventDefault();
    setIsOpen(false);
    navigate(path);
  };

  return (
    <nav className="py-4 border-b border-creeper/30 bg-navy-dark/95 backdrop-blur-xl fixed top-0 w-full z-[9999] shadow-2xl shadow-creeper/10">
      <div className="container mx-auto px-4 flex justify-between items-center min-h-[4rem]">
        <Link to="/" className="flex items-center space-x-2 flex-shrink-0">
          <div className="flex items-center">
            <img 
              src="/lovable-uploads/394abece-307b-48f2-8c38-4d2123607648.png" 
              alt="CreeperCastle.cloud" 
              className="h-10 w-10"
            />
            <span className="font-bold text-xl ml-2 text-white whitespace-nowrap">CreeperCastle<span className="text-creeper">.cloud</span></span>
          </div>
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-2 flex-wrap">
          <Link to="/" className="text-white hover:text-creeper transition-all duration-300 whitespace-nowrap text-base px-3 py-2 relative group">
            <span className="relative z-10">Home</span>
            <span className="absolute inset-0 bg-creeper/10 rounded-md scale-0 group-hover:scale-100 transition-transform duration-300"></span>
          </Link>
          <Link to="/plans/minecraft" className="text-white hover:text-creeper transition-all duration-300 whitespace-nowrap text-base bg-creeper/15 px-3 py-2 rounded-lg border border-creeper/40 hover:border-creeper/60 hover:bg-creeper/25 relative overflow-hidden group">
            <span className="flex items-center gap-2 relative z-10">
              <Gamepad2 size={16} />
              Minecraft
            </span>
            <span className="absolute inset-0 bg-gradient-to-r from-creeper/0 via-creeper/10 to-creeper/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></span>
          </Link>
          
          <DropdownMenu>
            <DropdownMenuTrigger className="text-white hover:text-creeper transition-all duration-300 whitespace-nowrap text-base flex items-center gap-2 bg-transparent border-none px-3 py-2 rounded-lg hover:bg-white/5 focus:outline-none group">
              <Server size={16} />
              Other
              <ChevronDown size={14} className="group-hover:rotate-180 transition-transform duration-300" />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-navy-dark/95 backdrop-blur-xl border border-creeper/30 z-[10000] rounded-xl shadow-2xl shadow-creeper/20 min-w-[200px]">
              <DropdownMenuItem className="text-white hover:text-creeper hover:bg-creeper/10 focus:text-creeper focus:bg-creeper/10 rounded-lg m-1 px-3 py-2 transition-all duration-200">
                <Link to="/plans/vps" className="w-full flex items-center gap-3">
                  <Monitor size={16} className="text-creeper" />
                  VPS Hosting
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem className="text-white hover:text-creeper hover:bg-creeper/10 focus:text-creeper focus:bg-creeper/10 rounded-lg m-1 px-3 py-2 transition-all duration-200">
                <Link to="/plans/discord-bot" className="w-full flex items-center gap-3">
                  <Bot size={16} className="text-purple-400" />
                  Discord Bot
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <Link to="/creeperpanel" className="text-white hover:text-creeper transition-all duration-300 whitespace-nowrap text-base px-3 py-2 relative group">
            <span className="relative z-10">Panel</span>
            <span className="absolute inset-0 bg-creeper/10 rounded-md scale-0 group-hover:scale-100 transition-transform duration-300"></span>
          </Link>
          <Link to="/plans/creepershield" className="text-white hover:text-creeper transition-all duration-300 whitespace-nowrap text-base bg-purple-500/15 px-3 py-2 rounded-lg border border-purple-500/40 hover:border-purple-500/60 hover:bg-purple-500/25 relative overflow-hidden group">
            <span className="flex items-center gap-2 relative z-10">
              <Shield size={16} />
              Shield
            </span>
            <span className="absolute inset-0 bg-gradient-to-r from-purple-500/0 via-purple-500/10 to-purple-500/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></span>
          </Link>
          
          <DropdownMenu>
            <DropdownMenuTrigger className="text-white hover:text-creeper transition-all duration-300 whitespace-nowrap text-base flex items-center gap-2 bg-transparent border-none px-3 py-2 rounded-lg hover:bg-white/5 focus:outline-none group">
              <Building2 size={16} />
              Info
              <ChevronDown size={14} className="group-hover:rotate-180 transition-transform duration-300" />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-navy-dark/95 backdrop-blur-xl border border-creeper/30 z-[10000] rounded-xl shadow-2xl shadow-creeper/20 min-w-[200px]">
              <DropdownMenuItem className="text-white hover:text-creeper hover:bg-creeper/10 focus:text-creeper focus:bg-creeper/10 rounded-lg m-1 px-3 py-2 transition-all duration-200">
                <Link to="/locations" className="w-full flex items-center gap-3">
                  <MapPin size={16} className="text-blue-400" />
                  Locations
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem className="text-white hover:text-creeper hover:bg-creeper/10 focus:text-creeper focus:bg-creeper/10 rounded-lg m-1 px-3 py-2 transition-all duration-200">
                <Link to="/datacenter" className="w-full flex items-center gap-3">
                  <Server size={16} className="text-creeper" />
                  Datacenter
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          
          <a href="/about" className="text-white hover:text-creeper transition-all duration-300 whitespace-nowrap text-base px-3 py-2 relative group" onClick={(e) => handleNavigation('/about', e)}>
            <span className="relative z-10">About</span>
            <span className="absolute inset-0 bg-creeper/10 rounded-md scale-0 group-hover:scale-100 transition-transform duration-300"></span>
          </a>
          <Link to="/contact" className="text-white hover:text-creeper transition-all duration-300 whitespace-nowrap text-base px-3 py-2 relative group">
            <span className="relative z-10">Contact</span>
            <span className="absolute inset-0 bg-creeper/10 rounded-md scale-0 group-hover:scale-100 transition-transform duration-300"></span>
          </Link>
          <Link to="/links" className="text-white hover:text-creeper transition-all duration-300 whitespace-nowrap text-base bg-creeper/10 px-3 py-2 rounded-lg border border-creeper/30 hover:border-creeper/50 hover:bg-creeper/20">
            Links
          </Link>
          
          <Button className="minecraft-btn rounded text-sm px-4 py-2 bg-purple-600 hover:bg-purple-700 border border-purple-500/30 hover:scale-105 transition-all duration-300" asChild>
            <Link to="/discord" className="flex items-center gap-2">
              💬 Discord
            </Link>
          </Button>
          
          <Button className="minecraft-btn rounded text-sm px-4 py-2 hover:scale-105 transition-all duration-300" asChild>
            <a href="https://billing.creepercastle.in/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
              <Store size={16} />
              Store
            </a>
          </Button>
        </div>
        
        {/* Mobile menu button */}
        <div className="lg:hidden">
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="text-white hover:text-creeper p-2"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      {isOpen && (
        <div className="lg:hidden bg-navy-dark/95 backdrop-blur-xl absolute top-[4.5rem] left-0 w-full border-b border-creeper/30 z-[9998] shadow-2xl shadow-creeper/20 max-h-[80vh] overflow-y-auto">
          <div className="container mx-auto px-4 py-6 space-y-4 flex flex-col">
            <Link to="/" className="text-white hover:text-creeper transition-all duration-300 py-2 px-2 rounded-lg hover:bg-creeper/10" onClick={() => setIsOpen(false)}>🏠 Home</Link>
            
            <Link to="/plans/minecraft" className="text-white hover:text-creeper transition-all duration-300 py-2 bg-creeper/15 px-3 rounded-lg border border-creeper/40 hover:border-creeper/60" onClick={() => setIsOpen(false)}>🎮 Minecraft Hosting</Link>
            
            <div className="text-white py-2">
              <span className="text-gray-300 font-medium flex items-center gap-2 mb-2">
                <Server size={16} />
                Other Hosting:
              </span>
              <Link to="/plans/vps" className="text-white hover:text-creeper transition-all duration-300 py-2 pl-4 block hover:bg-creeper/10 rounded-lg flex items-center gap-2" onClick={() => setIsOpen(false)}>
                <Monitor size={14} />
                VPS Hosting
              </Link>
              <Link to="/plans/discord-bot" className="text-white hover:text-creeper transition-all duration-300 py-2 pl-4 block hover:bg-creeper/10 rounded-lg flex items-center gap-2" onClick={() => setIsOpen(false)}>
                <Bot size={14} className="text-purple-400" />
                Discord Bot Hosting
              </Link>
            </div>
            
            <Link to="/creeperpanel" className="text-white hover:text-creeper transition-all duration-300 py-2 px-2 rounded-lg hover:bg-creeper/10" onClick={() => setIsOpen(false)}>⚙️ CreeperPanel</Link>
            <Link to="/plans/creepershield" className="text-white hover:text-creeper transition-all duration-300 py-2 bg-purple-500/15 px-3 rounded-lg border border-purple-500/40 hover:border-purple-500/60" onClick={() => setIsOpen(false)}>🛡️ CreeperShield</Link>
            
            <div className="text-white py-2">
              <span className="text-gray-300 font-medium flex items-center gap-2 mb-2">
                <Building2 size={16} />
                Infrastructure:
              </span>
              <Link to="/locations" className="text-white hover:text-creeper transition-all duration-300 py-2 pl-4 block hover:bg-creeper/10 rounded-lg flex items-center gap-2" onClick={() => setIsOpen(false)}>
                <MapPin size={14} className="text-blue-400" />
                Locations
              </Link>
              <Link to="/datacenter" className="text-white hover:text-creeper transition-all duration-300 py-2 pl-4 block hover:bg-creeper/10 rounded-lg flex items-center gap-2" onClick={() => setIsOpen(false)}>
                <Server size={14} className="text-creeper" />
                Datacenter
              </Link>
            </div>
            
            <a href="/about" className="text-white hover:text-creeper transition-all duration-300 py-2 px-2 rounded-lg hover:bg-creeper/10" onClick={(e) => handleNavigation('/about', e)}>📋 About</a>
            <Link to="/contact" className="text-white hover:text-creeper transition-all duration-300 py-2 px-2 rounded-lg hover:bg-creeper/10" onClick={() => setIsOpen(false)}>📧 Contact</Link>
            <Link to="/links" className="text-white hover:text-creeper transition-all duration-300 py-2 bg-creeper/10 px-3 rounded-lg border border-creeper/30 hover:border-creeper/50" onClick={() => setIsOpen(false)}>🔗 Official Links</Link>
            
            <div className="pt-4 border-t border-gray-800 space-y-3">
              <Button className="minecraft-btn rounded w-full bg-purple-600 hover:bg-purple-700 border border-purple-500/30" asChild>
                <Link to="/discord" className="flex items-center justify-center gap-2" onClick={() => setIsOpen(false)}>
                  Discord
                </Link>
              </Button>
              
              <Button className="minecraft-btn rounded w-full" asChild>
                <a href="https://billing.creepercastle.in/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
                  <Store size={18} />
                  Store
                </a>
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
