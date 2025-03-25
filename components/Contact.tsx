import React from "react";
import { IoIosConstruct } from "react-icons/io";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section
      className="h-[calc(100vh-80px)] w-full flex flex-col items-center justify-center text-center px-6 relative overflow-hidden"
      id="contact"
    >

      {/* Decorative L-shaped brackets */}
      <div className="absolute top-40 md:top-32 left-12 md:left-32 lg:left-72 w-16 h-16 md:w-24 md:h-24 border-t-4 md:border-t-8 border-l-4 md:border-l-8 border-textGreen"></div>
      <div className="absolute bottom-40 md:bottom-32 right-12 md:right-32 lg:right-72 w-16 h-16 md:w-24 md:h-24 border-b-4 md:border-b-8 border-r-4 md:border-r-8 border-textGreen"></div>

      <motion.h2
        className="text-textGreen font-semibold tracking-wide text-lg md:text-xl mb-3"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        04. What’s Next?
      </motion.h2>

      <motion.h1
        className="text-4xl md:text-5xl font-bold text-white mb-3 md:mb-5"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        Get In Touch
      </motion.h1>

      <motion.p
        className="text-textDark text-base md:text-lg max-w-[200px] md:max-w-[600px] leading-relaxed"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.4 }}
      >
        Whether you have a question or just want to say hi, my inbox is always
        open. I’ll do my best to get back to you!
      </motion.p>

      <motion.a
        href="mailto:muigaigeorge452@gmail.com"
        className="mt-6 md:mt-8"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        <button className="px-6 md:px-8 py-3 md:py-4 border-2 border-textGreen text-textGreen text-lg font-medium rounded-lg transition-all duration-300 shadow-md hover:text-white hover:shadow-textGreen/50 transform hover:scale-105">
          Say Hello!
        </button>
      </motion.a>

      {/* Footer */}
      <motion.div
        className="absolute bottom-4 text-textDark text-xs md:text-sm flex items-center gap-2 cursor-pointer hover:text-textGreen transition-all duration-300"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.8 }}
      >
        
        <IoIosConstruct className="text-base md:text-lg" />
        <span>Created by Hridey Verma</span>
      </motion.div>
    </section>
  );
};

export default Contact;
