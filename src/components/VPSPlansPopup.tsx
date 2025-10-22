import { useState, useEffect } from 'react';
import { X, Sparkles, Server, Cpu, Zap, Shield, Crown, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useToast } from '@/hooks/use-toast';

const VPSPlansPopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    // Show popup after a short delay when component mounts
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

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
    <div className="fixed inset-0 z-[10000] flex items-center justify-center bg-black/85 backdrop-blur-lg animate-fade-in p-3 sm:p-4">
      <div className="relative w-full max-w-4xl animate-scale-in">
        {/* Close Button */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute -top-3 -right-3 z-20 bg-gradient-to-br from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 rounded-full p-2.5 shadow-2xl hover:scale-110 transition-all duration-300 group border-2 border-white"
        >
          <X className="w-5 h-5 text-white group-hover:rotate-90 transition-transform duration-300" />
        </button>

        {/* Main Popup Container */}
        <div className="relative bg-gradient-to-br from-navy-dark via-gray-900 to-black rounded-2xl overflow-hidden shadow-2xl border-2 border-cyan-500/50">
          {/* Animated Background Elements */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
            <div className="absolute -top-20 -left-20 w-64 h-64 bg-gradient-to-br from-cyan-500/20 to-blue-600/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-gradient-to-br from-blue-500/20 to-cyan-600/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-cyan-400/10 to-blue-600/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
          </div>

          <div className="relative p-4 sm:p-6 md:p-8">
            {/* Header Section */}
            <div className="text-center mb-6">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 via-blue-600 to-cyan-500 text-white px-4 py-2 rounded-full mb-3 shadow-lg shadow-cyan-500/50 text-xs sm:text-sm">
                <Sparkles className="w-4 h-4 animate-pulse" />
                <span className="font-bold tracking-wider">NEW RELEASE</span>
                <Sparkles className="w-4 h-4 animate-pulse" />
              </div>
              
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 leading-tight">
                <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-600 bg-clip-text text-transparent">
                  Intel Platinum 8168
                </span>
                <br />
                <span className="text-white">VPS Plans Are Live! 🚀</span>
              </h2>
              
              <p className="text-sm sm:text-base text-gray-300 max-w-2xl mx-auto">
                Experience enterprise-grade power with our <span className="text-cyan-400 font-semibold">24-core data center beast</span> on our own optimized infrastructure
              </p>
            </div>

            {/* Key Features Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
              <div className="bg-gradient-to-br from-cyan-500/10 to-blue-600/10 backdrop-blur-sm border border-cyan-500/30 rounded-lg p-3 text-center hover:border-cyan-500/60 transition-all duration-300 group">
                <div className="bg-gradient-to-br from-cyan-500 to-blue-600 p-2 rounded-lg inline-block mb-2 shadow-lg shadow-cyan-500/30 group-hover:scale-110 transition-transform duration-300">
                  <Cpu className="w-5 h-5 text-white" />
                </div>
                <div className="text-xs sm:text-sm font-bold text-cyan-400">24 Cores</div>
                <div className="text-xs text-gray-400">Platinum 8168</div>
              </div>

              <div className="bg-gradient-to-br from-blue-500/10 to-cyan-600/10 backdrop-blur-sm border border-blue-500/30 rounded-lg p-3 text-center hover:border-blue-500/60 transition-all duration-300 group">
                <div className="bg-gradient-to-br from-blue-500 to-cyan-600 p-2 rounded-lg inline-block mb-2 shadow-lg shadow-blue-500/30 group-hover:scale-110 transition-transform duration-300">
                  <Shield className="w-5 h-5 text-white" />
                </div>
                <div className="text-xs sm:text-sm font-bold text-blue-400">17 Tbps</div>
                <div className="text-xs text-gray-400">DDoS Shield</div>
              </div>

              <div className="bg-gradient-to-br from-cyan-500/10 to-creeper/10 backdrop-blur-sm border border-cyan-500/30 rounded-lg p-3 text-center hover:border-cyan-500/60 transition-all duration-300 group">
                <div className="bg-gradient-to-br from-cyan-500 to-creeper p-2 rounded-lg inline-block mb-2 shadow-lg shadow-cyan-500/30 group-hover:scale-110 transition-transform duration-300">
                  <Server className="w-5 h-5 text-white" />
                </div>
                <div className="text-xs sm:text-sm font-bold text-creeper">Own Infra</div>
                <div className="text-xs text-gray-400">Optimized</div>
              </div>

              <div className="bg-gradient-to-br from-blue-600/10 to-cyan-500/10 backdrop-blur-sm border border-blue-600/30 rounded-lg p-3 text-center hover:border-blue-600/60 transition-all duration-300 group">
                <div className="bg-gradient-to-br from-blue-600 to-cyan-500 p-2 rounded-lg inline-block mb-2 shadow-lg shadow-blue-600/30 group-hover:scale-110 transition-transform duration-300">
                  <Zap className="w-5 h-5 text-white" />
                </div>
                <div className="text-xs sm:text-sm font-bold text-blue-400">NVMe SSD</div>
                <div className="text-xs text-gray-400">Lightning Fast</div>
              </div>
            </div>

            {/* Pricing Highlights */}
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-cyan-500/30 rounded-xl p-4 mb-6">
              <div className="flex items-center justify-center gap-2 mb-3">
                <Crown className="w-5 h-5 text-cyan-400" />
                <h3 className="text-lg sm:text-xl font-bold text-white">New Competitive Pricing</h3>
              </div>
              
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-cyan-400">₹199</div>
                  <div className="text-xs text-gray-400">Creeper Mini</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-blue-400">₹399</div>
                  <div className="text-xs text-gray-400">Knight Plan</div>
                </div>
                <div className="text-center col-span-2 sm:col-span-1">
                  <div className="text-2xl sm:text-3xl font-bold text-creeper">₹699</div>
                  <div className="text-xs text-gray-400">Titan Plan</div>
                </div>
              </div>
            </div>

            {/* Why Intel Platinum Section */}
            <div className="bg-gradient-to-r from-cyan-500/5 to-blue-600/5 border border-cyan-500/20 rounded-lg p-4 mb-6">
              <h4 className="text-base sm:text-lg font-bold text-white mb-2 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-cyan-400" />
                Why Intel Platinum 8168?
              </h4>
              <ul className="space-y-1.5 text-xs sm:text-sm text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400 mt-0.5">✓</span>
                  <span><span className="text-cyan-400 font-semibold">Enterprise-grade power:</span> 24 cores, 48 threads, 33MB cache</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-400 mt-0.5">✓</span>
                  <span><span className="text-blue-400 font-semibold">Minecraft optimized:</span> Perfect for high-performance game servers</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-creeper mt-0.5">✓</span>
                  <span><span className="text-creeper font-semibold">Own infrastructure:</span> No third-party limitations, maximum control</span>
                </li>
              </ul>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <button
                onClick={() => handleNavigation('/plans/vps')}
                className="flex-1 sm:flex-none bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-bold py-3 px-6 rounded-lg shadow-2xl shadow-cyan-500/50 hover:shadow-cyan-600/60 transform hover:scale-105 active:scale-95 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Sparkles className="w-5 h-5" />
                Explore VPS Plans
                <ArrowRight className="w-5 h-5" />
              </button>
              
              <button
                onClick={() => setIsOpen(false)}
                className="sm:flex-none bg-gray-800 hover:bg-gray-700 text-white font-medium py-3 px-6 rounded-lg border border-gray-600 hover:border-gray-500 transition-all duration-300"
              >
                Maybe Later
              </button>
            </div>

            {/* Footer Note */}
            <p className="text-center text-xs text-gray-500 mt-4">
              💎 Available now at Delhi datacenter • Instant provisioning • Full root access
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VPSPlansPopup;
