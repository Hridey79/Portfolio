import { FaRegFolder } from 'react-icons/fa'
import { RxOpenInNewWindow } from 'react-icons/rx'

interface propsTypes {
    title: string
    description: string
    tech: Array<string>
}

const ArchiveCard = ({title, description, tech}: propsTypes) => {
  return (
    <a href='https://github.com/GeorgeMuigai' target='_blank' className='w-full h-[290px] rounded-lg bg-[#112240] p-7 flex flex-col gap-6 hover:-translate-y-2 transition-transform duration-300 group'>
        <div className='flex justify-between'>
            <FaRegFolder className='text-3xl text-textGreen'/>
            <RxOpenInNewWindow className='text-3xl hover:text-textGreen'/>
        </div>
        <div>
            <h2 className='text-xl font-inter font-semibold tracking-wide group-hover:text-textGreen'>{title}</h2>
            <p className='mt-3 text-sm '>{description}</p>
        </div>
        <ul className='text-xs mdl:text-sm text-textDark flex items-center gap-2 flex-wrap'>
            {tech.map(tech => {
                return <li key={tech}>{tech}</li>
            })}
        </ul>
    </a>
  )
}

export default ArchiveCard
