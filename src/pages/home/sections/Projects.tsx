import ProjectWrapper from "$components/projects/ProjectWrapper"

export default function Projects() {
  return (
    <section id="projects" className="mt-20">
      <h3 className="mx-5 w-fit bg-dark-accent p-3 font-sans text-3xl font-bold text-light-shade-100 drop-shadow-lg-black md:text-5xl">
        Past projects
      </h3>
      <div className="mt-8 flex flex-wrap items-center justify-center gap-10 rounded-md border-2 border-white/50 bg-dark-accent/20 p-10 md: ">
        <ProjectWrapper />
      </div>
    </section>
  )
}
