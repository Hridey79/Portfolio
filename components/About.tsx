import React from 'react'
import SectionTitle from './SectionTitle'
import { AiFillThunderbolt } from 'react-icons/ai'
import Image from 'next/image'
import { profile } from '@/public/assets'

const About = () => {
return (
    <div id='about' className='max-w-containerSmall mx-auto py-10 lgl:py-32 flex flex-col gap-8
     mdl:px-10 xl:px-2'>
        <SectionTitle title="About me" titleNo="01"/>
        <div className='flex flex-col lgl:flex-row gap-16'>
            <div className='w-full lgl:w-2/3 text-base text-textDark font-medium flex flex-col gap-4'>
                <p> As a junior web developer, I excel in designing and maintaining apps and responsive 
                    websites that offer smooth user experience. My expertise lies in crafting, engaging interfaces through
                    writing clean and optimized code. I am also a team player who thrives in collaborating with cross-functional 
                    teams to produce outstanding web applications.
                </p>
                <p>
                    Here are a few technologies i&apos;ve been working with:
                </p>
                <ul className='max-w-[450px] text-sm font-inter grid grid-cols-2 gap-2'>
                    <li className='flex items-center gap-2'>
                        <span className='text-textGreen'><AiFillThunderbolt/></span>
                        Next js
                    </li>
                    <li className='flex items-center gap-2'>
                        <span className='text-textGreen'><AiFillThunderbolt/></span>
                        React
                    </li>
                    <li className='flex items-center gap-2'>
                        <span className='text-textGreen'><AiFillThunderbolt/></span>
                        Javascript
                    </li>
                    <li className='flex items-center gap-2'>
                        <span className='text-textGreen'><AiFillThunderbolt/></span>
                        Python
                    </li>
                    <li className='flex items-center gap-2'>
                        <span className='text-textGreen'><AiFillThunderbolt/></span>
                        Firebase
                    </li>
                    <li className='flex items-center gap-2'>
                        <span className='text-textGreen'><AiFillThunderbolt/></span>
                        MongoDB
                    </li>
                    <li className='flex items-center gap-2'>
                        <span className='text-textGreen'><AiFillThunderbolt/></span>
                        MySQL
                    </li>
                    <li className='flex items-center gap-2'>
                        <span className='text-textGreen'><AiFillThunderbolt/></span>
                        HTML & CSS
                    </li>
                </ul>
            </div>
            <div className='w-full lgl:w-1/3 h-80 relative group cursor-pointer'>
                <div className='absolute w-full h-80 -left-6 -top-6 rounded-lg'>
                    <div className="w-full h-full relative z-20 flex pl-6 lgl:pl-0">
                        <Image 
                        className='rounded-lg h-full object-cover'
                        src={profile} alt="Hridey Verma"/>

                        <div className="hidden lgl:inline-block absolute w-full h-80 bg-textGreen/20
                         rounded-md top-0 left-0 group-hover:bg-transparent duration-300"></div>
                    <div className="absolute inset-0 border-[3px] z-[-1] rounded border-textGreen
                    translate-x-6 translate-y-6 group-hover:translate-x-4 group-hover:translate-y-4
                    duration-150 hidden sm:block"></div>
                    </div>
                    

                </div>
            </div>
        </div>
    </div>
  )
}

export default About
