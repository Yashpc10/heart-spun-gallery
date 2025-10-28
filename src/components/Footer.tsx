const Footer = () => {
  return (
    <footer className="py-8 px-4 bg-primary/5 border-t border-border">
      <div className="container mx-auto text-center">
        <p className="font-playfair text-2xl font-bold text-foreground mb-2 italic">
          Manmarziya
        </p>
        <p className="font-poppins text-sm text-muted-foreground">
          Handcrafted with ♡ — Art that speaks your heart
        </p>
        <p className="font-poppins text-xs text-muted-foreground mt-2">
          © {new Date().getFullYear()} Manmarziya. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
