import { ExperienceConfig } from "$data/ExperienceConfig"
import Tag from "$components/common/Tag"

export default function ExperienceList() {
  return (
    <article className="flex flex-col gap-4 p-5 drop-shadow-sm sm:items-center md:items-start">
      {ExperienceConfig &&
        ExperienceConfig.map(({ title, place, date, description, tech }, i) => {
          return (
            <div
              key={i}
              className="flex flex-col gap-1 rounded-sm bg-main p-3 drop-shadow-sm"
            >
              <div>
                <h3 className="text-xl md:text-2xl">
                  {title}{" "}
                  <span className="text-lg text-blue-600 md:text-xl">{place}</span>
                </h3>
                <p className="mt-1 font-sans text-sm italic">{date}</p>
              </div>
              <ul className="flex flex-col items-center gap-2">
                <li className="text-gray-950 sm:w-[35ch] md:w-[60ch]">{description}</li>
                <li className="flex flex-wrap gap-1.5">
                  {tech && tech.map((tag, j) => <Tag key={j} text={tag} />)}
                </li>
              </ul>
            </div>
          )
        })}
    </article>
  )
}
