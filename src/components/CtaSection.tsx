
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const CtaSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  return (
    <section className="py-32 relative overflow-hidden" id="cta">
      {/* Animated background elements */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute top-0 left-0 w-full h-full opacity-5 bg-[url('https://i.pinimg.com/originals/c9/71/fa/c971fa50edb3b3a87be3fa2e46ab90d2.jpg')]" 
          style={{ backgroundSize: '100px 100px' }}
        ></div>
        <motion.div 
          className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-creeper/5 blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.05, 0.1, 0.05]
          }}
          transition={{ 
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        ></motion.div>
        <motion.div 
          className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-creeper/5 blur-3xl"
          animate={{ 
            scale: [1.2, 1, 1.2],
            opacity: [0.1, 0.05, 0.1]
          }}
          transition={{ 
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        ></motion.div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="max-w-3xl mx-auto text-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.h2 
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6"
            variants={itemVariants}
          >
            Ready to <motion.span 
              className="text-creeper"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.5 }}
            >Power Up</motion.span> Your Minecraft Experience?
          </motion.h2>
          
          <motion.p 
            className="text-xl text-gray-300 mb-10"
            variants={itemVariants}
          >
            Join thousands of satisfied players and server owners who trust CreeperCastle.cloud for reliable, high-performance Minecraft hosting with industry-leading protection.
          </motion.p>
          
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6"
            variants={itemVariants}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <Button className="minecraft-btn rounded-md text-lg py-6 px-8 relative overflow-hidden group">
                <span className="relative z-10">Get Started Now</span>
                <span className="absolute inset-0 bg-creeper-light opacity-0 group-hover:opacity-20 transition-opacity duration-300"></span>
              </Button>
            </motion.div>
            <motion.div 
              className="flex items-center"
              whileHover={{ x: 5 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <div className="w-12 h-12 bg-creeper/10 rounded-full flex items-center justify-center mr-3 group-hover:bg-creeper/20">
                <svg className="w-6 h-6 text-creeper" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
              <div className="text-left">
                <p className="font-medium">Start with a free consultation</p>
                <p className="text-sm text-gray-400">Talk to our experts about your needs</p>
              </div>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="mt-16 border-t border-gray-800 pt-8 text-center"
            variants={itemVariants}
            transition={{ delay: 0.6 }}
          >
            <p className="text-gray-400 mb-4">Trusted by Minecraft communities worldwide</p>
            <div className="flex flex-wrap justify-center gap-8 opacity-70">
              <motion.div 
                className="text-2xl font-bold"
                whileHover={{ scale: 1.1, color: "#50C878" }}
                transition={{ type: "spring", stiffness: 300 }}
              >1000+</motion.div>
              <motion.div 
                className="text-2xl font-bold"
                whileHover={{ scale: 1.1, color: "#50C878" }}
                transition={{ type: "spring", stiffness: 300 }}
              >25+</motion.div>
              <motion.div 
                className="text-2xl font-bold"
                whileHover={{ scale: 1.1, color: "#50C878" }}
                transition={{ type: "spring", stiffness: 300 }}
              >99.9%</motion.div>
              <motion.div 
                className="text-2xl font-bold"
                whileHover={{ scale: 1.1, color: "#50C878" }}
                transition={{ type: "spring", stiffness: 300 }}
              >24/7</motion.div>
            </div>
            <div className="flex flex-wrap justify-center gap-8 text-sm text-gray-500">
              <div>Active Servers</div>
              <div>Global Locations</div>
              <div>Uptime</div>
              <div>Support</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CtaSection;
