import htmlIcon from "$svg/tech/Html5_Logo.svg"
import cssIcon from "$svg/tech/CSS3_Logo.svg"
import tailWindIcon from "$svg/tech/Tailwind_Logo.svg"
import jsIcon from "$svg/tech/Javascript_Logo.svg"
import tsIcon from "$svg/tech/Typescript_Logo.svg"
import nodeIcon from "$svg/tech/Nodejs_Logo.svg"
import reactIcon from "$svg/tech/React.svg"
import svelteIcon from "$svg/tech/Svelte_logo.svg"
import viteIcon from "$svg/tech/Vitejs_Logo.svg"
import gitIcon from "$svg/tech/GitHub_Logo.svg"
import gitlabIcon from "$svg/tech/Gitlab_Logo.svg"
import AtlassianIcon from "$svg/tech/Atlassian_Logo.svg"
import test from "$svg/tech/test.svg"

export const TechIcons: Array<{ name: string; xp: number; icon: string }> = [
  {
    name: "HTML",
    icon: htmlIcon,
    xp: 3,
  },
  {
    name: "CSS",
    icon: cssIcon,
    xp: 3,
  },
  {
    name: "Tailwind",
    icon: tailWindIcon,
    xp: 3,
  },
  {
    name: "JavaScript",
    icon: jsIcon,
    xp: 3,
  },
  {
    name: "TypeScript",
    icon: tsIcon,
    xp: 2,
  },
  {
    name: "Node",
    icon: nodeIcon,
    xp: 2,
  },
  {
    name: "React",
    icon: reactIcon,
    xp: 3,
  },
  {
    name: "Svelte",
    icon: svelteIcon,
    xp: 2,
  },
  {
    name: "Vite",
    icon: viteIcon,
    xp: 3,
  },
  {
    name: "Git",
    icon: gitIcon,
    xp: 3,
  },
  {
    name: "Gitlab",
    icon: gitlabIcon,
    xp: 3,
  },
  {
    name: "Atlassian",
    icon: AtlassianIcon,
    xp: 2,
  },
  {
    name: "test",
    icon: test,
    xp: 2,
  },
]
