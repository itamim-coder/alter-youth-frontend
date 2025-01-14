import React, { useState, useEffect } from "react";
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
} from "@material-tailwind/react";
import SvgAlteryouthLogo from "../../../public/assets/icons/LogoAy2";
import { DrawerWithNavigation } from "../ui/Drawer";
export function StickyNavbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between p-4">
        <div className="text-2xl font-bold flex">
          <DrawerWithNavigation />

          <SvgAlteryouthLogo
            color={scrolled ? "#1dc468" : "#fff"} // Changes the logo color based on the scroll state
            className="w-[10rem] h-[2rem] mx-3" // Adjust logo size if necessary
          />
        </div>

        <div className="">
          <div className="hidden md:flex space-x-4 items-center">
            <a
              href="#about"
              className={`hover:text-gray-500 font-bold ${
                scrolled ? "text-green-400" : "text-white"
              }`}
            >
              About
            </a>
            <a
              href="#services"
              className={`hover:text-gray-500 font-bold ${
                scrolled ? "text-green-400" : "text-white"
              }`}
            >
              How it works
            </a>
            <a
              href="#contact"
              className={`hover:text-gray-500 font-bold ${
                scrolled ? "text-green-400" : "text-white"
              }`}
            >
              Scholarships
            </a>
            <a
              href="#contact"
              className={`hover:text-gray-500 font-bold ${
                scrolled ? "text-green-400" : "text-white"
              }`}
            >
              Collaborate
            </a>
            <a
              href="#contact"
              className={`hover:text-gray-500 font-bold ${
                scrolled ? "text-green-400" : "text-white"
              }`}
            >
              Login
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
