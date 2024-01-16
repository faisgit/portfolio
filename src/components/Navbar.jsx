import React from "react";

const Navbar = () => {
  return (
    <div className='h-[100px]'>
      {/* Sidebar */}
      <div className="max-w-[1000px] m-auto flex items-center justify-between h-full">
        <span className="font-bold">Lama Dev</span>
        {/* Social */}
        <div className="flex items-center gap-[20px]">
          <a href="">
            {" "}
            <img src="/facebook.png" alt="" className=" w-[18px] h-[18px] " />
          </a>
          <a href="">
            {" "}
            <img src="/instagram.png" alt="" className=" w-[18px] h-[18px] " />
          </a>
          <a href="">
            {" "}
            <img src="/youtube.png" alt="" className=" w-[18px] h-[18px] " />
          </a>
          <a href="">
            {" "}
            <img src="/dribbble.png" alt="" className=" w-[18px] h-[18px] " />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
