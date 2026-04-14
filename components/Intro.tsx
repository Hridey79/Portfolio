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
      className="h-[80vh] mx-auto py-10 mdl:pt-24 flex flex-col gap-6 lgl:gap-10
       relative px-4 sm:px-8 md:px-20 w-full max-w-[calc(100vw-40px)] md:max-w-[calc(100vw-180px)] scroll-mt-80"
      initial={{ x: -200, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* WaterDrop Grid - Positioned in Background */}
      <div className="absolute top-[10%] left-[35%] 3xl:left-[40%] cursor-crosshair opacity-50 hidden md:block">
        <Suspense>
          <WaterDropGrid />
        </Suspense>
      </div>

      {/* Text Content - Positioned Above Grid */}
      <div className="relative z-10 flex flex-col gap-10 px-5 md:p-0 md:gap-5 pointer-events-none">
        <h3 className="text-xl md:text-2xl 3xl:text-3xl font-inter text-textGreen tracking-wide w-full md:w-72">
          Hi, my name is
        </h3>
        <h1 className="text-2xl sm:text-3xl md:text-6xl 3xl:text-7xl font-inter font-semibold flex flex-col gap-2 sm:gap-4 w-full md:w-[60rem] 3xl:w-[80rem]">
          Hridey Verma.
          <span className="text-textDark">I am a Fullstack Developer.</span>
        </h1>
        <p className="text-base sm:text-lg 3xl:text-xl md:max-w-[700px] 3xl:max-w-[900px] font-medium flex flex-col leading-relaxed mx-auto md:mx-0">
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
            className="text-textGreen hover:underline inline-flex relative cursor-pointer h-9 text-base sm:text-lg md:text-xl font-semibold pointer-events-auto overflow-x-hidden group w-32 mx-auto md:mx-0 my-3 md:my-0"
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
            className="text-sm sm:text-lg font-semibold text-textGreen border border-textGreen rounded-xl
          hover:bg-hoverColor shadow-md hover:shadow-textGreen/50 transform hover:scale-105 w-52 sm:w-60 h-14 sm:h-16 tracking-wide -mt-10 md:-mt-0"
          >
            Check out my projects!
          </button>
        </a>
      </div>
    </motion.div>
  );
};

export default Intro;
