import React from "react";

const Home = () => {
  return (
    <section>
      {/* 🔥 SAME CONTAINER AS NAVBAR */}
      <div
        className="
          max-w-6xl 
          2xl:max-w-7xl 
          mx-auto 
          px-4 
          sm:px-6 
          lg:px-8 
          2xl:px-12
        "
      >
        {/* HERO CONTENT */}
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12 py-16 lg:py-28">
          
          {/* LEFT CONTENT */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-[#2463EB] leading-tight">
              Hello, I'm <br />
              <span className="text-black">Chayan Raheja</span>
            </h1>

            <h2 className="text-[#4b515a] mt-4 lg:mt-6 text-xl sm:text-2xl lg:text-3xl font-semibold">
              Aspiring Full Stack Developer
            </h2>

            <p className="text-[#4B5563] mt-4 lg:mt-6 text-sm sm:text-base lg:text-[19px] max-w-2xl">
              I am a BCA graduate and an aspiring software developer, currently
              learning the MERN stack. I have knowledge of C, C++, Java, HTML,
              CSS, JavaScript, React.js, and MySQL. I am passionate about
              building modern web applications and continuously improving my
              skills through hands-on learning and projects.
            </p>

            {/* BUTTONS */}
            <div className="flex justify-center lg:justify-start gap-4 mt-6 lg:mt-10">
              <button className="bg-[#2463EB] rounded-md py-2.5 px-6 text-white hover:bg-[#1f52c7] transition">
                Contact Me
              </button>

              <button className="border border-[#a9abb08e] rounded-md py-2.5 px-6 flex items-center gap-2 hover:bg-[#9E54E8] hover:text-white transition">
                <i className="ri-file-download-line"></i>
                Resume
              </button>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative">
            <div
              className="
                h-56 w-56 
                sm:h-72 sm:w-72 
                lg:h-80 lg:w-80 
                rounded-full 
                bg-cover 
                bg-center 
                bg-[url(/public/pic.png)]
                cursor-pointer
              "
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
