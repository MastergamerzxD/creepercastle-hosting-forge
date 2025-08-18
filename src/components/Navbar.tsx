
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
        <div className="hidden md:flex items-center space-x-3 lg:space-x-4 flex-wrap">
          <Link to="/" className="text-white hover:text-creeper transition-colors whitespace-nowrap">Home</Link>
          <Link to="/plans/minecraft" className="text-white hover:text-creeper transition-colors whitespace-nowrap">Minecraft Hosting</Link>
          <Link to="/plans/creepershield" className="text-white hover:text-creeper transition-colors whitespace-nowrap">CreeperShield</Link>
          <Link to="/plans/creepershield-anycasted" className="text-white hover:text-creeper transition-colors whitespace-nowrap">CreeperShield Anycasted</Link>
          <Link to="/plans/other" className="text-white hover:text-creeper transition-colors whitespace-nowrap">Other Hosting</Link>
          <Link to="/creeperpanel" className="text-white hover:text-creeper transition-colors whitespace-nowrap">CreeperPanel</Link>
          <Link to="/locations" className="text-white hover:text-creeper transition-colors whitespace-nowrap">Locations</Link>
          <a href="/about" className="text-white hover:text-creeper transition-colors whitespace-nowrap" onClick={(e) => handleNavigation('/about', e)}>About</a>
          <Link to="/contact" className="text-white hover:text-creeper transition-colors whitespace-nowrap">Contact</Link>
          
          <Button className="minecraft-btn rounded text-sm px-3 py-2" asChild>
            <a href="https://control.creepercastle.in" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1">
              Game Panel
            </a>
          </Button>
          
          <Button className="minecraft-btn rounded text-sm px-3 py-2 bg-purple-600 hover:bg-purple-700" asChild>
            <Link to="/discord" className="flex items-center gap-1">
              Discord
            </Link>
          </Button>
          
          <Button className="minecraft-btn rounded text-sm px-3 py-2" asChild>
            <a href="https://billing.creepercastle.in/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1">
              <Store size={16} />
              Store
            </a>
          </Button>
        </div>
        
        {/* Mobile menu button */}
        <div className="md:hidden">
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="text-white hover:text-creeper"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-navy-dark/98 backdrop-blur-lg absolute top-16 left-0 w-full border-b border-creeper/20 z-[9998] shadow-xl">
          <div className="container mx-auto px-4 py-4 space-y-4 flex flex-col">
            <Link to="/" className="text-white hover:text-creeper transition-colors" onClick={() => setIsOpen(false)}>Home</Link>
            <Link to="/plans/minecraft" className="text-white hover:text-creeper transition-colors" onClick={() => setIsOpen(false)}>Minecraft Hosting</Link>
            <Link to="/plans/creepershield" className="text-white hover:text-creeper transition-colors" onClick={() => setIsOpen(false)}>CreeperShield</Link>
            <Link to="/plans/creepershield-anycasted" className="text-white hover:text-creeper transition-colors" onClick={() => setIsOpen(false)}>CreeperShield Anycasted</Link>
            <Link to="/plans/other" className="text-white hover:text-creeper transition-colors" onClick={() => setIsOpen(false)}>Other Hosting</Link>
            <Link to="/creeperpanel" className="text-white hover:text-creeper transition-colors" onClick={() => setIsOpen(false)}>CreeperPanel</Link>
            <Link to="/locations" className="text-white hover:text-creeper transition-colors" onClick={() => setIsOpen(false)}>Locations</Link>
            <a href="/about" className="text-white hover:text-creeper transition-colors" onClick={(e) => handleNavigation('/about', e)}>About</a>
            <Link to="/contact" className="text-white hover:text-creeper transition-colors" onClick={() => setIsOpen(false)}>Contact</Link>
            
            <div className="pt-2 border-t border-gray-800 space-y-3">
              <Button className="minecraft-btn rounded w-full" asChild>
                <a href="https://control.creepercastle.in" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
                  Game Panel
                </a>
              </Button>
              
              <Button className="minecraft-btn rounded w-full bg-purple-600 hover:bg-purple-700" asChild>
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
