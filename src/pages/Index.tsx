import Hero from "@/components/Hero";
import Intro from "@/components/Intro";
import Gallery from "@/components/Gallery";
import Categories from "@/components/Categories";
import About from "@/components/About";
import Contact from "@/components/Contact";
import FloatingInstagram from "@/components/FloatingInstagram";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Hero />
      <Intro />
      <Gallery />
      <Categories />
      <About />
      <Contact />
      <FloatingInstagram />
      <Footer />
    </main>
  );
};

export default Index;
