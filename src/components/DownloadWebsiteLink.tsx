
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const DownloadWebsiteLink = () => {
  const { toast } = useToast();

  const handleDownload = async () => {
    try {
      toast({
        title: "Preparing download...",
        description: "We're packaging your website files.",
      });

      // In a real application, this would be an API endpoint that generates and returns the website files
      // For this example, we'll simulate a download with a timeout
      setTimeout(() => {
        const link = document.createElement('a');
        link.href = "https://github.com/creepercastle/website/archive/refs/heads/main.zip"; // This would be a real URL in production
        link.download = "creepercastle-website.zip";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

        toast({
          title: "Download started!",
          description: "Your website files are being downloaded.",
          variant: "default",
        });
      }, 1500);
    } catch (error) {
      toast({
        title: "Download failed",
        description: "There was an error preparing your download. Please try again.",
        variant: "destructive",
      });
    }
  };

  return (
    <Button 
      onClick={handleDownload} 
      className="bg-creeper hover:bg-creeper-dark text-navy-dark font-bold py-2 px-4 rounded flex items-center gap-2"
    >
      <Download size={18} />
      Download Website
    </Button>
  );
};

export default DownloadWebsiteLink;
