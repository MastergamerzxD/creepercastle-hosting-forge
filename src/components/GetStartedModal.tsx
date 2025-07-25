
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Server, Shield, Cpu, ArrowRight } from "lucide-react";

interface GetStartedModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const GetStartedModal = ({ isOpen, onClose }: GetStartedModalProps) => {
  const navigate = useNavigate();

  const handleServiceSelect = (route: string) => {
    onClose();
    navigate(route);
  };

  const services = [
    {
      icon: Server,
      title: "Minecraft Hosting",
      description: "High-performance Minecraft servers with instant setup and premium features",
      route: "/plans/minecraft",
      color: "text-creeper",
      bgColor: "bg-creeper/10",
      borderColor: "border-creeper/20"
    },
    {
      icon: Shield,
      title: "CreeperShield Protection",
      description: "Advanced DDoS protection and security solutions for your servers",
      route: "/plans/creepershield",
      color: "text-blue-400",
      bgColor: "bg-blue-400/10",
      borderColor: "border-blue-400/20"
    },
    {
      icon: Cpu,
      title: "VPS Hosting",
      description: "Powerful virtual private servers for advanced server management",
      route: "/plans/other",
      color: "text-purple-400",
      bgColor: "bg-purple-400/10",
      borderColor: "border-purple-400/20"
    }
  ];

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-2xl bg-navy-dark border-gray-800">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-center text-white">
            Choose Your Service
          </DialogTitle>
        </DialogHeader>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className={`bg-navy-light ${service.borderColor} hover:border-opacity-50 transition-all cursor-pointer group`}
              onClick={() => handleServiceSelect(service.route)}
            >
              <div className="p-6 text-center">
                <div className={`w-16 h-16 ${service.bgColor} rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <service.icon className={`h-8 w-8 ${service.color}`} />
                </div>
                
                <h3 className="text-lg font-semibold text-white mb-2">{service.title}</h3>
                <p className="text-gray-400 text-sm mb-4">{service.description}</p>
                
                <Button 
                  className="w-full minecraft-btn group-hover:scale-105 transition-transform"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleServiceSelect(service.route);
                  }}
                >
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </Card>
          ))}
        </div>
        
        <div className="mt-6 text-center">
          <p className="text-gray-400 text-sm">
            Need help choosing? <a href="/contact" className="text-creeper hover:underline">Contact our experts</a>
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default GetStartedModal;
