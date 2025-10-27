
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
    <nav className="py-4 border-b border-creeper/30 bg-navy-dark/95 backdrop-blur-xl fixed top-0 w-full z-[9999] shadow-2xl shadow-creeper/10">
      <div className="container mx-auto px-4 flex justify-between items-center min-h-[4rem] gap-4">
        {/* Left Section - Hosting Options */}
        <div className="hidden lg:flex items-center space-x-1.5 flex-shrink-0">
          <Link to="/plans/minecraft" className="text-white hover:text-creeper transition-all duration-300 whitespace-nowrap text-base bg-creeper/15 px-3 py-2 rounded-lg border border-creeper/40 hover:border-creeper/60 hover:bg-creeper/25 relative overflow-hidden group">
            <span className="flex items-center gap-2 relative z-10">
              <Gamepad2 size={16} />
              Minecraft Classic
            </span>
            <span className="absolute inset-0 bg-gradient-to-r from-creeper/0 via-creeper/10 to-creeper/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></span>
          </Link>
          <Link to="/plans/performance" className="text-white hover:text-amber-400 transition-all duration-300 whitespace-nowrap text-base bg-gradient-to-r from-amber-500/15 to-orange-600/15 px-3 py-2 rounded-lg border border-amber-500/40 hover:border-amber-400/60 hover:bg-gradient-to-r hover:from-amber-500/25 hover:to-orange-600/25 relative overflow-hidden group">
            <span className="flex items-center gap-2 relative z-10">
              <Zap size={16} className="text-amber-400" />
              Minecraft Performance
            </span>
            <span className="absolute inset-0 bg-gradient-to-r from-amber-500/0 via-amber-400/10 to-amber-500/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></span>
          </Link>
          
          <DropdownMenu>
            <DropdownMenuTrigger className="text-white hover:text-creeper transition-all duration-300 whitespace-nowrap text-base flex items-center gap-2 bg-transparent border-none px-3 py-2 rounded-lg hover:bg-white/5 focus:outline-none group">
              <Server size={16} />
              Others
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

          <Link to="/plans/creepershield" className="text-white hover:text-creeper transition-all duration-300 whitespace-nowrap text-base bg-purple-500/15 px-3 py-2 rounded-lg border border-purple-500/40 hover:border-purple-500/60 hover:bg-purple-500/25 relative overflow-hidden group">
            <span className="flex items-center gap-2 relative z-10">
              <Shield size={16} />
              Shield
            </span>
            <span className="absolute inset-0 bg-gradient-to-r from-purple-500/0 via-purple-500/10 to-purple-500/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></span>
          </Link>
        </div>

        {/* Center - Logo */}
        <Link to="/" className="flex items-center space-x-2 flex-shrink-0 lg:absolute lg:left-1/2 lg:transform lg:-translate-x-1/2">
          <div className="flex items-center">
            <img 
              src="/lovable-uploads/394abece-307b-48f2-8c38-4d2123607648.png" 
              alt="CreeperCastle.cloud" 
              className="h-10 w-10"
            />
            <span className="font-bold text-xl ml-2 whitespace-nowrap">
              <span className="text-white">Creeper</span>
              <span className="text-creeper">Castle</span>
            </span>
          </div>
        </Link>
        
        {/* Right Section - Company Info */}
        <div className="hidden lg:flex items-center space-x-1.5 flex-shrink-0">
          <DropdownMenu>
            <DropdownMenuTrigger className="text-white hover:text-creeper transition-all duration-300 whitespace-nowrap text-base flex items-center gap-2 bg-transparent border-none px-3 py-2 rounded-lg hover:bg-white/5 focus:outline-none group">
              <Building2 size={16} />
              Company Info
              <ChevronDown size={14} className="group-hover:rotate-180 transition-transform duration-300" />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-navy-dark/95 backdrop-blur-xl border border-creeper/30 z-[10000] rounded-xl shadow-2xl shadow-creeper/20 min-w-[200px]">
              <DropdownMenuItem className="text-white hover:text-creeper hover:bg-creeper/10 focus:text-creeper focus:bg-creeper/10 rounded-lg m-1 px-3 py-2 transition-all duration-200">
                <a href="/about" onClick={(e) => handleNavigation('/about', e)} className="w-full flex items-center gap-3">
                  <Building2 size={16} className="text-blue-400" />
                  About
                </a>
              </DropdownMenuItem>
              <DropdownMenuItem className="text-white hover:text-creeper hover:bg-creeper/10 focus:text-creeper focus:bg-creeper/10 rounded-lg m-1 px-3 py-2 transition-all duration-200">
                <Link to="/partners" className="w-full flex items-center gap-3">
                  <Server size={16} className="text-creeper" />
                  Partners
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem className="text-white hover:text-creeper hover:bg-creeper/10 focus:text-creeper focus:bg-creeper/10 rounded-lg m-1 px-3 py-2 transition-all duration-200">
                <Link to="/creeperpanel" className="w-full flex items-center gap-3">
                  <Server size={16} className="text-orange-400" />
                  CreeperPanel
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem className="text-white hover:text-creeper hover:bg-creeper/10 focus:text-creeper focus:bg-creeper/10 rounded-lg m-1 px-3 py-2 transition-all duration-200">
                <Link to="/datacenter" className="w-full flex items-center gap-3">
                  <Building2 size={16} className="text-cyan-400" />
                  Infrastructure
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem className="text-white hover:text-creeper hover:bg-creeper/10 focus:text-creeper focus:bg-creeper/10 rounded-lg m-1 px-3 py-2 transition-all duration-200">
                <Link to="/locations" className="w-full flex items-center gap-3">
                  <MapPin size={16} className="text-pink-400" />
                  Locations
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <Link to="/links" className="text-white hover:text-creeper transition-all duration-300 whitespace-nowrap text-base bg-creeper/10 px-3 py-2 rounded-lg border border-creeper/30 hover:border-creeper/50 hover:bg-creeper/20">
            Links
          </Link>

          <Link to="/contact" className="text-white hover:text-creeper transition-all duration-300 whitespace-nowrap text-base px-3 py-2 relative group">
            <span className="relative z-10">Contact Us</span>
            <span className="absolute inset-0 bg-creeper/10 rounded-md scale-0 group-hover:scale-100 transition-transform duration-300"></span>
          </Link>

          <Button className="minecraft-btn rounded text-base px-4 py-2 bg-emerald-600 hover:bg-emerald-700 border border-emerald-500/30 hover:scale-105 transition-all duration-300" asChild>
            <a href="https://store.creepercastle.cloud" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
              <Store size={16} />
              Store
            </a>
          </Button>
          
          <Button className="minecraft-btn rounded text-base px-4 py-2 bg-violet-600 hover:bg-violet-700 border border-violet-500/30 hover:scale-105 transition-all duration-300" asChild>
            <Link to="/discord" className="flex items-center gap-2">
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
            
            <Link to="/plans/minecraft" className="text-white hover:text-creeper transition-all duration-300 py-2 bg-creeper/15 px-3 rounded-lg border border-creeper/40 hover:border-creeper/60" onClick={() => setIsOpen(false)}>🎮 Minecraft Classic</Link>
            
            <Link to="/plans/performance" className="text-white hover:text-amber-400 transition-all duration-300 py-2 bg-gradient-to-r from-amber-500/15 to-orange-600/15 px-3 rounded-lg border border-amber-500/40 hover:border-amber-400/60" onClick={() => setIsOpen(false)}>⚡ Minecraft Performance</Link>
            
            <div className="text-white py-2">
              <span className="text-gray-300 font-medium flex items-center gap-2 mb-2">
                <Server size={16} />
                Others:
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
            
            <Link to="/plans/creepershield" className="text-white hover:text-creeper transition-all duration-300 py-2 bg-purple-500/15 px-3 rounded-lg border border-purple-500/40 hover:border-purple-500/60" onClick={() => setIsOpen(false)}>🛡️ Shield</Link>
            
            <div className="text-white py-2">
              <span className="text-gray-300 font-medium flex items-center gap-2 mb-2">
                <Building2 size={16} />
                Company Info:
              </span>
              <a href="/about" className="text-white hover:text-creeper transition-all duration-300 py-2 pl-4 block hover:bg-creeper/10 rounded-lg flex items-center gap-2" onClick={(e) => handleNavigation('/about', e)}>
                <Building2 size={14} className="text-blue-400" />
                About
              </a>
              <Link to="/partners" className="text-white hover:text-creeper transition-all duration-300 py-2 pl-4 block hover:bg-creeper/10 rounded-lg flex items-center gap-2" onClick={() => setIsOpen(false)}>
                <Server size={14} className="text-creeper" />
                Partners
              </Link>
              <Link to="/creeperpanel" className="text-white hover:text-creeper transition-all duration-300 py-2 pl-4 block hover:bg-creeper/10 rounded-lg flex items-center gap-2" onClick={() => setIsOpen(false)}>
                <Server size={14} className="text-orange-400" />
                CreeperPanel
              </Link>
              <Link to="/datacenter" className="text-white hover:text-creeper transition-all duration-300 py-2 pl-4 block hover:bg-creeper/10 rounded-lg flex items-center gap-2" onClick={() => setIsOpen(false)}>
                <Building2 size={14} className="text-cyan-400" />
                Infrastructure
              </Link>
              <Link to="/locations" className="text-white hover:text-creeper transition-all duration-300 py-2 pl-4 block hover:bg-creeper/10 rounded-lg flex items-center gap-2" onClick={() => setIsOpen(false)}>
                <MapPin size={14} className="text-pink-400" />
                Locations
              </Link>
            </div>
            
            <Link to="/links" className="text-white hover:text-creeper transition-all duration-300 py-2 bg-creeper/10 px-3 rounded-lg border border-creeper/30 hover:border-creeper/50" onClick={() => setIsOpen(false)}>🔗 Links</Link>
            <Link to="/contact" className="text-white hover:text-creeper transition-all duration-300 py-2 px-2 rounded-lg hover:bg-creeper/10" onClick={() => setIsOpen(false)}>📧 Contact Us</Link>
            
            <div className="pt-4 border-t border-gray-800 space-y-3">
              <Button className="minecraft-btn rounded w-full bg-emerald-600 hover:bg-emerald-700 border border-emerald-500/30" asChild>
                <a href="https://store.creepercastle.cloud" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
                  🏪 Store
                </a>
              </Button>
              <Button className="minecraft-btn rounded w-full bg-violet-600 hover:bg-violet-700 border border-violet-500/30" asChild>
                <Link to="/discord" className="flex items-center justify-center gap-2" onClick={() => setIsOpen(false)}>
                  💬 Discord
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
