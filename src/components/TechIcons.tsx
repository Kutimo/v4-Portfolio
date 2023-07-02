import { TechIcons } from "../data/TechConfig"

export default function TechIconsWrapper() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-5 px-[4%] py-10 md:px-[1%] md:py-16 lg:px-[4%] lg:py-20">
      {TechIcons &&
        TechIcons.map(({ name, xp, icon }, i) => {
          return (
            <div key={i} className="m-2 h-32 w-32  p-2.5 pb-7 ">
              <img src={icon} alt={name} height={110} width={110} className="h-full " />
              {icon}
              <p className="p-1 text-center text-lg">{name}</p>
              {/* <p>{xp}</p> */}
            </div>
          )
        })}
    </div>
  )
}
