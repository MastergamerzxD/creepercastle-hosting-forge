
import { Helmet } from 'react-helmet-async';

interface StructuredDataProps {
  page?: 'home' | 'minecraft' | 'creepershield' | 'vps' | 'contact' | 'locations' | 'discord' | 'creeperpanel';
}

const StructuredData = ({ page = 'home' }: StructuredDataProps) => {
  const baseUrl = 'https://creepercastle.cloud';
  
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "CreeperCastle",
    "url": baseUrl,
    "logo": `${baseUrl}/lovable-uploads/a5ede7d4-e1bf-4925-84dd-4b075648dc11.png`,
    "description": "Premium Minecraft Server Hosting in India with NVMe SSDs, DDoS protection, and 24/7 support",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "IN",
      "addressRegion": "Delhi NCR"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "customer service",
      "availableLanguage": "English"
    },
    "sameAs": [
      "https://discord.gg/creepercastle"
    ]
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "CreeperCastle",
    "url": baseUrl,
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": `${baseUrl}/search?q={search_term_string}`
      },
      "query-input": "required name=search_term_string"
    }
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": baseUrl
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Minecraft Hosting",
        "item": `${baseUrl}/plans/minecraft`
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "CreeperShield",
        "item": `${baseUrl}/plans/creepershield`
      },
      {
        "@type": "ListItem",
        "position": 4,
        "name": "VPS Hosting",
        "item": `${baseUrl}/plans/vps`
      },
      {
        "@type": "ListItem",
        "position": 5,
        "name": "Locations",
        "item": `${baseUrl}/locations`
      },
      {
        "@type": "ListItem",
        "position": 6,
        "name": "Contact",
        "item": `${baseUrl}/contact`
      }
    ]
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Minecraft Server Hosting",
    "provider": {
      "@type": "Organization",
      "name": "CreeperCastle"
    },
    "description": "Premium Minecraft server hosting with NVMe SSDs, DDoS protection, and instant setup",
    "serviceType": "Game Server Hosting",
    "areaServed": "India",
    "offers": [
      {
        "@type": "Offer",
        "name": "Minecraft Basic Plan",
        "price": "99",
        "priceCurrency": "INR",
        "description": "1GB RAM, NVMe SSD, DDoS Protection"
      },
      {
        "@type": "Offer",
        "name": "CreeperShield Protection",
        "price": "199",
        "priceCurrency": "INR",
        "description": "Advanced DDoS Protection for Gaming Servers"
      }
    ]
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(organizationSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(websiteSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(breadcrumbSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(serviceSchema)}
      </script>
    </Helmet>
  );
};

export default StructuredData;
