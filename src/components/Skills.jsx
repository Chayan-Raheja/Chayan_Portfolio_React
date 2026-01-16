import React from 'react'

const Skills = () => {

    // #4B5563
    
  return (
    <div className='py-12 lg:py-24 px-4'>

        <div className='flex flex-col items-center'>
            <h1 className='text-2xl sm:text-3xl lg:text-4xl font-bold flex items-center justify-center mb-8 lg:mb-12'>My <span className='text-[#2463EB] ml-2'> Skills</span></h1>


            <div className='grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-5xl'>
                <div className='flex flex-col gap-2 w-full min-h-[200px] rounded-xl bg-white/70 backdrop-blur-md shadow-lg border border-white/40 hover:shadow-2xl p-6 lg:py-5 lg:px-8 transition-all'>
                    <h1 className='font-semibold text-lg lg:text-xl text-[#2463EB] mb-2'>Programming Languages</h1>

                    <h3 className='text-sm sm:text-base flex items-center gap-2'><i className="ri-check-line"></i> C</h3>
                    <h3 className='text-sm sm:text-base flex items-center gap-2'><i className="ri-check-line"></i> C++</h3>
                    <h3 className='text-sm sm:text-base flex items-center gap-2'><i className="ri-check-line"></i> Java</h3>
                    <h3 className='text-sm sm:text-base flex items-center gap-2'><i className="ri-check-line"></i> MySQL</h3>
                </div>
                <div className='flex flex-col gap-2 w-full min-h-[200px] rounded-xl bg-white/70 backdrop-blur-md shadow-lg border border-white/40 hover:shadow-2xl p-6 lg:py-5 lg:px-8 transition-all'>
                    <h1 className='font-semibold text-lg lg:text-xl text-[#2463EB] mb-2'>Development Skills</h1>

                    <h3 className='text-sm sm:text-base flex items-center gap-2'><i className="ri-check-line"></i> Web Development</h3>
                    <h3 className='text-sm sm:text-base flex items-center gap-2'><i className="ri-check-line"></i> Frontend (HTML, CSS, Js)</h3>
                    <h3 className='text-sm sm:text-base flex items-center gap-2'><i className="ri-check-line"></i>Backend (MySQL)</h3>
                    {/* <h3 className='text-sm sm:text-base flex items-center gap-2'><i className="ri-check-line"></i> MySQL</h3> */}
                </div>
            
                <div className='flex flex-col gap-2 w-full min-h-[200px] rounded-xl bg-white/70 backdrop-blur-md shadow-lg border border-white/40 hover:shadow-2xl p-6 lg:py-5 lg:px-8 transition-all'>
                    <h1 className='font-semibold text-lg lg:text-xl text-[#2463EB] mb-2'>Tools & Technologies</h1>

                    <h3 className='text-sm sm:text-base flex items-center gap-2'><i className="ri-check-line"></i> LaTeX</h3>
                    <h3 className='text-sm sm:text-base flex items-center gap-2'><i className="ri-check-line"></i> Overleaf</h3>
                    <h3 className='text-sm sm:text-base flex items-center gap-2'><i className="ri-check-line"></i> Git</h3>
                    <h3 className='text-sm sm:text-base flex items-center gap-2'><i className="ri-check-line"></i> VS Code</h3>
                </div>
                <div className='flex flex-col gap-2 w-full min-h-[200px] rounded-xl bg-white/70 backdrop-blur-md shadow-lg border border-white/40 hover:shadow-2xl p-6 lg:py-5 lg:px-8 transition-all'>
                    <h1 className='font-semibold text-lg lg:text-xl text-[#2463EB] mb-2'>Soft Skills</h1>

                    <h3 className='text-sm sm:text-base flex items-center gap-2'><i className="ri-check-line"></i> Problem-Solving</h3>
                    <h3 className='text-sm sm:text-base flex items-center gap-2'><i className="ri-check-line"></i> Communication</h3>
                    <h3 className='text-sm sm:text-base flex items-center gap-2'><i className="ri-check-line"></i> Project Management</h3>
                    {/* <h3 className='text-sm sm:text-base flex items-center gap-2'><i className="ri-check-line"></i> MySQL</h3> */}
                </div>
            
            </div>
        </div>  
      
    </div>
  )
}

export default Skills
