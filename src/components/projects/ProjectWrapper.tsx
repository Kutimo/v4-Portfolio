import { ProjectConfig } from "$data/ProjectConfig"

export default function ProjectWrapper() {
  return (
    <>
      {ProjectConfig &&
        ProjectConfig.map((project) => (
          <div
            key={project.title}
            className="group relative h-[275px] w-[375px] rounded-md border-2 border-white/50 drop-shadow-lg-black"
          >
            <img
              src={project.img}
              alt={project.title}
              width={375}
              height={275}
              className="pointer-events-none object-fill h-full w-full transition-opacity duration-300 group-hover:opacity-0"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-dark-accent p-3 text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <h4 className="font-sans text-xl font-bold">{project.title}</h4>
              <p className="p-1 text-center">{project.description}</p>
              <a
                href={project.url}
                className="border-light border-2 border-light-shade-400 p-2 text-lg font-medium text-light-shade-100 shadow-md transition-all duration-300 ease-in hover:rounded-none hover:border-light-shade-200 hover:bg-light-shade-400 hover:text-black md:text-xl"
              >
                Website
              </a>
            </div>
            <p className="absolute -bottom-6 md:-bottom-5 right-1/2 rounded-md bg-dark-accent p-1 md:p-3 font-serif font-semibold text-white">
              {project.date}
            </p>
          </div>
        ))}
    </>
  )
}
