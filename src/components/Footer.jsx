import React from 'react'
import { LinkedIn, Instagram, GitHub } from '@mui/icons-material'
const Footer = () => {
  let newDate =  new Date()
  let currentYear = newDate.getUTCFullYear()
  console.log(currentYear)
  return (
    <div className='bg-[#EBFEFF] h-52 px-20 py-4 flex flex-col justify-between' id='contact'>
      <div>
        <h5 className='text-[#457b9d] text-sm font-semibold mb-1'>Contacts</h5>
        <h2 className='font-bold text-xl mb-1'>Get in Contact</h2>
        <p className=' text-xs font-semibold mb-1'>fa830163@gmail.com</p>
        <div>
          <a href="/"> <LinkedIn/></a>
          <a href="/"> <Instagram/> </a>
          <a href="/"> <GitHub /> </a>
        </div>
      </div>
      <p className=' text-xs'>Copyright © {currentYear}. Develop by Faisal Ansari</p>
    </div>
  )
}

export default Footer