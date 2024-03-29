import React, { useState } from "react";

export const Navbar = () => {
    const [menuItems, setmenuItems] = useState({
        show : 'block',
        hide: 'hidden',
        menu : 'hidden'
    })
  return (
    <div>
      <nav className="navbar flex justify-between items-center px-10  md:px-32  fixed top-0 w-screen z-20 bg-white  ">
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
      </nav>
      </div>
  );
};
