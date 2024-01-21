import { useRef } from "react"
import emailjs from "@emailjs/browser"

interface EmailJSResponse {
  text: string
}

interface EmailJSError {
  text: string
}

export const ContactForm = () => {
  const form = useRef<HTMLFormElement>(null)

  const sendEmail = (e: { preventDefault: () => void }) => {
    e.preventDefault()

    if (form.current) {
      emailjs
        .sendForm(
          "service_dvadyvr",
          "template_z9dfr1h",
          form.current,
          "6Lcwn_iudsCEftfMe",
        )
        .then(
          (result: EmailJSResponse) => {
            console.log(result.text)
            if (form.current) {
              form.current.reset()
            }
          },
          (error: EmailJSError) => {
            console.log(error.text)
          },
        )
    }
  }

  return (
    <form
      ref={form}
      onSubmit={sendEmail}
      className="mx-4 mt-10 flex flex-col gap-3 rounded-md border-2 border-white/50 bg-dark-accent/20 p-3 font-sans text-white drop-shadow-md md:mx-2 md:w-1/4"
    >
      <label>Name</label>
      <input
        type="text"
        name="user_name"
        className="rounded-md bg-white/95 p-1 text-black"
        required
      />
      <label>Email</label>
      <input
        type="email"
        name="user_email"
        className="rounded-md bg-white/95 p-1 text-black"
        required
      />
      <label>Message</label>
      <textarea
        name="message"
        className="rounded-md bg-white/95 p-1 text-black"
        required
      />
      <button
        type="submit"
        className="mt-2 bg-light-shade-500 p-3 text-white drop-shadow-md hover:cursor-pointer hover:bg-light-shade-300 hover:drop-shadow-lg-black "
      >
        Send
      </button>
    </form>
  )
}
