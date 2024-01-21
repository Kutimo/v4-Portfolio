import { ContactForm } from "$components/ContactForm"
import contact_illustration from "$svg/illustrations/contact_illustration.svg"

export default function Contact() {
  return (
    <section id="contact" className="mt-10 ">
      <h3 className="mx-5 w-fit bg-dark-accent p-2 font-sans text-3xl font-bold text-light-shade-100 drop-shadow-lg-black md:text-5xl">
        Contact
      </h3>
      <div className="flex items-center justify-evenly">
        <ContactForm />
        <img src={contact_illustration} alt="contact illustration" height={375} width={375} className="mt-40 pointer-events-none" />
      </div>
    </section>
  )
}
