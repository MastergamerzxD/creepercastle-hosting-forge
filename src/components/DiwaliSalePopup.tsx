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
    <div className="fixed inset-0 z-[10000] flex items-center justify-center bg-black/70 backdrop-blur-sm animate-fade-in">
      <div className="relative w-full max-w-4xl mx-4 animate-scale-in">
        {/* Close Button */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute -top-4 -right-4 z-10 bg-white rounded-full p-2 shadow-2xl hover:scale-110 transition-transform duration-300 group"
        >
          <X className="w-6 h-6 text-gray-800 group-hover:rotate-90 transition-transform duration-300" />
        </button>

        {/* Main Popup Container */}
        <div className="relative bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50 rounded-3xl overflow-hidden shadow-2xl border-4 border-amber-400/50">
          {/* Decorative Elements */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
            <div className="absolute -top-20 -left-20 w-64 h-64 bg-gradient-to-br from-orange-400/20 to-amber-400/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-gradient-to-br from-yellow-400/20 to-orange-400/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          </div>

          <div className="relative p-8 md:p-12">
            {/* Header Section */}
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-600 to-amber-600 text-white px-6 py-2 rounded-full mb-4 shadow-lg animate-bounce">
                <Sparkles className="w-5 h-5" />
                <span className="font-bold text-sm tracking-wider">DIWALI SPECIAL</span>
                <Sparkles className="w-5 h-5" />
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold mb-3 bg-gradient-to-r from-orange-600 via-amber-600 to-yellow-600 bg-clip-text text-transparent">
                🪔 Festival of Lights Sale! 🪔
              </h2>
              
              <p className="text-lg text-gray-700 font-medium">
                October 15th - 21st | Limited Time Offers
              </p>
            </div>

            {/* Offers Grid */}
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {/* Ryzen 9 Offer */}
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-amber-400 to-orange-500 rounded-2xl blur opacity-75 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative bg-white rounded-2xl p-6 shadow-xl border-2 border-amber-400/50 transform group-hover:scale-105 transition-all duration-300">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-gradient-to-br from-amber-400 to-orange-500 p-3 rounded-xl">
                      <Zap className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-800">Ryzen 9 Special</h3>
                      <p className="text-sm text-gray-600">Premium Performance</p>
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <div className="text-5xl font-bold bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent mb-2">
                      40% OFF
                    </div>
                    <p className="text-gray-700 font-medium">On Minecraft Ryzen 9 Hosting</p>
                  </div>

                  <div className="bg-gradient-to-r from-gray-50 to-amber-50 rounded-xl p-3 mb-4 border-2 border-dashed border-amber-400">
                    <div className="flex items-center justify-between">
                      <code className="text-lg font-bold text-orange-600">RYZEN950</code>
                      <button
                        onClick={() => copyToClipboard('RYZEN950')}
                        className="p-2 hover:bg-white rounded-lg transition-colors duration-200"
                      >
                        {copiedCode === 'RYZEN950' ? (
                          <Check className="w-5 h-5 text-green-600" />
                        ) : (
                          <Copy className="w-5 h-5 text-gray-600" />
                        )}
                      </button>
                    </div>
                  </div>

                  <button
                    onClick={() => handleNavigation('/plans/ryzen9')}
                    className="w-full bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-700 hover:to-amber-700 text-white font-bold py-3 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                  >
                    Get Ryzen 9 Now →
                  </button>
                </div>
              </div>

              {/* Site-wide Offer */}
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-2xl blur opacity-75 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative bg-white rounded-2xl p-6 shadow-xl border-2 border-yellow-400/50 transform group-hover:scale-105 transition-all duration-300">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-gradient-to-br from-yellow-400 to-orange-400 p-3 rounded-xl">
                      <Store className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-800">Site-wide Sale</h3>
                      <p className="text-sm text-gray-600">All Products</p>
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <div className="text-5xl font-bold bg-gradient-to-r from-yellow-600 to-orange-600 bg-clip-text text-transparent mb-2">
                      30% OFF
                    </div>
                    <p className="text-gray-700 font-medium">On All Other Hosting Plans</p>
                  </div>

                  <div className="bg-gradient-to-r from-gray-50 to-yellow-50 rounded-xl p-3 mb-4 border-2 border-dashed border-yellow-400">
                    <div className="flex items-center justify-between">
                      <code className="text-lg font-bold text-orange-600">DIWALI30</code>
                      <button
                        onClick={() => copyToClipboard('DIWALI30')}
                        className="p-2 hover:bg-white rounded-lg transition-colors duration-200"
                      >
                        {copiedCode === 'DIWALI30' ? (
                          <Check className="w-5 h-5 text-green-600" />
                        ) : (
                          <Copy className="w-5 h-5 text-gray-600" />
                        )}
                      </button>
                    </div>
                  </div>

                  <button
                    onClick={() => handleNavigation('/plans/minecraft')}
                    className="w-full bg-gradient-to-r from-yellow-600 to-orange-600 hover:from-yellow-700 hover:to-orange-700 text-white font-bold py-3 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                  >
                    Browse All Plans →
                  </button>
                </div>
              </div>
            </div>

            {/* Footer CTA */}
            <div className="text-center">
              <p className="text-gray-600 mb-4 font-medium">
                ✨ Limited time offer • Valid till October 21st • Don't miss out! ✨
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                <button
                  onClick={() => handleNavigation('/plans/minecraft')}
                  className="px-6 py-2 bg-white hover:bg-gray-50 text-gray-800 font-semibold rounded-xl border-2 border-gray-300 hover:border-gray-400 transition-all duration-300"
                >
                  Minecraft Classic
                </button>
                <button
                  onClick={() => handleNavigation('/plans/vps')}
                  className="px-6 py-2 bg-white hover:bg-gray-50 text-gray-800 font-semibold rounded-xl border-2 border-gray-300 hover:border-gray-400 transition-all duration-300"
                >
                  VPS Hosting
                </button>
                <button
                  onClick={() => handleNavigation('/plans/discord-bot')}
                  className="px-6 py-2 bg-white hover:bg-gray-50 text-gray-800 font-semibold rounded-xl border-2 border-gray-300 hover:border-gray-400 transition-all duration-300"
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
