
import { Card, CardContent } from "@/components/ui/card";
import { Star, ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Glume Gamer",
    avatar: "GG",
    role: "Partner",
    rating: 5,
    comment: "CreeperCastle has been a game-changer for my community. The server performance is incredible, and the control panel makes management so easy. CreeperShield kept us online during a massive DDoS attack that took down other servers in our network.",
    verified: true,
    plan: "Iron Plan"
  },
  {
    name: "Living Legend",
    avatar: "LL",
    role: "Partner",
    rating: 5,
    comment: "I've tried many hosting providers, but CreeperCastle is by far the best for modded Minecraft. My 250-mod pack runs flawlessly, and the support team helped me optimize it even further. The NVMe storage makes a huge difference!",
    verified: true,
    plan: "Diamond Plan"
  },
  {
    name: "Yaswath",
    avatar: "YS",
    role: "Customer",
    rating: 4,
    comment: "Managing our 100-player server network has never been easier. The multi-server management tools are intuitive, and the automatic backups have saved us more than once. Very impressed with the performance and uptime.",
    verified: true,
    plan: "Stone Plan"
  }
];

const trustpilotLogo = "https://images.squarespace-cdn.com/content/v1/5e6e06d0eb7da54d51ce0ddb/65cb95c2-67fa-43ba-b37c-c92a9d94a0cb/Trustpilot_brandmark_gr-wht_RVB.png";

const ReviewsSection = () => {
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
    <section className="py-20 bg-navy" id="reviews">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our <span className="text-creeper">Customers</span> Say</h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Join thousands of satisfied server owners who trust CreeperCastle.cloud with their Minecraft communities.
          </p>
          
          <motion.div 
            className="flex items-center justify-center mt-6"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            <div className="flex">
              {[1, 2, 3, 4, 5].map((star, index) => (
                <motion.div
                  key={star}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.1 * index }}
                >
                  <Star className="h-6 w-6 fill-creeper text-creeper" />
                </motion.div>
              ))}
            </div>
            <span className="ml-2 font-medium">4.9 out of 5</span>
            <span className="text-gray-400 ml-2">(100+ reviews, including Discord reviews)</span>
          </motion.div>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div 
              key={index} 
              variants={itemVariants}
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <Card className="bg-navy-light border-gray-800 hover:border-creeper/30 transition-all h-full group">
                <CardContent className="p-6">
                  <div className="flex items-start">
                    <motion.div 
                      className="bg-navy w-12 h-12 rounded-full flex items-center justify-center font-medium text-lg mr-3 border border-transparent group-hover:border-creeper/30 transition-colors"
                      whileHover={{ rotate: 5 }}
                    >
                      {testimonial.avatar}
                    </motion.div>
                    <div>
                      <h4 className="font-semibold">{testimonial.name}</h4>
                      <p className="text-sm text-gray-400">{testimonial.role}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center mt-4 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={`h-4 w-4 ${i < testimonial.rating ? 'fill-creeper text-creeper' : 'text-gray-600'}`}
                      />
                    ))}
                    <Badge variant="outline" className="ml-2 bg-navy text-xs border-gray-700 text-gray-400 group-hover:bg-creeper/5 group-hover:border-creeper/20 transition-colors">
                      {testimonial.plan}
                    </Badge>
                  </div>
                  
                  <p className="text-gray-300 mt-4">
                    "{testimonial.comment}"
                  </p>
                  
                  {testimonial.verified && (
                    <div className="mt-4 flex items-center text-xs text-creeper">
                      <svg className="h-3 w-3 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                      </svg>
                      Verified Customer
                    </div>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
        
        {/* Trustpilot Integration */}
        <motion.div 
          className="bg-navy-light border border-gray-800 rounded-xl p-8 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          whileHover={{ boxShadow: "0 0 30px rgba(80, 200, 120, 0.1)" }}
        >
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center">
              <img 
                src={trustpilotLogo} 
                alt="Trustpilot" 
                className="h-8 mr-3" 
                onError={(e) => {
                  e.currentTarget.src = "https://seeklogo.com/images/T/trustpilot-logo-3C08171527-seeklogo.com.png";
                }}
              />
              <div>
                <h3 className="font-bold text-lg">Trustpilot Reviews</h3>
                <p className="text-gray-400 text-sm">Independent & verified reviews</p>
              </div>
            </div>
            <div className="flex">
              {[1, 2, 3, 4, 5].map((star) => (
                <motion.div
                  key={star}
                  whileHover={{ y: -2 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Star className="h-5 w-5 fill-[#00b67a] text-[#00b67a]" />
                </motion.div>
              ))}
            </div>
          </div>
          
          <p className="text-gray-300 mb-6">
            "We're proud of our excellent rating on Trustpilot. Our customers consistently rate us highly for our reliability, performance, and customer support."
          </p>
          
          <motion.div whileHover={{ scale: 1.03 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
            <Button className="w-full bg-[#00b67a] hover:bg-[#00a26e] text-white rounded-md flex items-center justify-center gap-2 relative overflow-hidden group" asChild>
              <a href="https://www.trustpilot.com" target="_blank" rel="noopener noreferrer">
                <span className="relative z-10">Read our Trustpilot reviews</span>
                <ExternalLink className="h-4 w-4 relative z-10" />
                <span className="absolute inset-0 opacity-0 group-hover:opacity-20 bg-white transition-opacity duration-300"></span>
              </a>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ReviewsSection;
