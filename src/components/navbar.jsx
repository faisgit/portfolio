import React, { useState } from 'react'
import Hero from './Hero'
import { AboutMe } from './AboutMe'
import Footer from './Footer'
import Skills from './Skills'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { Menu, Close } from '@mui/icons-material'
export default function Navbar() {
  return (
    <div className=' border-b-2 border-b-black/45 bg-[#EBFEFF]'>
      <nav className='flex justify-between items-center px-16 md:px-32 py-5 '>
        <h1 className=' font-bold'>Faisal Ansari</h1>
        <ul className=' hidden md:flex text-sm'>
          {/*  */}
          <li className='ml-5'>
            <AnchorLink href="#home">
              <button>Home</button>
            </AnchorLink>
          </li>
          <li className='ml-5'>
            <AnchorLink href="#AboutMe">
              <button>About Me</button>
            </AnchorLink>
          </li>
          <li className='ml-5'>
            <AnchorLink href="#skills">
              <button>Skills</button>
            </AnchorLink>
          </li>
          <li className='ml-5'>
            <AnchorLink href="#projects">
              <button>Projects</button>
            </AnchorLink>
          </li>
          <li className='ml-5'>
            <AnchorLink href="#contact">
              <button>Contact</button>
            </AnchorLink>
          </li>
        </ul>
        <div className="drawer drawer-end w-0 block md:hidden">
          <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content">
            <label htmlFor="my-drawer-4" className="drawer-button btn btn-ghost btn-sm "> <Menu /> </label>
          </div>
          <div className="drawer-side">
            <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
            <ul className="menu bg-base-200 text-base-content min-h-full w-40 px-8 pt-16 ">
            <li>
            <AnchorLink href="#home">
              <button>Home</button>
            </AnchorLink>
          </li>
          <li >
            <AnchorLink href="#AboutMe">
              <button>About Me</button>
            </AnchorLink>
          </li>
          <li >
            <AnchorLink href="#skills">
              <button>Skills</button>
            </AnchorLink>
          </li>
          <li >
            <AnchorLink href="#projects">
              <button>Projects</button>
            </AnchorLink>
          </li>
          <li>
            <AnchorLink href="#contact">
              <button>Contact</button>
            </AnchorLink>
          </li>
            </ul>
          </div>
        </div>

      </nav>
    </div>
  )
}
