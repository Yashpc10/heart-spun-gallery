import { Button } from "@/components/ui/button";
import { Sparkles, Scissors, Gift } from "lucide-react";

const categories = [
  {
    icon: Sparkles,
    title: "Resin Art",
    items: "Platters, keychains, pendants, trays, coasters, bookmarks",
    gradient: "from-primary/20 to-secondary/20"
  },
  {
    icon: Scissors,
    title: "String Art",
    items: "Portraits, names, initials, couple gifts",
    gradient: "from-secondary/20 to-accent/20"
  },
  {
    icon: Gift,
    title: "Custom Orders",
    items: "Personalized gifts, resin name plates, combo sets",
    gradient: "from-accent/20 to-primary/20"
  }
];

const Categories = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="font-playfair text-5xl md:text-6xl font-bold text-foreground mb-4 italic">
            What We Create
          </h2>
          <p className="font-poppins text-lg text-muted-foreground">
            From resin magic to string portraits — every piece tells a story
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div 
                key={index}
                className={`bg-gradient-to-br ${category.gradient} backdrop-blur-sm p-8 rounded-3xl border-2 border-border hover:border-primary transition-all duration-300 hover:shadow-xl hover:-translate-y-2`}
              >
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center">
                    <Icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                </div>
                <h3 className="font-playfair text-3xl font-bold text-foreground text-center mb-4">
                  {category.title}
                </h3>
                <p className="font-poppins text-muted-foreground text-center mb-6">
                  {category.items}
                </p>
                <Button 
                  asChild
                  variant="outline"
                  className="w-full border-2 border-primary hover:bg-primary/10 font-poppins rounded-full transition-all duration-300"
                >
                  <a 
                    href="https://instagram.com/manmarziyaart?utm_source=website" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    Order on Instagram
                  </a>
                </Button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Categories;
