import Footer from "../Layout/Footer";
import Navigation from "../Layout/Navigation";
import About from "../sections/About";
import Contact from "../sections/Contact";
import Experience from "../sections/Experience";
import Projects from "../sections/Projects";

export default function Home() {
  return (
    <>
      <Navigation />
      <main className="bg-slate-800 min-h-screen w-full">
        <About />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
