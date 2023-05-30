import { useState, useEffect } from "react"

const text = "Hello world!"

export const TypewriterEffect = () => {
  const [displayText, setDisplayText] = useState("")
  const [showCursor, setShowCursor] = useState(true)
  useEffect(() => {
    let i = 0
    const intervalId = setInterval(() => {
      setDisplayText(text.substring(0, i))
      i++
      if (i > text.length) clearInterval(intervalId)
    }, 500)
    return () => clearInterval(intervalId)
  }, [])

  useEffect(() => {
    const intervalId = setInterval(() => {
      setShowCursor((prevState) => !prevState)
    }, 600)
    return () => clearInterval(intervalId)
  }, [])

  return (
    <span className=" -mt-44 text-5xl text-white">
      {displayText}
      {showCursor && <span className="animate-blink absolute text-white">|</span>}
    </span>
  )
}
