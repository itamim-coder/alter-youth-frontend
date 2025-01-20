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
            color={scrolled ? "#1dc468" : "#fff"}
            className="w-[10rem] h-[2rem] mx-3"
          />
        </div>

        <div className="">
          <div className="hidden md:flex space-x-6 items-center">
            {[
              "About",
              "How it works",
              "Scholarships",
              "Graduates",
              "Collaborate",
              "Login",
            ].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className={`relative group text-sm font-bold ${
                  scrolled ? "text-green-400" : "text-white"
                }`}
              >
                {item}
                <span
                  className="absolute left-0 w-0 h-[3px] bg-green-400 bottom-[-3px] 
                           transition-all duration-300 ease-in-out group-hover:w-full"
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
