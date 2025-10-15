
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Menu, X, Store, ChevronDown, Server, MapPin, Building2, Gamepad2, Bot, Monitor, Shield, Zap } from "lucide-react";
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
    <nav className="py-4 border-b-4 border-stone-dark bg-navy-dark/95 backdrop-blur-xl fixed top-0 w-full z-[9999] shadow-pixel dirt-bg">
      <div className="container mx-auto px-4 flex justify-between items-center min-h-[4rem]">
        <Link to="/" className="flex items-center space-x-2 flex-shrink-0">
          <div className="flex items-center pixel-border p-2 rounded-pixel bg-grass/20">
            <img 
              src="/lovable-uploads/394abece-307b-48f2-8c38-4d2123607648.png" 
              alt="CreeperCastle.cloud" 
              className="h-10 w-10"
              style={{ imageRendering: 'pixelated' }}
            />
            <span className="font-minecraft text-base ml-2 text-white whitespace-nowrap">Creeper<span className="text-creeper">Castle</span></span>
          </div>
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-1 flex-wrap">
          <Link to="/" className="text-white hover:text-creeper transition-all duration-100 whitespace-nowrap text-xs font-pixel px-2 py-1.5 relative group rounded-pixel hover:bg-grass/20 border-2 border-transparent hover:border-grass">
            <span className="relative z-10">Home</span>
          </Link>
          <Link to="/plans/minecraft" className="text-white hover:text-white transition-all duration-100 whitespace-nowrap text-xs font-pixel grass-bg px-2 py-1.5 rounded-pixel border-2 border-grass-dark shadow-pixel hover:shadow-pixel-sm relative overflow-hidden group">
            <span className="flex items-center gap-1.5 relative z-10">
              <Gamepad2 size={14} />
              Minecraft
            </span>
          </Link>
          <Link to="/plans/ryzen9" className="text-white hover:text-white transition-all duration-100 whitespace-nowrap text-xs font-pixel dirt-bg px-2 py-1.5 rounded-pixel border-2 border-dirt-dark shadow-pixel hover:shadow-pixel-sm relative overflow-hidden group">
            <span className="flex items-center gap-1.5 relative z-10">
              <Zap size={14} className="text-amber-400" />
              Ryzen 9
            </span>
          </Link>
          
          <DropdownMenu>
            <DropdownMenuTrigger className="text-white hover:text-creeper transition-all duration-100 whitespace-nowrap text-xs font-pixel flex items-center gap-1.5 bg-transparent border-2 border-transparent px-2 py-1.5 rounded-pixel hover:bg-stone/20 hover:border-stone focus:outline-none group">
              <Server size={14} />
              Other
              <ChevronDown size={12} className="group-hover:rotate-180 transition-transform duration-300" />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="stone-bg border-4 border-stone-dark z-[10000] rounded-block shadow-pixel-lg min-w-[200px] font-pixel">
              <DropdownMenuItem className="text-white hover:text-creeper hover:bg-grass/20 focus:text-creeper focus:bg-grass/20 rounded-pixel m-1 px-3 py-2 transition-all duration-100 border-2 border-transparent hover:border-grass">
                <Link to="/plans/vps" className="w-full flex items-center gap-3">
                  <Monitor size={16} className="text-diamond" />
                  VPS Hosting
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem className="text-white hover:text-creeper hover:bg-grass/20 focus:text-creeper focus:bg-grass/20 rounded-pixel m-1 px-3 py-2 transition-all duration-100 border-2 border-transparent hover:border-grass">
                <Link to="/plans/discord-bot" className="w-full flex items-center gap-3">
                  <Bot size={16} className="text-purple-400" />
                  Discord Bot
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <Link to="/creeperpanel" className="text-white hover:text-creeper transition-all duration-100 whitespace-nowrap text-xs font-pixel px-2 py-1.5 relative group rounded-pixel hover:bg-grass/20 border-2 border-transparent hover:border-grass">
            <span className="relative z-10">Panel</span>
          </Link>
          <Link to="/plans/creepershield" className="text-white hover:text-white transition-all duration-100 whitespace-nowrap text-xs font-pixel bg-purple-500/30 px-2 py-1.5 rounded-pixel border-2 border-purple-500 shadow-pixel hover:shadow-pixel-sm relative overflow-hidden group">
            <span className="flex items-center gap-1.5 relative z-10">
              <Shield size={14} />
              Shield
            </span>
          </Link>
          
          <DropdownMenu>
            <DropdownMenuTrigger className="text-white hover:text-creeper transition-all duration-100 whitespace-nowrap text-xs font-pixel flex items-center gap-1.5 bg-transparent border-2 border-transparent px-2 py-1.5 rounded-pixel hover:bg-stone/20 hover:border-stone focus:outline-none group">
              <Building2 size={14} />
              Info
              <ChevronDown size={12} className="group-hover:rotate-180 transition-transform duration-300" />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="stone-bg border-4 border-stone-dark z-[10000] rounded-block shadow-pixel-lg min-w-[200px] font-pixel">
              <DropdownMenuItem className="text-white hover:text-creeper hover:bg-grass/20 focus:text-creeper focus:bg-grass/20 rounded-pixel m-1 px-3 py-2 transition-all duration-100 border-2 border-transparent hover:border-grass">
                <Link to="/locations" className="w-full flex items-center gap-3">
                  <MapPin size={16} className="text-diamond" />
                  Locations
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem className="text-white hover:text-creeper hover:bg-grass/20 focus:text-creeper focus:bg-grass/20 rounded-pixel m-1 px-3 py-2 transition-all duration-100 border-2 border-transparent hover:border-grass">
                <Link to="/datacenter" className="w-full flex items-center gap-3">
                  <Server size={16} className="text-creeper" />
                  Datacenter
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          
          <a href="/about" className="text-white hover:text-creeper transition-all duration-100 whitespace-nowrap text-xs font-pixel px-2 py-1.5 relative group rounded-pixel hover:bg-grass/20 border-2 border-transparent hover:border-grass" onClick={(e) => handleNavigation('/about', e)}>
            <span className="relative z-10">About</span>
          </a>
          <Link to="/partners" className="text-white hover:text-creeper transition-all duration-100 whitespace-nowrap text-xs font-pixel px-2 py-1.5 relative group rounded-pixel hover:bg-grass/20 border-2 border-transparent hover:border-grass">
            <span className="relative z-10">Partners</span>
          </Link>
          <Link to="/contact" className="text-white hover:text-creeper transition-all duration-100 whitespace-nowrap text-xs font-pixel px-2 py-1.5 relative group rounded-pixel hover:bg-grass/20 border-2 border-transparent hover:border-grass">
            <span className="relative z-10">Contact</span>
          </Link>
          <Link to="/links" className="text-white hover:text-creeper transition-all duration-100 whitespace-nowrap text-xs font-pixel grass-bg px-2 py-1.5 rounded-pixel border-2 border-grass-dark shadow-pixel hover:shadow-pixel-sm">
            Links
          </Link>
          
          <Button className="minecraft-btn rounded-pixel text-xs px-3 py-1.5 bg-purple-600 hover:bg-purple-700 border-b-4 border-b-black" asChild>
            <Link to="/discord" className="flex items-center gap-1.5">
              💬 Discord
            </Link>
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
            
            <Link to="/plans/ryzen9" className="text-white hover:text-amber-400 transition-all duration-300 py-2 bg-gradient-to-r from-amber-500/15 to-orange-600/15 px-3 rounded-lg border border-amber-500/40 hover:border-amber-400/60" onClick={() => setIsOpen(false)}>⚡ Ryzen 9 Hosting</Link>
            
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
            <Link to="/partners" className="text-white hover:text-creeper transition-all duration-300 py-2 px-2 rounded-lg hover:bg-creeper/10" onClick={() => setIsOpen(false)}>👥 Partners</Link>
            <Link to="/contact" className="text-white hover:text-creeper transition-all duration-300 py-2 px-2 rounded-lg hover:bg-creeper/10" onClick={() => setIsOpen(false)}>📧 Contact</Link>
            <Link to="/links" className="text-white hover:text-creeper transition-all duration-300 py-2 bg-creeper/10 px-3 rounded-lg border border-creeper/30 hover:border-creeper/50" onClick={() => setIsOpen(false)}>🔗 Official Links</Link>
            
            <div className="pt-4 border-t border-gray-800 space-y-3">
              <Button className="minecraft-btn rounded w-full bg-purple-600 hover:bg-purple-700 border border-purple-500/30" asChild>
                <Link to="/discord" className="flex items-center justify-center gap-2" onClick={() => setIsOpen(false)}>
                  Discord
                </Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
