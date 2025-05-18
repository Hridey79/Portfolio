"use client";

import TypewriterText from "@/animations/TypewriterText";
import React, { useEffect, useState } from "react";
import Terminal, { ColorMode, TerminalOutput } from "react-terminal-ui";

const TerminalController: React.FC = () => {
  useEffect(() => {
    // Prevent terminal from stealing scroll on mount
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "auto" });
    }, 0);
  }, []);

  const [terminalLineData, setTerminalLineData] = useState<JSX.Element[]>([
    <TerminalOutput key="welcome">
      <span className="whitespace-pre-wrap break-words text-xs sm:text-sm max-w-full !-mb-[40rem] !py-0">
        Type help to see available commands!
      </span>
    </TerminalOutput>,
  ]);

  const handleInput = (terminalInput: string) => {
    const command = terminalInput.trim().toLowerCase();
    let newLine: JSX.Element | null = null;

    switch (command) {
      case "help":
        newLine = (
          <TerminalOutput key={Date.now()}>
            <span className="whitespace-pre-wrap break-words text-xs sm:text-sm max-w-full">
              <TypewriterText delay={0} small={true}>
                {`Available commands:
- aboutMe: Learn more about me
- studyDetails: My educational background
- contacts: Get my contact details
- clear: Clear the terminal`}
              </TypewriterText>
            </span>
          </TerminalOutput>
        );
        break;

      case "aboutme":
        newLine = (
          <TerminalOutput key={Date.now()}>
            <span className="whitespace-pre-wrap break-words p-1 text-xs sm:text-sm!important max-w-full">
              <TypewriterText delay={0} small={true}>
                {
                  "Hi! I'm Hridey Verma, a passionate web developer focusing on Next.js and React. I also have some experience working with backend technologies like Node.js and Express. I enjoy creating modern, responsive web applications and am always eager to learn new technologies and improve my skills. In my free time, I love reading novels and playing chess."
                }
              </TypewriterText>
            </span>
          </TerminalOutput>
        );
        break;

      case "contacts":
        newLine = (
          <TerminalOutput key={Date.now()}>
            <span className="whitespace-pre-wrap break-words text-xs sm:text-sm max-w-full">
              <TypewriterText
                delay={0}
                small={true}
              >{` Email: hrideykv18@gmail.com\n Phone no.: +91 9041891005`}</TypewriterText>
            </span>
          </TerminalOutput>
        );
        break;

      //       case "explainprojects":
      //         newLine = (
      //           <TerminalOutput key={Date.now()}>
      //             <span className="whitespace-pre-wrap break-words text-xs sm:text-sm max-w-full">
      //               <TypewriterText
      //                 delay={0}
      //                 small={true}
      //               >{` I’ve worked on various projects including:
      // - Learning Management System (LMS) (MERN Stack)
      // - Live Score App (Android, Java)
      // - Movie App (Android, Java)
      // - Recipe App (API-based)`}</TypewriterText>
      //             </span>
      //           </TerminalOutput>
      //         );
      //         break;

      case "studydetails":
        newLine = (
          <TerminalOutput key={Date.now()}>
            <span className="whitespace-pre-wrap break-words text-xs sm:text-sm max-w-full">
              <TypewriterText delay={0} small={true}>
                {`Education Details:
- Completed 10th grade from D.A.V School, Malerkotla, Punjab with 90%.
- Completed 12th grade from A.K.S.I.P.S School, Chandigarh with 83.80%.
- Graduated with a Bachelor's degree in Computer Science Engineering from Chitkara University, Rajpura with a CGPA of 9.72.
- Actively participated in the Google Developer Students Club, contributing as a member of the Machine Learning team.`}
              </TypewriterText>
            </span>
          </TerminalOutput>
        );
        break;

      case "clear":
        setTerminalLineData([]);
        return;

      default:
        newLine = (
          <TerminalOutput key={Date.now()}>
            <span className="whitespace-pre-wrap break-words text-xs sm:text-sm max-w-full">
              ❌
              <TypewriterText delay={0} small={true}>
                {` Unknown command: "${terminalInput}"
Type "help" to see available commands.`}
              </TypewriterText>
            </span>
          </TerminalOutput>
        );
    }

    setTerminalLineData((prev) => [...prev, newLine!]);
  };

  return (
    <div className="w-full overflow-y-auto text-xs">
      <Terminal colorMode={ColorMode.Dark} onInput={handleInput}>
        {terminalLineData}
      </Terminal>
    </div>
  );
};

export default TerminalController;
