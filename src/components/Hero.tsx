import { Button } from "@/components/ui/button";
import { Instagram } from "lucide-react";
import heroImage from "@/assets/hero-resin.jpg";

const Hero = () => {
  const scrollToGallery = () => {
    document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/95 via-background/80 to-background/95" />
      </div>
      
      <div className="relative z-10 container mx-auto px-4 text-center">
        <h1 className="font-playfair text-6xl md:text-8xl font-bold text-foreground mb-6 animate-fade-in italic">
          Manmarziya
        </h1>
        <p className="font-poppins text-2xl md:text-3xl text-primary-foreground mb-4 animate-fade-in-up">
          Art that speaks your heart.
        </p>
        <p className="font-poppins text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 animate-fade-in-up-delay">
          Handcrafted resin and string artworks made with love.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up-delay-2">
          <Button 
            onClick={scrollToGallery}
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-poppins font-medium px-8 py-6 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            Explore Creations
          </Button>
          <Button 
            asChild
            variant="outline"
            size="lg"
            className="border-2 border-primary bg-background/50 backdrop-blur-sm hover:bg-primary/10 font-poppins font-medium px-8 py-6 text-lg rounded-full transition-all duration-300 hover:scale-105"
          >
            <a 
              href="https://instagram.com/manmarziyaart?utm_source=website" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <Instagram className="w-5 h-5" />
              Follow on Instagram
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
