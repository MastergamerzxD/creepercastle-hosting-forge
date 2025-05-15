
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const DiscordSection = () => {
  return (
    <section className="py-20 bg-discord-dark relative overflow-hidden" id="discord">
      <div className="absolute inset-0 opacity-10 bg-[url('https://cdn.pixabay.com/photo/2017/03/09/20/53/discord-2130880_1280.png')] bg-repeat"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <motion.div 
            className="lg:w-1/2"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative">
              <img 
                src="/lovable-uploads/caa5a251-8601-4a03-8b9e-591fe309df17.png" 
                alt="CreeperCastle Discord Server" 
                className="w-full max-w-md mx-auto rounded-lg shadow-2xl border-2 border-discord-light/20"
              />
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-discord rounded-full flex items-center justify-center animate-bounce-slow">
                <span className="font-bold text-white text-lg">Join Now!</span>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className="lg:w-1/2"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Join Our <span className="text-discord">Discord</span> Community
              </h2>
              
              <p className="text-xl text-gray-300 mb-6">
                Connect with other Minecraft enthusiasts, get instant support from our team, and stay updated with the latest CreeperCastle news and events.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <div className="bg-discord/20 p-2 rounded-full mr-4 mt-1">
                    <svg className="w-5 h-5 text-discord" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.317 4.37a19.791 19.791 0 00-4.885-1.515.074.074 0 00-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 00-5.487 0 12.64 12.64 0 00-.617-1.25.077.077 0 00-.079-.037A19.736 19.736 0 003.677 4.37a.07.07 0 00-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 00.031.057 19.9 19.9 0 005.993 3.03.078.078 0 00.084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 00-.041-.106 13.107 13.107 0 01-1.872-.892.077.077 0 01-.008-.128 10.2 10.2 0 00.372-.292.074.074 0 01.077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 01.078.01c.12.098.246.198.373.292a.077.077 0 01-.006.127 12.299 12.299 0 01-1.873.892.077.077 0 00-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 00.084.028 19.839 19.839 0 006.002-3.03.077.077 0 00.032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 00-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">24/7 Support</h4>
                    <p className="text-gray-400">Get help from our team and community whenever you need it</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-discord/20 p-2 rounded-full mr-4 mt-1">
                    <svg className="w-5 h-5 text-discord" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10zm0-18c4.411 0 8 3.589 8 8s-3.589 8-8 8-8-3.589-8-8 3.589-8 8-8zM11 7v5.585l3.925 3.925 1.414-1.415L13 11.756V7h-2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Server Status Updates</h4>
                    <p className="text-gray-400">Stay informed about maintenance and updates</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-discord/20 p-2 rounded-full mr-4 mt-1">
                    <svg className="w-5 h-5 text-discord" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.486 2 2 6.486 2 12c0 5.515 4.486 10 10 10 5.515 0 10-4.486 10-10 0-5.515-4.486-10-10-10zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8zm1-11h-2v6h2v-6zm0-4h-2v2h2V5z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Community Events</h4>
                    <p className="text-gray-400">Participate in tournaments, giveaways, and more</p>
                  </div>
                </div>
              </div>
              
              <Button className="bg-discord hover:bg-discord-dark text-white rounded-md py-6 px-8 text-lg" asChild>
                <a href="https://discord.gg/RuQ9neH56S" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.317 4.37a19.791 19.791 0 00-4.885-1.515.074.074 0 00-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 00-5.487 0 12.64 12.64 0 00-.617-1.25.077.077 0 00-.079-.037A19.736 19.736 0 003.677 4.37a.07.07 0 00-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 00.031.057 19.9 19.9 0 005.993 3.03.078.078 0 00.084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 00-.041-.106 13.107 13.107 0 01-1.872-.892.077.077 0 01-.008-.128 10.2 10.2 0 00.372-.292.074.074 0 01.077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 01.078.01c.12.098.246.198.373.292a.077.077 0 01-.006.127 12.299 12.299 0 01-1.873.892.077.077 0 00-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 00.084.028 19.839 19.839 0 006.002-3.03.077.077 0 00.032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 00-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
                  </svg>
                  Join our Discord
                </a>
              </Button>
              
              <p className="text-gray-500 mt-4">
                Already over 5,000 members and growing!
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default DiscordSection;
