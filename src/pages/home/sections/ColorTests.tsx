export default function ColorTests() {
  return (
    <>
      <div className="flex justify-center gap-2 p-10">
        <div className="flex h-44 w-44 items-center justify-center bg-black">
          <div className="bg-white p-2">
            <p className="p-2 text-black">lorem dolor</p>
          </div>
        </div>
        <div className="flex h-44 w-44 items-center justify-center bg-white">
          <div className="bg-black p-2">
            <p className="p-2 text-white">lorem dolor</p>
          </div>
        </div>
        <div className="flex h-44 w-44 items-center justify-center bg-dark-accent">
          <div className="bg-black p-2">
            <p className="p-2 text-white">lorem dolor</p>
          </div>
        </div>
        <div className="bg-light-shade flex h-44 w-44 items-center justify-center">
          <div className="bg-black p-2">
            <p className="p-2 text-white">lorem dolor</p>
          </div>
        </div>
        <div className="flex h-44 w-44 items-center justify-center bg-main">
          <div className="bg-black p-2">
            <p className="p-2 text-white">lorem dolor</p>
          </div>
        </div>
      </div>
      {/* section 2 */}
      <div className="flex justify-center gap-2 p-10">
        <div className="flex h-44 w-44 items-center justify-center bg-black">
          <div className="bg-white p-2">
            <p className="p-2 text-black">lorem dolor</p>
          </div>
        </div>
        <div className="flex h-44 w-44 items-center justify-center bg-white">
          <div className="bg-black p-2">
            <p className="p-2 text-white">lorem dolor</p>
          </div>
        </div>
        <div className="flex h-44 w-44 items-center justify-center bg-dark-accent">
          <div className="bg-white p-2">
            <p className="p-2 text-black">lorem dolor</p>
          </div>
        </div>
        <div className="bg-light-shade flex h-44 w-44 items-center justify-center ">
          <div className="bg-white p-2">
            <p className="p-2 text-black">lorem dolor</p>
          </div>
        </div>
        <div className="flex h-44 w-44 items-center justify-center bg-main">
          <div className="bg-white p-2">
            <p className="p-2 text-black">lorem dolor</p>
          </div>
        </div>
      </div>
      // section 3
      <div className="flex justify-center gap-2 p-10">
        <div className="flex h-44 w-44 items-center justify-center bg-black">
          <p className="p-2 text-white">bg-black</p>
        </div>
        <div className="flex h-44 w-44 items-center justify-center bg-white">
          <p className="p-2 text-black">lorem dolor</p>
        </div>
        <div className="flex h-44 w-44 items-center justify-center bg-dark-accent">
          <p className="p-2 text-white">lorem dolor</p>
        </div>
        <div className="bg-light-shade flex h-44 w-44 items-center justify-center">
          <p className="p-2 text-white">lorem dolor</p>
        </div>
        <div className="flex h-44 w-44 items-center justify-center bg-main">
          <p className="p-2 text-white">lorem dolor</p>
        </div>
      </div>
      // section 4
      <div className="flex justify-center gap-2 p-10">
        <div className="flex h-44 w-44 items-center justify-center bg-black">
          <p className="p-2 text-white">bg-black</p>
        </div>
        <div className="flex h-44 w-44 items-center justify-center bg-white">
          <p className="p-2 text-black">lorem dolor</p>
        </div>
        <div className="flex h-44 w-44 items-center justify-center bg-dark-accent">
          <p className="p-2 text-black">lorem dolor</p>
        </div>
        <div className="bg-light-shade flex h-44 w-44 items-center justify-center">
          <p className="p-2 text-black">lorem dolor</p>
        </div>
        <div className="flex h-44 w-44 items-center justify-center bg-main">
          <p className="p-2 text-black">lorem dolor</p>
        </div>
      </div>
    </>
  )
}
