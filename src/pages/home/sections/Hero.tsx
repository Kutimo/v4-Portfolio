import { TypewriterEffect } from "$components/Typewriter"
import bracketLeft from "$svg/bracket_left.svg"
import bracketRight from "$svg/bracket_right.svg"

export default function Hero() {
  return (
    <section className="mx-5 mt-10 flex h-fit md:mx-10">
      <div className="w-full">
        <h3 className="font-sans text-2xl text-white">Hello, i am</h3>
        <h1 className="my-3 w-fit bg-dark-accent px-2 pb-2.5 font-sans text-3xl md:text-7xl font-bold text-light-shade-500 drop-shadow-lg-black ">
          Marius Kristiansen,
        </h1>
        <h2 className="my-4 w-fit bg-dark-accent px-2.5 pb-4 pt-1 text-2xl md:text-6xl font-bold text-light-shade-300 drop-shadow-lg-black">
          I develop web things
        </h2>
        <div className="flex w-fit flex-col items-start p-2 text-light-shade-200">
          <p className="mt-10 w-3/4 font-serif text-xl md:w-96">
            As a developer, I strive to pay close attention to even the smallest details
            that can make a big difference for your project and brand.
          </p>
          <a
            href="#projects"
            className="border-light mt-10 border-2 border-light-shade-400 p-3 text-xl font-medium text-light-shade-100 shadow-md transition-all duration-300 ease-in hover:rounded-none hover:border-light-shade-200 hover:bg-light-shade-400 hover:text-black"
          >
            View portfolio
          </a>
        </div>
      </div>
      {/* Right screen section */}
      <div className="relative hidden w-full flex-col items-center justify-center p-4 lg:flex">
        <img
          src={bracketLeft}
          alt="background image"
          className="absolute left-20 top-0"
        />
        <TypewriterEffect />
        <img
          src={bracketRight}
          alt="background image"
          className="absolute bottom-36 right-0 "
        />
      </div>
    </section>
  )
}
