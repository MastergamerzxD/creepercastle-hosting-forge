
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import BreadcrumbStructuredData from "@/components/BreadcrumbStructuredData";
import Index from "./pages/Index";
import Contact from "./pages/Contact";
import Discord from "./pages/Discord";
import Locations from "./pages/Locations";
import FreeHosting from "./pages/FreeHosting";
import MinecraftPlans from "./pages/plans/MinecraftPlans";
import CreeperShieldPlans from "./pages/plans/CreeperShieldPlans";
import OtherHosting from "./pages/OtherHosting";
import CreeperPanel from "./pages/CreeperPanel";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <HelmetProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <BreadcrumbStructuredData />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/free-hosting" element={<FreeHosting />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/discord" element={<Discord />} />
            <Route path="/locations" element={<Locations />} />
            <Route path="/plans/minecraft" element={<MinecraftPlans />} />
            <Route path="/plans/creepershield" element={<CreeperShieldPlans />} />
            <Route path="/plans/other" element={<OtherHosting />} />
            <Route path="/creeperpanel" element={<CreeperPanel />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </HelmetProvider>
  </QueryClientProvider>
);

export default App;
