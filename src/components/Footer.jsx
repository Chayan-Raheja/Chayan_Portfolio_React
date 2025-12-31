import React from 'react'

const Footer = () => {
  return (
    <>
        <div className='w-full lg:h-70 bg-[#111827] lg:px-56 lg:py-12'>
            <div className='flex  justify-between'>
                <div>
                    <h1 className='font-bold text-3xl text-white/95'>Chayan Raheja</h1>
                    <h2 className='text-gray-400 mt-2.5 text-xl'>Aspiring Full Stack Developer</h2>
                </div>
                <div className='flex items-center justify-center lg:gap-4.5'>
                    <a href="mailto:rahejachayan@gmail.com" className='bg-[#2463EB]/10 py-2.5 hover:bg-[#2463EB] px-4 rounded-[50%] text-white lg:font-normal lg:text-2xl'><i class="ri-mail-send-line"></i></a>
                    
                    <a href='https://linkedin.com/in/chayan-raheja' className='bg-[#2463EB]/10 hover:bg-[#2463EB] py-2.5 px-4 rounded-[50%] text-white lg:font-normal lg:text-2xl'><i class="ri-linkedin-fill"></i></a>
                    <a href='https://github.com/' className='bg-[#2463EB]/10 py-2.5 hover:bg-[#2463EB] px-4 rounded-[50%] text-white lg:font-normal lg:text-2xl'><i class="ri-github-line"></i></a>
                </div>
              
            </div>
            <hr className='text-white/25 lg:my-8'/>
            <div className='text-center text-gray-400 lg:text-lg text-sm'>&copy; 2024 Chayan Raheja. All rights reserved.</div>
        </div>
    </>
  )
}

export default Footer
