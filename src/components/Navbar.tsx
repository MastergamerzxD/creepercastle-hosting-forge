
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Menu, X, Server } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="py-4 border-b border-creeper/20 bg-navy-dark/80 backdrop-blur-md fixed top-0 w-full z-50">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <div className="flex items-center">
            <img 
              src="/lovable-uploads/394abece-307b-48f2-8c38-4d2123607648.png" 
              alt="CreeperCastle.cloud" 
              className="h-10 w-10"
            />
            <span className="font-bold text-xl ml-2 text-white">CreeperCastle<span className="text-creeper">.cloud</span></span>
          </div>
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          <Link to="/" className="text-white hover:text-creeper transition-colors">Home</Link>
          <Link to="/plans" className="text-white hover:text-creeper transition-colors">Plans</Link>
          <Link to="/locations" className="text-white hover:text-creeper transition-colors">Locations</Link>
          <Link to="/features" className="text-white hover:text-creeper transition-colors">Features</Link>
          <Link to="/control-panel" className="text-white hover:text-creeper transition-colors">Control Panel</Link>
          <Link to="/contact" className="text-white hover:text-creeper transition-colors">Contact</Link>
          <Button className="minecraft-btn rounded">Client Area</Button>
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
        <div className="md:hidden bg-navy-dark/95 backdrop-blur-md absolute top-16 left-0 w-full border-b border-creeper/20">
          <div className="container mx-auto px-4 py-4 space-y-4 flex flex-col">
            <Link to="/" className="text-white hover:text-creeper transition-colors" onClick={() => setIsOpen(false)}>Home</Link>
            <Link to="/plans" className="text-white hover:text-creeper transition-colors" onClick={() => setIsOpen(false)}>Plans</Link>
            <Link to="/locations" className="text-white hover:text-creeper transition-colors" onClick={() => setIsOpen(false)}>Locations</Link>
            <Link to="/features" className="text-white hover:text-creeper transition-colors" onClick={() => setIsOpen(false)}>Features</Link>
            <Link to="/control-panel" className="text-white hover:text-creeper transition-colors" onClick={() => setIsOpen(false)}>Control Panel</Link>
            <Link to="/contact" className="text-white hover:text-creeper transition-colors" onClick={() => setIsOpen(false)}>Contact</Link>
            <Button className="minecraft-btn rounded w-full">Client Area</Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
