import TechIconsWrapper from "$components/experience/TechIconsWrapper"
import ExperienceList from "$components/experience/ExperienceList"

export default function Experience() {
  return (
    // TODO: Fix font sizes (font is pixelated)
    <section
      id="experience"
      className="mt-10 flex h-fit w-full flex-col text-white"
    >
      <h2 className="mx-5 w-fit bg-dark-accent p-2 font-sans text-3xl font-bold text-light-shade-100 drop-shadow-lg-black md:text-5xl ">
        Skills and Experience
      </h2>
      <div className="mt-8 flex flex-col gap-3 rounded-md border-2 border-white/50 bg-dark-accent/20 p-3 md:flex-row">
        <TechIconsWrapper />
        <ExperienceList />
      </div>
    </section>
  )
}
