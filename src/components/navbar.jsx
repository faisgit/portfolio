import React, { useState } from "react";

export const Navbar = () => {
    const [menuItems, setmenuItems] = useState({
        show : 'block',
        hide: 'hidden',
        menu : 'hidden'
    })
  return (
    <div>
      <nav className="navbar flex justify-between items-center px-32  fixed top-0 w-screen z-20 bg-white  ">
        <h1 className="font-semibold text-2xl">Faisal Ansari</h1>
        <ul className=" hidden md:flex gap-10">
          <li className="btn btn-sm btn-ghost rounded-full">
            <a href="#" className="font-md text-sm ">
              About
            </a>
          </li>
          <li className="btn btn-sm btn-ghost rounded-full">
            <a href="#" className="font-md text-sm ">
              Project
            </a>
          </li>
          <li className="btn btn-sm btn-ghost rounded-full">
            <a href="#" className="font-md text-sm ">
              Contact
            </a>
          </li>
        </ul>
        
        <div className=" md:hidden flex justify-center items-center"> 
        <button className={`mb-3 ${menuItems.show} md:hidden `}  onClick={() => {
            setmenuItems({
                show : 'hidden',
                hide : 'block',
                menu : 'block'
            })
        }} >
        <svg
              className="swap-off fill-current"
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 512 512"
            >
              <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
            </svg>
        </button>
        <button className={`${menuItems.hide}`} onClick={() => {
            setmenuItems({
                show : 'block',
                hide : 'hidden',
                menu : 'hidden'
            })
        }}>
        <svg
              className="swap-on fill-current"
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 512 512"
            >
              <polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
            </svg>
        </button>
        </div>
      </nav>

      <ul className={` ${menuItems.menu} md:hidden menu w-52 bg-black text-white  h-[34rem] absolute right-0 top-20 z-10 before:content-none `}>
          <li>
            <a href="#" className="font-md text-sm ">
              About
            </a>
          </li>
          <li>
            <a href="#" className="font-md text-sm ">
              Project
            </a>
          </li>
          <li>
            <a href="#" className="font-md text-sm ">
              Contact
            </a>
          </li>
        </ul>
    </div>
  );
};
