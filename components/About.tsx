"use client";

import React from "react";
import SectionTitle from "./SectionTitle";
import { AiFillThunderbolt } from "react-icons/ai";
import Image from "next/image";
import { profile } from "@/public/assets";
import TypewriterText from "@/animations/TypewriterText";
import TerminalController from "./Terminal";

const About = () => {
  return (
    <div
      id="about"
      className="h-80vh w-[calc(100vw-160px)] mx-auto py-10 mdl:py-24 flex flex-col mdl:px-15 xl:px-20"
    >
      <SectionTitle title="About me" titleNo="01" />
      <div className="flex flex-col lgl:flex-row-reverse gap-5 h-full ml-10">
        {/* Left Section - Text Content */}
        <div className="w-full text-textDark font-medium flex flex-col gap-4">
          <TypewriterText>
            I&apos;m a Software Engineer with 6 months of industry experience,
            currently working as a **System** **Engineer** **Intern** at
            **RuDe** **Labs** . I earned my B.E. in Computer Science and
            Engineering from Chitkara University, graduating with a CGPA of
            **9.72** . I specialize in building robust and responsive web
            applications using modern technologies like **React.js** ,
            **Next.js** , **Node.js** , **HTML** , **CSS** and **JavaScript** .
            I&apos;m passionate about writing clean, scalable code and creating
            intuitive user interfaces. I thrive in team environments where
            collaboration and continuous learning drive innovation and
            meaningful impact.
          </TypewriterText>

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
          {/* Terminal Box */}
          <div className="w-full max-w-md border border-gray-700 bg-gray-900 rounded-lg shadow-lg p-2 flex flex-col">
            <TerminalController />
          </div>
        </div>

        {/* Right Section - Terminal Controller */}
        <div className="w-full lgl:w-[70%] flex flex-col h-full items-start">
          {/* Profile Image */}
          <div className="flex items-center justify-center gap-3">
            <Image
              src={"/assets/images/me.jpeg"}
              alt="Profile"
              className="w-80 h-80 rounded-xl object-cover mb-3"
              width={80}
              height={80}
              priority
            />
          </div>

          {/* Prompt Text */}
          <div className="text-textGreen text-sm md:text-base font-semibold my-4 text-center ml-6">
            Want to know more about me?
            <br /> You can ask in the terminal.
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
