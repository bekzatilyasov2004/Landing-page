import React from "react";
import project from "../images/project.jpg";
import project1 from "../images/project1.jpg";
import project2 from "../images/project2.jpg";

const Projects = () => {
  return (
    <div className="max-w-[1400px] h-[500px] bg-gray-900 text-white mx-auto my-20 pt-16 lg:mb-[20%] md:mb-[35%] px-4 grid lg:grid-cols-3 gap-4">
      <div className="lg:top-20 relative lg:col-span-1 col-span-2">
        <h3 className="text-2xl font-bold">Our Latest Projects</h3>
        <p className="pt-4">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error ipsam
          rerum iusto excepturi similique minus?
        </p>
      </div>
      <div className="grid grid-cols-2 col-span-2 gap-2">
        <img className="object-cover w-full h-full" src={project} alt="/" />
        <img
          className="row-span-2 object-cover w-full h-full"
          src={project1}
          alt="/"
        />
        <img className="object-cover w-full h-full" src={project2} alt="/" />
      </div>
    </div>
  );
};

export default Projects;
