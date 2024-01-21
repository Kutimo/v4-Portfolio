import { useRef } from "react"
import emailjs from "@emailjs/browser"
import toast from "react-hot-toast"
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
            toast.success("Email sent successfully!")
            if (form.current) {
              form.current.reset()
            }
          },
          (error: EmailJSError) => {
            toast.error("Email failed to send!")
            console.log(error.text)
          },
        )
    }
  }

  return (
    <form
      ref={form}
      onSubmit={sendEmail}
      className="mx-4 mt-10 flex w-2/3 flex-col gap-3 rounded-md border-2 border-white/60 bg-dark-accent/60 p-3 font-sans text-white drop-shadow-lg-black md:mx-2 md:w-1/4"
    >
      <label className="text-lg">Name</label>
      <input
        type="text"
        name="user_name"
        className="rounded-md bg-white/95 p-1 text-black"
        required
      />
      <label className="text-lg">Email</label>
      <input
        type="email"
        name="user_email"
        className="rounded-md bg-white/95 p-1 text-black"
        required
      />
      <label className="text-lg">Message</label>
      <textarea
        name="message"
        className="resize-none rounded-md bg-white/95 p-1 text-black"
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
