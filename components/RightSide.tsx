'use client'

import React from 'react'
import { motion } from 'framer-motion'

const RightSide = () => {
return (
    <motion.div className='w-full h-full flex flex-col items-center justify-end gap-4 z-10'
        initial={{x: 100}}
        animate={{x: 0}}
        transition={{duration: 0.9}}
    >
        <div className='w-full h-full flex flex-col items-center justify-end gap-8 z-10'>
            <a href="mailto:hrideykv18@gmail.com">
                <p className='text-sm rotate-90 w-72 gap-4 tracking-wide hover:text-textGreen  hover:-translate-y-2 
                    transition-all duration-300'>hrideykv18@gmail.com</p>
            </a>
            <div className='w-[2px] h-32 bg-textDark'></div>
        </div>
    </motion.div> 
)
}

export default RightSide
