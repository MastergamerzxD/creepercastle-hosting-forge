import { useState, useEffect } from 'react';
import { X, Sparkles, Server, Cpu, Zap, Shield, Crown, ArrowRight, Phone, MessageSquare, Ticket } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useToast } from '@/hooks/use-toast';
import { useIsMobile } from '@/hooks/use-mobile';

const VPSPlansPopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();
  const isMobile = useIsMobile();

  useEffect(() => {
    // Show popup after a short delay when component mounts, but only for non-mobile users
    if (!isMobile) {
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 1500);

      return () => clearTimeout(timer);
    }
  }, [isMobile]);

  const handleNavigation = (path: string) => {
    setIsOpen(false);
    navigate(path);
    toast({
      title: "Redirecting...",
      description: "Taking you to our VPS plans",
    });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[10000] flex items-center justify-center bg-black/85 backdrop-blur-lg animate-fade-in p-1.5 sm:p-4">
      <div className="relative w-full max-w-[95vw] sm:max-w-xl md:max-w-2xl lg:max-w-3xl max-h-[92vh] sm:max-h-[85vh] overflow-y-auto scrollbar-hide animate-scale-in">
        {/* Close Button - Mobile Optimized */}
        <button
          onClick={() => setIsOpen(false)}
          className="sticky top-0.5 left-[calc(100%-2rem)] sm:absolute sm:-top-3 sm:-right-3 z-50 bg-gradient-to-br from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 rounded-full p-1 sm:p-2.5 shadow-2xl hover:scale-110 transition-all duration-300 group border border-white ml-auto mb-0.5 sm:mb-0"
          aria-label="Close popup"
        >
          <X className="w-3 h-3 sm:w-5 sm:h-5 text-white group-hover:rotate-90 transition-transform duration-300" />
        </button>

        {/* Main Popup Container */}
        <div className="relative bg-gradient-to-br from-navy-dark via-gray-900 to-black rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl border-2 border-cyan-500/50 scrollbar-hide">
          {/* Animated Background Elements */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
            <div className="absolute -top-20 -left-20 w-64 h-64 bg-gradient-to-br from-cyan-500/20 to-blue-600/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-gradient-to-br from-blue-500/20 to-cyan-600/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-cyan-400/10 to-blue-600/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
          </div>

          <div className="relative p-1.5 sm:p-4 md:p-5 lg:p-6">
            {/* Header Section */}
            <div className="text-center mb-2 sm:mb-5">
              <div className="inline-flex items-center gap-0.5 sm:gap-2 bg-gradient-to-r from-cyan-500 via-blue-600 to-cyan-500 text-white px-1.5 sm:px-3 py-0.5 sm:py-1.5 rounded-full mb-1 sm:mb-2 shadow-lg shadow-cyan-500/50 text-[9px] sm:text-xs">
                <Sparkles className="w-2 h-2 sm:w-3 sm:h-3 animate-pulse" />
                <span className="font-bold tracking-wider">NEW</span>
                <Sparkles className="w-2 h-2 sm:w-3 sm:h-3 animate-pulse" />
              </div>
              
              <h2 className="text-sm sm:text-xl md:text-2xl lg:text-3xl font-bold mb-1 sm:mb-2 leading-tight px-0.5">
                <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-600 bg-clip-text text-transparent">
                  Intel Platinum 8168
                </span>
                <br />
                <span className="text-white">VPS Plans Live! 🚀</span>
              </h2>
              
              <p className="text-[9px] sm:text-xs md:text-sm text-gray-300 max-w-2xl mx-auto px-0.5">
                Enterprise-grade <span className="text-cyan-400 font-semibold">24-core</span> power on our optimized infrastructure
              </p>
            </div>

            {/* Key Features Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-1 sm:gap-2 mb-2 sm:mb-4">
              <div className="bg-gradient-to-br from-cyan-500/10 to-blue-600/10 backdrop-blur-sm border border-cyan-500/30 rounded-lg p-1 sm:p-2 text-center hover:border-cyan-500/60 transition-all duration-300 group">
                <div className="bg-gradient-to-br from-cyan-500 to-blue-600 p-0.5 sm:p-1.5 rounded-lg inline-block mb-0.5 sm:mb-1 shadow-lg shadow-cyan-500/30 group-hover:scale-110 transition-transform duration-300">
                  <Cpu className="w-2.5 h-2.5 sm:w-4 sm:h-4 text-white" />
                </div>
                <div className="text-[9px] sm:text-xs font-bold text-cyan-400">24 Cores</div>
                <div className="text-[7px] sm:text-[10px] text-gray-400">Platinum</div>
              </div>

              <div className="bg-gradient-to-br from-blue-500/10 to-cyan-600/10 backdrop-blur-sm border border-blue-500/30 rounded-lg p-1 sm:p-2 text-center hover:border-blue-500/60 transition-all duration-300 group">
                <div className="bg-gradient-to-br from-blue-500 to-cyan-600 p-0.5 sm:p-1.5 rounded-lg inline-block mb-0.5 sm:mb-1 shadow-lg shadow-blue-500/30 group-hover:scale-110 transition-transform duration-300">
                  <Shield className="w-2.5 h-2.5 sm:w-4 sm:h-4 text-white" />
                </div>
                <div className="text-[9px] sm:text-xs font-bold text-blue-400">17 Tbps</div>
                <div className="text-[7px] sm:text-[10px] text-gray-400">DDoS</div>
              </div>

              <div className="bg-gradient-to-br from-cyan-500/10 to-creeper/10 backdrop-blur-sm border border-cyan-500/30 rounded-lg p-1 sm:p-2 text-center hover:border-cyan-500/60 transition-all duration-300 group">
                <div className="bg-gradient-to-br from-cyan-500 to-creeper p-0.5 sm:p-1.5 rounded-lg inline-block mb-0.5 sm:mb-1 shadow-lg shadow-cyan-500/30 group-hover:scale-110 transition-transform duration-300">
                  <Server className="w-2.5 h-2.5 sm:w-4 sm:h-4 text-white" />
                </div>
                <div className="text-[9px] sm:text-xs font-bold text-creeper">Own Infra</div>
                <div className="text-[7px] sm:text-[10px] text-gray-400">Optimized</div>
              </div>

              <div className="bg-gradient-to-br from-blue-600/10 to-cyan-500/10 backdrop-blur-sm border border-blue-600/30 rounded-lg p-1 sm:p-2 text-center hover:border-blue-600/60 transition-all duration-300 group">
                <div className="bg-gradient-to-br from-blue-600 to-cyan-500 p-0.5 sm:p-1.5 rounded-lg inline-block mb-0.5 sm:mb-1 shadow-lg shadow-blue-600/30 group-hover:scale-110 transition-transform duration-300">
                  <Zap className="w-2.5 h-2.5 sm:w-4 sm:h-4 text-white" />
                </div>
                <div className="text-[9px] sm:text-xs font-bold text-blue-400">NVMe SSD</div>
                <div className="text-[7px] sm:text-[10px] text-gray-400">Fast</div>
              </div>
            </div>

            {/* Pricing Highlights */}
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-cyan-500/30 rounded-lg p-1.5 sm:p-3 mb-2 sm:mb-4">
              <div className="flex items-center justify-center gap-0.5 sm:gap-1.5 mb-1 sm:mb-2">
                <Crown className="w-2.5 h-2.5 sm:w-4 sm:h-4 text-cyan-400" />
                <h3 className="text-[10px] sm:text-sm md:text-base font-bold text-white">VPS Pricing</h3>
              </div>
              
              <div className="grid grid-cols-3 gap-1 sm:gap-2">
                <div className="text-center">
                  <div className="text-sm sm:text-xl md:text-2xl font-bold text-cyan-400">₹199</div>
                  <div className="text-[7px] sm:text-[10px] text-gray-400">Mini</div>
                </div>
                <div className="text-center">
                  <div className="text-sm sm:text-xl md:text-2xl font-bold text-blue-400">₹399</div>
                  <div className="text-[7px] sm:text-[10px] text-gray-400">Knight</div>
                </div>
                <div className="text-center">
                  <div className="text-sm sm:text-xl md:text-2xl font-bold text-creeper">₹699</div>
                  <div className="text-[7px] sm:text-[10px] text-gray-400">Titan</div>
                </div>
              </div>
            </div>

            {/* New Support Lines Section */}
            <div className="bg-gradient-to-br from-creeper/10 to-green-600/10 backdrop-blur-sm border border-creeper/30 rounded-lg p-1.5 sm:p-3 mb-2 sm:mb-4">
              <div className="flex items-center justify-center gap-0.5 sm:gap-1.5 mb-1 sm:mb-2">
                <Sparkles className="w-2.5 h-2.5 sm:w-4 sm:h-4 text-creeper" />
                <h3 className="text-[10px] sm:text-sm md:text-base font-bold text-white">New Support Lines Live! 🎉</h3>
              </div>
              
              <div className="grid grid-cols-3 gap-1 sm:gap-2">
                <div className="text-center">
                  <div className="bg-creeper/20 p-1 sm:p-2 rounded-lg inline-block mb-0.5">
                    <Phone className="w-2.5 h-2.5 sm:w-4 sm:h-4 text-creeper" />
                  </div>
                  <div className="text-[9px] sm:text-xs text-creeper font-semibold">Phone</div>
                  <div className="text-[7px] sm:text-[10px] text-gray-400">Call Now</div>
                </div>
                <div className="text-center">
                  <div className="bg-green-500/20 p-1 sm:p-2 rounded-lg inline-block mb-0.5">
                    <svg className="w-2.5 h-2.5 sm:w-4 sm:h-4 text-green-400" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                    </svg>
                  </div>
                  <div className="text-[9px] sm:text-xs text-green-400 font-semibold">WhatsApp</div>
                  <div className="text-[7px] sm:text-[10px] text-gray-400">Message</div>
                </div>
                <div className="text-center">
                  <div className="bg-blue-500/20 p-1 sm:p-2 rounded-lg inline-block mb-0.5">
                    <Ticket className="w-2.5 h-2.5 sm:w-4 sm:h-4 text-blue-400" />
                  </div>
                  <div className="text-[9px] sm:text-xs text-blue-400 font-semibold">Tickets</div>
                  <div className="text-[7px] sm:text-[10px] text-gray-400">Client Area</div>
                </div>
              </div>
              <p className="text-center text-[7px] sm:text-[10px] text-gray-400 mt-1 sm:mt-2">
                24/7 Support • Fast Response • +91 9318345643
              </p>
            </div>

            {/* Why Intel Platinum Section - Compact */}
            <div className="bg-gradient-to-r from-cyan-500/5 to-blue-600/5 border border-cyan-500/20 rounded-lg p-1.5 sm:p-3 mb-2 sm:mb-4">
              <h4 className="text-[10px] sm:text-xs md:text-sm font-bold text-white mb-1 sm:mb-2 flex items-center gap-0.5 sm:gap-1.5">
                <Sparkles className="w-2 h-2 sm:w-3 sm:h-3 text-cyan-400 flex-shrink-0" />
                Why Intel Platinum?
              </h4>
              <ul className="space-y-0.5 text-[8px] sm:text-[10px] md:text-xs text-gray-300">
                <li className="flex items-start gap-0.5 sm:gap-1.5">
                  <span className="text-cyan-400 mt-0.5 flex-shrink-0 text-[9px] sm:text-xs">✓</span>
                  <span>24 cores, 48 threads • Perfect for game servers</span>
                </li>
                <li className="flex items-start gap-0.5 sm:gap-1.5">
                  <span className="text-creeper mt-0.5 flex-shrink-0 text-[9px] sm:text-xs">✓</span>
                  <span>Own infrastructure • Maximum control</span>
                </li>
              </ul>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-1 sm:gap-2 justify-center">
              <button
                onClick={() => handleNavigation('/plans/vps')}
                className="w-full sm:w-auto bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-bold py-1.5 sm:py-2.5 px-2.5 sm:px-5 rounded-lg shadow-2xl shadow-cyan-500/50 hover:shadow-cyan-600/60 transform hover:scale-105 active:scale-95 transition-all duration-300 flex items-center justify-center gap-0.5 sm:gap-1.5 text-[10px] sm:text-sm"
              >
                <Sparkles className="w-2.5 h-2.5 sm:w-4 sm:h-4" />
                Explore VPS
                <ArrowRight className="w-2.5 h-2.5 sm:w-4 sm:h-4" />
              </button>
              
              <button
                onClick={() => setIsOpen(false)}
                className="w-full sm:w-auto bg-gray-800 hover:bg-gray-700 text-white font-medium py-1.5 sm:py-2.5 px-2.5 sm:px-5 rounded-lg border border-gray-600 hover:border-gray-500 transition-all duration-300 text-[10px] sm:text-sm"
              >
                Maybe Later
              </button>
            </div>

            {/* Footer Note */}
            <p className="text-center text-[7px] sm:text-[10px] text-gray-500 mt-1.5 sm:mt-3 px-0.5">
              💎 Delhi datacenter • Instant setup • Full root access
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VPSPlansPopup;
