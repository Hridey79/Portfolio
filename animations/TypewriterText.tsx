"use client";

import React, { useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

const WORD_DELAY = 0.15;
const LETTER_DELAY = 0.025;
const BOX_FADE_DURATION = 0.125;

const TypewriterText = ({ children }: { children: string }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true }); // Ensures it runs only once
  const controls = useAnimation();

  if (isInView) {
    controls.start("visible");
  }

  return (
    <p ref={ref} className="mb-2.5 text-base text-textDark font-medium">
      {children.split(" ").map((word, wordIndex) => (
        <span key={wordIndex} className="inline-block whitespace-nowrap mr-1">
          {word.split("").map((letter, letterIndex) => (
            <motion.span
              key={letterIndex}
              className="relative text-lg"
              initial="hidden"
              animate={controls}
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1 },
              }}
              transition={{
                delay: wordIndex * WORD_DELAY + letterIndex * LETTER_DELAY,
                duration: 0,
              }}
            >
              <motion.span>{letter}</motion.span>
              <motion.span
                initial="hidden"
                animate={controls}
                variants={{
                  hidden: { opacity: 0 },
                  visible: { opacity: [0, 1, 0] },
                }}
                transition={{
                  delay: wordIndex * WORD_DELAY + letterIndex * LETTER_DELAY,
                  times: [0, 0.1, 1],
                  duration: BOX_FADE_DURATION,
                  ease: "easeInOut",
                }}
                className="absolute bottom-[3px] left-[1px] right-0 top-[3px] bg-textGreen"
              />
            </motion.span>
          ))}
        </span>
      ))}
    </p>
  );
};

export default TypewriterText;
