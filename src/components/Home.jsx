import React from 'react'

const Home = () => {
  return (
    <div>

    {/* nav bar */}
      

    {/* main body */}
        <div className='flex flex-col-reverse lg:flex-row justify-center items-center lg:justify-between px-6 py-12 lg:px-32 lg:py-32 gap-10'>
                <div className='text-center lg:text-left'>
                    <h1 className='text-4xl sm:text-5xl lg:text-7xl font-bold text-[#2463EB]'>Hello, I'm <br />
                        <span className='text-black'>Chayan Raheja</span>
                    </h1>

                    <h2 className='text-[#4b515a] py-3 lg:py-5.5 text-xl sm:text-2xl lg:text-3xl font-semibold'>Aspiring Full Stack Developer </h2>

                    <p className='text-[#4B5563] text-sm sm:text-base lg:text-[19px]'>I am a BCA graduate and an aspiring software developer, currently <br className='hidden lg:block'/> learning the MERN stack. I have knowledge of C, C++, Java, HTML,<br className='hidden lg:block'/> CSS, JavaScript, React.js, and MySQL. I am passionate about building <br className='hidden lg:block'/>modern web applications and continuously improving my skills through <br className='hidden lg:block'/> hands-on learning and projects.</p>

                    <div className='flex justify-center lg:justify-start gap-4 my-6 lg:my-10'>
                        <button className='bg-[#2463EB] cursor-pointer rounded-md py-2.5 px-6 text-white'>Contact Me</button>
                        <button className='border cursor-pointer border-[#a9abb08e] rounded-md py-2.5 px-6 hover:text-white hover:bg-[#9E54E8] flex items-center gap-2' > <i className="ri-file-download-line"></i> Resume</button>
                                {/* class="ri-file-download-line" */}
                    </div>
                </div>

                 <div className='relative'>
                    <div className='bg-amber-300 h-56 w-56 sm:h-72 sm:w-72 lg:h-80 lg:w-80 rounded-full bg-cover bg-center cursor-pointer bg-[url(/public/pic.png)]' >

                    </div>
                </div>
        </div>
    </div>
  )
}

export default Home
