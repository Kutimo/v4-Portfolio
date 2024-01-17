import { useState } from "react"
import { Link } from "react-router-dom"
import { navLinks } from "../data/NavConfig"
import logo from "$svg/logo.svg"
import { RiMenu3Fill } from "react-icons/ri";
import { IoIosCloseCircleOutline } from "react-icons/io";

export default function Navigation() {
  const [showMenu, setShowMenu] = useState(false)

  function toggleMenu() {
    setShowMenu(!showMenu)
  }

  // Since there is no page redirect with a link or route, there is a check to see if the menu is open when a <a> tag is clicked in nav.
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
            className="absolute right-2 top-2 m-3.5 md:hidden hover:cursor-pointer hover:text-white "
            onClick={toggleMenu}
          />
        ) : (
          <RiMenu3Fill
            size={48}
            className="absolute right-2 top-2 m-3 md:hidden hover:cursor-pointer hover:text-white "
            onClick={toggleMenu}
          />
        )}
        <ul
          className={`mt-16 flex items-center divide-y-2 divide-white/50 text-center md:mt-0 md:flex md:flex-row md:divide-none ${showMenu ? "flex-col" : "hidden"
            } `}
        >
          {navLinks &&
            navLinks.map(({ name, url, icon }, i) => (
              <li key={i} className={` w-full ${showMenu ? "" : "hidden"}}`}>
                <a
                  href={url}
                  className="font-2 relative flex justify-center p-5 font-sans font-semibold text-white hover:text-black text-xl decoration-2 underline-offset-4 hover:underline md:m-2 md:p-2"
                  onClick={handleLinkClick}
                >
                  {name}
                  <img
                    src={icon}
                    alt={icon}
                    height={24}
                    width={24}
                    className="absolute right-32 md:hidden hover:cursor-pointer "
                  />
                </a>
              </li>
            ))}
        </ul>
      </nav>
    </header>
  )
}
