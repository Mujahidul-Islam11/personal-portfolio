/* eslint-disable react/no-unknown-property */
/* eslint-disable react/no-unescaped-entities */
const AboutMe = () => {
  return (
    <div id="About" className="my-7 md:my-20">
      <div className="mb-8">
        <h3 className="text-3xl md:text-5xl font-bold text-center">About Me</h3>
        <p className="md:text-lg text-center text-gray-600">My introduction</p>
      </div>
      <div className="px-4 md:flex justify-center items-center gap-16">
        <div className="flex justify-center md:w-1/2">
          <img
            className="mb-6 w-[200px] md:w-[400px] h-[200px] md:h-[400px] object-cover rounded-full"
            src="https://i.ibb.co/0r48SF0/about-me.jpg"
            alt=""
          />
        </div>
        <div className="md:w-1/2">
          <h3 className="lg:text-lg sm:text-base text-sm mb-6">
            👋 Hi, I'm{" "}
            <span className="font-bold">Mohammad Mojahidul Islam</span>,
            an 18-year-old front-end developer passionate about crafting
            beautiful and functional web applications with ReactJS and
            TailwindCSS. Though I'm a fresh face in the tech scene, my drive for
            innovation and attention to detail sets me apart. Let's transform
            ideas into stunning digital experiences together! 🚀
          </h3>
          <div className="flex justify-center md:justify-start">
          <a className="" href="mailto:web.dev.dinar@gmail.com">
            <div className="duration-300 mb-2 md:mb-0 w-[150px] px-2 rounded-[2px] py-2 flex items-center justify-center gap-x-2 bg-sky-400 hover:bg-sky-600">
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 24 24"
                className="text-white"
                height="25"
                width="25"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path fill="none" d="M0 0h24v24H0z"></path>
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"></path>
              </svg>
              <p className="font-dm font-medium text-lg inline-block  text-center text-white">
                Contact me
              </p>
            </div>
          </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
