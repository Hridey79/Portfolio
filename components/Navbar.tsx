'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { logo } from '@/public/assets'

const Navbar = () => {
  return (
    <div className='w-full shadow-navShadow h-20 sticky top-0 z-50 bg-bodyColor px-4 lg:h-[12vh] hover:shadow-navbarShadow'>
      <div className='max-w-container h-full mx-auto py-1 font-inter flex items-center justify-between'>
      <motion.div 
          initial={{opacity: 0}}
          animate={{opacity: 1}}  
          transition={{duration: 0.5}}
        >
          {/* <Image className='w-10 cursor-pointer' src={logo} alt='logo'></Image> */}
          <h1 className="font-signature text-textGreen capitalize text-2xl relative group top-1">
        <a href="#hero" className="block">
          Hridey
          <div className="absolute bottom-1.5 left-0 h-[1px] w-0 group-hover:w-full bg-accent duration-300"></div>
        </a>
      </h1>
        </motion.div>
        <div className='hidden mdl:inline-flex gap-7 items-center'>
          <ul className='flex text-[13px] gap-7'>
            <Link href="#home" className='flex items-center gap-1 font-medium text-textDark hover:text-textGreen 
              cursor-pointer duration-300 nav-link'>
              <motion.li
                initial={{y: -10, opacity: 0}}
                animate={{ y: 0, opacity: 1}}
                transition={{ duration: 0.1}}
              >Home</motion.li>
            </Link>
            <Link href="#about" className='flex items-center gap-1 font-medium text-textDark hover:text-textGreen 
              cursor-pointer duration-300 nav-link'>
              <motion.li
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.2 }}
                >
                <span className='text-textGreen'>01.</span> About
              </motion.li>
            </Link>
            <Link href="#experience" className='flex items-center gap-1 font-medium text-textDark hover:text-textGreen 
              cursor-pointer duration-300 nav-link'>
              <motion.li
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.3 }}
                >
                <span className='text-textGreen'>02.</span> Experience
              </motion.li>
            </Link>
            <Link href="#projects" className='flex items-center gap-1 font-medium text-textDark hover:text-textGreen 
              cursor-pointer duration-300 nav-link'>
              <motion.li
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.4 }}
                >
                <span className='text-textGreen'>03.</span> Projects
              </motion.li>
            </Link>
            <Link href="#contact" className='flex items-center gap-1 font-medium text-textDark hover:text-textGreen 
              cursor-pointer duration-300 nav-link'>
              <motion.li
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                >
                <span className='text-textGreen'>04.</span> Contact
              </motion.li>
            </Link>
          </ul>
          <a href="assets/George resume.pdf" target='_blank'>
            <motion.button className='text-textGreen border border-textGreen px-[10px] py-[5px] rounded-lg hover:bg-hoverColor'
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
            >Resume</motion.button>
          </a>
        </div>
        {/* menu icon */}
        <div className='w-6 h-5 flex flex-col items-center justify-between overflow-hidden mdl:hidden text-4xl text-textGreen cursor-pointer group'>
          <span className='w-full h-[2px] bg-textGreen group-hover:translate-x-2 transition-all ease-in-out duration-300'></span>
          <span className='w-full translate-x-3 h-[2px] bg-textGreen group-hover:translate-x-0 transition-all ease-in-out duration-300'></span>
          <span className='w-full h-[2px] bg-textGreen group-hover:translate-x-2 transition-all ease-in-out duration-300'></span>
        </div>
      </div>
    </div>
  )
}

export default Navbar
