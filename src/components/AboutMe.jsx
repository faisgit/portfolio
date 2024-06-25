import React from 'react'
import aboutImage from "../assets/about.png"
export const AboutMe = () => {
  return (
    <div className='flex flex-col md:flex-row justify-between items-center my-5 md:px-10 lg:px-32 xl:px-52' id='AboutMe'>
      <div className=' w-80 lg:w-96'>
        <img src={aboutImage} alt="" />
      </div>
      <div>
        <h6 className='text-sm text-[#457b9d] font-sans font-semibold mb-3'>About</h6>
        <h3 className=' font-extrabold text-3xl mb-3'>About Me ?</h3>
        <p className='  w-80 lg:w-96 text-[#455a64] font-semibold text-xs lg:text-sm mb-3'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat ut, ipsum nobis delectus harum vitae autem blanditiis laudantium laboriosam eum, dicta placeat quaerat molestiae illo maiores beatae assumenda necessitatibus quod voluptas praesentium tempore, facere ex?</p>
      </div>
    </div>
  )
}
