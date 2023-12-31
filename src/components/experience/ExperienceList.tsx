import { ExperienceConfig } from "$data/ExperienceConfig"
import Tag from "$components/common/Tag"

export default function ExperienceList() {
  return (
    <article className="mt-10 flex flex-col gap-3 drop-shadow-sm">
      {ExperienceConfig &&
        ExperienceConfig.map(({ title, place, date, description, tech }, i) => {
          return (
            <div key={i} className="flex w-fit flex-col gap-2 bg-main p-3">
              <div>
                <h3>
                  {title} <span className="text-light-shade-500">{place}</span>
                </h3>
                <p className="font-sans text-sm italic">{date}</p>
              </div>
              <ul className="flex flex-col items-center gap-3">
                <li className="w-[50ch]">{description}</li>
                <li className="flex gap-1">
                  {tech && tech.map((tag, j) => <Tag key={j} text={tag} />)}
                </li>
              </ul>
            </div>
          )
        })}
    </article>
  )
}
