import TechIconsWrapper from "$components/TechIconsWrapper"

export default function Experience() {
  return (
    // TODO: Fix font sizes (font is pixelated)
    <section id="experience" className="mt-20 h-96 w-full text-white">
      <h2 className="font-sans text-4xl font-bold p-2 bg-dark-accent w-fit text-light-shade-100 drop-shadow-lg-black mx-5 ">Experience and skills</h2>
      <TechIconsWrapper />
      <div>
        <h3>Tools</h3>
      </div>
    </section>
  )
}
