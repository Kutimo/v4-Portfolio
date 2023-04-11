import Footer from "../../Layout/Footer";
import Navigation from "../../Layout/Navigation";
import About from "./sections/About";
import Contact from "./sections/Contact";
import Experience from "./sections/Experience";
import Projects from "$home-sections/Projects";
import Hero from "./sections/Hero";
import ColorTests from "./sections/ColorTests";

export default function Home() {
  return (
    <>
      <Navigation />
      <main className="bg-dark-shade min-h-screen w-full">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Contact />
        <ColorTests />
      </main>
      <Footer />
    </>
  );
}
