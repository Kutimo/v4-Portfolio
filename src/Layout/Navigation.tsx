import { useState } from "react";
import { Link } from "react-router-dom";
import { navLinks } from "../data/NavConfig";
import logo from "$svg/logo.svg";
import hamMenuIcon from "$svg/hamMenu.svg";
import closeIcon from "$svg/CloseIcon.svg";

export default function Navigation() {
  const [showMenu, setShowMenu] = useState(false);

  function toggleMenu() {
    setShowMenu(!showMenu);
  }

  return (
    <header className="flex justify-between p-3.5 border-b-2 border-white">
      <Link to="/">
        <img
          src={logo}
          alt="logo"
          height={75}
          width={175}
        />
      </Link>
      <nav
        className={` flex flex-col md:flex-row md:justify-end transition-all duration-500 ease-in-out z-10 ${
          showMenu ? "bg-main" : "bg-none"
        } ${showMenu ? "fixed top-0 left-0 w-full h-full z-100" : ""}`}>
        <img
          src={showMenu ? closeIcon : hamMenuIcon}
          height={48}
          width={48}
          alt={showMenu ? "Close menu" : "MenuIcon"}
          className="md:hidden absolute top-2 right-2 m-3.5 "
          onClick={toggleMenu}
        />
        <ul
          className={`flex md:flex md:flex-row items-center text-center mt-16 md:mt-0 divide-y-2 divide-light-shade-100 md:divide-none ${
            showMenu ? "flex-col" : "hidden"
          } `}>
          {navLinks &&
            navLinks.map(({ name, url, icon }, i) => (
              <li
                key={i}
                className={` w-full ${showMenu ? "" : "hidden"}}`}>
                <a
                  href={url}
                  className="flex justify-center relative text-black md:text-white hover:bg-white hover:text-black md:m-2 p-5 md:p-2"
                  onClick={toggleMenu}>
                  {name}
                  <img
                    src={icon}
                    alt={icon}
                    height={24}
                    width={24}
                    className="absolute right-32 md:hidden"
                  />
                </a>
              </li>
            ))}
        </ul>
      </nav>
    </header>
  );
}
