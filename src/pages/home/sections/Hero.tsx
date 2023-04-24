import { TypewriterEffect } from "$components/Typewriter";
import bracketLeft from "$svg/bracket_left.svg";
import bracketRight from "$svg/bracket_right.svg";

export default function Hero() {
  return (
    <section className="flex h-screen mx-5 mt-10 md:mx-10">
      <div className="w-full">
        <h3 className="font-sans text-2xl text-white">Hello, i am</h3>
        <h1 className="text-7xl font-sans font-bold w-fit pb-2.5 px-2 my-3 bg-dark-accent text-light-shade-500 drop-shadow-lg-black ">
          Marius Kristiansen,
        </h1>
        <h2 className="text-6xl font-bold w-fit my-4 pb-4 pt-1 px-2.5 bg-dark-accent text-light-shade-300 drop-shadow-lg-black">
          I develop web things
        </h2>
        <div className="flex flex-col items-start p-2 text-light-shade-200 w-fit">
          <p className="w-3/4 mt-10 font-serif text-xl md:w-96">
            As a developer, I strive to pay close attention to even the smallest details that can make a big difference
            for your project and brand.
          </p>
          <a
            href="#projects"
            className="p-3 mt-10 text-xl font-medium transition-all duration-300 ease-in border-2 shadow-md border-light-shade-400 border-light text-light-shade-100 hover:bg-light-shade-400 hover:border-light-shade-200 hover:text-black hover:rounded-none">
            View portfolio
          </a>
        </div>
      </div>
      {/* Right screen section */}
      <div className="relative flex-col items-center justify-center hidden w-full p-4 lg:flex">
        <img
          src={bracketLeft}
          alt="background image"
          className="absolute top-0 left-20"
        />
        <TypewriterEffect />
        <img
          src={bracketRight}
          alt="background image"
          className="absolute right-0 bottom-36 "
        />
      </div>
    </section>
  );
}
