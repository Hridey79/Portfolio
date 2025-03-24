'use client';

import React from 'react';
import { motion } from 'framer-motion';

const Navbar = () => {
  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

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

        <div className='hidden mdl:inline-flex gap-7 items-center'>
          <ul className='flex text-[13px] gap-7'>
            {['home', 'about', 'experience', 'projects', 'contact'].map((section, index) => (
              <li 
                key={section} 
                onClick={() => handleScrollTo(section)}
                className='flex items-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link'
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
              className='text-textGreen border border-textGreen px-[10px] py-[5px] rounded-lg hover:bg-hoverColor'
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              Resume
            </motion.button>
          </a>
        </div>

        {/* Menu Icon */}
        <div className='w-6 h-5 flex flex-col items-center justify-between overflow-hidden mdl:hidden text-4xl text-textGreen cursor-pointer group'>
          <span className='w-full h-[2px] bg-textGreen group-hover:translate-x-2 transition-all ease-in-out duration-300'></span>
          <span className='w-full translate-x-3 h-[2px] bg-textGreen group-hover:translate-x-0 transition-all ease-in-out duration-300'></span>
          <span className='w-full h-[2px] bg-textGreen group-hover:translate-x-2 transition-all ease-in-out duration-300'></span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
