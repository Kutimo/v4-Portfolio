import { TypewriterEffect } from "$components/Typewriter";
import bracketLeft from "$svg/bracket_left.svg";
import bracketRight from "$svg/bracket_right.svg";

export default function Hero() {
  return (
    <section className="mt-10 mx-5 md:mx-10 flex h-screen">
      <div className="w-full">
        <h3 className="text-lg text-white">Hello, i am</h3>
        <h1 className="text-7xl font-bold w-fit pb-2.5 px-2 my-3 bg-dark-accent text-light-shade-500  drop-shadow-lg-black ">
          Marius Kristiansen,
        </h1>
        <h2 className="text-6xl font-bold w-fit my-4 pb-4 pt-1 px-2.5 bg-dark-accent text-light-shade-300  drop-shadow-lg-black">
          I develop web things
        </h2>
        <div className="text-light-shade-200 w-fit p-2 flex flex-col items-start">
          <p className="w-3/4 md:w-96 text-xl mt-10">
            As a developer, I strive to pay close attention to even the smallest details that can make a big difference
            for your project and brand.
          </p>
          <a
            href="#projects"
            className="shadow-md border-2 border-white mt-10 text-light-shade-100 text-xl p-3 font-medium rounded-md hover:bg-light-shade-400 hover:border-light-shade-200 hover:text-black hover:rounded-none transition-all duration-300 ease-in">
            View portfolio
          </a>
        </div>
      </div>
      {/* Right screen section */}
      <div className="hidden lg:flex flex-col justify-center items-center relative w-full p-4">
        <img
          src={bracketLeft}
          alt="background image"
          className="absolute top-0 left-20"
        />
        <TypewriterEffect />
        <img
          src={bracketRight}
          alt="background image"
          className="absolute bottom-36 right-0 "
        />
      </div>
    </section>
  );
}
