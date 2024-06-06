/* eslint-disable react/no-unescaped-entities */
const Contact = () => {
  return (
    <div className="my-7 md:my-20">
      <div className="mb-8">
        <h3 className="text-3xl md:text-5xl font-bold text-center">
          Contact with Me
        </h3>
        <p className="md:text-lg text-center text-gray-600">
          Reach out and let's chat! I'm here to answer any questions you may
          have.
        </p>
      </div>
      <div className="mx-4 md:w-1/2 mx-auto my-12">
        <div className="flex flex-col md:flex-row gap-10 mb-10">
          <div>
            <label className="font-semibold uppercase text-base">
              Your Name
            </label>
            <br />
            <input
              className=" peer border-b w-full text-xl border-black py-2 focus:outline-none "
              placeholder="Type your name here!"
              type="text"
            />
            <div className=""></div>
          </div>
          <div>
            <label className="font-semibold  uppercase">
              Your Email
            </label>
            <br />
            <input
              className=" peer border-b w-full text-xl border-black py-2 focus:outline-none "
              placeholder="Enter your email address"
              type="text"
            />
          </div>
        </div>
        <div>
          <label className="font-semibold uppercase">
            Your Message
          </label>
          <br />
          <textarea
            className=" peer border-b text-xl w-full border-black py-6 focus:outline-none "
            placeholder="Type your message"
            type="text"
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;
