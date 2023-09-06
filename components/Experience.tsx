'use client'

import {useState} from 'react'
import SectionTitle from './SectionTitle'
import OpenText from './works/OpenText'

const Experience = () => {
  const [workOpenText, setOpenText] = useState(true)
    const [workTest, setWorkTest] = useState(false)
    const [workLorem, setWorkLorem] = useState(false)

    const handleZetech = () => {
       setOpenText(true)
        setWorkTest(false)
        setWorkLorem(false)
    }
    const handleTest = () => {
        setOpenText(false)
        setWorkTest(true)
        setWorkLorem(false)
    }
    const handleLorem = () => {
        setOpenText(false)
        setWorkTest(false)
        setWorkLorem(true)
    }
  return (
    <div id="experience" className='max-w-containerXs mx-auto pb-10 pt-10 px-20'>
      <SectionTitle title="Where i have worked" titleNo="02"/>
      <div className='w-full mt-10 flex flex-col md:flex-row gap-16'>
        <ul className='md:w-32 flex flex-col'>
          <li onClick={handleZetech} className={`${workOpenText ? "border-textGreen": "border-hoverColor"}
           border-l-2  text-sm cursor-pointer text-textDark font-medium py-3 px-6
           hover:bg-[#112240]`}>OpenText</li>

          <li onClick={handleTest} className={`${workTest ? "border-textGreen": "border-hoverColor"} 
           border-l-2  text-sm cursor-pointer text-textDark font-medium py-3 px-6 hover:bg-[#112240]`}>
            OpenText
          </li>

          <li onClick={handleLorem} className={`${workLorem ? "border-textGreen": "border-hoverColor"} 
          border-l-2  text-sm cursor-pointer text-textDark font-medium py-3 px-6 hover:bg-[#112240]`}>
            OpenText
          </li>
        </ul>
        { workOpenText && <OpenText/> }
      </div>
    </div>
  )
}

export default Experience
