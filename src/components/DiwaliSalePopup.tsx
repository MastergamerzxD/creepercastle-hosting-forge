import { useState, useEffect } from 'react';
import { X, Sparkles, Copy, Check, Zap, Store } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useToast } from '@/hooks/use-toast';

const DiwaliSalePopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [copiedCode, setCopiedCode] = useState<string | null>(null);
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    // Show popup after a short delay when component mounts
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const copyToClipboard = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(code);
    toast({
      title: "Code Copied!",
      description: `${code} has been copied to clipboard`,
    });
    setTimeout(() => setCopiedCode(null), 2000);
  };

  const handleNavigation = (path: string) => {
    setIsOpen(false);
    navigate(path);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[10000] flex items-center justify-center bg-black/80 backdrop-blur-md animate-fade-in p-3 sm:p-4">
      <div className="relative w-full max-w-3xl animate-scale-in">
        {/* Close Button */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute -top-3 -right-3 z-20 bg-red-600 hover:bg-red-700 rounded-full p-2.5 shadow-2xl hover:scale-110 transition-all duration-300 group border-2 border-white"
        >
          <X className="w-5 h-5 text-white group-hover:rotate-90 transition-transform duration-300" />
        </button>

        {/* Main Popup Container */}
        <div className="relative bg-gradient-to-br from-navy-dark via-gray-900 to-black rounded-xl md:rounded-2xl overflow-hidden shadow-2xl border-2 border-creeper/50">
          {/* Decorative Elements */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
            <div className="absolute -top-10 -left-10 w-32 h-32 bg-gradient-to-br from-orange-500/20 to-creeper/20 rounded-full blur-2xl animate-pulse"></div>
            <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-gradient-to-br from-amber-500/20 to-orange-500/20 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          </div>

          <div className="relative p-3 sm:p-4 md:p-6">
            {/* Header Section */}
            <div className="text-center mb-3 sm:mb-4">
              <div className="inline-flex items-center gap-1.5 bg-gradient-to-r from-orange-500 to-amber-500 text-white px-3 py-1 rounded-full mb-2 shadow-lg shadow-orange-500/50 text-xs">
                <Sparkles className="w-3 h-3" />
                <span className="font-bold tracking-wider">DIWALI SPECIAL</span>
                <Sparkles className="w-3 h-3" />
              </div>
              
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-1 bg-gradient-to-r from-orange-400 via-amber-400 to-creeper bg-clip-text text-transparent">
                🪔 Festival Sale! 🪔
              </h2>
              
              <p className="text-xs sm:text-sm text-gray-400 font-medium">
                Oct 15-21 • Limited Time
              </p>
            </div>

            {/* Offers Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 sm:gap-3 mb-3 sm:mb-4">
              {/* Ryzen 9 Offer */}
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-amber-500 to-orange-600 rounded-lg blur-md opacity-50 group-hover:opacity-70 transition-opacity duration-300"></div>
                <div className="relative bg-gradient-to-br from-gray-900 to-black rounded-lg p-2.5 sm:p-3 shadow-xl border border-amber-500/50 transform active:scale-95 transition-all duration-300">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="bg-gradient-to-br from-amber-500 to-orange-600 p-1.5 sm:p-2 rounded-lg shadow-lg shadow-amber-500/50 flex-shrink-0">
                      <Zap className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                    </div>
                    <div>
                      <h3 className="text-sm sm:text-base font-bold text-white leading-tight">Ryzen 9</h3>
                      <p className="text-xs text-gray-400">Premium</p>
                    </div>
                  </div>
                  
                  <div className="mb-2">
                    <div className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent">
                      40% OFF
                    </div>
                    <p className="text-xs sm:text-sm text-gray-300">Minecraft Ryzen 9</p>
                  </div>

                  <div className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-md p-2 mb-2 border border-dashed border-amber-500/50">
                    <div className="flex items-center justify-between gap-2">
                      <code className="text-xs sm:text-sm font-bold text-amber-400">RYZEN950</code>
                      <button
                        onClick={() => copyToClipboard('RYZEN950')}
                        className="p-1 hover:bg-gray-700 active:bg-gray-600 rounded transition-colors duration-200"
                      >
                        {copiedCode === 'RYZEN950' ? (
                          <Check className="w-3 h-3 sm:w-4 sm:h-4 text-creeper" />
                        ) : (
                          <Copy className="w-3 h-3 sm:w-4 sm:h-4 text-gray-400" />
                        )}
                      </button>
                    </div>
                  </div>

                  <button
                    onClick={() => handleNavigation('/plans/ryzen9')}
                    className="w-full bg-gradient-to-r from-orange-600 to-amber-600 active:from-orange-700 active:to-amber-700 text-white font-bold py-2 rounded-lg shadow-lg shadow-orange-500/50 transform active:scale-95 transition-all duration-300 text-xs sm:text-sm"
                  >
                    Get Ryzen 9 →
                  </button>
                </div>
              </div>

              {/* Site-wide Offer */}
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-creeper to-green-600 rounded-lg blur-md opacity-50 group-hover:opacity-70 transition-opacity duration-300"></div>
                <div className="relative bg-gradient-to-br from-gray-900 to-black rounded-lg p-2.5 sm:p-3 shadow-xl border border-creeper/50 transform active:scale-95 transition-all duration-300">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="bg-gradient-to-br from-creeper to-green-600 p-1.5 sm:p-2 rounded-lg shadow-lg shadow-creeper/50 flex-shrink-0">
                      <Store className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                    </div>
                    <div>
                      <h3 className="text-sm sm:text-base font-bold text-white leading-tight">Site-wide</h3>
                      <p className="text-xs text-gray-400">All Products</p>
                    </div>
                  </div>
                  
                  <div className="mb-2">
                    <div className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-creeper to-green-400 bg-clip-text text-transparent">
                      30% OFF
                    </div>
                    <p className="text-xs sm:text-sm text-gray-300">All Other Plans</p>
                  </div>

                  <div className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-md p-2 mb-2 border border-dashed border-creeper/50">
                    <div className="flex items-center justify-between gap-2">
                      <code className="text-xs sm:text-sm font-bold text-creeper">DIWALI30</code>
                      <button
                        onClick={() => copyToClipboard('DIWALI30')}
                        className="p-1 hover:bg-gray-700 active:bg-gray-600 rounded transition-colors duration-200"
                      >
                        {copiedCode === 'DIWALI30' ? (
                          <Check className="w-3 h-3 sm:w-4 sm:h-4 text-creeper" />
                        ) : (
                          <Copy className="w-3 h-3 sm:w-4 sm:h-4 text-gray-400" />
                        )}
                      </button>
                    </div>
                  </div>

                  <button
                    onClick={() => handleNavigation('/plans/minecraft')}
                    className="w-full bg-gradient-to-r from-creeper to-green-600 active:from-green-600 active:to-creeper text-white font-bold py-2 rounded-lg shadow-lg shadow-creeper/50 transform active:scale-95 transition-all duration-300 text-xs sm:text-sm"
                  >
                    All Plans →
                  </button>
                </div>
              </div>
            </div>

            {/* Footer CTA */}
            <div className="text-center pt-2 border-t border-gray-700/50">
              <p className="text-xs text-gray-400 mb-2">
                ✨ Valid till Oct 21st ✨
              </p>
              <div className="flex flex-wrap justify-center gap-1.5 sm:gap-2">
                <button
                  onClick={() => handleNavigation('/plans/minecraft')}
                  className="px-2 sm:px-3 py-1 sm:py-1.5 bg-gray-800 active:bg-gray-700 text-white font-medium rounded border border-creeper/30 active:border-creeper/60 transition-all duration-300 text-xs"
                >
                  Minecraft
                </button>
                <button
                  onClick={() => handleNavigation('/plans/vps')}
                  className="px-2 sm:px-3 py-1 sm:py-1.5 bg-gray-800 active:bg-gray-700 text-white font-medium rounded border border-creeper/30 active:border-creeper/60 transition-all duration-300 text-xs"
                >
                  VPS
                </button>
                <button
                  onClick={() => handleNavigation('/plans/discord-bot')}
                  className="px-2 sm:px-3 py-1 sm:py-1.5 bg-gray-800 active:bg-gray-700 text-white font-medium rounded border border-creeper/30 active:border-creeper/60 transition-all duration-300 text-xs"
                >
                  Discord Bot
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiwaliSalePopup;
