import { TechIcons } from "$data/TechConfig"

export default function TechIconsWrapper() {
  const getBgGradientClass = (xp: number, index: number) => {
    if (xp >= index) {
      switch (index) {
        case 1:
          return "bg-gradient-1"
        case 2:
          return "bg-gradient-2"
        case 3:
          return "bg-gradient-3"
        case 4:
          return "bg-gradient-4"
        default:
          return "bg-gradient-default"
      }
    } else {
      return "bg-gradient-default"
    }
  }
  return (
    <div className="flex flex-wrap items-center justify-center gap-5 px-[4%] py-10 md:px-[1%] md:py-16 lg:px-[4%] lg:py-20">
      {TechIcons &&
        TechIcons.map(({ name, xp, icon }, i) => {
          return (
            <div
              key={i}
              className="h-42 w-42 group m-2 select-none p-3 duration-700 ease-in-out hover:scale-110 hover:bg-dark-accent/50 hover:drop-shadow-lg-black "
            >
              <img
                src={icon}
                alt={name}
                height={112}
                width={112}
                className="object-fit pointer-events-none h-28 w-28 drop-shadow-lg-black delay-100"
              />
              <p className="p-1 text-center text-lg">{name}</p>

              {/*
              // * Power bar
             */}
              <div className="invisible flex h-5 justify-center divide-x-2 divide-white rounded-sm bg-gray-200 p-0.5 group-hover:visible">
                <span
                  className={`h-full w-1/4 delay-100 ease-in ${getBgGradientClass(
                    xp,
                    1,
                  )}`}
                ></span>
                <span
                  className={`h-full w-1/4 delay-150 ease-in ${getBgGradientClass(
                    xp,
                    2,
                  )}`}
                ></span>
                <span
                  className={`h-full w-1/4 delay-200 ease-in ${getBgGradientClass(
                    xp,
                    3,
                  )}`}
                ></span>
                <span
                  className={`h-full w-1/4 delay-[250ms] ease-in ${getBgGradientClass(
                    xp,
                    4,
                  )}`}
                ></span>
              </div>
            </div>
          )
        })}
    </div>
  )
}
