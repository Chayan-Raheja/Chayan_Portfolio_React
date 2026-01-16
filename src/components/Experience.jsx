import React from "react";

const Experience = () => {
  return (
    <section className="py-12 lg:py-20 px-4">
      <div className="flex flex-col items-center gap-6 lg:gap-10">

        {/* Section Heading */}
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center">
          Work <span className="text-[#2463EB]">Experience</span>
        </h1>

        {/* Experience Card */}
        <div className="w-full max-w-5xl rounded-2xl bg-white/70 backdrop-blur-md shadow-lg border border-white/40 p-4 sm:p-6 lg:p-7 transition hover:shadow-2xl">

          {/* Role & Duration */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
            <h2 className="text-base sm:text-lg lg:text-xl font-semibold text-gray-800">
              Freelance LaTeX Developer
              <span className="ml-1 text-xs sm:text-sm text-gray-500">
                (Part-Time)
              </span>
            </h2>

            <span className="text-xs sm:text-sm text-gray-500">
              Jan 2024 – Present
            </span>
          </div>

          {/* Company */}
          <h3 className="text-xs sm:text-sm font-medium text-[#2463EB] mb-4">
            VEd – VYAS EDIFICATION
          </h3>

          {/* Responsibilities Heading */}
          <h4 className="text-sm sm:text-base font-semibold text-gray-700 mb-3">
            Key Responsibilities & Achievements
          </h4>

          {/* Responsibilities List */}
          <ul className="list-disc pl-5 text-xs sm:text-sm lg:text-[15px] text-gray-600 space-y-2 leading-relaxed">
            <li>
              Designed and formatted academic, research, and corporate documents
              using LaTeX and Overleaf, ensuring high-quality typesetting.
            </li>
            <li>
              Collaborated with professors, researchers, and professionals to
              create error-free and well-structured documents.
            </li>
            <li>
              Optimized document layouts, improving readability and overall
              professionalism.
            </li>
            <li>
              Developed custom templates for theses, reports, and technical
              papers.
            </li>
            <li>
              Assisted in debugging and resolving LaTeX-related errors to ensure
              smooth document compilation.
            </li>
          </ul>

        </div>
      </div>
    </section>
  );
};

export default Experience;
