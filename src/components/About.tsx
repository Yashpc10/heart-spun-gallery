import creatingArt from "@/assets/creating-art.jpg";

const About = () => {
  return (
    <section className="py-20 px-4 bg-muted/20">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h2 className="font-playfair text-5xl md:text-6xl font-bold text-foreground mb-6 italic">
              Our Story
            </h2>
            <div className="space-y-4 font-poppins text-lg text-foreground leading-relaxed">
              <p>
                <span className="font-playfair text-2xl text-primary-foreground italic font-semibold">
                  Manmarziya
                </span>{" "}
                is not just art — it's a reflection of heart's desire.
              </p>
              <p>
                Every piece is handcrafted with resin, colors, and emotion to capture moments that matter.
              </p>
              <p className="text-muted-foreground">
                Founded with passion, Manmarziya celebrates individuality through handmade art. Each creation is a labor of love, designed to bring joy and beauty into your life.
              </p>
            </div>
          </div>
          
          <div className="order-1 md:order-2">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src={creatingArt} 
                alt="Creating art"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
