import { TechIcons } from "../data/TechConfig"
//? cursor and pointer events
export default function TechIconsWrapper() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-5 px-[4%] py-10 md:px-[1%] md:py-16 lg:px-[4%] lg:py-20">
      {TechIcons &&
        TechIcons.map(({ name, xp, icon }, i) => {
          return (
            <div
              key={i}
              className="h-42 w-42 group m-2 select-none p-3 hover:bg-dark-accent/50 hover:shadow-lg hover:scale-110 ease-in-out duration-200 "
            >
              <img
                src={icon}
                alt={name}
                height={112}
                width={112}
                className="object-fit pointer-events-none h-28 w-28 drop-shadow-[0_10px_10px_rgba(255,255,255,0.08)]"
              />
              <p className="p-1 text-center text-lg">{name}</p>
              {/* Progress bar */}
              <div className="h-5 rounded-sm bg-gray-200 group-hover:visible invisible">
                <div
                  className="hidden xp-bar group-hover:flex h-full items-center justify-center bg-blue-500"
                  style={{ width: xp }}
                >
                  <span className="text-black font-semibold">{xp}</span>
                </div>
              </div>
              {/* <p className="hidden group-hover:block">{xp}</p> */}
            </div>
          )
        })}
    </div>
  )
}
