
import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";

interface GetStartedModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const GetStartedModal = ({ isOpen, onClose }: GetStartedModalProps) => {
  // When modal is clicked, prevent the click from propagating to the backdrop
  const handleModalClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="bg-navy-light rounded-xl border border-gray-700 p-6 max-w-md w-full relative"
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            onClick={handleModalClick}
          >
            <button
              className="absolute top-4 right-4 text-gray-400 hover:text-white"
              onClick={onClose}
            >
              <X size={24} />
            </button>
            
            <div className="text-center mb-6">
              <div className="inline-block p-3 rounded-full bg-creeper/10 mb-4">
                <img
                  src="/lovable-uploads/394abece-307b-48f2-8c38-4d2123607648.png"
                  alt="CreeperCastle.cloud Logo"
                  className="w-16 h-16"
                />
              </div>
              <h2 className="text-2xl font-bold mb-2">Get Started with CreeperCastle</h2>
              <p className="text-gray-400">Choose how you'd like to proceed with your Minecraft adventure</p>
            </div>
            
            <div className="space-y-4 mb-6">
              <a 
                href="https://billing.creepercastle.in/" 
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <Button 
                  className="w-full py-6 minecraft-btn rounded-md relative overflow-hidden group text-lg"
                >
                  <span className="relative z-10">Visit Store</span>
                  <span className="absolute inset-0 bg-creeper-light opacity-0 group-hover:opacity-20 transition-opacity duration-300"></span>
                </Button>
              </a>
              
              <a 
                href="https://discord.gg/RuQ9neH56S" 
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <Button 
                  className="w-full py-6 rounded-md bg-discord hover:bg-discord-dark text-lg"
                  variant="outline"
                >
                  Join Our Discord
                </Button>
              </a>
            </div>
            
            <p className="text-center text-sm text-gray-500">
              For custom enterprise solutions, please contact our team directly
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default GetStartedModal;
