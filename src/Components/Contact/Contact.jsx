import { useRef } from "react";
import emailjs from '@emailjs/browser';
import swal from "sweetalert";
/* eslint-disable react/no-unescaped-entities */


const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    const form = e.target;
    emailjs
      .sendForm(
        "service_9q8jdf8",
        "template_8qe189k",
        form,
        "xMLIxfNmpThLyxEov"
      )
      .then(
        (result) => {
          console.log(result.text);
          swal('Great!', 'Message Delivered Successfully', 'success')
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div id="Contact" className="my-7 md:my-20">
      <div className="mb-8">
        <h3 className="text-3xl md:text-5xl font-bold text-center">
          Contact with Me
        </h3>
      </div>
      <form ref={form} onSubmit={sendEmail} className="mx-4 md:w-1/2 mx-auto my-12">
        {/* User details input */}
        <div className="flex flex-col md:flex-row gap-12 mb-10">
          <div className="md:w-1/2">
            <label className="font-semibold text-base">
              Your Name
            </label>
            <br />
            <input
              className="peer border-b w-full text-xl border-black bg-transparent focus:border-[#38BDF8] focus:caret-[#38BDF8] py-2 focus:outline-none"
              placeholder="Type your name here!"
              type="text"
              name="from_name"
            />
          </div>
          <div className="md:w-1/2">
            <label className="font-semibold ">
              Your Email
            </label>
            <br />
            <input
              className=" peer border-b w-full text-xl border-black bg-transparent focus:border-[#38BDF8] focus:caret-[#38BDF8] py-2 focus:outline-none "
              placeholder="Enter your email address"
              type="text"
              name="from_email"
            />
          </div>
        </div>
        {/* User text input */}
        <div>
          <label className="font-semibold">
            Your Message
          </label>
          <br />
          <textarea
            className=" peer border-b text-xl w-full border-black bg-transparent focus:border-[#38BDF8] focus:caret-[#38BDF8] py-6 focus:outline-none "
            placeholder="Type your message"
            type="text"
            name="message"
          />
        </div>
        <input type="submit" value="Send"
        className="bg-sky-500 text-xl text-white rounded-sm cursor-pointer py-2 px-6 flex justify-center mx-auto mt-6 hover:bg-sky-600" />
      </form>
    </div>
  );
};

export default Contact;
