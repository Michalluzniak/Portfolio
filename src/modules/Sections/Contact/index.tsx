import VerticalText from '@/components/VerticalText';
import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { FcCheckmark } from 'react-icons/fc';

interface ContactFormInputs {
  email: string;
  subject: string;
  message: string;
}

const Contact = () => {
  //
  const [wasMailSent, setWasMailSent] = useState<boolean>(false);
  const [formInputs, setFormInputs] = useState<ContactFormInputs>({
    email: '',
    subject: '',
    message: '',
  });

  const [formInputsError, setFormInputsError] = useState<ContactFormInputs>({
    email: '',
    subject: '',
    message: '',
  });

  const isValidEmail = (email: string) => {
    return /\S+@\S+\.\S+/.test(email);
  };

  const isFormValid = (formValues: ContactFormInputs) => {
    if (formValues.email === '') {
      setFormInputsError((prev) => ({
        ...prev,
        email: 'required',
      }));
    }
    if (formValues.subject === '') {
      setFormInputsError((prev) => ({
        ...prev,
        subject: 'required',
      }));
    }
    if (formValues.message === '') {
      setFormInputsError((prev) => ({
        ...prev,
        message: 'required',
      }));
    }
    return (formValues.email && formValues.subject && formValues.message) !== '';
  };

  const submitForm = (e: React.FormEvent<HTMLFormElement>) => {
    const target = e.target as HTMLFormElement;
    e.preventDefault();
    isFormValid(formInputs);
    isValidEmail(formInputs.email)
      ? ''
      : setFormInputsError((prev) => ({
          ...prev,
          email: 'invalid email',
        }));

    if (!isFormValid(formInputs) || !isValidEmail(formInputs.email)) return;

    console.log(formInputs);
    emailjs.sendForm('service_8geokcj', 'template_y2rivbi', target, process.env.NEXT_PUBLIC_EMAILJS_API_KEY).then(
      (result) => {
        setWasMailSent(true);
      },
      (error) => {
        console.log(error.text);
      }
    );

    target.reset();
    setFormInputs({
      email: '',
      subject: '',
      message: '',
    });

    setFormInputsError({
      email: '',
      subject: '',
      message: '',
    });

    setTimeout(() => {
      setWasMailSent(false);
    }, 5000);
  };

  return (
    <section className="contact-section grid grid-cols-[5rem_1fr_5rem] w-full h-full bg-soft-white shrink-0 sections">
      <VerticalText text="contact" color="text-dark" />
      <form
        onSubmit={submitForm}
        className="lg:w-3/5 xl:w-2/3 col-start-2 justify-self-center self-center relative flex flex-col"
        noValidate
      >
        {wasMailSent && (
          <div className="absolute top-1/2 left-1/2 translate-y-[-50%] translate-x-[-50%] flex flex-col justify-center items-center">
            <div className="border-2 border-[#44A047] rounded-full h-16 w-16 flex justify-center items-center">
              <FcCheckmark className="text-4xl" />
            </div>
            <p className="text-[#44A047]">Email was sent</p>
          </div>
        )}
        <div className="flex w-full">
          <div className="grow h-1/3">
            <input
              type="text"
              name="user_email"
              placeholder="Your Email"
              value={formInputs.email}
              onChange={(event) => {
                setFormInputsError((prev) => ({
                  ...prev,
                  email: '',
                }));

                setFormInputs((prev) => ({
                  ...prev,
                  email: event.target.value,
                }));
              }}
              className="h-2/4 w-full bg-transparent border-b-2 border-dark outline-none ps-2 pb-2 active:bg-transparent"
            />
            <p className="text-red-500 text-sm ps-2 h-2/4">{formInputsError.email}</p>
          </div>
          <div className="grow ms-4 h-1/3">
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={formInputs.subject}
              onChange={(event) => {
                setFormInputsError((prev) => ({
                  ...prev,
                  subject: '',
                }));

                setFormInputs((prev) => ({
                  ...prev,
                  subject: event.target.value,
                }));
              }}
              className="h-2/4 w-full bg-transparent border-b-2 border-dark outline-none ps-2 pb-2 active:bg-transparent"
            />
            <p className="text-red-500 text-sm ps-2 h-2/4">{formInputsError.subject}</p>
          </div>
        </div>
        <textarea
          name="message"
          placeholder="Message"
          cols={40}
          rows={10}
          value={formInputs.message}
          onChange={(event) => {
            setFormInputsError((prev) => ({
              ...prev,
              message: '',
            }));

            setFormInputs((prev) => ({
              ...prev,
              message: event.target.value,
            }));
          }}
          className="contact-section-textarea border-b-2 border-dark bg-transparent max-h-96 min-h-[14rem]  w-full px-2 outline-none mt-4 mb-0"
        ></textarea>
        <p className="text-red-500 text-sm ps-2 mb-2 h-2/4">{formInputsError.message}</p>
        <button className="xl:w-1/2 self-center bg-second-red text-soft-white font-main w-full h-8 rounded-md active:bg-main-red mt-2">
          Send
        </button>
      </form>
    </section>
  );
};

export default Contact;
