interface tagProps {
  text: string
}

export default function Tag({ text }: tagProps) {
  return (
    <span className="text-md rounded-sm bg-light-shade-300 p-1.5 font-serif text-black">
      {text}
    </span>
  )
}
