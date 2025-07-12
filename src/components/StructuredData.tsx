
import { Helmet } from "react-helmet-async";

interface StructuredDataProps {
  type?: 'website' | 'organization' | 'breadcrumb';
  data?: any;
}

const StructuredData = ({ type = 'website', data }: StructuredDataProps) => {
  const getStructuredData = () => {
    const baseUrl = "https://creepercastle.cloud";
    
    const websiteData = {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "name": "CreeperCastle.cloud",
      "alternateName": "CreeperCastle",
      "url": baseUrl,
      "description": "Premium Minecraft server hosting services in India with best-in-class hardware, DDoS protection, and instant setup.",
      "potentialAction": {
        "@type": "SearchAction",
        "target": `${baseUrl}/search?q={search_term_string}`,
        "query-input": "required name=search_term_string"
      },
      "sameAs": [
        "https://discord.gg/RuQ9neH56S"
      ],
      "mainEntity": {
        "@type": "ItemList",
        "itemListElement": [
          {
            "@type": "SiteNavigationElement",
            "position": 1,
            "name": "Minecraft Hosting",
            "description": "Premium Minecraft server hosting plans",
            "url": `${baseUrl}/plans/minecraft`
          },
          {
            "@type": "SiteNavigationElement", 
            "position": 2,
            "name": "CreeperShield Protection",
            "description": "Advanced DDoS protection for servers",
            "url": `${baseUrl}/plans/creepershield`
          },
          {
            "@type": "SiteNavigationElement",
            "position": 3,
            "name": "VPS Hosting",
            "description": "High-performance virtual private servers",
            "url": `${baseUrl}/plans/vps`
          },
          {
            "@type": "SiteNavigationElement",
            "position": 4,
            "name": "Server Locations",
            "description": "Available server locations in India",
            "url": `${baseUrl}/locations`
          },
          {
            "@type": "SiteNavigationElement",
            "position": 5,
            "name": "CreeperPanel",
            "description": "Advanced server management panel",
            "url": `${baseUrl}/creeperpanel`
          },
          {
            "@type": "SiteNavigationElement",
            "position": 6,
            "name": "Contact Support",
            "description": "Get help from our support team",
            "url": `${baseUrl}/contact`
          }
        ]
      }
    };

    const organizationData = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "CreeperCastle.cloud",
      "url": baseUrl,
      "logo": `${baseUrl}/lovable-uploads/a5ede7d4-e1bf-4925-84dd-4b075648dc11.png`,
      "description": "Premium Minecraft server hosting services in India with best-in-class hardware, DDoS protection, and instant setup.",
      "address": {
        "@type": "PostalAddress",
        "addressCountry": "India",
        "addressRegion": "Mumbai, Delhi"
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "contactType": "customer support",
        "email": "support@creepercastle.in",
        "availableLanguage": ["English", "Hindi"]
      },
      "sameAs": [
        "https://discord.gg/RuQ9neH56S"
      ],
      "offers": {
        "@type": "AggregateOffer",
        "itemOffered": {
          "@type": "Service",
          "name": "Minecraft Server Hosting",
          "description": "Premium Minecraft server hosting with DDoS protection"
        },
        "lowPrice": "99",
        "highPrice": "3300",
        "priceCurrency": "INR"
      }
    };

    if (type === 'organization') return organizationData;
    if (data) return data;
    return websiteData;
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(getStructuredData())}
      </script>
    </Helmet>
  );
};

export default StructuredData;
