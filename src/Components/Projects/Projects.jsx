import { NavLink } from "react-router-dom";

const Projects = () => {
  return (
    <div className="my-7 md:my-12">
      <div className="mb-8">
        <h3 className="text-3xl md:text-4xl font-bold text-center">
          My Projects
        </h3>
        <p className="text-center text-gray-600">Take a look at my projects</p>
      </div>
      {/* Cards container */}
      <div className="flex flex-wrap mx-auto justify-center gap-6">
        {/* Cards */}
        <div className="border rounded-lg">
          <img
            className="object-cover w-[528px] rounded-t-lg"
            src="https://i.ibb.co/WBq9RNg/Untitled-design.png"
            alt=""
          />
          <div className="p-6 space-y-6">
            {/* Card heading */}
            <div className="flex items-center gap-2">
              <img
                className="size-8 rounded-full"
                src="https://i.ibb.co/Cwjcbkf/react-1-logo-black-and-white.png"
                alt=""
              />
              <h1 className="text-xl font-semibold">BidPlus</h1>
            </div>
            {/*Tags & Links */}
            <div className="space-y-2">
              <button className="flex-shrink-0 px-4 py-1 rounded-lg border-opacity-[40%] border-2 border-[#38BDF8] text-[#38BDF8] text-sm font-semibold">
                React
              </button>
              <div className="flex justify-end gap-3">
                <NavLink to={''}>
                <button className="flex gap-2 text-[16px] items-center border py-2 px-4 text-center text-white bg-[#38BDF8] hover:bg-[#34a9db] transition-colors duration-150 rounded-full">
                <ion-icon name="code-slash-outline"></ion-icon>
                  Code
                </button>
                </NavLink>
                <NavLink to={''}>
                <button className="flex gap-2 text-[16px] items-center border py-2 px-4 text-center text-white bg-[#38BDF8] hover:bg-[#34a9db] transition-colors duration-150 rounded-full">
                <ion-icon name="code-slash-outline"></ion-icon>
                  Live
                </button>
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
