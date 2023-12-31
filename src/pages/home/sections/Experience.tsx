import TechIconsWrapper from "$components/experience/TechIconsWrapper"
import ExperienceList from "$components/experience/ExperienceList"

export default function Experience() {
  return (
    // TODO: Fix font sizes (font is pixelated)
    <section id="experience" className="mt-10 h-fit w-full text-white flex flex-col px-[4%] py-10 md:px-[1%] md:py-16 lg:px-[4%] lg:py-20">
      <h2 className="mx-5 w-fit bg-dark-accent p-2 font-sans text-4xl font-bold text-light-shade-100 drop-shadow-lg-black ">
        Experience and skills
      </h2>
      <div className="flex gap-3 mt-10">
        <TechIconsWrapper />
        <ExperienceList />
      </div>
    </section>
  )
}
