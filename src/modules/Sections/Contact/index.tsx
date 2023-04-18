import VerticalText from '@/components/VerticalText';
import React from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  //

  const submitForm = (e: any) => {
    e.preventDefault();
    emailjs.sendForm('service_8geokcj', 'template_y2rivbi', e.target, process.env.NEXT_PUBLIC_EMAILJS_API_KEY).then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );
    e.target.reset();
  };

  return (
    <section className="contact-section grid grid-cols-[5rem_1fr_5rem] w-full h-full bg-soft-white shrink-0 sections">
      <VerticalText text="contact" color="text-dark" />
      <form onSubmit={submitForm} className="col-start-2 justify-self-center self-center  w-1/3 me-12">
        <div className="flex w-full">
          <div className="grow">
            <input
              type="text"
              name="user_email"
              placeholder="Your Email"
              className="h-full w-full bg-transparent border-b-2 border-dark outline-none ps-2 pb-2 active:bg-transparent"
            />
          </div>
          <div className="grow ms-4">
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              className="h-full w-full bg-transparent border-b-2 border-dark outline-none ps-2 pb-2 active:bg-transparent"
            />
          </div>
        </div>

        <textarea
          name="message"
          placeholder="Message"
          cols={40}
          rows={10}
          className="contact-section-textarea border-b-2 border-dark bg-transparent max-h-96 min-h-[14rem] h-full w-full px-2 py-2 outline-none mb-2"
        ></textarea>
        <button className="bg-[#9c0d38] text-soft-white font-main w-full h-8 rounded-md">Send</button>
      </form>
    </section>
  );
};

export default Contact;
