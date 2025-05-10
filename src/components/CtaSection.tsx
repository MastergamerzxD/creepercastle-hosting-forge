
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const CtaSection = () => {
  return (
    <section className="py-32 relative overflow-hidden" id="cta">
      {/* Animated background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-creeper-pattern opacity-5"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-creeper/5 blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-creeper/5 blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <motion.h2 
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Ready to <span className="text-creeper">Power Up</span> Your Minecraft Experience?
          </motion.h2>
          
          <motion.p 
            className="text-xl text-gray-300 mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Join thousands of satisfied players and server owners who trust CreeperCastle.cloud for reliable, high-performance Minecraft hosting with industry-leading protection.
          </motion.p>
          
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Button className="minecraft-btn rounded-md text-lg py-6 px-8">
              Get Started Now
            </Button>
            <div className="flex items-center">
              <div className="w-12 h-12 bg-creeper/10 rounded-full flex items-center justify-center mr-3">
                <svg className="w-6 h-6 text-creeper" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
              <div className="text-left">
                <p className="font-medium">Start with a free consultation</p>
                <p className="text-sm text-gray-400">Talk to our experts about your needs</p>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className="mt-16 border-t border-gray-800 pt-8 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <p className="text-gray-400 mb-4">Trusted by Minecraft communities worldwide</p>
            <div className="flex flex-wrap justify-center gap-8 opacity-70">
              <div className="text-2xl font-bold">1000+</div>
              <div className="text-2xl font-bold">25+</div>
              <div className="text-2xl font-bold">99.9%</div>
              <div className="text-2xl font-bold">24/7</div>
            </div>
            <div className="flex flex-wrap justify-center gap-8 text-sm text-gray-500">
              <div>Active Servers</div>
              <div>Global Locations</div>
              <div>Uptime</div>
              <div>Support</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
