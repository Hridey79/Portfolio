import React from 'react'
import {IoIosConstruct} from 'react-icons/io'
import {MdOutlineDesignServices} from 'react-icons/md'

const Footer = () => {
  return (
    <div className='hidden mdl:inline-flex py-6 items-center justify-around gap-4 w-full'>
    <span className='text-md bg-bodyColor rounded-full inline-flex items-center
        justify-center gap-2 hover:text-textGreen cursor-pointer hover:-translate-y-2 
        transition-all duration-300'><IoIosConstruct/>Created by Hridey Verma</span>
    <br></br>
    <span className='text-md bg-bodyColor rounded-full inline-flex items-center
        justify-center gap-2 hover:text-textGreen cursor-pointer hover:-translate-y-2 
        transition-all duration-300'><MdOutlineDesignServices/>Designed by Brittany Chiang</span>
    </div>
  )
}

export default Footer
