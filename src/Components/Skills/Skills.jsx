import { useEffect, useState } from "react";

const Skills = () => {
  const [logos, setLogos] = useState([]);
  useEffect(() => {
    fetch("/logo.json")
      .then((res) => res.json())
      .then((data) => setLogos(data));
  }, []);
  return (
    <div id="Skills" className="my-7 md:my-20">
      <div className="mb-8">
        <h3 className="text-3xl md:text-5xl font-bold text-center">
          My Skills
        </h3>
        <p className="md:text-lg text-center text-gray-600">Check out my skills</p>
      </div>
      <div className="mx-4 flex justify-center md:mx-60 flex-wrap gap-8">
        {logos?.map((logo) => (
          <div key={logo?.name}>
            <div
              className={`border size-52 flex justify-center items-center flex-col overflow-hidden hover:scale-105 transition-transform duration-300 hover:shadow-md hover:shadow-[#38BDF8]`}
            >
              <img className="w-20 h-20" src={logo?.image} alt="" />
              <h3 className="text-2xl font-semibold">{logo?.name}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
