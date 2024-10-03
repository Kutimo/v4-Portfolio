import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import logo from "$svg/logo.svg"
import { RiMenu3Fill } from "react-icons/ri"
import { IoIosCloseCircleOutline } from "react-icons/io"
import { AboutIcon, ExperienceIcon, ProjectIcon, ContactIcon } from "$svg/navIcons/Index"

export default function Navigation() {
  const [showMenu, setShowMenu] = useState(false)
  const [isAbove768px, setIsAbove768px] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setIsAbove768px(window.innerWidth < 768)
    }

    handleResize()
    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  function toggleMenu() {
    setShowMenu(!showMenu)
  }

  function handleLinkClick() {
    if (showMenu) {
      setShowMenu(false)
    }
  }

  return (
    <header className="flex content-center justify-between border-b-2 border-white p-3.5">
      <Link to="/">
        <img src={logo} alt="logo" height={75} width={175} className="h-full" />
      </Link>
      <nav
        className={` z-10 flex flex-col transition-all duration-500 ease-in-out md:flex-row md:justify-end ${showMenu ? "bg-main" : "bg-none"
          } ${showMenu ? "z-100 fixed left-0 top-0 h-full w-full" : ""}`}
      >
        {showMenu ? (
          <IoIosCloseCircleOutline
            size={48}
            className="absolute right-2 top-2 m-3.5 hover:cursor-pointer hover:text-white md:hidden "
            onClick={toggleMenu}
          />
        ) : (
          <RiMenu3Fill
            size={48}
            className="absolute right-2 top-2 m-3 hover:cursor-pointer hover:text-white md:hidden "
            onClick={toggleMenu}
          />
        )}
        <ul
          className={`mt-16 flex items-center divide-y-2 divide-white/50 text-center md:mt-0 md:flex md:flex-row md:divide-none ${showMenu ? "flex-col" : "hidden"
            } `}
        >
          <li className={` w-full ${showMenu ? "" : "hidden"}}`}>
            <a
              href={"/#about"}
              className="font-2 relative flex items-center justify-center gap-3 p-5 font-sans text-xl font-semibold text-white decoration-2 underline-offset-4 hover:text-light-shade-500 hover:underline active:text-black md:m-2 md:p-2 md:text-lg md:font-normal"
              onClick={handleLinkClick}
            >
              About
              <AboutIcon height={25} width={25} isVisible={isAbove768px} />
            </a>
          </li>
          <li className={` w-full ${showMenu ? "" : "hidden"}}`}>
            <a
              href="/#experience"
              className="font-2 relative flex items-center justify-center gap-3 p-5 font-sans text-xl font-semibold text-white decoration-2 underline-offset-4 hover:text-light-shade-500 hover:underline active:text-black md:m-2 md:p-2 md:text-lg md:font-normal"
              onClick={handleLinkClick}
            >
              Experience
              <ExperienceIcon height={25} width={25} isVisible={isAbove768px} />
            </a>
          </li>
          <li className={` w-full ${showMenu ? "" : "hidden"}}`}>
            <a
              href="/#projects"
              className="font-2 relative flex items-center justify-center gap-3 p-5 font-sans text-xl font-semibold text-white decoration-2 underline-offset-4 hover:text-light-shade-500 hover:underline active:text-black md:m-2 md:p-2 md:text-lg md:font-normal"
              onClick={handleLinkClick}
            >
              Projects
              <ProjectIcon height={25} width={25} isVisible={isAbove768px} />
            </a>
          </li>
          <li className={`w-full ${showMenu ? "" : "hidden"}}`}>
            <a
              href={"/#contact"}
              className="font-2 relative flex items-center justify-center gap-3 p-5 font-sans text-xl font-semibold text-white decoration-2 underline-offset-4 hover:text-light-shade-500 hover:underline active:text-black md:m-2 md:p-2 md:text-lg md:font-normal"
              onClick={handleLinkClick}
            >
              Contact
              <ContactIcon height={23} width={23} isVisible={isAbove768px} />
            </a>
          </li>
        </ul>
      </nav>
    </header>
  )
}
