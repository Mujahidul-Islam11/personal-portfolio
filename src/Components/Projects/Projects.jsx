import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("/projects.json")
      .then((res) => res.json())
      .then((data) => setProjects(data));
  }, []);

  return (
    <div id="Projects" className="my-7 md:my-20">
      <div className="mb-8">
        <h3 className="text-3xl md:text-5xl font-bold text-center">
          My Projects
        </h3>
        <p className="md:text-lg text-center text-gray-600">Take a look at my projects</p>
      </div>
      {/* Cards container */}
      <div className="flex flex-wrap justify-center mx-auto gap-12">
        {/* Cards */}
        {projects?.map((project) => (
          <div
            key={project?.project_name}
            className="md:w-[600px] border rounded-lg hover:scale-105 transition-transform duration-300 hover:shadow-md hover:shadow-[#38BDF8]"
          >
            <img
              className="object-cover w-full rounded-t-lg"
              src={project?.cover}
              alt=""
            />
            <div className="p-4 md:p-6 space-y-4 md:space-y-6">
              {/* Card heading */}
              <div className="flex items-center gap-2">
                <img
                  className="size-7 md:size-8 rounded-full"
                  src="https://i.ibb.co/Cwjcbkf/react-1-logo-black-and-white.png"
                  alt=""
                />
                <h1 className="text-base md:text-xl font-semibold">
                  {project?.project_name}
                </h1>
              </div>
              {/*Tags & Links */}
              <div className="space-y-6 md:space-y-8">
                <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                  {project?.tags?.map((tag, index) => (
                    <button
                      key={index}
                      className="px-4 py-1 rounded-lg border-opacity-[40%] border-2 border-[#38BDF8] text-[#38BDF8] text-sm font-semibold"
                    >
                      {tag}
                    </button>
                  ))}
                </div>
                <div className="flex justify-center md:justify-end gap-3">
                  <NavLink to={`${project?.codelink}`}>
                    <button className="flex gap-2 text-[16px] items-center border py-2 px-4 text-center text-white bg-[#38BDF8] hover:bg-[#34a9db] transition-colors duration-300 rounded-full">
                      <ion-icon name="code-slash-outline"></ion-icon>
                      Code
                    </button>
                  </NavLink>
                  <NavLink to={`${project?.livelink}`}>
                    <button className="flex gap-2 text-[16px] items-center border py-2 px-4 text-center text-white bg-[#38BDF8] hover:bg-[#34a9db] transition-colors duration-300 rounded-full">
                      <ion-icon name="link-outline"></ion-icon>
                      Live
                    </button>
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
