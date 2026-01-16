import React from "react";

const Certtraine = () => {
  return (
    <section className="py-16 lg:py-24">

      {/* 🔥 SAME CONTAINER AS EDUCATION */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 2xl:px-0">

        {/* ✅ Heading aligned with content */}
        <h1 className="text-2xl sm:text-3xl lg:text-4xl mb-10 lg:mb-14 font-bold text-center">
          Training & <span className="text-[#2463EB]">Certification</span>
        </h1>

        {/* ✅ Card aligned same as Education */}
        <div className="mx-auto max-w-5xl bg-white/70 backdrop-blur-md shadow-lg border border-white/40 hover:shadow-2xl transition rounded-2xl p-6 lg:p-8">

          {/* Header */}
          <div className="flex flex-col md:flex-row justify-between gap-4">

            <div className="flex gap-4 items-start">
              <div className="bg-[#2463EB]/10 p-3 rounded-full text-[#2463EB] text-xl shrink-0">
                <i className="ri-award-line"></i>
              </div>

              <div>
                <h2 className="text-lg sm:text-xl font-semibold text-gray-800">
                  MERN Stack Trainee
                </h2>
                <h3 className="text-base sm:text-lg font-semibold text-[#2463EB]">
                  Sheriyans Coding School
                </h3>
              </div>
            </div>

            {/* ✅ Mobile left indent only */}
            <div className="flex items-center gap-2 text-gray-500 ml-12 md:ml-0">
              <i className="ri-calendar-line"></i>
              <span className="text-xs sm:text-sm">
                Sep 2025 – Present
              </span>
            </div>
          </div>

          {/* Description */}
          <div className="flex gap-4 mt-6">
            <i className="ri-book-open-line text-[#2463EB] text-xl sm:text-2xl mt-1"></i>
            <p className="text-black/65 text-sm sm:text-base lg:text-lg leading-relaxed">
              Currently pursuing intensive training in full-stack web
              development with focus on modern JavaScript technologies.
              Gained hands-on experience and learned advanced Three.js concepts
              for immersive 3D web experiences.
            </p>
          </div>

          {/* Tech Stack */}
          <div className="flex gap-4 items-start mt-5">
            <i className="ri-code-s-slash-line text-[#2463EB] text-xl sm:text-2xl mt-1"></i>

            <div className="flex flex-wrap gap-2">
              {["HTML", "CSS", "Tailwind CSS", "JavaScript", "React JS"].map(
                (tech) => (
                  <span
                    key={tech}
                    className="bg-[#2463EB]/10 px-4 py-1 rounded-2xl text-[#2463EB] text-xs sm:text-sm font-semibold"
                  >
                    {tech}
                  </span>
                )
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Certtraine;
