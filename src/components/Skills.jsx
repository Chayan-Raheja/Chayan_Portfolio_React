import React from 'react'

const Skills = () => {

    // #4B5563
    
  return (
    <div className='my-50'>

        <div className='flex flex-col  '>
            <h1 className='flex items-center justify-center lg:text-4xl lg:font-bold '>My <span className='text-[#2463EB] ml-2'> Skills</span></h1>


            <div className='flex items-center justify-center lg:gap-6 lg:mt-12'>
                <div className='flex flex-col lg:gap-1.5 lg:w-[420PX] lg:min-h-[200px] rounded-xl bg-white/70 backdrop-blur-md shadow-lg border border-white/40 hover:shadow-2xl  lg:py-3.5 lg:pl-8 lg:pr-36 '>
                    <h1 className='lg:font-semibold lg:mb-2 lg:text-xl text-[#2463EB] '>Programming Languages</h1>

                    <h3 className='lg:text-base'><i class="ri-check-line"></i> C</h3>
                    <h3 className='lg:text-base'><i class="ri-check-line"></i> C++</h3>
                    <h3 className='lg:text-base'><i class="ri-check-line"></i> Java</h3>
                    <h3 className='lg:text-base'><i class="ri-check-line"></i> MySQL</h3>
                </div>
                <div className='flex flex-col lg:gap-1.5  lg:w-[420px] lg:min-h-[200px] rounded-xl bg-white/70 backdrop-blur-md shadow-lg border border-white/40 hover:shadow-2xl  lg:py-3.5 lg:pl-8 lg:pr-36 '>
                    <h1 className='lg:font-semibold lg:mb-2 lg:text-xl text-[#2463EB] '>Development Skills</h1>

                    <h3 className='lg:text-base'><i class="ri-check-line"></i> Web Development</h3>
                    <h3 className='lg:text-base'><i class="ri-check-line"></i> Frontend (HTML, CSS, Js)</h3>
                    <h3 className='lg:text-base'><i class="ri-check-line"></i>Backend (MySQL)</h3>
                    {/* <h3 className='lg:text-base'><i class="ri-check-line"></i> MySQL</h3> */}
                </div>
            
            </div>

            <div className='flex items-center justify-center lg:gap-6 lg:mt-6'>
                <div className='flex flex-col lg:gap-1.5 lg:w-[420px] lg:min-h-[200px] rounded-xl bg-white/70 backdrop-blur-md shadow-lg border border-white/40 hover:shadow-2xl  lg:py-3.5 lg:pl-8 lg:pr-36 '>
                    <h1 className='lg:font-semibold lg:mb-2 lg:text-xl text-[#2463EB] '>Tools & Technologies</h1>

                    <h3 className='lg:text-base'><i class="ri-check-line"></i> LaTeX</h3>
                    <h3 className='lg:text-base'><i class="ri-check-line"></i> Overleaf</h3>
                    <h3 className='lg:text-base'><i class="ri-check-line"></i> Git</h3>
                    <h3 className='lg:text-base'><i class="ri-check-line"></i> VS Code</h3>
                </div>
                <div className='flex flex-col lg:gap-1.5 lg:w-[420px] lg:min-h-[200px] rounded-xl bg-white/70 backdrop-blur-md shadow-lg border border-white/40 hover:shadow-2xl  lg:py-3.5 lg:pl-8 lg:pr-36 '>
                    <h1 className='lg:font-semibold lg:mb-2 lg:text-xl text-[#2463EB] '>Soft Skills</h1>

                    <h3 className='lg:text-base'><i class="ri-check-line"></i> Problem-Solving</h3>
                    <h3 className='lg:text-base'><i class="ri-check-line"></i> Communication</h3>
                    <h3 className='lg:text-base'><i class="ri-check-line"></i> Project Management</h3>
                    {/* <h3 className='lg:text-base'><i class="ri-check-line"></i> MySQL</h3> */}
                </div>
            
            </div>
        </div>  
      
    </div>
  )
}

export default Skills
