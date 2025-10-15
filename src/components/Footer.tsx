
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="dirt-bg text-white pt-16 pb-8 border-t-4 border-stone-dark relative pixel-grid">
      {/* Minecraft-style decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 w-full h-2 bg-gradient-to-r from-grass via-creeper to-grass"></div>
        <div className="absolute bottom-40 right-10 w-32 h-32 grass-bg rounded-block opacity-20 border-2 border-grass-dark"></div>
        <div className="absolute top-20 left-10 w-24 h-24 stone-bg rounded-block opacity-20 border-2 border-stone-dark"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4 pixel-border p-2 rounded-pixel bg-grass/20 inline-block">
              <img 
                src="/lovable-uploads/394abece-307b-48f2-8c38-4d2123607648.png" 
                alt="CreeperCastle.cloud" 
                className="h-10 w-10"
                style={{ imageRendering: 'pixelated' }}
              />
              <span className="font-minecraft text-base ml-2">Creeper<span className="text-creeper">Castle</span></span>
            </div>
            <p className="font-pixel text-sm text-gray-300 mb-4">
              Premium Minecraft hosting with unbeatable performance, protection and support.
            </p>
          </div>
          
          <div>
            <h3 className="font-minecraft text-sm mb-4 border-l-4 border-creeper pl-3 text-creeper">Hosting</h3>
            <ul className="space-y-2">
              <li><a href="https://billing.creepercastle.in/index.php?rp=/store/minecraft-performance-servers" target="_blank" rel="noopener noreferrer" className="font-pixel text-sm text-gray-300 hover:text-creeper transition-colors duration-100 hover:translate-x-1 inline-block">Minecraft Plans</a></li>
              <li><a href="https://billing.creepercastle.in/index.php?rp=/store/vps-hosting" target="_blank" rel="noopener noreferrer" className="font-pixel text-sm text-gray-300 hover:text-creeper transition-colors duration-100 hover:translate-x-1 inline-block">VPS Hosting</a></li>
              <li><a href="/plans/creepershield" className="font-pixel text-sm text-gray-300 hover:text-creeper transition-colors duration-100 hover:translate-x-1 inline-block">CreeperShield</a></li>
              <li><a href="https://discord.gg/RuQ9neH56S" target="_blank" rel="noopener noreferrer" className="font-pixel text-sm text-gray-300 hover:text-creeper transition-colors duration-100 hover:translate-x-1 inline-block">Enterprise Solutions</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-minecraft text-sm mb-4 border-l-4 border-creeper pl-3 text-creeper">Company</h3>
            <ul className="space-y-2">
              <li><Link to="/contact" className="font-pixel text-sm text-gray-300 hover:text-creeper transition-colors duration-100 hover:translate-x-1 inline-block">About Us</Link></li>
              <li><Link to="/#locations" className="font-pixel text-sm text-gray-300 hover:text-creeper transition-colors duration-100 hover:translate-x-1 inline-block">Server Locations</Link></li>
              <li><Link to="/contact" className="font-pixel text-sm text-gray-300 hover:text-creeper transition-colors duration-100 hover:translate-x-1 inline-block">Contact Us</Link></li>
              <li><a href="https://discord.gg/RuQ9neH56S" target="_blank" rel="noopener noreferrer" className="font-pixel text-sm text-gray-300 hover:text-creeper transition-colors duration-100 hover:translate-x-1 inline-block">Join Our Team</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-minecraft text-sm mb-4 border-l-4 border-creeper pl-3 text-creeper">Support</h3>
            <ul className="space-y-2">
              <li><a href="https://billing.creepercastle.in/index.php?rp=/knowledgebase" target="_blank" rel="noopener noreferrer" className="font-pixel text-sm text-gray-300 hover:text-creeper transition-colors duration-100 hover:translate-x-1 inline-block">Knowledge Base</a></li>
              <li><a href="https://discord.gg/RuQ9neH56S" target="_blank" rel="noopener noreferrer" className="font-pixel text-sm text-gray-300 hover:text-creeper transition-colors duration-100 hover:translate-x-1 inline-block">Support Center</a></li>
              <li><a href="https://status.creepercastle.in" target="_blank" rel="noopener noreferrer" className="font-pixel text-sm text-gray-300 hover:text-creeper transition-colors duration-100 hover:translate-x-1 inline-block">Server Status</a></li>
              <li><Link to="/contact" className="font-pixel text-sm text-gray-300 hover:text-creeper transition-colors duration-100 hover:translate-x-1 inline-block">FAQ</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t-4 border-stone-dark mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="font-pixel text-gray-300 text-xs mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} CreeperCastle.cloud. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="https://creepercastle-tos.edgeone.app/" target="_blank" rel="noopener noreferrer" className="font-pixel text-gray-300 text-xs hover:text-creeper transition-colors duration-100">Terms of Service</a>
            <a href="https://creepercastleprivacypolicy.edgeone.app/" target="_blank" rel="noopener noreferrer" className="font-pixel text-gray-300 text-xs hover:text-creeper transition-colors duration-100">Privacy Policy</a>
            <a href="https://billing.creepercastle.in/index.php?rp=/knowledgebase/4/Refund-Policy-.html" target="_blank" rel="noopener noreferrer" className="font-pixel text-xs text-gray-300 hover:text-creeper transition-colors duration-100">Refund Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
