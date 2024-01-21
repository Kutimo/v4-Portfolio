import { ContactForm } from "$components/ContactForm"

export default function Contact() {
  return (
    <section id="contact" className="mt-10 ">
      <h3 className="mx-5 w-fit bg-dark-accent p-2 font-sans text-3xl font-bold text-light-shade-100 drop-shadow-lg-black md:text-5xl">
        Contact
      </h3>
      <ContactForm />
    </section>
  )
}
