
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Menu, X, Store } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  
  const handleNavigation = (path: string, e: React.MouseEvent) => {
    e.preventDefault();
    setIsOpen(false);
    navigate(path);
  };

  return (
    <nav className="py-4 border-b border-creeper/20 bg-navy-dark/95 backdrop-blur-lg fixed top-0 w-full z-[9999] shadow-lg">
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
        <div className="hidden lg:flex items-center space-x-2 xl:space-x-3 flex-wrap">
          <Link to="/" className="text-white hover:text-creeper transition-colors whitespace-nowrap text-sm xl:text-base">Home</Link>
          <Link to="/free-hosting" className="text-white hover:text-creeper transition-colors whitespace-nowrap text-sm xl:text-base bg-green-500/10 px-2 py-1 rounded border border-green-500/30">Free Hosting</Link>
          <Link to="/plans/minecraft" className="text-white hover:text-creeper transition-colors whitespace-nowrap text-sm xl:text-base">Minecraft Hosting</Link>
          
          <Link to="/plans/creepershield-anycasted" className="text-white hover:text-creeper transition-colors whitespace-nowrap text-sm xl:text-base">CreeperShield Anycasted</Link>
          <Link to="/plans/other" className="text-white hover:text-creeper transition-colors whitespace-nowrap text-sm xl:text-base">Other Hosting</Link>
          <Link to="/creeperpanel" className="text-white hover:text-creeper transition-colors whitespace-nowrap text-sm xl:text-base">CreeperPanel</Link>
          <Link to="/locations" className="text-white hover:text-creeper transition-colors whitespace-nowrap text-sm xl:text-base">Locations</Link>
          <a href="/about" className="text-white hover:text-creeper transition-colors whitespace-nowrap text-sm xl:text-base" onClick={(e) => handleNavigation('/about', e)}>About</a>
          <Link to="/contact" className="text-white hover:text-creeper transition-colors whitespace-nowrap text-sm xl:text-base">Contact</Link>
          <Link to="/links" className="text-white hover:text-creeper transition-colors whitespace-nowrap text-sm xl:text-base bg-creeper/10 px-2 py-1 rounded border border-creeper/30">Links</Link>
          
          <Button className="minecraft-btn rounded text-xs xl:text-sm px-2 xl:px-3 py-2" asChild>
            <a href="https://control.creepercastle.in" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1">
              Game Panel
            </a>
          </Button>
          
          <Button className="minecraft-btn rounded text-xs xl:text-sm px-2 xl:px-3 py-2 bg-purple-600 hover:bg-purple-700 border border-purple-500/30" asChild>
            <Link to="/discord" className="flex items-center gap-1">
              Discord
            </Link>
          </Button>
          
          <Button className="minecraft-btn rounded text-xs xl:text-sm px-2 xl:px-3 py-2" asChild>
            <a href="https://billing.creepercastle.in/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1">
              <Store size={14} className="xl:w-4 xl:h-4" />
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
        <div className="lg:hidden bg-navy-dark/98 backdrop-blur-lg absolute top-[4.5rem] left-0 w-full border-b border-creeper/20 z-[9998] shadow-xl max-h-[80vh] overflow-y-auto">
          <div className="container mx-auto px-4 py-6 space-y-4 flex flex-col">
            <Link to="/" className="text-white hover:text-creeper transition-colors py-2" onClick={() => setIsOpen(false)}>Home</Link>
            <Link to="/free-hosting" className="text-white hover:text-creeper transition-colors py-2 bg-green-500/10 px-3 rounded border border-green-500/30" onClick={() => setIsOpen(false)}>Free Hosting</Link>
            <Link to="/plans/minecraft" className="text-white hover:text-creeper transition-colors py-2" onClick={() => setIsOpen(false)}>Minecraft Hosting</Link>
            
            <Link to="/plans/creepershield-anycasted" className="text-white hover:text-creeper transition-colors py-2" onClick={() => setIsOpen(false)}>CreeperShield Anycasted</Link>
            <Link to="/plans/other" className="text-white hover:text-creeper transition-colors py-2" onClick={() => setIsOpen(false)}>Other Hosting</Link>
            <Link to="/creeperpanel" className="text-white hover:text-creeper transition-colors py-2" onClick={() => setIsOpen(false)}>CreeperPanel</Link>
            <Link to="/locations" className="text-white hover:text-creeper transition-colors py-2" onClick={() => setIsOpen(false)}>Locations</Link>
            <a href="/about" className="text-white hover:text-creeper transition-colors py-2" onClick={(e) => handleNavigation('/about', e)}>About</a>
            <Link to="/contact" className="text-white hover:text-creeper transition-colors py-2" onClick={() => setIsOpen(false)}>Contact</Link>
            <Link to="/links" className="text-white hover:text-creeper transition-colors py-2 bg-creeper/10 px-3 rounded border border-creeper/30" onClick={() => setIsOpen(false)}>Official Links</Link>
            
            <div className="pt-4 border-t border-gray-800 space-y-3">
              <Button className="minecraft-btn rounded w-full" asChild>
                <a href="https://control.creepercastle.in" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
                  Game Panel
                </a>
              </Button>
              
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
