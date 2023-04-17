import VerticalText from '@/components/VerticalText';
import React from 'react';

const Contact = () => {
  //
  const submitForm = () => {};

  return (
    <section className="contact-section grid grid-cols-[5rem_1fr_5rem] w-full h-full bg-soft-white shrink-0 sections">
      <VerticalText text="contact" color="text-dark" />
      <form onSubmit={submitForm} className="">
        <div>
          <input type="text" placeholder="Your Name" />
        </div>
        <div>
          <input type="text" placeholder="Your Email" />
        </div>
        <div>
          <input type="text" placeholder="Subject" />
        </div>
        <div>
          <input type="text" placeholder="Your Message" />
        </div>
      </form>
    </section>
  );
};

export default Contact;
