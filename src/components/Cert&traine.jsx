import React from "react";

const Certtraine = () => {
  return (
    <div className="py-12 lg:py-24 px-4">
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl mb-8 lg:mb-12 font-bold text-center">
          Training & <span className="text-[#2463EB]">Certification</span>
        </h1>

        <div className="flex flex-col gap-6 bg-white/70 backdrop-blur-md shadow-lg border border-white/40 transition hover:shadow-2xl w-full max-w-5xl rounded-2xl p-6 lg:p-8">
          <div className="flex flex-col md:flex-row w-full justify-between gap-4">
            <div className="flex gap-4 items-center">
              <div className="bg-[#2463EB]/10 p-3 rounded-2xl text-[#2463EB] text-xl">
                <i className="ri-award-line"></i>
              </div>
              <div className="flex flex-col">
                <h2 className="text-lg sm:text-xl font-bold text-gray-800">
                  MERN Stack Trainee
                </h2>

                <h3 className="text-base sm:text-lg font-semibold text-[#2463EB]">
                  Sheriyans Coding School
                </h3>
              </div>
            </div>

            <div className="flex items-center gap-2 text-gray-500">
              <i className="ri-calendar-line"></i>
              <span className="text-xs sm:text-sm">Sep 2025 - present</span>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="text-[#2463EB] text-xl sm:text-2xl font-extralight mt-1">
              <i className="ri-book-open-line"></i>
            </div>
            <p className="text-black/65 text-sm sm:text-base lg:text-lg leading-relaxed">
              Currently pursuing intensive training in full-stack web
              development with focus on modern JavaScript technologies. Gained
              hands-on experience building amazing projects and learned advanced
              concepts in Three.js for creating immersive 3D web experiences.
            </p>
          </div>
          <div className="flex gap-4 items-start">
            <div className="text-[#2463EB] text-xl sm:text-2xl font-extralight mt-1">
              <i className="ri-code-s-slash-line"></i>
            </div>
            <div className="flex flex-wrap gap-2">
              <h3 className="bg-[#2463EB]/10 py-1 px-3 sm:px-4 rounded-2xl text-[#2463EB] text-xs sm:text-sm font-semibold">
                Html
              </h3>
              <h3 className="bg-[#2463EB]/10 py-1 px-3 sm:px-4 rounded-2xl text-[#2463EB] text-xs sm:text-sm font-semibold">
                CSS
              </h3>
              <h3 className="bg-[#2463EB]/10 py-1 px-3 sm:px-4 rounded-2xl text-[#2463EB] text-xs sm:text-sm font-semibold">
                Tailwind CSS
              </h3>
              <h3 className="bg-[#2463EB]/10 py-1 px-3 sm:px-4 rounded-2xl text-[#2463EB] text-xs sm:text-sm font-semibold">
                Javascript
              </h3>
              <h3 className="bg-[#2463EB]/10 py-1 px-3 sm:px-4 rounded-2xl text-[#2463EB] text-xs sm:text-sm font-semibold">
                React Js
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Certtraine;
