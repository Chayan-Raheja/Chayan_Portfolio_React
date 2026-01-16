import React from "react";

const Education = () => {
  return (
    <div className="flex flex-col items-center px-4 lg:mb-24">
      <h1 className="text-2xl sm:text-3xl lg:text-4xl mb-8 lg:mb-12 font-bold text-center text-[#2463EB]">
        Education
      </h1>

      <div className="flex flex-col gap-6 w-full items-center">
        {/* ===== CARD 1 ===== */}
        <div className="flex flex-col sm:flex-row gap-4 bg-white/70 backdrop-blur-md shadow-lg border border-white/40 hover:shadow-2xl transition w-full max-w-5xl rounded-2xl p-4 lg:p-6">
          {/* Icon */}
          <div className="lg:flex hidden items-start justify-center sm:justify-start">
            <div className="bg-[#2463EB]/10 p-3 rounded-full text-[#2463EB] text-xl">
              <i className="ri-graduation-cap-line"></i>
            </div>
          </div>

          {/* Content */}
          <div className="flex flex-col gap-2 w-full">
            <div className="flex flex-col sm:flex-row sm:justify-between gap-2">
              <div>
                <h2 className="text-base sm:text-lg lg:text-xl font-semibold text-gray-800">
                  BCA (Bachelor of Computer Applications)
                </h2>
                <h3 className="text-[#2463EB] font-semibold">
                  University of Kota
                </h3>
              </div>

              <div className="flex items-center gap-2 text-gray-500 text-sm">
                <i className="ri-calendar-line"></i>
                <span>2022 – 2025</span>
              </div>
            </div>

            <p className="text-black/70 text-sm sm:text-base">
              Successfully completed a Bachelor of Computer Applications with a
              strong focus on programming fundamentals, software development,
              and practical problem-solving skills.
            </p>

            <div className="flex flex-wrap gap-2 mt-2">
              {["C", "HTML", "CSS", "Java", "MySQL"].map((skill) => (
                <span
                  key={skill}
                  className="bg-[#2463EB]/10 px-4 py-1 rounded-2xl text-[#2463EB] text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* ===== CARD 2 ===== */}
        <div className="flex flex-col sm:flex-row gap-4 bg-white/70 backdrop-blur-md shadow-lg border border-white/40 hover:shadow-2xl transition w-full max-w-5xl rounded-2xl p-4 lg:p-6">
          {/* Icon */}
          <div className="lg:flex hidden items-start justify-center sm:justify-start">
            <div className="bg-[#2463EB]/10 p-3 rounded-full text-[#2463EB] text-xl">
              <i className="ri-graduation-cap-line"></i>
            </div>
          </div>

          {/* Content */}
          <div className="flex flex-col gap-2 w-full">
            <div className="flex flex-col sm:flex-row sm:justify-between gap-2">
              <div>
                <h2 className="text-base sm:text-lg lg:text-xl font-semibold text-gray-800">
                  Secondary School
                </h2>
                <h3 className="text-[#2463EB] font-semibold">
                  Central Public Sr. Sec. School
                </h3>
              </div>

              <div className="flex items-center gap-2 text-gray-500 text-sm">
                <i className="ri-calendar-line"></i>
                <span>2021 – 2022</span>
              </div>
            </div>

            <p className="text-black/70 text-sm sm:text-base">
              Completed secondary education with an academic focus on Computer
              Studies, English Literature, and Geography, building a strong
              foundation in digital literacy and communication.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
