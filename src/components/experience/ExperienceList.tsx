import { ExperienceConfig } from "$data/ExperienceConfig";
import Tag from "$components/common/Tag";




export default function ExperienceList() {
  return (
    <article>
      {ExperienceConfig &&
        ExperienceConfig.map(({ title, place, date, description, tech }, i) => {
          return (
            <div key={i}>
              <h3>{title}<span>{place}</span></h3>
              <p>{date}</p>
              <ul>
                <li>{description}</li>
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
      <ul>
        <li>about text</li>
        <Tag text="tag" />
      </ul>
    </article>
  )
}