import VerticalText from '@/components/VerticalText';
import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { FcCheckmark } from 'react-icons/fc';

const Contact = () => {
  //
  const [wasMailSent, setWasMailSent] = useState<boolean>(false);

  const submitForm = (e: any) => {
    e.preventDefault();
    console.log(e);
    // emailjs.sendForm('service_8geokcj', 'template_y2rivbi', e.target, process.env.NEXT_PUBLIC_EMAILJS_API_KEY).then(
    //   (result) => {
    //     setWasMailSent(true);
    //     console.log(e.target)
    //   },
    //   (error) => {
    //     console.log(error.text);
    //   }
    // );
    // e.target.reset();
    setTimeout(() => {
      setWasMailSent(false);
    }, 5000);
  };

  return (
    <section className="contact-section grid grid-cols-[5rem_1fr_5rem] w-full h-full bg-soft-white shrink-0 sections">
      <VerticalText text="contact" color="text-dark" />
      <form onSubmit={submitForm} className="lg:w-3/5 xl:w-1/3 col-start-2 justify-self-center self-center relative">
        {wasMailSent && (
          <div className="absolute top-1/2 left-1/2 translate-y-[-50%] translate-x-[-50%] flex flex-col justify-center items-center">
            <div className="border-2 border-[#44A047] rounded-full h-16 w-16 flex justify-center items-center">
              <FcCheckmark className="text-4xl" />
            </div>
            <p className="text-[#44A047]">Email was sent</p>
          </div>
        )}
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
          className="contact-section-textarea border-b-2 border-dark bg-transparent max-h-96 min-h-[14rem] h-full w-full px-2  outline-none my-2"
        ></textarea>
        <button className="bg-second-red text-soft-white font-main w-full h-8 rounded-md active:bg-main-red">
          Send
        </button>
      </form>
    </section>
  );
};

export default Contact;
