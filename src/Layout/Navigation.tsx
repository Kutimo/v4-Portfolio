import { useState } from "react";
import { Link } from "react-router-dom";
import { navLinks } from "../data/NavConfig";
import logo from "$svg/logo.svg";
import HamMenuIcon from "$svg/hamMenu.svg";

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
        className={`w-full flex flex-col md:flex-row md:justify-end transition-all duration-500 ease-in-out ${
          showMenu ? "bg-Cotton" : "bg-none"
        } ${showMenu ? "fixed top-0 left-0 w-full h-full z-100" : ""}`}>
        <a
          className=""
          onClick={toggleMenu}>
          <img
            src={HamMenuIcon}
            height={48}
            width={48}
            alt={showMenu ? "Close menu" : "MenuIcon"}
            className={`${showMenu ? "absolute top-0 right-0 p-2" : ""}`}
          />
        </a>
        <ul className="flex items-center justify-evenly w-full md:hidden">
          {navLinks &&
            navLinks.map(({ name, url }, i) => (
              <li
                key={i}
                className="m-2 align-middle before:content-[{i}]">
                <a
                  href={url}
                  className={`text-white hover:bg-white hover:text-black p-2 before:content-['0.'${i}]`}>
                  {name}
                </a>
              </li>
            ))}
          <li></li>
        </ul>
      </nav>
    </header>
  );
}
