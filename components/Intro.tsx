'use client'

import React from 'react'
import { motion } from 'framer-motion'

const Intro = () => {
  return (
    <motion.div id='home' className='max-w-contentContainer mx-auto py-10 mdl:py-24 flex flex-col gap-4
        lgl:gap-8 mdl:px-26 xl:px-20'
          initial={{x: -200, opacity: 0}}
          animate={{x: 0, opacity: 1}}
          transition={{duration: 0.8}}  
      >
      <canvas id="scene"></canvas>
      <h3 className='text-2xl font-inter text-textGreen tracking-wide'>Hi, my name is</h3>
      <h1 className='text-3xl lgl:text-6xl font-inter font-semibold flex flex-col gap-3'>Hridey Verma. 
        <span className='text-textDark'>I build things for the web.</span>
      </h1>
      <p className='text-base md:max-w-[650px] font-medium flex flex-col'>
        With expertise in web development, I deliver high-quality <br />
        solutions that meet your specific needs and elevate your online presence
        <span className='text-textGreen inline-flex relative cursor-pointer h-7 overflow-x-hidden group'>
          Learn more
          {/* <span className='absolute w-full h-[1px] bg-textGreen left-0 bottom-1 
          -translate-x-[-110%] group-hover:translate-x-0 transition-transform duration-500'></span> */}
        </span>
      </p>
      <a href="https://github.com/Hridey79" target='_blank'>
        <button className='text-sm text-textLight border border-textLight rounded-lg
        hover:border-textDark hover:text-textDark w-52 h-14 tracking-wide'>
          check out my projects!
        </button>
      </a>
    </motion.div>
  )
}

export default Intro
