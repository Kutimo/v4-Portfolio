import programmer_illustration from "$svg/illustrations/programmer_illustration.svg"

export default function About() {
  return (
    <section id="about" className="mt-10 flex h-fit w-full flex-col text-white">
      <h3 className="mx-5 w-fit bg-dark-accent p-3 font-sans text-3xl font-bold text-light-shade-100 drop-shadow-lg-black md:text-5xl">
        About me
      </h3>
      <div className="mt-8 flex flex-wrap items-center justify-evenly gap-3 rounded-md border-2 border-white/50 bg-dark-accent/20 p-5">
        <div className="flex flex-col bg-main p-5 drop-shadow-sm">
          <h4 className="text-2xl font-bold text-white">
            I'm a full-stack developer from Norway
          </h4>
          <p className="mt-5 max-w-[55ch] text-xl text-gray-950 ">
            I&apos;ve been developing various projects in a variety of languages such as
            Python, JavaScript and React for many years, but over the past 3 years I’ve
            discovered my passion for website development. In this time, I have built up
            my skill set and developed websites for a variety of individuals and
            businesses.
          </p>
        </div>
        <img
          src={programmer_illustration}
          alt="programmer illustration"
          height={375}
          width={375}
          className="pointer-events-none"
        />
      </div>
    </section>
  )
}
