import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

interface Props {
  children: React.ReactNode;
}

const TextReveal = ({ children }: Props) => {
  const textRef = useRef(null);
  const isInView = useInView(textRef, { once: true });
  const textControls = useAnimation();
  const slideControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      slideControls.start("visible");
      textControls.start("visible");
    }
  }, [isInView]);

  return (
    <div
      ref={textRef}
      style={{ position: "relative", width: "100%", maxWidth: "fit-content", overflow: "hidden" }}
    >
      {/* Text animation */}
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={textControls}
        transition={{ duration: 0.7, delay: 0.15 }} // Reduced delay from 0.35 to 0.15
        className="p-5"
      >
        {children}
      </motion.div>

      {/* Coloured Slide above text */}
      <motion.div
        variants={{
          hidden: { left: 0 },
          visible: { left: "100%" },
        }}
        initial="hidden"
        animate={slideControls}
        transition={{ duration: 0.5, ease: "easeIn", delay: 0 }} // Removed delay
        style={{
          position: "absolute",
          top: 4,
          bottom: 4,
          left: 0,
          right: 0,
          zIndex: 20,
          backgroundColor: "#64ffda",
        }}
      />
    </div>
  );
};

export default TextReveal;
