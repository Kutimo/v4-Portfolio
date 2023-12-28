import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="mt-20 h-96">
      <h3>Contact</h3>
      <div>
        <CiLinkedin size={20} />
        <FaGithub size={20} />
      </div>
    </section>
  )
}
