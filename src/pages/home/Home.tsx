import Footer from "../../Layout/Footer";
import Navigation from "../../Layout/Navigation";
import About from "./sections/About";
import Contact from "./sections/Contact";
import Experience from "./sections/Experience";
import Projects from "$home-sections/Projects";

export default function Home() {
  return (
    <>
      <Navigation />
      <main className="bg-dark-shade min-h-screen w-full">
        <About />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
