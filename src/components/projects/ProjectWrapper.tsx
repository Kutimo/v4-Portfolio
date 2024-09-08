import { ProjectConfig } from "$data/ProjectConfig";

export default function ProjectWrapper() {
  return (
    <>
      {ProjectConfig &&
        ProjectConfig.map((project) => (
          <div
            key={project.title}
            className="w-[375px] h-[275px] relative group drop-shadow-lg-black rounded-md border-2 border-white/50"
          >
            <img
              src={project.img}
              alt={project.title}
              width={375}
              height={275}
              className="pointer-events-none w-full h-full object-fill aspect-video transition-opacity duration-300 group-hover:opacity-0"
            />
            <div className="absolute inset-0 bg-dark-accent transition-opacity duration-300 opacity-0 group-hover:opacity-100 text-white p-3 flex flex-col gap-3 items-center justify-center">
              <h4 className="font-sans font-bold text-xl">{project.title}</h4>
              <p className="p-1 text-center">{project.description}</p>
              <a
                href={project.url}
                className="border-light border-2 border-light-shade-400 p-2 text-lg font-medium text-light-shade-100 shadow-md transition-all duration-300 ease-in hover:rounded-none hover:border-light-shade-200 hover:bg-light-shade-400 hover:text-black md:text-xl"
              >
                Website
              </a>
            </div>
            <p className="absolute -bottom-5 right-1/2 bg-dark-accent p-3 font-serif font-semibold text-white rounded-md">
              {project.date}
            </p>
          </div>
        ))}
    </>
  );
}
