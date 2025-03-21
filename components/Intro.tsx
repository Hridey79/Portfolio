'use client'

import React, { Suspense } from 'react'
import { motion } from 'framer-motion'
import WaterDropGrid from '@/animations/WaterDropGrid'

const Intro = () => {
  return (
    <motion.div 
      id='home' 
      className='h-[calc(100vh-80px)] mx-auto py-10 mdl:py-24 flex flex-col gap-6 lgl:gap-10 
       relative md:px-20 w-[calc(100vw-160px)]'
      initial={{ x: -200, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}  
    >
      {/* WaterDrop Grid - Positioned in Background */}
      <div className='absolute top-[10%] left-[35%] cursor-crosshair opacity-50 hidden md:block'>
        <Suspense>
          <WaterDropGrid />
        </Suspense>
      </div>

      {/* Text Content - Positioned Above Grid */}
      <div className="relative z-10 flex flex-col gap-10 px-5 md:p-0 md:gap-5 pointer-events-none">
        <h3 className='text-xl sm:text-2xl md:text-3xl font-inter text-textGreen tracking-wide w-full md:w-72'>
          Hi, my name is
        </h3>
        <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-inter font-semibold flex flex-col gap-4 w-full md:w-[60rem]'>
          Hridey Verma. 
          <span className='text-textDark'>I build things for the web.</span>
        </h1>
        <p className='text-base sm:text-lg md:max-w-[700px] font-medium flex flex-col leading-relaxed mx-auto md:mx-0'>
          With expertise in web development, I deliver high-quality solutions that meet your 
          specific needs and elevate your online presence.
          <span className='text-textGreen inline-flex relative cursor-pointer h-9 text-lg sm:text-xl font-semibold pointer-events-auto overflow-x-hidden group w-32 mx-auto md:mx-0 my-5 md:my-0'>
            Learn more
          </span>
        </p>
        <a href="https://github.com/Hridey79" target='_blank' className='w-52 sm:w-60 pointer-events-auto mx-auto md:mx-0'>
          <button className='text-sm sm:text-lg font-semibold text-textGreen border border-textGreen rounded-xl
          hover:bg-hoverColor w-52 sm:w-60 h-14 sm:h-16 tracking-wide -mt-10 md:-mt-0'>
            Check out my projects!
          </button>
        </a>
      </div>
    </motion.div>
  )
}

export default Intro
