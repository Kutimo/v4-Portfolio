import Tag from "$components/common/Tag";

export default function ExperienceList() {
  return (
    <article>
      <h3>header</h3>
      <p>date</p>
      <ul>
        <li>about text</li>
        {/* <li>tags</li> */}
        <Tag text="tag" />
      </ul>
    </article>
  )
}