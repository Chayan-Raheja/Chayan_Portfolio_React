import { useEffect, useState } from "react";

const Nav = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`sticky top-0 z-50 transition-all duration-300
      ${scrolled ? "bg-white shadow-md" : "bg-transparent"}
      `}
    >
      <div className="flex justify-between items-center lg:px-12 lg:py-3">
        <h1 className="font-bold text-lg text-[#2463EB]">CR</h1>

        <div className="flex gap-7">
          <span className="cursor-pointer hover:text-[#2463EB]">Home</span>
          <span className="cursor-pointer hover:text-[#2463EB]">Skills</span>
          <span className="cursor-pointer hover:text-[#2463EB]">Experience</span>
          <span className="cursor-pointer hover:text-[#2463EB]">Projects</span>
          <span className="cursor-pointer hover:text-[#2463EB]">Education</span>
          <span className="cursor-pointer hover:text-[#2463EB]">Contact</span>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
