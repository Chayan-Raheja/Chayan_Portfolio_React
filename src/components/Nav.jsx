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
      {/* 🔥 RESPONSIVE CONTAINER */}
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
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <h1 className="font-bold text-lg text-[#2463EB]">CR</h1>

          {/* Desktop Menu */}
          <div className="hidden lg:flex gap-5 2xl:gap-7 font-medium">
            {[
              "Home",
              "Skills",
              "Experience",
              "Projects",
              "Education",
              "Contact",
            ].map((item) => (
              <span
                key={item}
                className="cursor-pointer hover:text-[#2463EB] transition"
              >
                {item}
              </span>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-2xl text-[#2463EB]"
            onClick={() => setIsOpen(!isOpen)}
          >
            <i className={isOpen ? "ri-close-line" : "ri-menu-line"}></i>
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-white shadow-md">
          <div className="flex flex-col items-center gap-4 py-6 font-medium text-gray-700">
            {[
              "Home",
              "Skills",
              "Experience",
              "Projects",
              "Education",
              "Contact",
            ].map((item) => (
              <span
                key={item}
                className="cursor-pointer hover:text-[#2463EB] transition"
                onClick={() => setIsOpen(false)}
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Nav;
