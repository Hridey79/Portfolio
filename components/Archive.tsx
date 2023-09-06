'use client'

import ArchiveCard from "./ArchiveCard"
import { motion } from "framer-motion"

const Archive = () => {
    const project1 = ['mern', 'tailwind', 'typescript']
  return (
    <div className="max-w-contentContainer mx-auto px-4 py-24">
      <div className="flex flex-col items-center">
        <h2 className="text-3xl font-inter font-semibold">Other Noteworthy Projects</h2>
        <p className="text-sm text-textGreen font-inter">view the archive</p>
      </div>
      <motion.div
        initial={{opacity: 0}}
        whileInView={{opacity: 1}}
        transition={{delay: 0.4}}
      >     
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 xl:grid-rows-2 gap-6 mt-10 lgl:px-10">
        <ArchiveCard title="Hotel Booking" description="A mern stack application to help users book hotels from any part of the world. users can book a hotel without creating an account, by only providing necessary info" tech={project1}/>
        <ArchiveCard title="Live Score App" description="An android application that displays live scores from all football leagues, shows league table standings from current and previous seasons. player stats including top scorers and many more" tech={['Java', 'RapidApi', 'Retrofit']} />
        <ArchiveCard title="Movie App" description="An android application that shows a list of upcoming, trending and top rated movies. It also allows users to view movie trailers and also mark a movie as a favorite." tech={['Java', 'RapidApi', 'Retrofit', 'Room db']} />
        <ArchiveCard title="Recipe App" description="An android application that shows a list of meals received from an API. It gives instructions and ingredients used in the preparation of the meal " tech={['Java', 'RapidApi', 'Retrofit', 'Room db']} />
        <ArchiveCard title="Recipe App" description="An android application that shows a list of meals received from an API. It gives instructions and ingredients used in the preparation of the meal " tech={['Java', 'RapidApi', 'Retrofit', 'Room db']} />
        <ArchiveCard title="Recipe App" description="An android application that shows a list of meals received from an API. It gives instructions and ingredients used in the preparation of the meal " tech={['Java', 'RapidApi', 'Retrofit', 'Room db']} />
        </div>
      </motion.div>
    </div>
  )
}

export default Archive
