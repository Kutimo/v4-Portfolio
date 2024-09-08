import { ContactForm } from "$components/ContactForm"
import contact_illustration from "$svg/illustrations/contact_illustration.svg"

export default function Contact() {
  return (
    <section id="contact" className="mt-10 ">
      <h3 className="mx-5 w-fit bg-dark-accent p-3 font-sans text-3xl font-bold text-light-shade-100 drop-shadow-lg-black md:text-5xl">
        Get in touch
      </h3>

      <div className="mt-8 flex flex-col flex-wrap items-center gap-3 rounded-md border-2 border-white/50 bg-dark-accent/20 p-8">
        <p className="p-2 text-center text-lg text-white md:w-[55ch] md:text-xl">
          If you&apos;d like to get in touch, whether it&apos;s for potential
          collaboration, project inquiries, or just a friendly conversation, feel free to
          reach out using the contact form below. I appreciate your interest and will
          respond promptly.
        </p>
        <div className="flex w-full flex-wrap items-center justify-evenly">
          <ContactForm />
          <img
            src={contact_illustration}
            alt="contact illustration"
            height={375}
            width={375}
            className="pointer-events-none mt-20 md:mt-40"
          />
        </div>
      </div>
    </section>
  )
}
