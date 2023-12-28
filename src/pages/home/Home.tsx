import About from "./sections/About"
import Contact from "../contact/Contact"
import Experience from "./sections/Experience"
import Projects from "$home-sections/Projects"
import Hero from "./sections/Hero"
import ColorTests from "./sections/ColorTests"

export default function Home() {
  return (
    <main className="min-h-screen w-full bg-dark-shade">
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Contact />
      <ColorTests />
    </main>
  )
}
