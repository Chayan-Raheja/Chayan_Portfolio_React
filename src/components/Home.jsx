import React from 'react'

const Home = () => {
  return (
    <div>

    {/* nav bar */}
      

    {/* main body */}
        <div className='flex flex-col justify-center lg:px-86 lg:py-32'>
                <div>
                    <h1 className='lg:font-bold lg:text-7xl text-[#2463EB]'>Hello, I'm <br />
                        <span className='text-black'>Chayan Raheja</span>
                    </h1>

                    <h2 className='text-[#4b515a] lg:py-5.5 lg:text-3xl lg:font-semibold'>Aspiring Full Stack Developer </h2>

                    <p className='text-[#4B5563] lg:text-[19px]'>I am a BCA graduate and an aspiring software developer, currently <br /> learning the MERN stack. I have knowledge of C, C++, Java, HTML,<br /> CSS, JavaScript, React.js, and MySQL. I am passionate about building <br />modern web applications and continuously improving my skills through <br /> hands-on learning and projects.</p>

                    <div className='flex lg:gap-4 lg:my-10'>
                        <button className='bg-[#2463EB] cursor-pointer rounded-md py-2.5 px-6 text-white'>Contact Me</button>
                        <button className='border cursor-pointer border-[#a9abb08e] rounded-md py-2.5 px-6 hover:text-white hover:bg-[#9E54E8] ri-file-download-line' > Resume</button>
                                {/* class="ri-file-download-line" */}
                    </div>
                </div>

                 <div className=' relative lg:-mt-94 lg:ml-160'>
                    <div className='bg-amber-300 lg:h-58 lg:w-58 rounded-[50%] bg-cover cursor-pointer bg-[url(/public/pic.png)]' >

                    </div>
                </div>
        </div>
    </div>
  )
}

export default Home
