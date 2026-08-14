import { ScrollProgressProvider } from "@/lib/scroll-context";
import HeroCanvasWrapper from "@/components/three/HeroCanvasWrapper";
import { Atmosphere } from "@/components/shared/Atmosphere";
import { CustomCursor } from "@/components/ui/CustomCursor";
import { Navbar } from "@/components/ui/Navbar";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Skills } from "@/components/sections/Skills";
import { Work } from "@/components/sections/Work";
import { Contact } from "@/components/sections/Contact";

export default function HomePage() {
  return (
    <ScrollProgressProvider>
      <CustomCursor />
      <Atmosphere />
      <HeroCanvasWrapper />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Work />
        <Contact />
      </main>
    </ScrollProgressProvider>
  );
}
