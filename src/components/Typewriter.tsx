import { useState, useEffect } from "react";

const text = "Hello world!";

export const TypewriterEffect = () => {
  const [displayText, setDisplayText] = useState("");
  const [showCursor, setShowCursor] = useState(true);
  useEffect(() => {
    let i = 0;
    const intervalId = setInterval(() => {
      setDisplayText(text.substring(0, i));
      i++;
      if (i > text.length) clearInterval(intervalId);
    }, 500);
    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setShowCursor((prevState) => !prevState);
    }, 600);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <span className=" text-5xl -mt-44 text-white">
      {displayText}
      {showCursor && <span className="absolute text-white animate-blink">|</span>}
    </span>
  );
};
