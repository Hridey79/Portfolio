"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const handleScrollTo = (id: string) => {
    console.log("scroll to", id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setIsOpen(false); // Close menu on item click
  };

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="w-full shadow-navShadow h-16 md:h-20 sticky top-0 z-50 bg-bodyColor px-2 md:px-6 hover:shadow-navbarShadow">
      <div className="max-w-[98vw] md:max-w-6xl h-full mx-auto py-1 font-inter flex items-center justify-between">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="font-signature text-textGreen capitalize text-lg sm:text-xl md:text-2xl leading-none group">
            <span
              onClick={() => handleScrollTo("home")}
              className="block relative cursor-pointer"
            >
              Hridey
              <div className="absolute bottom-0 left-0 h-[1px] w-0 group-hover:w-full bg-accent duration-300"></div>
            </span>
          </h1>
        </motion.div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-4 lg:gap-7 items-center">
          <ul className="flex text-xs sm:text-sm md:text-base gap-3 lg:gap-7">
            {["home", "about", "experience", "projects", "contact"].map((section, index) => (
              <li
                key={section}
                onClick={() => handleScrollTo(section)}
                className="flex items-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link"
              >
                <motion.span
                  initial={{ y: -10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.1 * (index + 1) }}
                >
                  {index > 0 && (
                    <span className="text-textGreen">0{index}.</span>
                  )}{" "}
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </motion.span>
              </li>
            ))}
          </ul>
          <a href="assets/resume.pdf" target="_blank" rel="noopener noreferrer">
            <motion.button
              className="text-textGreen border border-textGreen px-2 sm:px-3 py-1.5 sm:py-2 rounded-lg shadow-md hover:bg-hoverColor hover:shadow-textGreen/50 transform hover:scale-105 text-xs sm:text-sm md:text-base"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              Resume
            </motion.button>
          </a>
        </div>

        {/* Mobile Menu Icon */}
        <div
          className="w-7 h-6 flex flex-col items-center justify-between md:hidden cursor-pointer text-3xl text-textGreen group"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span
            className={`w-full h-[2px] bg-textGreen transition-all duration-300 ${
              isOpen ? "rotate-45 translate-y-2" : ""
            }`}
          ></span>
          <span
            className={`w-full h-[2px] bg-textGreen transition-all duration-300 ${
              isOpen ? "opacity-0" : ""
            }`}
          ></span>
          <span
            className={`w-full h-[2px] bg-textGreen transition-all duration-300 ${
              isOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          ></span>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              ref={menuRef}
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.4 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-lg flex flex-col items-center justify-center z-50 md:hidden"
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="relative w-11/12 max-w-xs bg-bodyColor shadow-xl rounded-lg p-6 text-center"
              >
                <ul className="flex flex-col gap-6 text-lg text-textDark">
                  {["home", "about", "experience", "projects", "contact"].map(
                    (section, index) => (
                      <motion.li
                        key={section}
                        onClick={() => handleScrollTo(section)}
                        className="cursor-pointer hover:text-textGreen duration-300"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.2 * (index + 1) }}
                      >
                        {index > 0 ? (
                          <span className="text-textGreen">0{index}.</span>
                        ) : (
                          <span className="ml-6"></span>
                        )}{" "}
                        {section.charAt(0).toUpperCase() + section.slice(1)}
                      </motion.li>
                    )
                  )}
                </ul>
                <a
                  href="assets/George resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <motion.button
                    className="mt-6 text-textGreen border border-textGreen px-6 py-3 rounded-lg hover:bg-hoverColor w-full"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6 }}
                  >
                    Resume
                  </motion.button>
                </a>
                {/* Close Button */}
                <button
                  onClick={() => setIsOpen(false)}
                  className="absolute top-4 right-4 text-2xl text-textGreen"
                  aria-label="Close menu"
                >
                  ✕
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Navbar;
