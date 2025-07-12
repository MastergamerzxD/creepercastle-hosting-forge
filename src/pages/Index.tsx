import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Shell } from "@/components/Shell";
import { useEffect, useState } from "react";
import { toast } from "@/components/ui/use-toast";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import StructuredData from "@/components/StructuredData";

const Index = () => {
  const [serverType, setServerType] = useState("java");
  const [ram, setRam] = useState("2");
  const [duration, setDuration] = useState("1");
  const [coupon, setCoupon] = useState("");
  const [price, setPrice] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const calculatePrice = () => {
      let basePrice = 0;
      if (serverType === "java") {
        basePrice = parseInt(ram) * 99;
      } else if (serverType === "bedrock") {
        basePrice = parseInt(ram) * 79;
      } else {
        basePrice = parseInt(ram) * 129;
      }

      let discountedPrice = basePrice;
      if (coupon === "CREEPERCASTLE") {
        discountedPrice = basePrice * 0.8;
      }

      setPrice(discountedPrice * parseInt(duration));
    };

    calculatePrice();
  }, [serverType, ram, duration, coupon]);

  const handleOrder = () => {
    if (price <= 0) {
      toast({
        title: "Error",
        description: "Please select a valid server configuration.",
        variant: "destructive",
      });
      return;
    }

    navigate(
      `/order?serverType=${serverType}&ram=${ram}&duration=${duration}&coupon=${coupon}`
    );
  };

  return (
    <>
      <StructuredData page="home" />
      <Helmet>
        <title>CreeperCastle - Premium Minecraft Server Hosting in India</title>
        <meta name="description" content="India's best Minecraft server hosting with NVMe SSDs, DDoS protection, and 24/7 support. Low-latency servers for Java & Bedrock with instant setup." />
        <meta name="keywords" content="minecraft server hosting india, minecraft hosting, modded minecraft, mcpe hosting, minecraft bedrock server, minecraft java hosting, anti-ddos protection, nvme ssd hosting, gaming servers india" />
        <link rel="canonical" href="https://creepercastle.cloud/" />
        
        {/* Site Links Enhancement */}
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="CreeperCastle" />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        
        {/* Structured Navigation Links */}
        <link rel="preload" href="/plans/minecraft" as="document" />
        <link rel="preload" href="/plans/creepershield" as="document" />
        <link rel="preload" href="/plans/vps" as="document" />
        <link rel="preload" href="/locations" as="document" />
      </Helmet>

      {/* Site Navigation Links for Google */}
      <nav className="hidden" aria-label="Site Navigation">
        <ul>
          <li><a href="/plans/minecraft">Minecraft Hosting Plans</a></li>
          <li><a href="/plans/creepershield">CreeperShield DDoS Protection</a></li>
          <li><a href="/plans/vps">VPS Hosting Solutions</a></li>
          <li><a href="/locations">Server Locations</a></li>
          <li><a href="/contact">Contact Support</a></li>
          <li><a href="/discord">Discord Community</a></li>
          <li><a href="/creeperpanel">CreeperPanel Control Panel</a></li>
        </ul>
      </nav>

      <Shell>
        <Card>
          <CardHeader>
            <CardTitle>Configure Your Server</CardTitle>
            <CardDescription>
              Select your server type, RAM, and duration.
            </CardDescription>
          </CardHeader>
          <CardContent className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="server-type">Server Type</Label>
              <Select onValueChange={setServerType} defaultValue={serverType}>
                <SelectTrigger id="server-type">
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="java">Java</SelectItem>
                  <SelectItem value="bedrock">Bedrock</SelectItem>
                  <SelectItem value="modded">Modded</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="ram">RAM (GB)</Label>
              <Select onValueChange={setRam} defaultValue={ram}>
                <SelectTrigger id="ram">
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1">1 GB</SelectItem>
                  <SelectItem value="2">2 GB</SelectItem>
                  <SelectItem value="3">3 GB</SelectItem>
                  <SelectItem value="4">4 GB</SelectItem>
                  <SelectItem value="5">5 GB</SelectItem>
                  <SelectItem value="6">6 GB</SelectItem>
                  <SelectItem value="7">7 GB</SelectItem>
                  <SelectItem value="8">8 GB</SelectItem>
                  <SelectItem value="9">9 GB</SelectItem>
                  <SelectItem value="10">10 GB</SelectItem>
                  <SelectItem value="11">11 GB</SelectItem>
                  <SelectItem value="12">12 GB</SelectItem>
                  <SelectItem value="13">13 GB</SelectItem>
                  <SelectItem value="14">14 GB</SelectItem>
                  <SelectItem value="15">15 GB</SelectItem>
                  <SelectItem value="16">16 GB</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="duration">Duration (Months)</Label>
              <Select onValueChange={setDuration} defaultValue={duration}>
                <SelectTrigger id="duration">
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1">1 Month</SelectItem>
                  <SelectItem value="3">3 Months</SelectItem>
                  <SelectItem value="6">6 Months</SelectItem>
                  <SelectItem value="12">12 Months</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="coupon">Coupon Code</Label>
              <Input
                id="coupon"
                placeholder="Enter coupon code"
                value={coupon}
                onChange={(e) => setCoupon(e.target.value)}
              />
            </div>
          </CardContent>
          <CardFooter className="flex flex-col gap-2">
            <Button className="w-full" onClick={handleOrder}>
              Order Now for ₹{price}
            </Button>
            <p className="text-sm text-muted-foreground">
              You will be redirected to our order page.
            </p>
          </CardFooter>
        </Card>
      </Shell>
    </>
  );
};

export default Index;
