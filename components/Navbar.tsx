'use client';

import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
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

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className='w-full shadow-navShadow h-20 sticky top-0 z-50 bg-bodyColor pr-4 lg:h-[12vh] hover:shadow-navbarShadow'>
      <div className='max-w-container h-full mx-auto py-1 font-inter flex items-center justify-between'>
        <motion.div 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }}  
          transition={{ duration: 0.5 }}
        >
          <h1 className="font-signature text-textGreen capitalize text-2xl leading-none group md:-ml-16">
            <span onClick={() => handleScrollTo('home')} className="block relative cursor-pointer">
              Hridey
              <div className="absolute bottom-0 left-0 h-[1px] w-0 group-hover:w-full bg-accent duration-300"></div>
            </span>
          </h1>
        </motion.div>

        {/* Desktop Menu */}
        <div className='hidden mdl:inline-flex gap-7 items-center'>
          <ul className='flex text-[13px] gap-7'>
            {['home', 'about', 'experience', 'projects', 'contact'].map((section, index) => (
              <li 
                key={section} 
                onClick={() => handleScrollTo(section)}
                className='flex items-center gap-1 text-lg font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link'
              >
                <motion.span
                  initial={{ y: -10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.1 * (index + 1) }}
                >
                  {index > 0 && <span className='text-textGreen'>0{index}.</span>} {section.charAt(0).toUpperCase() + section.slice(1)}
                </motion.span>
              </li>
            ))}
          </ul>
          <a href="assets/George resume.pdf" target='_blank'>
            <motion.button 
              className='text-textGreen border border-textGreen px-3 py-2 rounded-lg hover:bg-hoverColor'
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
          className='w-6 h-5 flex flex-col items-center justify-between mdl:hidden cursor-pointer text-4xl text-textGreen group'
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className={`w-full h-[2px] bg-textGreen transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
          <span className={`w-full h-[2px] bg-textGreen transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`}></span>
          <span className={`w-full h-[2px] bg-textGreen transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            ref={menuRef}
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.4 }}
            className='fixed top-0 right-0 w-64 h-screen bg-bodyColor shadow-xl flex flex-col items-center justify-center gap-6 mdl:hidden'
          >
            <ul className='flex flex-col gap-6 text-xl text-textDark'>
              {['home', 'about', 'experience', 'projects', 'contact'].map((section, index) => (
                <li 
                  key={section} 
                  onClick={() => handleScrollTo(section)}
                  className='cursor-pointer hover:text-textGreen duration-300'
                >
                  {index > 0 && <span className='text-textGreen'>0{index}.</span>} {section.charAt(0).toUpperCase() + section.slice(1)}
                </li>
              ))}
            </ul>
            <a href="assets/George resume.pdf" target='_blank'>
              <button className='text-textGreen border border-textGreen px-4 py-2 rounded-lg hover:bg-hoverColor'>
                Resume
              </button>
            </a>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
