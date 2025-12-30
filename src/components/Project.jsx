import React from 'react'

const Project = () => {

    const probox='w-full flex flex-col max-w-2xl rounded-2xl bg-white/70 backdrop-blur-md shadow-lg border border-white/40 p-4 sm:p-5 lg:p-6 transition hover:shadow-2xl'

  return (
    <div className=" lg:mt-40 lg:mb-70 flex flex-col items-center gap-6 lg:gap-8">
      <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center">
          My <span className="text-[#2463EB]">Projects</span>
        </h1>

      <div className='flex lg:gap-4 w-full justify-center'>
            <div className={probox}>
                <h1 className='lg:font-semibold lg:text-lg'>Quiz Game Application</h1>

                <p className='text-black/65 lg:mt-2'>Developed an interactive quiz game using Java Swing for UI and MySQL for database management. Implemented backend logic for seamless UI-database communication and optimized query execution to improve performance.</p>

                <div className='flex lg:gap-2 lg:mb-3.5 lg:mt-5.5'>
                    <h3 className='bg-[#2463EB]/10 py-1 px-4.5 rounded-2xl text-[#2463EB] text-sm'>Java</h3>
                    <h3 className='bg-[#2463EB]/10 py-1 px-4.5 rounded-2xl text-[#2463EB] text-sm'>Mysql</h3>
                </div>

                <div className="flex items-center gap-2 rounded-md bg-gray-100/95 border w-fit py-1.5 px-4 my-4 cursor-pointer hover:bg-[#9E54E8] hover:text-white transition">
                    <i className="ri-github-line"></i>
                    <span className="lg:font-medium"><a href="#">GitHub</a></span>
                </div>
            </div>



           <div className={probox}>
                <h1 className="lg:font-semibold lg:text-lg">
                    Personal Portfolio Website
                </h1>

                <p className="text-black/65 lg:mt-2">
                    Designed and developed a responsive personal portfolio website to showcase
                    skills, projects, and professional experience. Built using modern frontend
                    tools with a focus on clean UI, smooth user experience, and responsive
                    layouts across all devices.
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 lg:mb-3.5 lg:mt-5.5">
                
                    <h3 className="bg-[#2463EB]/10 py-1 px-4 rounded-2xl text-[#2463EB] text-sm">
                    React (JSX)
                    </h3>
                    <h3 className="bg-[#2463EB]/10 py-1 px-4 rounded-2xl text-[#2463EB] text-sm">
                    Tailwind CSS
                    </h3>
                </div>

                {/* GitHub Button */}
                <div className="flex items-center gap-2 rounded-md bg-gray-100/95 border w-fit py-1.5 px-4 my-4 cursor-pointer hover:bg-[#9E54E8] hover:text-white transition">
                    <i className="ri-github-line"></i>
                    <span className="lg:font-medium"><a href="#">GitHub</a></span>
                </div>
            </div>

            
      </div>

      
    </div>
  )
}

export default Project
