import { Button } from "@/components/ui/button";
import { Instagram, Mail } from "lucide-react";

const Contact = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-background to-primary/10">
      <div className="container mx-auto max-w-4xl text-center">
        <h2 className="font-playfair text-5xl md:text-6xl font-bold text-foreground mb-6 italic">
          Let's Create Together
        </h2>
        <p className="font-poppins text-xl text-muted-foreground mb-8">
          Have a custom idea? Want to order something special? We'd love to hear from you!
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
          <Button 
            asChild
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-poppins font-medium px-8 py-6 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            <a 
              href="https://instagram.com/manmarziyaart?utm_source=website" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <Instagram className="w-5 h-5" />
              DM us on Instagram
            </a>
          </Button>
          
          <Button 
            asChild
            variant="outline"
            size="lg"
            className="border-2 border-primary hover:bg-primary/10 font-poppins font-medium px-8 py-6 text-lg rounded-full transition-all duration-300 hover:scale-105"
          >
            <a 
              href="mailto:manmarziya.art@gmail.com"
              className="flex items-center gap-2"
            >
              <Mail className="w-5 h-5" />
              Email Us
            </a>
          </Button>
        </div>

        <div className="font-poppins text-muted-foreground space-y-2">
          <p className="flex items-center justify-center gap-2">
            <Instagram className="w-5 h-5" />
            <a 
              href="https://instagram.com/manmarziyaart" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-primary-foreground transition-colors"
            >
              @manmarziyaart
            </a>
          </p>
          <p className="flex items-center justify-center gap-2">
            <Mail className="w-5 h-5" />
            <a 
              href="mailto:manmarziya.art@gmail.com"
              className="hover:text-primary-foreground transition-colors"
            >
              manmarziya.art@gmail.com
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
