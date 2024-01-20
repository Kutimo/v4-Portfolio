import { useRef } from 'react';
import emailjs from '@emailjs/browser'

export const ContactForm = () => {
  const form = useRef<HTMLFormElement>(null); // Initialize the form ref with null

  const sendEmail = (e: { preventDefault: () => void; }) => {
    e.preventDefault();

    if (form.current) { // Check if the form ref is not null
      emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
        .then((result: any) => {
          console.log(result.text);
        }, (error: any) => {
          console.log(error.text);
        });
    }
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Message</label>
      <textarea name="message" />
      <button type="submit" >Send</button>
    </form>
  );
};