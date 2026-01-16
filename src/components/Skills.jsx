import React from "react";

const Skills = () => {
  return (
    <section className="py-12 lg:py-24">
      {/* 🔥 COMMON CONTAINER (SAME AS NAV & HOME) */}
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
        <div className="flex flex-col items-center">
          {/* Heading */}
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-8 lg:mb-12">
            My <span className="text-[#2463EB]">Skills</span>
          </h1>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
            
            {/* Card 1 */}
            <div className="flex flex-col gap-2 min-h-[200px] rounded-xl bg-white/70 backdrop-blur-md shadow-lg border border-white/40 hover:shadow-2xl p-6 transition-all">
              <h2 className="font-semibold text-lg lg:text-xl text-[#2463EB] mb-2">
                Programming Languages
              </h2>

              <p className="text-sm sm:text-base flex items-center gap-2">
                <i className="ri-check-line"></i> C
              </p>
              <p className="text-sm sm:text-base flex items-center gap-2">
                <i className="ri-check-line"></i> C++
              </p>
              <p className="text-sm sm:text-base flex items-center gap-2">
                <i className="ri-check-line"></i> Java
              </p>
              <p className="text-sm sm:text-base flex items-center gap-2">
                <i className="ri-check-line"></i> MySQL
              </p>
            </div>

            {/* Card 2 */}
            <div className="flex flex-col gap-2 min-h-[200px] rounded-xl bg-white/70 backdrop-blur-md shadow-lg border border-white/40 hover:shadow-2xl p-6 transition-all">
              <h2 className="font-semibold text-lg lg:text-xl text-[#2463EB] mb-2">
                Development Skills
              </h2>

              <p className="text-sm sm:text-base flex items-center gap-2">
                <i className="ri-check-line"></i> Web Development
              </p>
              <p className="text-sm sm:text-base flex items-center gap-2">
                <i className="ri-check-line"></i> Frontend (HTML, CSS, JS)
              </p>
              <p className="text-sm sm:text-base flex items-center gap-2">
                <i className="ri-check-line"></i> Backend (MySQL)
              </p>
            </div>

            {/* Card 3 */}
            <div className="flex flex-col gap-2 min-h-[200px] rounded-xl bg-white/70 backdrop-blur-md shadow-lg border border-white/40 hover:shadow-2xl p-6 transition-all">
              <h2 className="font-semibold text-lg lg:text-xl text-[#2463EB] mb-2">
                Tools & Technologies
              </h2>

              <p className="text-sm sm:text-base flex items-center gap-2">
                <i className="ri-check-line"></i> LaTeX
              </p>
              <p className="text-sm sm:text-base flex items-center gap-2">
                <i className="ri-check-line"></i> Overleaf
              </p>
              <p className="text-sm sm:text-base flex items-center gap-2">
                <i className="ri-check-line"></i> Git
              </p>
              <p className="text-sm sm:text-base flex items-center gap-2">
                <i className="ri-check-line"></i> VS Code
              </p>
            </div>

            {/* Card 4 */}
            <div className="flex flex-col gap-2 min-h-[200px] rounded-xl bg-white/70 backdrop-blur-md shadow-lg border border-white/40 hover:shadow-2xl p-6 transition-all">
              <h2 className="font-semibold text-lg lg:text-xl text-[#2463EB] mb-2">
                Soft Skills
              </h2>

              <p className="text-sm sm:text-base flex items-center gap-2">
                <i className="ri-check-line"></i> Problem-Solving
              </p>
              <p className="text-sm sm:text-base flex items-center gap-2">
                <i className="ri-check-line"></i> Communication
              </p>
              <p className="text-sm sm:text-base flex items-center gap-2">
                <i className="ri-check-line"></i> Project Management
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
