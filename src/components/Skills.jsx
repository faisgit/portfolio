import React from 'react'
import htmlLogo from "../assets/logo_html.png"
import cssLogo from "../assets/CSS-Logo.png"
import bootstrapLogo from "../assets/bootstrap-logo.png"
import tailwindCSSLogo from "../assets/tailwindcss-logo.png"
const Skills = () => {
  return (
    <div className='bg-[#EBFEFF] h-52 flex flex-col justify-center items-center' id='skills'>
      <h4 className='text-[#457b9d] text-xl font-bold mb-3'>Skills</h4>
      <h2 className='font-bold text-3xl mb-3'>What I am capable of?</h2>
      <div className='flex justify-center'>
        <img src={htmlLogo} alt="" className=' h-12 w-12 mr-3' />
        <img src={cssLogo} alt="" className='h-12 w-12 mr-3' />
        <img src={bootstrapLogo} alt="" className='h-12 w-12 mr-3' />
        <img src={tailwindCSSLogo} alt="" className='h-12 w-16 mr-3' />
      </div>
    </div>
  )
}

export default Skills