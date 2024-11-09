import { useEffect, useState } from "react";

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
      <div className="flex flex-wrap justify-center mx-auto gap-8">
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
                  className="size-8 md:size-10 rounded-full border"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlcWfvbl7k2a6VUiV8nPqvVLg01PbYLlWIKh-utZejkgaFxM-kvzGuQJei2tigxzDYJp4&usqp=CAU"
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
                  <a href={`${project?.codelink}`} target="_blank" rel="noopener noreferrer">
                    <button className="flex gap-2 text-[16px] items-center border py-2 px-4 text-center text-white bg-[#38BDF8] hover:bg-[#34a9db] transition-colors duration-300 rounded-full">
                      <ion-icon name="code-slash-outline"></ion-icon>
                      Code
                    </button>
                  </a>
                  <a href={`${project?.livelink}`} target="_blank" rel="noopener noreferrer">
                    <button className="flex gap-2 text-[16px] items-center border py-2 px-4 text-center text-white bg-[#38BDF8] hover:bg-[#34a9db] transition-colors duration-300 rounded-full">
                      <ion-icon name="link-outline"></ion-icon>
                      Live
                    </button>
                  </a>
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
