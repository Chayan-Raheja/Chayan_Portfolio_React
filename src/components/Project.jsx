import React from "react";

const Project = () => {
  const probox =
    "w-full flex flex-col rounded-2xl bg-white/70 backdrop-blur-md shadow-lg border border-white/40 p-5 sm:p-6 lg:p-8 transition hover:shadow-2xl";

  return (
    <section className="py-12 lg:py-24">
      {/* 🔥 COMMON CONTAINER (SAME AS NAV / HOME / SKILLS / EXPERIENCE) */}
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
        <div className="flex flex-col items-center gap-6 lg:gap-10">

          {/* Heading */}
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center">
            My <span className="text-[#2463EB]">Projects</span>
          </h1>

          {/* Projects Grid */}
          <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-6">

            {/* ===== Project 1 ===== */}
            <div className={probox}>
              <h2 className="font-semibold text-base sm:text-lg lg:text-xl">
                Quiz Game Application
              </h2>

              <p className="text-black/70 text-sm sm:text-base mt-2 leading-relaxed">
                Developed an interactive quiz game using Java Swing for UI and
                MySQL for database management. Implemented backend logic for
                seamless UI-database communication and optimized query execution
                to improve performance.
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mt-4">
                <span className="bg-[#2463EB]/10 px-4 py-1 rounded-2xl text-[#2463EB] text-sm">
                  Java
                </span>
                <span className="bg-[#2463EB]/10 px-4 py-1 rounded-2xl text-[#2463EB] text-sm">
                  MySQL
                </span>
              </div>

              {/* GitHub */}
              <a
                href="#"
                className="mt-5 w-fit flex items-center gap-2 rounded-md bg-gray-100 border px-4 py-2 text-sm hover:bg-[#2463EB] hover:text-white transition"
              >
                <i className="ri-github-line"></i>
                GitHub
              </a>
            </div>

            {/* ===== Project 2 ===== */}
            <div className={probox}>
              <h2 className="font-semibold text-base sm:text-lg lg:text-xl">
                Personal Portfolio Website
              </h2>

              <p className="text-black/70 text-sm sm:text-base mt-2 leading-relaxed">
                Designed and developed a responsive personal portfolio website
                to showcase skills, projects, and professional experience.
                Built using modern frontend tools with a focus on clean UI,
                smooth user experience, and responsive layouts across all
                devices.
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mt-4">
                <span className="bg-[#2463EB]/10 px-4 py-1 rounded-2xl text-[#2463EB] text-sm">
                  React (JSX)
                </span>
                <span className="bg-[#2463EB]/10 px-4 py-1 rounded-2xl text-[#2463EB] text-sm">
                  Tailwind CSS
                </span>
              </div>

              {/* GitHub */}
              <a
                href="#"
                className="mt-5 w-fit flex items-center gap-2 rounded-md bg-gray-100 border px-4 py-2 text-sm hover:bg-[#2463EB] hover:text-white transition"
              >
                <i className="ri-github-line"></i>
                GitHub
              </a>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Project;
