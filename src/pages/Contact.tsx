
import { useState } from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Send, MessageSquare } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  
  const [submitting, setSubmitting] = useState(false);
  const { toast } = useToast();
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setSubmitting(false);
      toast({
        title: "Message Sent!",
        description: "We've received your message and will get back to you soon.",
        variant: "default",
      });
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    }, 1500);
  };
  
  return (
    <>
      <Helmet>
        <title>Contact Us | CreeperCastle.cloud</title>
        <meta name="description" content="Get in touch with the CreeperCastle.cloud team for questions about our Minecraft hosting services or custom solutions." />
      </Helmet>
      
      <div className="flex flex-col min-h-screen bg-navy text-white">
        <Navbar />
        
        <main className="flex-grow pt-20">
          {/* Hero Section */}
          <section className="py-16 md:py-24 bg-navy-dark relative overflow-hidden">
            <div className="container mx-auto px-4 relative z-10">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="max-w-4xl mx-auto text-center"
              >
                <h1 className="text-4xl md:text-5xl font-bold mb-6">
                  Get In <span className="text-creeper">Touch</span>
                </h1>
                <p className="text-xl text-gray-300 mb-8">
                  Have questions about our Minecraft hosting services? We're here to help!
                </p>
              </motion.div>
            </div>
            
            {/* Animated background elements */}
            <motion.div 
              className="absolute top-20 right-40 w-6 h-6 bg-creeper/20 rounded-md"
              animate={{ y: [0, -15, 0], rotate: [0, 180, 360] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            ></motion.div>
            <motion.div 
              className="absolute bottom-10 left-20 w-4 h-4 bg-creeper/20 rounded-md"
              animate={{ y: [0, -10, 0], rotate: [0, -180, -360] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            ></motion.div>
          </section>
          
          {/* Contact Options Section */}
          <section className="py-16">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl mx-auto">
                <motion.div 
                  className="bg-navy-light p-8 rounded-xl mb-8"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <h3 className="text-2xl font-bold mb-4 text-center">Contact Us</h3>
                  <p className="text-gray-300 mb-6 text-center">
                    You can reach our support team through email or join our Discord community for real-time assistance.
                  </p>
                  
                  <div className="flex flex-col md:flex-row justify-center gap-6 mt-8">
                    <motion.div 
                      className="bg-navy-dark p-6 rounded-xl flex-1 flex flex-col items-center text-center"
                      whileHover={{ y: -5, boxShadow: "0 10px 25px rgba(80, 200, 120, 0.1)" }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <div className="bg-creeper/10 p-4 rounded-full mb-4">
                        <Mail className="h-8 w-8 text-creeper" />
                      </div>
                      <h4 className="font-bold text-lg mb-2">Email Support</h4>
                      <p className="text-gray-400 mb-4">Reach out via email for any inquiries</p>
                      <a href="mailto:support@creepercastle.in" className="text-creeper font-semibold hover:underline">
                        support@creepercastle.in
                      </a>
                    </motion.div>
                    
                    <motion.div 
                      className="bg-navy-dark p-6 rounded-xl flex-1 flex flex-col items-center text-center"
                      whileHover={{ y: -5, boxShadow: "0 10px 25px rgba(80, 200, 120, 0.1)" }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <div className="bg-creeper/10 p-4 rounded-full mb-4">
                        <MessageSquare className="h-8 w-8 text-creeper" />
                      </div>
                      <h4 className="font-bold text-lg mb-2">Discord Community</h4>
                      <p className="text-gray-400 mb-4">Join our Discord for real-time support</p>
                      <Button className="minecraft-btn rounded-md" asChild>
                        <a href="https://discord.gg/RuQ9neH56S" target="_blank" rel="noopener noreferrer">
                          Join Discord
                        </a>
                      </Button>
                    </motion.div>
                  </div>
                </motion.div>
                
                <motion.div
                  className="bg-navy-light p-8 rounded-xl"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  <h3 className="text-2xl font-bold mb-6">Send Us A Message</h3>
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium mb-2">
                          Your Name
                        </label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full bg-navy-dark border-gray-800 focus:border-creeper focus:ring-creeper"
                          placeholder="John Doe"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium mb-2">
                          Your Email
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full bg-navy-dark border-gray-800 focus:border-creeper focus:ring-creeper"
                          placeholder="john@example.com"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium mb-2">
                        Subject
                      </label>
                      <Input
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full bg-navy-dark border-gray-800 focus:border-creeper focus:ring-creeper"
                        placeholder="How can we help you?"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium mb-2">
                        Your Message
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        className="w-full bg-navy-dark border-gray-800 focus:border-creeper focus:ring-creeper min-h-[150px]"
                        placeholder="Write your message here..."
                      />
                    </div>
                    
                    <Button 
                      type="submit"
                      className="minecraft-btn rounded-md w-full md:w-auto"
                      disabled={submitting}
                    >
                      {submitting ? (
                        <span className="flex items-center">
                          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-navy-dark" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Sending...
                        </span>
                      ) : (
                        <span className="flex items-center">
                          <Send className="mr-2 h-5 w-5" />
                          Send Message
                        </span>
                      )}
                    </Button>
                  </form>
                </motion.div>
              </div>
            </div>
          </section>
          
          {/* FAQ Section */}
          <section className="py-16 bg-navy-dark">
            <div className="container mx-auto px-4">
              <motion.div 
                className="text-center mb-12"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Frequently Asked <span className="text-creeper">Questions</span>
                </h2>
                <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                  Have questions? We've got answers! If you can't find what you're looking for, feel free to contact us.
                </p>
              </motion.div>
              
              <div className="max-w-3xl mx-auto">
                {[
                  {
                    question: "How quickly can I get my Minecraft server set up?",
                    answer: "Our servers are set up instantly! After completing your purchase, you'll have immediate access to your Minecraft server control panel."
                  },
                  {
                    question: "Can I upgrade my plan later?",
                    answer: "Absolutely! You can easily upgrade your plan at any time through our customer portal. All your data will be seamlessly transferred to your new plan."
                  },
                  {
                    question: "What payment methods do you accept?",
                    answer: "We accept credit/debit cards, UPI, and various other local payment methods for your convenience."
                  }
                ].map((faq, index) => (
                  <motion.div
                    key={index}
                    className="bg-navy-light rounded-xl mb-4 overflow-hidden"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                  >
                    <details className="group">
                      <summary className="flex justify-between items-center p-6 cursor-pointer">
                        <h3 className="font-semibold text-lg">{faq.question}</h3>
                        <span className="ml-6 shrink-0 transition duration-300 group-open:rotate-180">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6 text-creeper"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M19 9l-7 7-7-7"
                            />
                          </svg>
                        </span>
                      </summary>
                      <div className="px-6 pb-6 text-gray-300">
                        {faq.answer}
                      </div>
                    </details>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default ContactPage;
