'use client'

import React, { Suspense } from 'react'
import { motion } from 'framer-motion'
import WaterDropGrid from '@/animations/WaterDropGrid'

const Intro = () => {
  return (
    <motion.div 
      id='home' 
      className='max-w-contentContainer h-[calc(100vh-80px)] mx-auto py-10 mdl:py-24 flex flex-col gap-4 lgl:gap-8 
      mdl:px-26 xl:px-20 relative'
      initial={{ x: -200, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}  
    >
      {/* WaterDrop Grid - Positioned in Background */}
      <div className='absolute top-[6%] left-[35%] cursor-crosshair opacity-50'>
        <Suspense>
          <WaterDropGrid />
        </Suspense>
      </div>

      {/* Text Content - Positioned Above Grid */}
      <div className="relative z-10 flex flex-col gap-3 pointer-events-none">
        <h3 className='text-2xl font-inter text-textGreen tracking-wide w-52'>Hi, my name is</h3>
        <h1 className='text-3xl lgl:text-6xl font-inter font-semibold flex flex-col gap-3 w-[50rem]'>
          Hridey Verma. 
          <span className='text-textDark'>I build things for the web.</span>
        </h1>
        <p className='text-base md:max-w-[600px] font-medium flex flex-col'>
          With expertise in web development, I deliver high-quality <br />
          solutions that meet your specific needs and elevate your online presence.
          <span className='text-textGreen inline-flex relative cursor-pointer h-7 pointer-events-auto overflow-x-hidden group w-28'>
            Learn more
          </span>
        </p>
        <a href="https://github.com/Hridey79" target='_blank' className='w-52 pointer-events-auto'>
          <button className='text-sm text-textGreen border border-textGreen rounded-lg
          hover:bg-hoverColor w-52 h-14 tracking-wide'>
            check out my projects!
          </button>
        </a>
      </div>
    </motion.div>
  )
}

export default Intro
