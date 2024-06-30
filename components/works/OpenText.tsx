import { TiArrowForward } from 'react-icons/ti'
import {delay, motion} from 'framer-motion'


const OpenText = () => {

  return (
    <motion.div
    initial={{opacity:0}}
    animate={{opacity:1}}
    transition={{delay:0.1}}
    className='w-full'
    >
      <h3 className="flex gap-1 font-medium text-xl font-inter">Engineering intern <span className="text-textGreen tracking-wide">@OpenText</span></h3>
      <p className="text-sm mt-1 font-medium text-textDark">Sept 2023 - Present</p>
      <ul className='mt-6 flex flex-col gap-3'>
        <li className='flex gap-3 items-center text-textLight text-base mt-1'><span className='text-textGreen'><TiArrowForward/></span>Maintain the school ERP software</li>
        <li className='flex gap-3 items-center text-textLight text-base mt-1'><span className='text-textGreen'><TiArrowForward/></span>School network management</li>
        <li className='flex gap-3 items-center text-textLight text-base mt-1'><span className='text-textGreen'><TiArrowForward/></span>Students portal maintenance</li>
      </ul>
    </motion.div>
  )
}

export default OpenText
