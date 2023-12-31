interface tagProps {
  text: string;
}

export default function Tag({ text }: tagProps) {
  return (
    <span className="bg-light-shade-300 p-1.5 rounded-sm font-serif text-md text-black">
      {text}
    </span>
  )
}