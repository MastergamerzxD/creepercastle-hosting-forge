
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Check, HelpCircle } from "lucide-react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

const plans = [
  {
    name: "Stone",
    price: 4.99,
    ram: "2GB",
    cpu: "1 vCore",
    storage: "25GB NVMe SSD",
    players: "Up to 20",
    ddos: "Basic Protection",
    plugins: "Unlimited",
    backups: "Daily",
    features: ["One-Click Plugin Installer", "99.9% Uptime", "24/7 Support"],
    mostPopular: false
  },
  {
    name: "Iron",
    price: 9.99,
    ram: "4GB",
    cpu: "2 vCores",
    storage: "50GB NVMe SSD",
    players: "Up to 50",
    ddos: "CreeperShield Basic",
    plugins: "Unlimited",
    backups: "Twice Daily",
    features: ["One-Click Plugin Installer", "Custom Domain", "99.9% Uptime", "24/7 Support", "Modpack Support"],
    mostPopular: true
  },
  {
    name: "Gold",
    price: 19.99,
    ram: "8GB",
    cpu: "4 vCores",
    storage: "100GB NVMe SSD",
    players: "Up to 100",
    ddos: "CreeperShield Premium",
    plugins: "Unlimited",
    backups: "6-Hour Intervals",
    features: ["One-Click Plugin Installer", "Custom Domain", "99.9% Uptime", "Priority Support", "Advanced Modpack Support", "Server Cloning"],
    mostPopular: false
  },
  {
    name: "Diamond",
    price: 39.99,
    ram: "16GB",
    cpu: "8 vCores",
    storage: "250GB NVMe SSD",
    players: "Unlimited",
    ddos: "CreeperShield Enterprise",
    plugins: "Unlimited",
    backups: "Hourly",
    features: ["One-Click Plugin Installer", "Custom Domain", "99.99% Uptime", "Dedicated Support", "Advanced Modpack Support", "Server Cloning", "Multi-Server Network"],
    mostPopular: false
  }
];

const PricingSection = () => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'quarterly' | 'yearly'>('monthly');
  
  const getDiscountedPrice = (basePrice: number) => {
    if (billingCycle === 'quarterly') return (basePrice * 3 * 0.9).toFixed(2);
    if (billingCycle === 'yearly') return (basePrice * 12 * 0.8).toFixed(2);
    return basePrice.toFixed(2);
  };
  
  const getBillingText = () => {
    if (billingCycle === 'quarterly') return '/quarter';
    if (billingCycle === 'yearly') return '/year';
    return '/month';
  };
  
  const getSavingText = () => {
    if (billingCycle === 'quarterly') return 'Save 10%';
    if (billingCycle === 'yearly') return 'Save 20%';
    return '';
  };

  return (
    <section className="py-20 bg-navy-dark" id="pricing">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Simple, Transparent <span className="text-creeper">Pricing</span></h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Choose the perfect plan for your Minecraft server needs. All plans include our CreeperShield DDoS protection.
          </p>
          
          <div className="mt-8 inline-flex items-center p-1 bg-navy-light rounded-lg">
            <button
              className={`px-4 py-2 rounded-md transition-all ${billingCycle === 'monthly' ? 'bg-creeper text-navy-dark' : 'text-gray-400 hover:text-white'}`}
              onClick={() => setBillingCycle('monthly')}
            >
              Monthly
            </button>
            <button
              className={`px-4 py-2 rounded-md transition-all ${billingCycle === 'quarterly' ? 'bg-creeper text-navy-dark' : 'text-gray-400 hover:text-white'}`}
              onClick={() => setBillingCycle('quarterly')}
            >
              Quarterly
              {billingCycle === 'quarterly' && <span className="ml-2 text-xs bg-green-900 text-white px-2 py-0.5 rounded-full">Save 10%</span>}
            </button>
            <button
              className={`px-4 py-2 rounded-md transition-all ${billingCycle === 'yearly' ? 'bg-creeper text-navy-dark' : 'text-gray-400 hover:text-white'}`}
              onClick={() => setBillingCycle('yearly')}
            >
              Yearly
              {billingCycle === 'yearly' && <span className="ml-2 text-xs bg-green-900 text-white px-2 py-0.5 rounded-full">Save 20%</span>}
            </button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {plans.map((plan, index) => (
            <div key={index} className={`bg-navy-light rounded-xl overflow-hidden transition-all hover:transform hover:-translate-y-2 ${plan.mostPopular ? 'border-2 border-creeper relative' : 'border border-gray-800'}`}>
              {plan.mostPopular && (
                <div className="absolute top-0 right-0 bg-creeper text-navy-dark font-medium text-sm px-4 py-1 rounded-bl-lg">
                  Most Popular
                </div>
              )}
              
              <div className="p-6">
                <h3 className="font-bold text-2xl mb-2">{plan.name}</h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold">${getDiscountedPrice(plan.price)}</span>
                  <span className="text-gray-400">{getBillingText()}</span>
                  {getSavingText() && billingCycle !== 'monthly' && (
                    <div className="text-sm text-creeper mt-1">{getSavingText()}</div>
                  )}
                </div>
                <Button className="w-full minecraft-btn rounded-md">Get Started</Button>
              </div>
              
              <div className="border-t border-gray-800 p-6">
                <ul className="space-y-4">
                  <li className="flex items-center">
                    <span className="font-medium mr-2">RAM:</span>
                    <span className="ml-auto text-creeper">{plan.ram}</span>
                  </li>
                  <li className="flex items-center">
                    <span className="font-medium mr-2">CPU:</span>
                    <span className="ml-auto text-creeper">{plan.cpu}</span>
                  </li>
                  <li className="flex items-center">
                    <span className="font-medium mr-2">Storage:</span>
                    <span className="ml-auto text-creeper">{plan.storage}</span>
                  </li>
                  <li className="flex items-center">
                    <div className="flex items-center font-medium mr-2">
                      <span>DDoS Protection:</span>
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger>
                            <HelpCircle className="h-4 w-4 ml-1 text-gray-400" />
                          </TooltipTrigger>
                          <TooltipContent>
                            <p className="w-64">CreeperShield protects your server from DDoS attacks, keeping it online even during attacks.</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </div>
                    <span className="ml-auto text-creeper">{plan.ddos}</span>
                  </li>
                  <li className="flex items-center">
                    <span className="font-medium mr-2">Players:</span>
                    <span className="ml-auto text-creeper">{plan.players}</span>
                  </li>
                  <li className="flex items-center">
                    <span className="font-medium mr-2">Backups:</span>
                    <span className="ml-auto text-creeper">{plan.backups}</span>
                  </li>
                </ul>
              </div>
              
              <div className="border-t border-gray-800 p-6">
                <h4 className="font-medium mb-3">Features:</h4>
                <ul className="space-y-2">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <Check className="h-5 w-5 text-creeper mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-gray-400 mb-4">Need a custom solution? We've got you covered.</p>
          <Button variant="outline" className="border-creeper text-creeper hover:bg-creeper/10 rounded-md">
            Contact Us for Custom Plans
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
