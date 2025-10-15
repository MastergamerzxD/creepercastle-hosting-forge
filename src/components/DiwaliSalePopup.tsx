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
    <div className="fixed inset-0 z-[10000] flex items-center justify-center bg-black/80 backdrop-blur-md animate-fade-in px-4">
      <div className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto animate-scale-in">
        {/* Close Button */}
        <button
          onClick={() => setIsOpen(false)}
          className="sticky top-2 left-full z-10 bg-creeper hover:bg-creeper/90 rounded-full p-2.5 md:p-2 shadow-2xl hover:scale-110 transition-transform duration-300 group ml-2 md:absolute md:-top-4 md:-right-4"
        >
          <X className="w-5 h-5 md:w-6 md:h-6 text-navy-dark group-hover:rotate-90 transition-transform duration-300" />
        </button>

        {/* Main Popup Container */}
        <div className="relative bg-gradient-to-br from-navy-dark via-gray-900 to-black rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl border-2 md:border-4 border-creeper/50 mt-2 md:mt-0">
          {/* Decorative Elements */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
            <div className="absolute -top-10 md:-top-20 -left-10 md:-left-20 w-32 md:w-64 h-32 md:h-64 bg-gradient-to-br from-orange-500/20 to-creeper/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute -bottom-10 md:-bottom-20 -right-10 md:-right-20 w-32 md:w-64 h-32 md:h-64 bg-gradient-to-br from-amber-500/20 to-orange-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
            <div className="absolute top-1/2 left-1/2 w-48 md:w-96 h-48 md:h-96 bg-creeper/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
          </div>

          <div className="relative p-4 sm:p-6 md:p-12">
            {/* Header Section */}
            <div className="text-center mb-4 sm:mb-6 md:mb-8">
              <div className="inline-flex items-center gap-1.5 sm:gap-2 bg-gradient-to-r from-orange-500 to-amber-500 text-white px-3 sm:px-4 md:px-6 py-1.5 sm:py-2 rounded-full mb-3 sm:mb-4 shadow-lg shadow-orange-500/50 animate-bounce text-xs sm:text-sm">
                <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5" />
                <span className="font-bold tracking-wider">DIWALI SPECIAL</span>
                <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5" />
              </div>
              
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-2 sm:mb-3 bg-gradient-to-r from-orange-400 via-amber-400 to-creeper bg-clip-text text-transparent drop-shadow-2xl px-2">
                🪔 Festival of Lights Sale! 🪔
              </h2>
              
              <p className="text-sm sm:text-base md:text-lg text-gray-300 font-medium px-2">
                Oct 15-21 | Limited Time
              </p>
            </div>

            {/* Offers Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 md:gap-6 mb-4 sm:mb-6 md:mb-8">
              {/* Ryzen 9 Offer */}
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-amber-500 to-orange-600 rounded-xl md:rounded-2xl blur-lg md:blur-xl opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>
                <div className="relative bg-gradient-to-br from-gray-900 to-black rounded-xl md:rounded-2xl p-3 sm:p-4 md:p-6 shadow-xl border border-amber-500/50 md:border-2 transform active:scale-95 md:group-hover:scale-105 transition-all duration-300">
                  <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                    <div className="bg-gradient-to-br from-amber-500 to-orange-600 p-2 sm:p-2.5 md:p-3 rounded-lg md:rounded-xl shadow-lg shadow-amber-500/50 flex-shrink-0">
                      <Zap className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-base sm:text-lg md:text-xl font-bold text-white leading-tight">Ryzen 9 Special</h3>
                      <p className="text-xs sm:text-sm text-gray-400">Premium Performance</p>
                    </div>
                  </div>
                  
                  <div className="mb-3 sm:mb-4">
                    <div className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent mb-1 sm:mb-2 drop-shadow-2xl">
                      40% OFF
                    </div>
                    <p className="text-sm sm:text-base text-gray-300 font-medium">On Minecraft Ryzen 9 Hosting</p>
                  </div>

                  <div className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-lg md:rounded-xl p-2 sm:p-2.5 md:p-3 mb-3 sm:mb-4 border border-dashed md:border-2 border-amber-500/50">
                    <div className="flex items-center justify-between gap-2">
                      <code className="text-sm sm:text-base md:text-lg font-bold text-amber-400">RYZEN950</code>
                      <button
                        onClick={() => copyToClipboard('RYZEN950')}
                        className="p-1.5 sm:p-2 hover:bg-gray-700 active:bg-gray-600 rounded-lg transition-colors duration-200 flex-shrink-0"
                      >
                        {copiedCode === 'RYZEN950' ? (
                          <Check className="w-4 h-4 sm:w-5 sm:h-5 text-creeper" />
                        ) : (
                          <Copy className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400" />
                        )}
                      </button>
                    </div>
                  </div>

                  <button
                    onClick={() => handleNavigation('/plans/ryzen9')}
                    className="w-full bg-gradient-to-r from-orange-600 to-amber-600 active:from-orange-700 active:to-amber-700 md:hover:from-orange-700 md:hover:to-amber-700 text-white font-bold py-2.5 sm:py-3 rounded-lg md:rounded-xl shadow-lg shadow-orange-500/50 md:hover:shadow-xl md:hover:shadow-orange-500/70 transform active:scale-95 md:hover:scale-105 transition-all duration-300 text-sm sm:text-base"
                  >
                    Get Ryzen 9 Now →
                  </button>
                </div>
              </div>

              {/* Site-wide Offer */}
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-creeper to-green-600 rounded-xl md:rounded-2xl blur-lg md:blur-xl opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>
                <div className="relative bg-gradient-to-br from-gray-900 to-black rounded-xl md:rounded-2xl p-3 sm:p-4 md:p-6 shadow-xl border border-creeper/50 md:border-2 transform active:scale-95 md:group-hover:scale-105 transition-all duration-300">
                  <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                    <div className="bg-gradient-to-br from-creeper to-green-600 p-2 sm:p-2.5 md:p-3 rounded-lg md:rounded-xl shadow-lg shadow-creeper/50 flex-shrink-0">
                      <Store className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-base sm:text-lg md:text-xl font-bold text-white leading-tight">Site-wide Sale</h3>
                      <p className="text-xs sm:text-sm text-gray-400">All Products</p>
                    </div>
                  </div>
                  
                  <div className="mb-3 sm:mb-4">
                    <div className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-creeper to-green-400 bg-clip-text text-transparent mb-1 sm:mb-2 drop-shadow-2xl">
                      30% OFF
                    </div>
                    <p className="text-sm sm:text-base text-gray-300 font-medium">On All Other Hosting Plans</p>
                  </div>

                  <div className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-lg md:rounded-xl p-2 sm:p-2.5 md:p-3 mb-3 sm:mb-4 border border-dashed md:border-2 border-creeper/50">
                    <div className="flex items-center justify-between gap-2">
                      <code className="text-sm sm:text-base md:text-lg font-bold text-creeper">DIWALI30</code>
                      <button
                        onClick={() => copyToClipboard('DIWALI30')}
                        className="p-1.5 sm:p-2 hover:bg-gray-700 active:bg-gray-600 rounded-lg transition-colors duration-200 flex-shrink-0"
                      >
                        {copiedCode === 'DIWALI30' ? (
                          <Check className="w-4 h-4 sm:w-5 sm:h-5 text-creeper" />
                        ) : (
                          <Copy className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400" />
                        )}
                      </button>
                    </div>
                  </div>

                  <button
                    onClick={() => handleNavigation('/plans/minecraft')}
                    className="w-full bg-gradient-to-r from-creeper to-green-600 active:from-green-600 active:to-creeper md:hover:from-green-600 md:hover:to-creeper text-white font-bold py-2.5 sm:py-3 rounded-lg md:rounded-xl shadow-lg shadow-creeper/50 md:hover:shadow-xl md:hover:shadow-creeper/70 transform active:scale-95 md:hover:scale-105 transition-all duration-300 text-sm sm:text-base"
                  >
                    Browse All Plans →
                  </button>
                </div>
              </div>
            </div>

            {/* Footer CTA */}
            <div className="text-center">
              <p className="text-xs sm:text-sm md:text-base text-gray-400 mb-3 sm:mb-4 font-medium px-2">
                ✨ Limited offer • Valid till Oct 21st ✨
              </p>
              <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
                <button
                  onClick={() => handleNavigation('/plans/minecraft')}
                  className="px-3 sm:px-4 md:px-6 py-1.5 sm:py-2 bg-gray-800 active:bg-gray-700 md:hover:bg-gray-700 text-white font-semibold rounded-lg md:rounded-xl border border-creeper/30 md:border-2 active:border-creeper/60 md:hover:border-creeper/60 transition-all duration-300 text-xs sm:text-sm"
                >
                  Minecraft Classic
                </button>
                <button
                  onClick={() => handleNavigation('/plans/vps')}
                  className="px-3 sm:px-4 md:px-6 py-1.5 sm:py-2 bg-gray-800 active:bg-gray-700 md:hover:bg-gray-700 text-white font-semibold rounded-lg md:rounded-xl border border-creeper/30 md:border-2 active:border-creeper/60 md:hover:border-creeper/60 transition-all duration-300 text-xs sm:text-sm"
                >
                  VPS Hosting
                </button>
                <button
                  onClick={() => handleNavigation('/plans/discord-bot')}
                  className="px-3 sm:px-4 md:px-6 py-1.5 sm:py-2 bg-gray-800 active:bg-gray-700 md:hover:bg-gray-700 text-white font-semibold rounded-lg md:rounded-xl border border-creeper/30 md:border-2 active:border-creeper/60 md:hover:border-creeper/60 transition-all duration-300 text-xs sm:text-sm"
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
