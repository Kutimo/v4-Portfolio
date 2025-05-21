import Corner_Logo from "$images/Corner_Logo.svg"
import merkelappen from "$images/merkelappen.avif"

export const ProjectConfig: Array<{
  img: string
  title: string
  date: string
  description: string
  url: string
}> = [
  {
    img: merkelappen,
    title: "Merkelappen",
    date: "Current",
    description:
      "One of my current projects for Merkelappen is a e-commerce website for a local company called Merkelappen. ",
    url: "https://www.merkelappen.no",
  },
  {
    img: Corner_Logo,
    title: "Corner ",
    date: "March /2023",
    description:
      "One of my previous projects for Corner, website for a music and sports bar in Sandefjord. ",
    url: "https://www.cornersfj.no",
  },
]
