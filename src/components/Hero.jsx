import React from 'react'
import profilePhoto from "../assets/photo.jpg"
const Hero = () => {
  return (
    <div className='h-auto bg-[#EBFEFF] flex flex-col md:flex-row justify-center md:justify-between items-center  md:px-16 lg:px-44  xl:px-52 py-10' id='Home'>
    <div className=' md:hidden w-52 mb-7 md:mb-0'>
      <img src={profilePhoto} alt="" />
    </div>
    <div className=''>
      <h6 className=' font-bold text-sm text-[#457b9d] font-sans '>Hii Everyone, I am</h6>
      <h3 className='font-bold text-3xl '>Faisal Ansari</h3>
      <p className='text-xs font-semibold w-52 sm:w-96'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia quaerat ad perspiciatis alias harum, accusamus officia et pariatur doloribus quod rem nesciunt laborum est minima. Voluptatibus ad obcaecati recusandae voluptates?</p>
    </div>
    <div className=' hidden md:block w-52'>
      <img src={profilePhoto} alt="" />
    </div>
  </div>
  )
}

export default Hero