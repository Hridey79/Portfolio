'use client'

import React, { useEffect, useRef } from 'react'
import { motion, useAnimation, useInView } from 'framer-motion'

interface Props{
    children:React.ReactNode,
}

const TextReveal = ({children}:Props) => {
  const textRef=useRef(null);
  const isInView=useInView(textRef,{once:true});
  const textControls=useAnimation();
  const slideControls=useAnimation();

  useEffect(()=>{
    if(isInView){
        slideControls.start("visible");
        textControls.start("visible")
    }
  },[isInView])


    return (
    <div ref={textRef} style={{position:"relative",width:"fit-content",overflow:"hidden"}}>
        <motion.div
        variants={{
            hidden:{opacity:0,y:75},
            visible:{opacity:1,y:0}
        }}
        initial = "hidden"
        animate = {textControls}
        transition = {{duration:0.5,delay:0.25}}
        className='p-5'
        >
            {children}
        </motion.div>

        {/* Coloured Slide above text*/}
        <motion.div
        variants={{
            hidden:{left:0},
            visible:{left:"100%"}
        }}
        initial="hidden"
        animate={slideControls}
        transition={{duration:0.5,ease:"easeIn"}}
        style={{
            position:"absolute",
            top:4,
            bottom:4,
            left:0,
            right:0,
            zIndex:20,
            backgroundColor:"#64ffda"
        }}
        >

        </motion.div>
    </div>
  )
}

export default TextReveal