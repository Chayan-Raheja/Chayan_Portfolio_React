import React from 'react'

const Footer = () => {
  return (
    <div className="w-full bg-[#111827] px-4 sm:px-8 lg:px-56 py-8 lg:py-12">
      
      <div className="flex flex-col lg:flex-row items-center lg:justify-between gap-6">

        {/* Left */}
        <div className="text-center lg:text-left">
          <h1 className="font-bold text-2xl sm:text-3xl text-white/95">
            Chayan Raheja
          </h1>
          <h2 className="text-gray-400 mt-2 text-sm sm:text-xl">
            Aspiring Full Stack Developer
          </h2>
        </div>

        {/* Right - Social Icons */}
        <div className="flex items-center gap-4">
          <a
            href="mailto:rahejachayan@gmail.com"
            className="bg-[#2463EB]/10 hover:bg-[#2463EB] transition p-3 rounded-full text-white text-xl"
          >
            <i className="ri-mail-send-line"></i>
          </a>

          <a
            href="https://linkedin.com/in/chayan-raheja"
            className="bg-[#2463EB]/10 hover:bg-[#2463EB] transition p-3 rounded-full text-white text-xl"
          >
            <i className="ri-linkedin-fill"></i>
          </a>

          <a
            href="https://github.com/"
            className="bg-[#2463EB]/10 hover:bg-[#2463EB] transition p-3 rounded-full text-white text-xl"
          >
            <i className="ri-github-line"></i>
          </a>
        </div>

      </div>

      <hr className="border-white/20 my-6 lg:my-8" />

     <p className="text-center text-gray-400 text-xs sm:text-sm lg:text-lg">
  © {new Date().getFullYear()} Chayan Raheja. All rights reserved.
</p>


    </div>
  )
}

export default Footer
