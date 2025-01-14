import React, { useState, useEffect } from "react";
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
} from "@material-tailwind/react";

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
        <div className="text-2xl font-bold">
          <a href="#" className={scrolled ? "text-black" : "text-black"}>
            Brand
          </a>
        </div>
        <div className="hidden md:flex space-x-4">
          <a
            href="#about"
            className={`hover:text-gray-500 ${
              scrolled ? "text-black" : "text-black"
            }`}
          >
            About
          </a>
          <a
            href="#services"
            className={`hover:text-gray-500 ${
              scrolled ? "text-black" : "text-black"
            }`}
          >
            Services
          </a>
          <a
            href="#contact"
            className={`hover:text-gray-500 ${
              scrolled ? "text-black" : "text-black"
            }`}
          >
            Contact
          </a>
        </div>
        <div>
          <button
            className={`px-4 py-2 rounded-lg ${
              scrolled
                ? "bg-blue-500 text-black hover:bg-blue-600"
                : "bg-transparent text-black border border-black hover:bg-black hover:text-black"
            }`}
          >
            Get Started
          </button>
        </div>
      </div>
    </nav>
  );
}
