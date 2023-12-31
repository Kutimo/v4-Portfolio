import { ReactNode } from "react";

interface TooltipProps {
  content: ReactNode;
  children: ReactNode;
}

const Tooltip: React.FC<TooltipProps> = ({ content, children }) => {
  return (
    // <div className="relative inline-block">
    <div className="group relative flex">
      {children}
      <span className="absolute bottom-5   left-5 transform -translate-x-1/2  w-auto whitespace-nowrap scale-0 transition-all rounded bg-gray-800 p-2 text-md text-white group-hover:scale-100">
        {/* <div className="absolute bg-gray-800 text-white p-2 rounded-md opacity-0 invisible transition-opacity duration-300 transform -translate-x-1/2 top-5 left-5"> */}
        {content}
      </span>
      {/* </div> */}
    </div>
  );
};

export default Tooltip;
