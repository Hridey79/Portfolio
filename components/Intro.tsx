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
      className="min-h-[80vh] w-full px-4 md:px-10 xl:px-20 py-10 mdl:pt-24 flex flex-col gap-6 lgl:gap-10 relative max-w-[1440px] mx-auto scroll-mt-80"
      initial={{ x: -200, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* WaterDrop Grid */}
      <div className="absolute top-[10%] left-[35%] cursor-crosshair opacity-50 hidden md:block">
        <Suspense>
          <WaterDropGrid />
        </Suspense>
      </div>

      {/* Text Content */}
      <div className="relative z-10 flex flex-col gap-10 md:gap-5 pointer-events-none">
        <h3 className="text-xl md:text-2xl font-inter text-textGreen tracking-wide">
          Hi, my name is
        </h3>

        <h1 className="text-3xl md:text-6xl font-inter font-semibold flex flex-col gap-4">
          Hridey Verma.
          <span className="text-textDark">I am a Fullstack Developer.</span>
        </h1>

        <p className="text-base sm:text-lg md:text-xl font-medium leading-relaxed max-w-3xl">
          I&apos;m a passionate Fullstack Developer with 6 months of hands-on
          experience in building scalable and user-focused web applications. I
          specialize in crafting high-quality solutions that align with business
          goals and enhance digital experiences.
          <span
            onClick={() => {
              const element = document.getElementById("about");
              if (element) {
                element.scrollIntoView({ behavior: "smooth", block: "start" });
              }
            }}
            className="text-textGreen hover:underline inline-flex relative cursor-pointer h-9 text-lg sm:text-xl font-semibold pointer-events-auto mt-5"
          >
            Learn more
          </span>
        </p>

        <a
          href="https://github.com/Hridey79"
          target="_blank"
          className="pointer-events-auto"
        >
          <button
            className="text-sm sm:text-lg font-semibold text-textGreen border border-textGreen rounded-xl
            hover:bg-hoverColor w-52 sm:w-60 h-14 sm:h-16 tracking-wide"
          >
            Check out my projects!
          </button>
        </a>
      </div>
    </motion.div>
  );
};

export default Intro;
