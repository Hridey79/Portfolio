"use client";

import React, { useRef, useEffect } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

const WORD_DELAY = 0.15;
const LETTER_DELAY = 0.025;

const TypewriterText = ({
  children,
  delay = 0,
  small = false,
}: {
  children: string;
  delay?: number;
  small?: boolean;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  let runningLetterIndex = 0; // 🔥 This tracks all letters cumulatively

  return (
    <div
      ref={ref}
      className="mb-2.5 text-base text-textDark font-medium whitespace-pre-wrap"
    >
      {children.split("\n").map((line, lineIndex) => (
        <div key={lineIndex} className="mb-1">
          {line.split(" ").map((word, wordIndex) => {
            const isHighlighted = word.startsWith("**") && word.endsWith("**");
            const cleanedWord = isHighlighted ? word.slice(2, -2) : word;

            return (
              <span
                key={wordIndex}
                className={`inline-block mr-1 ${
                  isHighlighted ? "text-textGreen font-semibold" : ""
                }`}
              >
                {cleanedWord.split("").map((letter, letterIndex) => {
                  const animationDelay =
                    delay + runningLetterIndex * LETTER_DELAY;
                  runningLetterIndex++; // 🔥 increment global letter count

                  return (
                    <motion.span
                      key={letterIndex}
                      className={`relative ${
                        small ? "text-sm" : "text-md 3xl:text-xl"
                      } `}
                      initial="hidden"
                      animate={controls}
                      variants={{
                        hidden: { opacity: 0 },
                        visible: { opacity: 1 },
                      }}
                      transition={{
                        delay: animationDelay,
                        duration: 0,
                      }}
                    >
                      {letter}
                    </motion.span>
                  );
                })}
              </span>
            );
          })}
        </div>
      ))}
    </div>
  );
};

export default TypewriterText;
