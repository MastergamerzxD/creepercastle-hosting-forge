
import { Helmet } from 'react-helmet-async';

const GoogleVerification = () => {
  return (
    <Helmet>
      {/* Google Search Console Verification - Replace with your actual verification code */}
      <meta name="google-site-verification" content="your-google-verification-code-here" />
      
      {/* Additional meta tags for better indexing */}
      <meta name="googlebot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      <meta name="bingbot" content="index, follow" />
      
      {/* Rich snippets support */}
      <meta property="article:publisher" content="https://creepercastle.cloud" />
      <meta name="author" content="CreeperCastle Team" />
      
      {/* Geographic targeting */}
      <meta name="geo.region" content="IN" />
      <meta name="geo.country" content="India" />
      <meta name="geo.placename" content="Delhi NCR, Mumbai" />
      
      {/* Site verification for other search engines */}
      <meta name="msvalidate.01" content="your-bing-verification-code" />
      <meta name="yandex-verification" content="your-yandex-verification-code" />
    </Helmet>
  );
};

export default GoogleVerification;
