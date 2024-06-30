import React from 'react'
import SectionTitle from './SectionTitle'

const Contact = () => {
  return (
    // <div className='max-w-contentContainer mx-auto flex flex-col items-center gap-4 mb-5 h-full justify-center' id='contact'>
    //   <h2 className='text-textGreen font-inter font-semibold tracking-wide'>04. What&apos;s Next</h2>
    //   <h2 className='text-4xl font-inter font-semibold'>Get In Touch</h2>
    //   <p className='text-textDark text-sm max-w-[600px] text-center'>My inbox is always open, whether you have a question or just want to say hi. I will get back to you!!</p>
    //   <a href="mailto:muigaigeorge452@gmail.com" className=''>
    //     <button className='w-40 h-14 border border-textGreen mt-6 font-inter text-sm text-textGreen hover:bg-hoverColor duration-300 tracking-wider mb-12'>Say Hello!</button>
    //   </a>
    // </div>
    <div className='max-w-contentContainer mx-auto flex flex-col items-center gap-4 mb-5 h-full justify-center' id='contact'>
      <SectionTitle title="Get in Touch" titleNo="04"/>

      <div className='w-full flex flex-col md:flex-row justify-evenly gap-16 pt-20'>
        <div className='bg-red-600'>njrebkhewjfndkjenafkjdrngkebtgibgvjkaevkebsd</div>
        <div className='bg-blue-600'>nrjnjrkbkjrbkerbkhbrkhdbhbhdkbvrbdrhbrkjbrskj</div>
      </div>
    </div>
  )
}

export default Contact
