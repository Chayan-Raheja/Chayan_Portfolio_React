import { useEffect, useState } from "react";

const Nav = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

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
      <div className="flex justify-between items-center px-6 py-4 lg:px-12 lg:py-3">
        <h1 className="font-bold text-lg text-[#2463EB]">CR</h1>

        <div className="hidden lg:flex gap-7">
          <span className="cursor-pointer hover:text-[#2463EB]">Home</span>
          <span className="cursor-pointer hover:text-[#2463EB]">Skills</span>
          <span className="cursor-pointer hover:text-[#2463EB]">Experience</span>
          <span className="cursor-pointer hover:text-[#2463EB]">Projects</span>
          <span className="cursor-pointer hover:text-[#2463EB]">Education</span>
          <span className="cursor-pointer hover:text-[#2463EB]">Contact</span>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="lg:hidden text-2xl text-[#2463EB]"
          onClick={() => setIsOpen(!isOpen)}
        >
          <i className={isOpen ? "ri-close-line" : "ri-menu-line"}></i>
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-white shadow-md flex flex-col items-center gap-4 py-6 font-medium text-gray-700">
          <span className="cursor-pointer hover:text-[#2463EB]" onClick={() => setIsOpen(false)}>Home</span>
          <span className="cursor-pointer hover:text-[#2463EB]" onClick={() => setIsOpen(false)}>Skills</span>
          <span className="cursor-pointer hover:text-[#2463EB]" onClick={() => setIsOpen(false)}>Experience</span>
          <span className="cursor-pointer hover:text-[#2463EB]" onClick={() => setIsOpen(false)}>Projects</span>
          <span className="cursor-pointer hover:text-[#2463EB]" onClick={() => setIsOpen(false)}>Education</span>
          <span className="cursor-pointer hover:text-[#2463EB]" onClick={() => setIsOpen(false)}>Contact</span>
        </div>
      )}
    </nav>
  );
};

export default Nav;
