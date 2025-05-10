
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Star, ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const testimonials = [
  {
    name: "Alex Johnson",
    avatar: "AJ",
    role: "Server Owner",
    rating: 5,
    comment: "CreeperCastle has been a game-changer for my community. The server performance is incredible, and the control panel makes management so easy. CreeperShield kept us online during a massive DDoS attack that took down other servers in our network.",
    verified: true,
    plan: "Iron Plan"
  },
  {
    name: "Sarah Williams",
    avatar: "SW",
    role: "Modpack Creator",
    rating: 5,
    comment: "I've tried many hosting providers, but CreeperCastle is by far the best for modded Minecraft. My 250-mod pack runs flawlessly, and the support team helped me optimize it even further. The NVMe storage makes a huge difference!",
    verified: true,
    plan: "Diamond Plan"
  },
  {
    name: "Michael Chen",
    avatar: "MC",
    role: "Community Manager",
    rating: 4,
    comment: "Managing our 100-player server network has never been easier. The multi-server management tools are intuitive, and the automatic backups have saved us more than once. Very impressed with the performance and uptime.",
    verified: true,
    plan: "Stone Plan"
  }
];

const ReviewsSection = () => {
  return (
    <section className="py-20 bg-navy" id="reviews">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our <span className="text-creeper">Customers</span> Say</h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Join thousands of satisfied server owners who trust CreeperCastle.cloud with their Minecraft communities.
          </p>
          
          <div className="flex items-center justify-center mt-6">
            <div className="flex">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} className="h-6 w-6 fill-creeper text-creeper" />
              ))}
            </div>
            <span className="ml-2 font-medium">4.9 out of 5</span>
            <span className="text-gray-400 ml-2">(256 reviews)</span>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-navy-light border-gray-800 hover:border-creeper/30 transition-all">
              <CardContent className="p-6">
                <div className="flex items-start">
                  <div className="bg-navy w-12 h-12 rounded-full flex items-center justify-center font-medium text-lg mr-3">
                    {testimonial.avatar}
                  </div>
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
                  <Badge variant="outline" className="ml-2 bg-navy text-xs border-gray-700 text-gray-400">
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
          ))}
        </div>
        
        {/* Trustpilot Integration */}
        <div className="bg-navy-light border border-gray-800 rounded-xl p-8 max-w-3xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center">
              <img 
                src="https://cdn.pixabay.com/photo/2022/01/30/13/33/review-6980523_1280.jpg" 
                alt="Trustpilot" 
                className="h-8 mr-3" 
              />
              <div>
                <h3 className="font-bold text-lg">Trustpilot Reviews</h3>
                <p className="text-gray-400 text-sm">Independent & verified reviews</p>
              </div>
            </div>
            <div className="flex">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} className="h-5 w-5 fill-[#00b67a] text-[#00b67a]" />
              ))}
            </div>
          </div>
          
          <p className="text-gray-300 mb-6">
            "We're proud of our excellent rating on Trustpilot. Our customers consistently rate us highly for our reliability, performance, and customer support."
          </p>
          
          <Button className="w-full bg-[#00b67a] hover:bg-[#00a26e] text-white rounded-md flex items-center justify-center gap-2" asChild>
            <a href="https://www.trustpilot.com/review/creepercastle.cloud" target="_blank" rel="noopener noreferrer">
              Read our Trustpilot reviews
              <ExternalLink className="h-4 w-4" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
