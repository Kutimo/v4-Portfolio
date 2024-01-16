import { ExperienceConfig } from "$data/ExperienceConfig"
import Tag from "$components/common/Tag"

export default function ExperienceList() {
  return (
    <article className="mt-10 flex flex-col gap-3 drop-shadow-sm">
      {ExperienceConfig &&
        ExperienceConfig.map(({ title, place, date, description, tech }, i) => {
          return (
            <div key={i} className="flex flex-col bg-main p-3 gap-1">
              <div>
                <h3 className="text-2xl">
                  {title} <span className="text-light-shade-400">{place}</span>
                </h3>
                <p className="font-sans text-sm italic mt-1">{date}</p>
              </div>
              <ul className="flex flex-col items-center gap-2">
                <li className="w-[50ch]">{description}</li>
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
