import htmlIcon from "$svg/tech/Html5_Logo.svg"
import cssIcon from "$svg/tech/CSS3_Logo.svg"
import tailWindIcon from "$svg/tech/Tailwind_Logo.svg"
import jsIcon from "$svg/tech/Javascript_Logo.svg"
import tsIcon from "$svg/tech/Typescript_Logo.svg"
import nodeIcon from "$svg/tech/Nodejs_Logo.svg"
import reactIcon from "$svg/tech/React.svg"
import svelteIcon from "$svg/tech/Svelte_logo.svg"
import viteIcon from "$svg/tech/Vitejs_Logo.svg"
import gitIcon from "$svg/tech/Git_Logo.svg"
import atlassianIcon from "$svg/tech/Atlassian_Logo.svg"
import figmaIcon from "$svg/tech/Figma_logo.svg"
import rustIcon from "$svg/tech/Rust_Logo.svg"
import PythonIcon from "$svg/tech/Python_Logo.svg"
import MySQLIcon from "$svg/tech/MySQL_Logo.svg"
import CsIcon from "$svg/tech/Cs_Logo.svg"
import VueIcon from "$svg/tech/Vue_Logo.svg"

export const TechIcons: Array<{ name: string; xp: number; icon: string }> = [
  // XP Level 4
  {
    name: "CSS",
    icon: cssIcon,
    xp: 4,
  },
  {
    name: "Git",
    icon: gitIcon,
    xp: 4,
  },
  {
    name: "HTML",
    icon: htmlIcon,
    xp: 4,
  },
  {
    name: "JavaScript",
    icon: jsIcon,
    xp: 4,
  },
  {
    name: "React",
    icon: reactIcon,
    xp: 4,
  },
  {
    name: "Tailwind",
    icon: tailWindIcon,
    xp: 4,
  },
  {
    name: "TypeScript",
    icon: tsIcon,
    xp: 4,
  },

  // XP Level 3
  {
    name: "Atlassian",
    icon: atlassianIcon,
    xp: 3,
  },
  {
    name: "Node",
    icon: nodeIcon,
    xp: 3,
  },
  {
    name: "Vite",
    icon: viteIcon,
    xp: 3,
  },
  {
    name: "Vue",
    icon: VueIcon,
    xp: 3,
  },

  // XP Level 2
  {
    name: "Figma",
    icon: figmaIcon,
    xp: 2,
  },
  {
    name: "MySQL",
    icon: MySQLIcon,
    xp: 2,
  },
  {
    name: "Python",
    icon: PythonIcon,
    xp: 2,
  },
  {
    name: "Svelte",
    icon: svelteIcon,
    xp: 2,
  },

  // XP Level 1
  {
    name: "C#",
    icon: CsIcon,
    xp: 1,
  },
  {
    name: "Rust",
    icon: rustIcon,
    xp: 1,
  },
]
