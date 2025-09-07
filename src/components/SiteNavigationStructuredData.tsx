import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";

const SiteNavigationStructuredData = () => {
  const location = useLocation();
  const baseUrl = "https://creepercastle.cloud";

  // Website navigation structure for Google sitelinks
  const siteNavigationData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "CreeperCastle.cloud",
    "alternateName": ["CreeperCastle", "Creeper Castle"],
    "url": baseUrl,
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": `${baseUrl}/search?q={search_term_string}`
      },
      "query-input": "required name=search_term_string"
    },
    "mainEntity": {
      "@type": "ItemList",
      "itemListElement": [
        {
          "@type": "SiteNavigationElement",
          "position": 1,
          "name": "Home",
          "description": "CreeperCastle.cloud - Premium Minecraft server hosting in India",
          "url": `${baseUrl}/`
        },
        {
          "@type": "SiteNavigationElement",
          "position": 2,
          "name": "Minecraft Hosting Plans",
          "description": "Premium Minecraft server hosting plans with DDoS protection and instant setup",
          "url": `${baseUrl}/plans/minecraft`
        },
        {
          "@type": "SiteNavigationElement",
          "position": 3,
          "name": "VPS Hosting",
          "description": "High-performance virtual private servers for gaming and applications",
          "url": `${baseUrl}/plans/vps`
        },
        {
          "@type": "SiteNavigationElement",
          "position": 4,
          "name": "Discord Bot Hosting",
          "description": "Reliable Discord bot hosting with 24/7 uptime guarantee",
          "url": `${baseUrl}/plans/discord-bot`
        },
        {
          "@type": "SiteNavigationElement",
          "position": 5,
          "name": "CreeperShield Protection",
          "description": "Advanced DDoS protection and security services for game servers",
          "url": `${baseUrl}/plans/creepershield-anycasted`
        },
        {
          "@type": "SiteNavigationElement",
          "position": 6,
          "name": "Other Hosting Services",
          "description": "Additional hosting solutions including web hosting and cloud services",
          "url": `${baseUrl}/plans/other`
        },
        {
          "@type": "SiteNavigationElement",
          "position": 7,
          "name": "CreeperPanel",
          "description": "Advanced server management panel with one-click installations",
          "url": `${baseUrl}/creeperpanel`
        },
        {
          "@type": "SiteNavigationElement",
          "position": 8,
          "name": "Server Locations",
          "description": "Available server locations across India including Mumbai and Delhi",
          "url": `${baseUrl}/locations`
        },
        {
          "@type": "SiteNavigationElement",
          "position": 9,
          "name": "Datacenter Information",
          "description": "Learn about our data centers and infrastructure",
          "url": `${baseUrl}/datacenter`
        },
        {
          "@type": "SiteNavigationElement",
          "position": 10,
          "name": "About Us",
          "description": "Learn about CreeperCastle team and our mission",
          "url": `${baseUrl}/about`
        },
        {
          "@type": "SiteNavigationElement",
          "position": 11,
          "name": "Contact Support",
          "description": "Get 24/7 support for your hosting needs",
          "url": `${baseUrl}/contact`
        },
        {
          "@type": "SiteNavigationElement",
          "position": 12,
          "name": "Discord Community",
          "description": "Join our Discord community for support and updates",
          "url": `${baseUrl}/discord`
        },
        {
          "@type": "SiteNavigationElement",
          "position": 13,
          "name": "Useful Links",
          "description": "Collection of helpful resources and external links",
          "url": `${baseUrl}/links`
        }
      ]
    }
  };

  // Organization structured data
  const organizationData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "CreeperCastle.cloud",
    "alternateName": ["CreeperCastle", "Creeper Castle"],
    "url": baseUrl,
    "logo": {
      "@type": "ImageObject",
      "url": `${baseUrl}/lovable-uploads/a5ede7d4-e1bf-4925-84dd-4b075648dc11.png`,
      "width": 400,
      "height": 400
    },
    "description": "Premium Minecraft server hosting services in India with best-in-class hardware, DDoS protection, instant setup, and 24/7 support.",
    "foundingDate": "2023",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "India",
      "addressRegion": "Mumbai, Delhi"
    },
    "contactPoint": [{
      "@type": "ContactPoint",
      "contactType": "customer support",
      "email": "support@creepercastle.in",
      "availableLanguage": ["English", "Hindi"],
      "areaServed": "IN",
      "hoursAvailable": [{
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        "opens": "00:00",
        "closes": "23:59"
      }]
    }],
    "sameAs": [
      "https://discord.gg/RuQ9neH56S"
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Hosting Services",
      "itemListElement": [{
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Minecraft Server Hosting",
          "description": "Premium Minecraft server hosting with DDoS protection"
        },
        "priceCurrency": "INR",
        "price": "99"
      }, {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "VPS Hosting",
          "description": "High-performance virtual private servers"
        },
        "priceCurrency": "INR",
        "price": "249"
      }]
    }
  };

  // Breadcrumb data for non-home pages
  const getBreadcrumbData = () => {
    if (location.pathname === '/') return null;

    const pathParts = location.pathname.split('/').filter(Boolean);
    const breadcrumbItems = [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": baseUrl
      }
    ];

    let currentPath = baseUrl;
    pathParts.forEach((part, index) => {
      currentPath += `/${part}`;
      const name = part.charAt(0).toUpperCase() + part.slice(1).replace(/-/g, ' ');
      breadcrumbItems.push({
        "@type": "ListItem",
        "position": index + 2,
        "name": name,
        "item": currentPath
      });
    });

    return {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": breadcrumbItems
    };
  };

  const breadcrumbData = getBreadcrumbData();

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(siteNavigationData)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(organizationData)}
      </script>
      {breadcrumbData && (
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbData)}
        </script>
      )}
    </Helmet>
  );
};

export default SiteNavigationStructuredData;