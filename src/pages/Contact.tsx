
import { useState } from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send } from "lucide-react";
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
          
          {/* Contact Form Section */}
          <section className="py-16">
            <div className="container mx-auto px-4">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                {/* Contact Info */}
                <motion.div 
                  className="lg:col-span-1 bg-navy-light p-8 rounded-xl"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
                  
                  <div className="space-y-6">
                    <div className="flex items-start">
                      <div className="bg-creeper/10 p-3 rounded-full mr-4">
                        <Mail className="h-6 w-6 text-creeper" />
                      </div>
                      <div>
                        <h4 className="font-medium text-lg">Email Us</h4>
                        <p className="text-gray-400">support@creepercastle.cloud</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="bg-creeper/10 p-3 rounded-full mr-4">
                        <MapPin className="h-6 w-6 text-creeper" />
                      </div>
                      <div>
                        <h4 className="font-medium text-lg">Location</h4>
                        <p className="text-gray-400">Mumbai, India</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="bg-creeper/10 p-3 rounded-full mr-4">
                        <Phone className="h-6 w-6 text-creeper" />
                      </div>
                      <div>
                        <h4 className="font-medium text-lg">Call Us</h4>
                        <p className="text-gray-400">+91 123-456-7890</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-10 pt-8 border-t border-gray-800">
                    <h4 className="font-medium text-lg mb-4">Follow Us</h4>
                    <div className="flex space-x-4">
                      <a href="#" className="bg-navy-dark hover:bg-creeper/20 transition-colors p-3 rounded-full">
                        <svg className="h-5 w-5 text-creeper" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                        </svg>
                      </a>
                      <a href="#" className="bg-navy-dark hover:bg-creeper/20 transition-colors p-3 rounded-full">
                        <svg className="h-5 w-5 text-creeper" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                        </svg>
                      </a>
                      <a href="#" className="bg-navy-dark hover:bg-creeper/20 transition-colors p-3 rounded-full">
                        <svg className="h-5 w-5 text-creeper" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"/>
                        </svg>
                      </a>
                      <a href="https://discord.gg/creepercastle" target="_blank" rel="noopener noreferrer" className="bg-navy-dark hover:bg-creeper/20 transition-colors p-3 rounded-full">
                        <svg className="h-5 w-5 text-creeper" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M20.317 4.37a19.791 19.791 0 00-4.885-1.515.074.074 0 00-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 00-5.487 0 12.64 12.64 0 00-.617-1.25.077.077 0 00-.079-.037A19.736 19.736 0 003.677 4.37a.07.07 0 00-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 00.031.057 19.9 19.9 0 005.993 3.03.078.078 0 00.084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 00-.041-.106 13.107 13.107 0 01-1.872-.892.077.077 0 01-.008-.128 10.2 10.2 0 00.372-.292.074.074 0 01.077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 01.078.01c.12.098.246.198.373.292a.077.077 0 01-.006.127 12.299 12.299 0 01-1.873.892.077.077 0 00-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 00.084.028 19.839 19.839 0 006.002-3.03.077.077 0 00.032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 00-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </motion.div>
                
                {/* Contact Form */}
                <motion.div 
                  className="lg:col-span-2 bg-navy-light p-8 rounded-xl"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
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
                    answer: "We accept credit/debit cards, PayPal, UPI, and various other local payment methods for your convenience."
                  },
                  {
                    question: "Do you offer refunds?",
                    answer: "Yes, we offer a 3-day money-back guarantee if you're not satisfied with our service. Simply contact our support team within 3 days of your purchase."
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
