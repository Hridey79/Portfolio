"use client";

import React, { Suspense, useEffect } from "react";
import { motion } from "framer-motion";
import WaterDropGrid from "@/animations/WaterDropGrid";

const Intro = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.div
      id="home"
      className="h-screen mx-auto py-10 mdl:pt-24 flex flex-col gap-6 lgl:gap-10 
       relative md:px-20 w-[calc(100vw-180px)] scroll-mt-80"
      initial={{ x: -200, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* WaterDrop Grid - Positioned in Background */}
      <div className="absolute top-[10%] left-[35%] cursor-crosshair opacity-50 hidden md:block">
        <Suspense>
          <WaterDropGrid />
        </Suspense>
      </div>

      {/* Text Content - Positioned Above Grid */}
      <div className="relative z-10 flex flex-col gap-10 px-5 md:p-0 md:gap-5 lgl:gap-7 pointer-events-none">
        <h3 className="text-xl md:text-2xl lgl:text-3xl font-inter text-textGreen tracking-wide w-full md:w-72">
          Hi, my name is
        </h3>
        <h1 className="text-3xl md:text-6xl lgl:text-7xl font-inter font-semibold flex flex-col gap-4 w-full md:w-[60rem]">
          Hridey Verma.
          <span className="text-textDark">I am a Fullstack Developer.</span>
        </h1>
        <p className="text-base sm:text-lg lgl:text-xl md:max-w-[700px] lgl:max-w-[900px] first-letter:font-medium flex flex-col leading-relaxed mx-auto md:mx-0">
          I&apos;m a passionate Fullstack Developer with 6 months of hands-on
          experience in building scalable and user-focused web applications. I
          specialize in crafting high-quality solutions that align with business
          goals and enhance digital experiences.
          <span
            onClick={() => {
              const element = document.getElementById("about");
              if (!element) return;
              // Scroll to the "About" section smoothly
              element.scrollIntoView({ behavior: "smooth", block: "start" });
            }}
            className="text-textGreen hover:underline inline-flex relative cursor-pointer h-9 text-lg sm:text-xl lgl:text-2xl font-semibold pointer-events-auto overflow-x-hidden group w-32 mx-auto md:mx-0 my-5 md:my-0"
          >
            Learn more
          </span>
        </p>
        <a
          href="https://github.com/Hridey79"
          target="_blank"
          className="w-52 sm:w-60 pointer-events-auto mx-auto md:mx-0"
        >
          <button
            className="text-sm sm:text-lg lgl:text-xl font-semibold text-textGreen border border-textGreen rounded-xl
          hover:bg-hoverColor w-52 sm:w-60 h-14 sm:h-16 tracking-wide -mt-10 md:-mt-0"
          >
            Check out my projects!
          </button>
        </a>
      </div>
    </motion.div>
  );
};

export default Intro;
