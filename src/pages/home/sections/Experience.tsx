import TechIconsWrapper from "$components/experience/TechIconsWrapper"
import ExperienceList from "$components/experience/ExperienceList"

export default function Experience() {
  return (
    // TODO: Fix font sizes (font is pixelated)
    <section id="experience" className="mt-10 h-fit w-full text-white">
      <h2 className="mx-5 w-fit bg-dark-accent p-2 font-sans text-4xl font-bold text-light-shade-100 drop-shadow-lg-black ">
        Experience and skills
      </h2>
      <TechIconsWrapper />
      <ExperienceList />
    </section>
  )
}
