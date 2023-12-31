import { ReactNode } from "react"

interface TooltipProps {
  content: ReactNode
  children: ReactNode
}
export default function Tooltip({ content, children }: TooltipProps) {
  return (
    <div className="group relative flex">
      {children}
      <span className="text-md absolute   bottom-5 left-5 w-auto  -translate-x-1/2 scale-0 transform whitespace-nowrap rounded bg-gray-800 p-2 text-white transition-all group-hover:scale-100">
        {content}
      </span>
    </div>
  )
}
