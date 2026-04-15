"use client";

import React from "react";
import { motion } from "framer-motion";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import { SiLeetcode } from "react-icons/si";
import { IoIosConstruct } from "react-icons/io";

const Contact = () => {
  return (
    <section
      className="w-full max-w-[600px] mx-auto py-16 md:py-24 px-4 sm:px-6 flex flex-col items-center text-center"
      id="contact"
    >
      {/* Section Number */}
      <motion.p
        className="text-textGreen font-inter text-sm md:text-base tracking-wide mb-4"
        initial={{ opacity: 0, y: -10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        04. What&apos;s Next?
      </motion.p>

      {/* Title */}
      <motion.h2
        className="text-3xl sm:text-4xl md:text-5xl font-bold text-textLight mb-4 md:mb-6"
        initial={{ opacity: 0, y: -10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        Get In Touch
      </motion.h2>

      {/* Description */}
      <motion.p
        className="text-textDark text-base md:text-lg max-w-[450px] leading-relaxed mb-8 md:mb-10"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        I&apos;m currently looking for new opportunities. Whether you have a
        question, a project idea, or just want to say hi — my inbox is always
        open and I&apos;ll do my best to get back to you!
      </motion.p>

      {/* CTA Button */}
      <motion.a
        href="mailto:hrideykv18@gmail.com"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <button className="px-8 py-4 border border-textGreen text-textGreen text-base font-inter rounded transition-all duration-300 hover:bg-hoverColor hover:shadow-[4px_4px_0_0_#64ffda] hover:-translate-x-[3px] hover:-translate-y-[3px]">
          Say Hello
        </button>
      </motion.a>

      {/* Social Links - visible on mobile since sidebars are hidden */}
      <motion.div
        className="flex xl:hidden items-center gap-6 mt-12 text-textDark"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <a
          href="https://github.com/Hridey79"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-textGreen hover:-translate-y-1 transition-all duration-300"
        >
          <FiGithub size={22} />
        </a>
        <a
          href="https://www.linkedin.com/in/hridey-verma"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-textGreen hover:-translate-y-1 transition-all duration-300"
        >
          <FiLinkedin size={22} />
        </a>
        <a
          href="https://leetcode.com/Hridey79/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-textGreen hover:-translate-y-1 transition-all duration-300"
        >
          <SiLeetcode size={22} />
        </a>
        <a
          href="mailto:hrideykv18@gmail.com"
          className="hover:text-textGreen hover:-translate-y-1 transition-all duration-300"
        >
          <FiMail size={22} />
        </a>
      </motion.div>

      {/* Footer Credit */}
      <motion.div
        className="mt-16 md:mt-24 text-textDark text-xs font-inter flex items-center gap-2 hover:text-textGreen transition-all duration-300"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <IoIosConstruct className="text-sm" />
        <span>Built by Hridey Verma</span>
      </motion.div>
    </section>
  );
};

export default Contact;
