import React from "react";
import image from "../images/image.jpg";
import image1 from "../images/image1.jpg";
import image2 from "../images/image2.jpg";
import image3 from "../images/image3.jpg";
import image4 from "../images/image4.jpg";
const Meeting = () => {
  return (
    <div className="max-w-[1400px] m-auto py-16 px-4 grid lg:grid-cols-2 gap-4">
      {/* Left Side */}
      <div className="grid grid-cols-2 grid-rows-6 h-[80vh]">
        <img
          className="row-span-3 object-cover w-full h-full p-2"
          src={image}
          alt="/"
        />
        <img
          className="row-span-2 object-cover w-full h-full p-2"
          src={image1}
          alt="/"
        />
        <img
          className="row-span-2 object-cover w-full h-full p-2"
          src={image2}
          alt="/"
        />
        <img
          className="row-span-3 object-cover w-full h-full p-2"
          src={image3}
          alt="/"
        />
        <img
          className="row-span-2 object-cover w-full h-full p-2"
          src={image4}
          alt="/"
        />
      </div>
      {/* Right Side */}
      <div className="flex flex-col h-full justify-center">
        <h3 className="text-5xl md:text-6xl font-bold">
          {" "}
          Create Your Next Project
        </h3>
        <p className="text-2xl py-6">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias,
          nam?
        </p>
        <p className="pb-6">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
          voluptates nostrum dolorum reprehenderit error! Doloribus est illo
          eius saepe? Molestias sapiente perspiciatis doloribus consectetur
          nihil facilis aliquid eaque vel quisquam.
        </p>
        <div>
          <button className="border-black mr-4 hover:shadow-xl">
            Learn More
          </button>
          <button className="bg-gray-900 text-white border-black hover:shadow-xl">
            Meet With Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default Meeting;
