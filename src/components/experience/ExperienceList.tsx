import { ExperienceConfig } from "$data/ExperienceConfig"
import Tag from "$components/common/Tag"

export default function ExperienceList() {
  return (
    <article className="flex flex-col sm:items-center md:items-start gap-4 p-3 drop-shadow-sm">
      {ExperienceConfig &&
        ExperienceConfig.map(({ title, place, date, description, tech }, i) => {
          return (
            <div key={i} className="flex flex-col bg-main p-3 gap-1 drop-shadow-sm rounded-sm">
              <div>
                <h3 className="text-2xl">
                  {title} <span className="text-light-shade-400">{place}</span>
                </h3>
                <p className="font-sans text-sm italic mt-1">{date}</p>
              </div>
              <ul className="flex flex-col items-center gap-2">
                <li className="md:w-[60ch] sm:w-[35ch]">{description}</li>
                <li className="flex gap-1.5">
                  {tech && tech.map((tag, j) => <Tag key={j} text={tag} />)}
                </li>
              </ul>
            </div>
          )
        })}
    </article>
  )
}
