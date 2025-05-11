import React from 'react'
import SectionTitle from './SectionTitle'
import { AiFillThunderbolt } from 'react-icons/ai'
import Image from 'next/image'
import { profile } from '@/public/assets'
import TypewriterText from '@/animations/TypewriterText'
import TerminalController from './Terminal'

const About = () => {
  return (
    <div id='about' className='h-[calc(100vh-80px)] w-[calc(100vw-160px)] mx-auto py-10 mdl:py-24 flex flex-col gap-8 mdl:px-15 xl:px-20'>
      <SectionTitle title="About me" titleNo="01"/>
      <div className='flex flex-col lgl:flex-row gap-16 h-full ml-10'>
        {/* Left Section - Text Content */}
        <div className='w-full lgl:w-3/5 text-textDark font-medium flex flex-col gap-4'>
          <TypewriterText>
            I am a Software Engineer with 6 months of experience, currently working as a System Engineer Intern at RuDe Labs. I hold a B.E. in Computer Science and Engineering from Chitkara University, Rajpura, where I graduated with a 9.72 CGPA.My expertise lies in designing, developing, and maintaining applications and responsive websites that offer seamless user experiences. I focus on writing clean, optimized code while ensuring intuitive and engaging interfaces. I thrive in collaborative environments, working closely with cross-functional teams to build impactful web applications.
        </TypewriterText>
        {/* <TypewriterText delay={7}>
        My expertise lies in designing, developing, and maintaining applications and responsive websites that offer seamless user experiences. I focus on writing clean, optimized code while ensuring intuitive and engaging interfaces. I thrive in collaborative environments, working closely with cross-functional teams to build impactful web applications.
          </TypewriterText> */}
          <ul className='max-w-[450px] text-md font-inter grid grid-cols-2 gap-2'>
            {["Next.js", "React", "JavaScript", "Python", "Firebase", "MongoDB", "MySQL", "HTML & CSS"].map((tech) => (
              <li key={tech} className='flex items-center gap-2'>
                <span className='text-textGreen'><AiFillThunderbolt/></span>
                {tech}
              </li>
            ))}
          </ul>
        </div>

        {/* Right Section - Terminal Controller */}
        <div className='w-full lgl:w-2/5'>
          <div className="border border-gray-700 bg-gray-900 rounded-lg shadow-lg p-2 h-80 overflow-y-auto">
            <TerminalController />
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
