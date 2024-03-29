import React from "react";
import ProfilePhoto from "../assets/photo.jpg";
import { GitHub, LinkedIn } from "@mui/icons-material";
export const Hero = () => {
  return (
    <div className=" h-[75vh] mt-32 md:mt-20 flex flex-col md:flex-row gap-7 md:gap-20 justify-center items-center px-14 md:px-20 ">
        <div className="">
          <img src={ProfilePhoto} alt=""  className=" h-52 w-52 md:h-72 md:w-72 rounded-full" />
        </div>
      <div className="flex flex-col justify-center items-center">
        <p className="text-xs font-semibold ">Hello, I'm</p>
        <h1 className=" text-3xl font-bold ">Faisal Ansari</h1>
        <h3 className="text-2xl font-semibold mb-3 text-gray-500">
          Frontend Developer
        </h3>
        <div className="flex gap-5 mb-1">
          <button className="btn btn-sm btn-outline   rounded-full">
            Donwnload CV
          </button>
          <button className="btn btn-sm btn-neutral rounded-full">
            Contact Info
          </button>
        </div>
        <div>
          <a href="https://github.com/faisgit" className="btn btn-ghost rounded-full btn-sm" target="_blank">
            <GitHub />
          </a>
          <a href="https://www.linkedin.com/in/faisal-ansari-428293297/" className="btn btn-ghost rounded-full btn-sm" target="_blank">
            <LinkedIn  />
          </a>
        </div>
      </div>
    </div>
  );
};
