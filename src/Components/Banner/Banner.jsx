/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
const Banner = ({ dark, setDark }) => {
  return (
    <div>
      <section className="flex min-h-[600px]  w-full items-center justify-center px-4">
        <div className="md:flex w-full max-w-6xl gap-10 lg:flex-row flex-col items-center justify-between">
        <div className="relative md:hidden">
            <img
              src="https://i.postimg.cc/y8NhvyR1/LMC-20231231-160520-Sunny-selfie-by-Riyan-1-1-removebg-preview.png"
              className="relative object-cover shadow-xl rounded-full mb-4"
            />
          </div>
          <div className="max-w-md md:space-y-6 sm:space-y-5 space-y-4">
            <h1
              className={`lg:text-5xl sm:text-4xl text-3xl font-bold leading-tight ${
                dark ? "text-white" : "text-gray-900"
              }`}
            >
              Mohammad Mojahidul Islam
            </h1>
            <p className="lg:text-lg sm:text-base text-sm text-gray-600">
              Passionate Front-End Developer from Bangladesh specializing in
              JavaScript and React.js. Committed to growth, collaboration, and
              impactful web development. Ready to contribute and shine in a
              dynamic team.
            </p>
            <div className="flex space-x-4">
              <div class="mx-auto md:flex justify-start w-full gap-6">
                <a href="https://github.com/Mujahidul-Islam11" target="_blank">
                  <div className="duration-300 mb-2 md:mb-0 w-[110px] px-2 rounded-[2px] py-2 flex items-center justify-center gap-x-2 bg-sky-400 hover:bg-sky-600">
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      stroke-width="0"
                      viewBox="0 0 1024 1024"
                      class="text-white"
                      height="25"
                      width="25"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9a127.5 127.5 0 0 1 38.1 91v112.5c.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z"></path>
                    </svg>
                    <p class="font-dm font-medium text-lg inline-block  text-center text-white">
                      Github
                    </p>
                  </div>
                </a>
                <a
                  href="https://www.linkedin.com/in/mohammad-mojahidul-islam-71675629b/"
                  target="_blank"
                >
                  <div className="duration-300 mb-2 md:mb-0 w-[110px] px-2 rounded-[2px] py-2 flex items-center justify-center gap-x-2 bg-sky-400 hover:bg-sky-600">
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      stroke-width="0"
                      viewBox="0 0 24 24"
                      class="text-white"
                      height="25"
                      width="25"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M20 3H4a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zM8.339 18.337H5.667v-8.59h2.672v8.59zM7.003 8.574a1.548 1.548 0 1 1 0-3.096 1.548 1.548 0 0 1 0 3.096zm11.335 9.763h-2.669V14.16c0-.996-.018-2.277-1.388-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248h-2.667v-8.59h2.56v1.174h.037c.355-.675 1.227-1.387 2.524-1.387 2.704 0 3.203 1.778 3.203 4.092v4.71z"></path>
                    </svg>
                    <p className="font-dm font-medium text-lg inline-block  text-center text-white">
                      {" "}
                      Linkin{" "}
                    </p>
                  </div>
                </a>
                <a className="" href="mailto:web.dev.dinar@gmail.com">
                  <div className="duration-300 mb-2 md:mb-0 w-[110px] px-2 rounded-[2px] py-2 flex items-center justify-center gap-x-2 bg-sky-400 hover:bg-sky-600">
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
                      Email
                    </p>
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div className="relative hidden md:flex">
            <img
              src="https://i.postimg.cc/y8NhvyR1/LMC-20231231-160520-Sunny-selfie-by-Riyan-1-1-removebg-preview.png"
              className="relative object-cover shadow-xl rounded-b-full"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Banner;
