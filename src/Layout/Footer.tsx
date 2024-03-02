import { CiLinkedin } from "react-icons/ci"
import { FaGithub } from "react-icons/fa"

export default function Footer() {
  const today = new Date()
  const year = today.getFullYear()

  return (
    <footer className="flex justify-evenly bg-black p-5">
      <div className="flex flex-col font-serif">
        <span className="text-center text-white">Designed and Developed by </span>
        <span className="text-center text-white">Marius Kristiansen @ {year}</span>
      </div>
      <div className="flex gap-10 ">
        <a
          href="https://www.linkedin.com/in/marius-kristiansen-280b3b128/"
          target="_blank"
          className="text-white duration-300 hover:text-light-shade-200 "
          rel="noreferrer"
        >
          <CiLinkedin size={30} className="hover:scale-110" />
        </a>
        <a
          href="https://github.com/Kutimo"
          target="_blank"
          className="text-white duration-300 hover:text-light-shade-200 "
          rel="noreferrer"
        >
          <FaGithub size={30} className="hover:scale-110" />
        </a>
      </div>
    </footer>
  )
}
