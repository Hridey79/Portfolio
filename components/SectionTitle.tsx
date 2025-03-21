'use client'
import dynamic from "next/dynamic";

// Dynamically import TextReveal without SSR
const TextReveal = dynamic(() => import("@/animations/TextReveal"), { ssr: false });

interface props {
    title: string;
    titleNo: string; 
}

const SectionTitle = ({title, titleNo}: props) => {
  return (
    <TextReveal>
      <h2 className='font-inter text-2xl font-semibold flex items-center'>
        <span className='text-base md:text-lg text-textGreen mr-2'>{titleNo}.</span>{" "}
        {title}
        <span className='hidden md:inline-flex md:w-60 lg:w-72 h-[.5px] bg-gray-700 ml-6'></span>
      </h2>
    </TextReveal>
  )
}

export default SectionTitle