
import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";

const BreadcrumbStructuredData = () => {
  const location = useLocation();
  const baseUrl = "https://creepercastle.cloud";
  
  const getBreadcrumbData = () => {
    const pathSegments = location.pathname.split('/').filter(Boolean);
    
    const breadcrumbList = [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": baseUrl
      }
    ];

    let currentPath = baseUrl;
    pathSegments.forEach((segment, index) => {
      currentPath += `/${segment}`;
      let name = segment.charAt(0).toUpperCase() + segment.slice(1);
      
      // Custom names for better UX
      if (segment === 'minecraft') name = 'Minecraft Hosting';
      if (segment === 'creepershield') name = 'CreeperShield Protection';
      if (segment === 'vps') name = 'VPS Hosting';
      if (segment === 'performance') name = 'Performance Hosting';
      if (segment === 'creeperpanel') name = 'CreeperPanel';
      if (segment === 'plans') name = 'Hosting Plans';
      if (segment === 'locations') name = 'Server Locations';
      if (segment === 'contact') name = 'Contact Support';
      if (segment === 'discord') name = 'Discord Community';
      
      breadcrumbList.push({
        "@type": "ListItem",
        "position": index + 2,
        "name": name,
        "item": currentPath
      });
    });

    return {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": breadcrumbList
    };
  };

  // Only show breadcrumbs if not on home page
  if (location.pathname === '/') return null;

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(getBreadcrumbData())}
      </script>
    </Helmet>
  );
};

export default BreadcrumbStructuredData;
