"use client";

import React, { useEffect } from "react";
import SectionTitle from "./SectionTitle";
import { AiFillThunderbolt } from "react-icons/ai";
import Image from "next/image";
import profile from "@/public/assets/images/me.jpeg";
import TypewriterText from "@/animations/TypewriterText";
import TerminalController from "./Terminal";
import StaticText from "@/animations/StaticText";

const About = () => {
  const [showTerminal, setShowTerminal] = React.useState(false);

  useEffect(() => {
    setTimeout(() => setShowTerminal(true), 500); // Delay rendering
  }, []);

  return (
    <div
      id="about"
      className="w-full max-w-[calc(100vw-40px)] md:max-w-[calc(100vw-160px)] mx-auto py-10 mdl:py-24 flex flex-col px-2 sm:px-4 mdl:px-15 xl:px-20"
    >
      <SectionTitle title="About me" titleNo="01" />
      <div className="flex flex-col lgl:flex-row-reverse gap-5 h-full ml-0 md:ml-10">
        {/* Left Section - Text Content */}
        <div className="w-full text-textDark font-medium flex flex-col gap-4">
          <StaticText>
            {`
I am a passionate Software Engineer currently working as a **Systems** **Engineer** at **RuDe** **Labs** . I hold a **B.E.** in **Computer** **Science** and **Engineering** from **Chitkara** **University** , where I graduated with a CGPA of **9.72** .

My expertise lies in building modern, performant, and responsive web applications using technologies like **React.js** , **Next.js** , **Node.js** , **JavaScript** , **HTML** , and **CSS** . I enjoy crafting clean, maintainable code and designing user interfaces that feel intuitive and accessible.

I thrive in collaborative environments that encourage learning, experimentation, and continuous improvement. I'm especially driven by opportunities to bridge the gap between design and development, turning thoughtful ideas into scalable digital experiences.

Outside of work, you’ll often find me reading novels or sharpening my strategic thinking with a game of chess.
`}
          </StaticText>

          {/* <TypewriterText delay={7}>
        My expertise lies in designing, developing, and maintaining applications and responsive websites that offer seamless user experiences. I focus on writing clean, optimized code while ensuring intuitive and engaging interfaces. I thrive in collaborative environments, working closely with cross-functional teams to build impactful web applications.
          </TypewriterText> */}
          {/* <ul className="max-w-[450px] text-md font-inter grid grid-cols-2 gap-2">
            {[
              "Next.js",
              "React",
              "JavaScript",
              "Python",
              "Firebase",
              "MongoDB",
              "MySQL",
              "HTML & CSS",
            ].map((tech) => (
              <li key={tech} className="flex items-center gap-2">
                <span className="text-textGreen">
                  <AiFillThunderbolt />
                </span>
                {tech}
              </li>
            ))}
          </ul> */}
        </div>

        {/* Right Section - Terminal Controller */}
        <div className="w-full lgl:w-[70%] flex flex-col h-full items-start">
          {/* Profile Image */}
          <div className="flex items-center justify-center gap-3 w-full max-w-[400px]">
            <Image
              src={profile}
              alt="Profile"
              className="w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 rounded-xl object-cover mb-3"
              width={80}
              height={80}
              priority
            />
          </div>

          {/* Prompt Text */}
          <div className="text-textGreen text-sm md:text-base font-semibold my-4 text-center flex flex-col items-center justify-center w-full max-w-[400px]">
            Want to know more about me?
            <br /> You can ask in the terminal.
          </div>

          {/* Terminal Box */}
          <div className="w-full max-w-[400px] max-h-44 text-sm border border-gray-700 bg-[rgba(37,42,55,1)] rounded-lg shadow-lg p-2 flex flex-col">
            {showTerminal && <TerminalController />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
