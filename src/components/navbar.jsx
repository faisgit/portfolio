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
      <nav className='flex justify-between items-center px-32 py-5 '>
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
      </nav>
    </div>
  )
}
