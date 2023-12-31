import { ExperienceConfig } from "$data/ExperienceConfig";
import Tag from "$components/common/Tag";

export default function ExperienceList() {
  return (
    <article>
      {ExperienceConfig &&
        ExperienceConfig.map(({ title, place, date, description, tech }, i) => {
          return (
            <div key={i} className="bg-main flex flex-col w-fit p-3 gap-2">
              <div>
                <h3>{title} <span className="text-light-shade-500">{place}</span></h3>
                <p className="font-sans italic text-sm">{date}</p>
              </div>
              <ul className="gap-3 flex flex-col items-center">
                <li className="w-[50ch]">{description}</li>
                <li className="gap-1 flex">
                  {tech && tech.map((tag, j) => (
                    <Tag key={j} text={tag} />
                  ))}
                </li>
              </ul>
            </div>
          )
        })}
      <h3>header</h3>
      <p>date</p>
    </article>
  )
}