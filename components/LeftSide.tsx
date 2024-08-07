'use client'

import React from 'react'
import { FiGithub, FiLinkedin, FiInstagram } from "react-icons/fi"
import {SiCodeforces,SiLeetcode} from "react-icons/si"
import { motion } from 'framer-motion'

const LeftSide = () => { 
return (
    <motion.div className='w-full h-full flex flex-col items-center justify-end gap-4 text-textLight'
        initial={{x: -100}}
        animate={{x: 0}}
        transition={{duration: 0.7}}
    > 
    <div className='flex flex-col gap-4'>
        <a href="https://github.com/Hridey79" target='_blank'>
            <span className='w-10 h-10 text-xl bg-bodyColor rounded-full inline-flex items-center
            justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 
            transition-all duration-300'><FiGithub/></span>
        </a>
        <a href="https://www.linkedin.com/in/hridey-verma-67633a225/" target='_blank'>
            <span className='w-10 h-10 text-xl bg-bodyColor rounded-full inline-flex items-center
            justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 
            transition-all duration-300'><FiLinkedin/></span>
        </a>
        <a href="https://leetcode.com/Hridey79/" target='_blank'>
            <span className='w-10 h-10 text-xl bg-bodyColor rounded-full inline-flex items-center
            justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 
            transition-all duration-300'><SiLeetcode/></span>
        </a>
        <a href="https://github.com/Hridey79" target='_blank'>
            <span className='w-10 h-10 text-xl bg-bodyColor rounded-full inline-flex items-center
            justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 
            transition-all duration-300'><SiCodeforces/></span>
        </a>
    </div>
    <div className='w-[2px] h-32 bg-textLight'></div>
    </motion.div>
)
}

export default LeftSide
