"use client";

import React, { useRef, useEffect } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

const WORD_DELAY = 0.15;
const LETTER_DELAY = 0.025;
const BOX_FADE_DURATION = 0.125;

const TypewriterText = ({ children, delay = 0 }: { children: string; delay?: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  return (
    <div
      ref={ref}
      className="mb-2.5 text-base text-textDark font-medium whitespace-pre-wrap"
    >
      {children.split(" ").map((word, wordIndex) => {
        // Highlight words wrapped with '**' (e.g., "**highlighted**")
        const isHighlighted = word.startsWith("**") && word.endsWith("**");
        const cleanedWord = isHighlighted ? word.slice(2, -2) : word; // Remove **

        return (
          <span
            key={wordIndex}
            className={`inline-block whitespace-pre-wrap mr-1 ${
              isHighlighted ? "text-textGreen font-semibold" : ""
            }`}
          >
            {cleanedWord.split("").map((letter, letterIndex) => (
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
                  delay: delay + (wordIndex * WORD_DELAY + letterIndex * LETTER_DELAY),
                  duration: 0,
                }}
              >
                {letter !== "~" ? letter : <br />}
              </motion.span>
            ))}
          </span>
        );
      })}
    </div>
  );
};

export default TypewriterText;
