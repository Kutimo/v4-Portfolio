import Footer from "../../Layout/Footer"
import Navigation from "../../Layout/Navigation"
import About from "$homeSections/About"
import Contact from "./sections/Contact"
import Experience from "$homeSections/Experience"
import Projects from "$homeSections/Projects"
import Hero from "$homeSections/Hero"
// import ColorTests from "./sections/ColorTests"

export default function Home() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen w-full bg-dark-shade">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Contact />
        {/* <ColorTests /> */}
      </main>
      <Footer />
    </>
  )
}
