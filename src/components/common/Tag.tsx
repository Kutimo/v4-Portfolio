interface tagProps {
  text: string
}

export default function Tag({ text }: tagProps) {
  return (
    <span className="text-md rounded-sm bg-light-shade-400 p-1.5 font-serif text-gray-900 leading-tight font-medium">
      {text}
    </span>
  )
}
