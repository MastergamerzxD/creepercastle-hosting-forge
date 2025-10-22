import { Helmet } from "react-helmet-async";

const OrganizationSchema = () => {
  const organizationData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "CreeperCastle",
    "legalName": "CreeperCastle Cloud Services",
    "url": "https://creepercastle.cloud",
    "logo": "https://creepercastle.cloud/lovable-uploads/5ec47ff0-f939-4968-8b39-ad88e0f3b7d6.png",
    "description": "India's #1 Minecraft server hosting provider with 50 Tbps DDoS protection, NVMe SSD, and 24/7 support. Serving 10,000+ players with enterprise-grade infrastructure.",
    "foundingDate": "2023",
    "founders": [
      {
        "@type": "Person",
        "name": "Ahaan Gupta",
        "jobTitle": "CEO & Founder"
      },
      {
        "@type": "Person",
        "name": "Yaswanth",
        "jobTitle": "Co-Founder & Lead Management"
      }
    ],
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "IN",
      "addressRegion": "Maharashtra, Delhi NCR",
      "addressLocality": "Mumbai, Delhi"
    },
    "contactPoint": [
      {
        "@type": "ContactPoint",
        "telephone": "+91-XXXX-XXXXXX",
        "contactType": "customer support",
        "email": "support@creepercastle.in",
        "areaServed": "IN",
        "availableLanguage": ["English", "Hindi"],
        "hoursAvailable": {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": [
            "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"
          ],
          "opens": "00:00",
          "closes": "23:59"
        }
      }
    ],
    "sameAs": [
      "https://discord.gg/RuQ9neH56S",
      "https://billing.creepercastle.in",
      "https://shield.creepercastle.com"
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "1250",
      "bestRating": "5",
      "worstRating": "1"
    },
    "priceRange": "₹₹",
    "areaServed": {
      "@type": "Country",
      "name": "India"
    },
    "serviceArea": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": "19.0760",
        "longitude": "72.8777"
      },
      "geoRadius": "2000"
    }
  };

  const websiteData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "CreeperCastle",
    "url": "https://creepercastle.cloud",
    "description": "Best Minecraft server hosting in India with enterprise-grade infrastructure",
    "publisher": {
      "@type": "Organization",
      "name": "CreeperCastle",
      "logo": {
        "@type": "ImageObject",
        "url": "https://creepercastle.cloud/lovable-uploads/5ec47ff0-f939-4968-8b39-ad88e0f3b7d6.png"
      }
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://creepercastle.cloud/search?q={search_term_string}"
      },
      "query-input": "required name=search_term_string"
    }
  };

  const localBusinessData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "CreeperCastle Hosting",
    "image": "https://creepercastle.cloud/lovable-uploads/5ec47ff0-f939-4968-8b39-ad88e0f3b7d6.png",
    "@id": "https://creepercastle.cloud",
    "url": "https://creepercastle.cloud",
    "telephone": "+91-XXXX-XXXXXX",
    "priceRange": "₹₹",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Mumbai & Delhi Datacenters",
      "addressLocality": "Mumbai",
      "addressRegion": "MH",
      "postalCode": "400001",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 19.0760,
      "longitude": 72.8777
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"
      ],
      "opens": "00:00",
      "closes": "23:59"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "1250"
    }
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(organizationData)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(websiteData)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(localBusinessData)}
      </script>
    </Helmet>
  );
};

export default OrganizationSchema;
