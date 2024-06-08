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
      <form className="mx-4 md:w-1/2 mx-auto my-12">
        {/* User details input */}
        <div className="flex flex-col md:flex-row gap-12 mb-10">
          <div className="md:w-1/2">
            <label className="font-semibold text-base">
              Your Name
            </label>
            <br />
            <input
              className="peer border-b w-full text-xl border-[#38BDF8] bg-transparent focus:caret-[#38BDF8] py-2 focus:outline-none"
              placeholder="Type your name here!"
              type="text"
            />
          </div>
          <div className="md:w-1/2">
            <label className="font-semibold ">
              Your Email
            </label>
            <br />
            <input
              className=" peer border-b w-full text-xl border-[#38BDF8] bg-transparent focus:caret-[#38BDF8] py-2 focus:outline-none "
              placeholder="Enter your email address"
              type="text"
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
            className=" peer border-b text-xl w-full border-[#38BDF8] bg-transparent focus:caret-[#38BDF8] py-6 focus:outline-none "
            placeholder="Type your message"
            type="text"
          />
        </div>
      </form>
    </div>
  );
};

export default Contact;
