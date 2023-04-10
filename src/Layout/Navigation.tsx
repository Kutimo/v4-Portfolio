import { navLinks } from "../data/NavConfig";
import logo from "$svg/logo.svg";
import { Link } from "react-router-dom";
export default function Navigation() {
  return (
    <header className="flex">
      <Link to="/">
        <img
          src={logo}
          alt="logo"
        />
      </Link>
      <nav className="bg-gray-400">
        <ul className="flex">
          {navLinks &&
            navLinks.map(({ name, url }, i) => (
              <li
                key={i}
                className="m-2 hover:bg-white h-full w-full">
                <a href={url}>{name}</a>
              </li>
            ))}
          <li></li>
        </ul>
      </nav>
    </header>
  );
}
