
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Github } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-navy-dark text-white pt-16 pb-8 border-t border-creeper/20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <img 
                src="/lovable-uploads/394abece-307b-48f2-8c38-4d2123607648.png" 
                alt="CreeperCastle.cloud" 
                className="h-10 w-10"
              />
              <span className="font-bold text-xl ml-2">CreeperCastle<span className="text-creeper">.cloud</span></span>
            </div>
            <p className="text-gray-400 mb-4">
              Premium Minecraft hosting with unbeatable performance, protection and support.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-creeper">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-creeper">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-creeper">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-creeper">
                <Github size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-bold mb-4 text-lg">Hosting</h3>
            <ul className="space-y-2">
              <li><Link to="/plans" className="text-gray-400 hover:text-creeper">Minecraft Plans</Link></li>
              <li><Link to="/plans" className="text-gray-400 hover:text-creeper">Modded Minecraft</Link></li>
              <li><Link to="/plans" className="text-gray-400 hover:text-creeper">BungeeCord</Link></li>
              <li><Link to="/plans" className="text-gray-400 hover:text-creeper">Enterprise Solutions</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold mb-4 text-lg">Company</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-400 hover:text-creeper">About Us</Link></li>
              <li><Link to="/locations" className="text-gray-400 hover:text-creeper">Server Locations</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-creeper">Contact Us</Link></li>
              <li><Link to="/careers" className="text-gray-400 hover:text-creeper">Careers</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold mb-4 text-lg">Support</h3>
            <ul className="space-y-2">
              <li><Link to="/help" className="text-gray-400 hover:text-creeper">Knowledge Base</Link></li>
              <li><Link to="/support" className="text-gray-400 hover:text-creeper">Support Center</Link></li>
              <li><Link to="/status" className="text-gray-400 hover:text-creeper">Server Status</Link></li>
              <li><Link to="/faq" className="text-gray-400 hover:text-creeper">FAQ</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} CreeperCastle.cloud. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <Link to="/terms" className="text-gray-400 text-sm hover:text-creeper">Terms of Service</Link>
            <Link to="/privacy" className="text-gray-400 text-sm hover:text-creeper">Privacy Policy</Link>
            <Link to="/legal" className="text-gray-400 text-sm hover:text-creeper">Legal</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
