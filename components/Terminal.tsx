import TypewriterText from "@/animations/TypewriterText";
import React, { useState } from "react";
import Terminal, { ColorMode, TerminalOutput } from "react-terminal-ui";

const TerminalController: React.FC = () => {
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
              {`Available commands:
- aboutMe: Learn more about me
- contacts: Get my contact details
- explainProjects: Overview of my projects
- studyDetails: My educational background
- clear: Clear the terminal`}
            </span>
          </TerminalOutput>
        );
        break;

      case "aboutme":
        newLine = (
          <TerminalOutput key={Date.now()}>
            <span className="whitespace-pre-wrap break-words p-1 text-xs sm:text-sm max-w-full">
              👋
              <TypewriterText>
                {
                  "Hi! I'm Hridey Verma, a passionate web developer focusing on Next.js and React."
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
              📧
              <TypewriterText>{` Email: hrideykv18@gmail.com`}</TypewriterText>
            </span>
          </TerminalOutput>
        );
        break;

      case "explainprojects":
        newLine = (
          <TerminalOutput key={Date.now()}>
            <span className="whitespace-pre-wrap break-words text-xs sm:text-sm max-w-full">
              🚀
              <TypewriterText>{` I’ve worked on various projects including:
- Hotel Booking App (MERN)
- Live Score App (Android, Java)
- Movie App (Android, Java)
- Recipe App (API-based)`}</TypewriterText>
            </span>
          </TerminalOutput>
        );
        break;

      case "studydetails":
        newLine = (
          <TerminalOutput key={Date.now()}>
            <span className="whitespace-pre-wrap break-words text-xs sm:text-sm max-w-full">
              🎓
              <TypewriterText>
                I studied Computer Science and was part of the Google Developer
                Students Club, contributing to the ML team.
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
              <TypewriterText>
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
    <div className="w-full overflow-y-auto text-sm">
      <Terminal colorMode={ColorMode.Dark} onInput={handleInput}>
        {terminalLineData}
      </Terminal>
    </div>
  );
};

export default TerminalController;
