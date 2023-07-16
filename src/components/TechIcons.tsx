import { TechIcons } from "../data/TechConfig"
//? cursor and pointer events
export default function TechIconsWrapper() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-5 px-[4%] py-10 md:px-[1%] md:py-16 lg:px-[4%] lg:py-20">
      {TechIcons &&
        TechIcons.map(({ name, xp, icon }, i) => {
          return (
            <div key={i} className="group m-2 h-32 w-32 select-none p-2.5 pb-7">
              <img
                src={icon}
                alt={name}
                height={110}
                width={110}
                className="pointer-events-none h-full drop-shadow-[0_8px_8px_rgba(255,255,255,0.08)]"
              />
              <p className="p-1 text-center text-lg">{name}</p>
              {/* Progress bar */}
              <div className="hidden h-5 rounded-full bg-gray-200 group-hover:block">
                <div
                  className="flex h-full items-center justify-center rounded-full bg-blue-500 xp-bar"
                  style={{ width: xp }}
                >
                  <span className=" text-black">{xp}</span>
                </div>
              </div>
              {/* <p className="hidden group-hover:block">{xp}</p> */}
            </div>
          )
        })}
    </div>
  )
}
