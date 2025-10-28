import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Instagram } from "lucide-react";
import resinPlatter from "@/assets/resin-platter.jpg";
import stringPortrait from "@/assets/string-portrait.jpg";
import resinKeychains from "@/assets/resin-keychains.jpg";

const artworks = [
  {
    id: 1,
    title: "Rose Gold Ring Platter",
    description: "Customizable color & name",
    image: resinPlatter,
    category: "Resin Art"
  },
  {
    id: 2,
    title: "String Art Portrait",
    description: "Personalized couple portraits",
    image: stringPortrait,
    category: "String Art"
  },
  {
    id: 3,
    title: "Resin Keychains",
    description: "Colorful & unique designs",
    image: resinKeychains,
    category: "Resin Art"
  }
];

const Gallery = () => {
  return (
    <section id="gallery" className="py-20 px-4 bg-muted/20">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-playfair text-5xl md:text-6xl font-bold text-foreground mb-4 italic">
            Our Creations
          </h2>
          <p className="font-poppins text-lg text-muted-foreground max-w-2xl mx-auto">
            Each piece is crafted with care, designed to capture moments that matter
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {artworks.map((artwork) => (
            <Card 
              key={artwork.id} 
              className="group overflow-hidden border-2 border-border hover:border-primary transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 bg-card"
            >
              <div className="aspect-square overflow-hidden">
                <img 
                  src={artwork.image} 
                  alt={artwork.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <span className="inline-block px-3 py-1 text-xs font-poppins font-medium bg-primary/20 text-primary-foreground rounded-full mb-3">
                  {artwork.category}
                </span>
                <h3 className="font-playfair text-2xl font-semibold text-foreground mb-2">
                  {artwork.title}
                </h3>
                <p className="font-poppins text-muted-foreground mb-4">
                  {artwork.description}
                </p>
                <Button 
                  asChild
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-poppins rounded-full transition-all duration-300"
                >
                  <a 
                    href="https://instagram.com/manmarziyaart?utm_source=website" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2"
                  >
                    <Instagram className="w-4 h-4" />
                    Order via Instagram DM
                  </a>
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
