import { TechIcons } from "$data/TechConfig"
import { useState } from "react"
import Switch from "../common/Switch"
import Tooltip from "../common/Tooltip"

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

  const [isActive, setIsActive] = useState(false)

  const handleSwitchToggle = () => {
    setIsActive((prevState) => !prevState)
  }

  return (
    <div className="flex flex-col items-end ">
      <Tooltip content="Show all">
        <Switch onToggle={handleSwitchToggle} isActive={isActive} />
      </Tooltip>
      <div className="flex flex-wrap items-center justify-center gap-5 ">
        {TechIcons &&
          TechIcons.map(({ name, xp, icon }, i) => {
            return (
              <div
                key={i}
                className={`h-42 w-42 group m-2 mt-6 select-none p-3 duration-700 ease-in-out ${isActive ? `scale-110 bg-dark-accent/50 drop-shadow-lg-black` : ""
                  }hover:scale-110 hover:bg-dark-accent/50 hover:drop-shadow-lg-black`}
              >
                <img
                  src={icon}
                  alt={name}
                  height={112}
                  width={112}
                  className="object-fit pointer-events-none h-28 w-28 drop-shadow-lg-black delay-100"
                />
                <p className="p-1 text-center font-serif text-lg font-semibold">{name}</p>

                {/*
              // * Power bar
             */}
                <div
                  className={`flex h-5 justify-center divide-x-2 divide-white rounded-sm bg-gray-200 p-0.5 ${isActive ? "visible" : "invisible"
                    } group-hover:visible`}
                >
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
    </div>
  )
}
