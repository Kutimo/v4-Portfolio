import { useRef } from 'react';
import emailjs from '@emailjs/browser'

export const ContactForm = () => {
  const form = useRef<HTMLFormElement>(null); // Initialize the form ref with null

  const sendEmail = (e: { preventDefault: () => void; }) => {
    e.preventDefault();

    if (form.current) {
      emailjs.sendForm("service_dvadyvr", "template_z9dfr1h", form.current, "6Lcwn_iudsCEftfMe")
        .then((result: any) => {
          console.log(result.text);
        }, (error: any) => {
          console.log(error.text);
        });
    }
  };

  return (
    <form ref={form} onSubmit={sendEmail} className='flex flex-col w-1/3 font-sans bg-light-shade-500 p-2 rounded-md gap-2'>
      <label>Name</label>
      <input type="text" name="user_name" className='rounded-md  bg-white p-1' />
      <label>Email</label>
      <input type="email" name="user_email" className='rounded-md  bg-white p-1' />
      <label>Message</label>
      <textarea name="message" className='rounded-md bg-white p-1' />
      <button type="submit" >Send</button>
    </form>
  );
};