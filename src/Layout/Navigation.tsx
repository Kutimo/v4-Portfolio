import { navLinks } from "../data/NavConfig";
import logo from "$svg/logo.svg";
import { Link } from "react-router-dom";
export default function Navigation() {
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
      <nav className="">
        <ul className="flex items-center">
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
