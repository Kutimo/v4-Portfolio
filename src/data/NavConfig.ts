import aboutIcon from "$svg/navIcons/aboutIcon.svg"
import experienceIcon from "$svg/navIcons/experienceIcon.svg";
import projectIcon from "$svg/navIcons/projectIcon.svg";
import contactIcon from "$svg/navIcons/contactIcon.svg"
export const navLinks: Array<{ name: string; url: string; icon: string}> = [
  {
    name: 'About',
    url: '/#about',
    icon: aboutIcon,
  },
  {
    name: 'Experience',
    url: '/#experience',
    icon: experienceIcon,
  },
  {
    name: 'Projects',
    url: '/#projects',
    icon: projectIcon,
  },
  {
    name: 'Contact',
    url: '/#contact',
    icon: contactIcon,
  },
]
