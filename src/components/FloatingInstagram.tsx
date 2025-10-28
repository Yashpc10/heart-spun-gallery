import { Button } from "@/components/ui/button";
import { Instagram } from "lucide-react";

const FloatingInstagram = () => {
  return (
    <a
      href="https://instagram.com/manmarziyaart?utm_source=website"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 z-50"
    >
      <Button
        size="lg"
        className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-110 animate-pulse"
      >
        <Instagram className="w-7 h-7 text-white" />
      </Button>
    </a>
  );
};

export default FloatingInstagram;
