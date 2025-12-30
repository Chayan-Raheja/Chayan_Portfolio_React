import React from 'react'

const Education = () => {
  return (
    <div className='flex flex-col justify-center items-center lg:mb-24'>
      <h1 className="text-2xl sm:text-3xl lg:text-4xl lg:mb-12 lg:mt-5 font-bold text-center text-[#2463EB]">Education</h1>

    <div className='lg:flex lg:flex-col lg:gap-8.5'>
        <div className='lg:flex lg:gap-3.5 bg-white/70 backdrop-blur-md shadow-lg border border-white/40 transition hover:shadow-2xl w-full max-w-5xl rounded-2xl  p-4  lg:p-6 '>
            <div className='lg:flex items-center justify-center'>
                <div className='bg-[#2463EB]/10 py-2.5 px-4 rounded-[50%] text-[#2463EB] lg:font-normal lg:text-xl'><i class="ri-graduation-cap-line"></i></div>
            </div>
            <div className=" lg:flex lg:flex-col lg:gap-1 ">
        
        
                <div className='lg:flex justify-between'>
                    <div>
                    <h2 className="text-base sm:text-lg lg:text-xl font-semibold text-gray-800">
                BCA (Bachelor of Computer Applications) </h2>
                
                 <h3 className="lg:text-lg lg:font-semibold  text-[#2463EB] ">
                University of Kota</h3>
                </div>
                <div className='lg:flex lg:gap-2'>
                    <i class="ri-calendar-line"></i>
                    <span className="text-xs sm:text-sm text-gray-500">
                 2022 – 2025
                </span>
                </div>
                </div>
                <p className='text-black/65 lg:mt-3'>Successfully completed a Bachelor of Computer Applications with a strong focus on programming  fundamentals, software development, and practical problem-solving skills.</p>
                <div className='flex lg:gap-2 lg:mb-3.5 lg:mt-5.5'>
                    <h3 className='bg-[#2463EB]/10 py-1 px-4.5 rounded-2xl text-[#2463EB] text-sm'>C</h3>
                    <h3 className='bg-[#2463EB]/10 py-1 px-4.5 rounded-2xl text-[#2463EB] text-sm'>Html</h3>
                    <h3 className='bg-[#2463EB]/10 py-1 px-4.5 rounded-2xl text-[#2463EB] text-sm'>Css</h3>
                    <h3 className='bg-[#2463EB]/10 py-1 px-4.5 rounded-2xl text-[#2463EB] text-sm'>Java</h3>
                    <h3 className='bg-[#2463EB]/10 py-1 px-4.5 rounded-2xl text-[#2463EB] text-sm'>Mysql</h3>
                </div>
        
        </div>
        </div>
        
        <div className='lg:flex lg:gap-3.5 bg-white/70 backdrop-blur-md shadow-lg border border-white/40 transition hover:shadow-2xl w-full max-w-5xl rounded-2xl  p-4  lg:p-6 '>
            <div className='lg:flex items-center justify-center'>
                <div className='bg-[#2463EB]/10 py-2.5 px-4 rounded-[50%] text-[#2463EB] lg:font-normal lg:text-xl'><i class="ri-graduation-cap-line"></i></div>
            </div>
            <div className=" lg:flex lg:flex-col lg:gap-1 ">
        
        
                <div className='lg:flex justify-between'>
                    <div>
                    <h2 className="text-base sm:text-lg lg:text-xl font-semibold text-gray-800">
               Secondary School</h2>
                
                 <h3 className="lg:text-lg lg:font-semibold  text-[#2463EB] ">
                Central Public Sr. Sec. School</h3>
                </div>
                <div className='lg:flex lg:gap-2'>
                         <i class="ri-calendar-line"></i>
                    <span className="  text-xs sm:text-sm text-gray-500 ">
                    2021 – 2022
                </span>
                </div>
            
            </div>
                 <p className='text-black/65 lg:mt-3'>Completed secondary education with an academic focus on Computer Studies, English Literature, and Geography, building a strong foundation in digital literacy and communication.</p>
        
        </div>
        </div>
    </div>
    </div>
  )
}

export default Education
