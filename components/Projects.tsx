import React from "react";
import SectionTitle from "./SectionTitle";
import Image from "next/image";
import { FiGithub } from "react-icons/fi";
import { RxOpenInNewWindow } from "react-icons/rx";
import {
  pew,
  blog,
  churn,
  interview,
  pathFinder,
  LMS,
  spotify,
  Oscar,
} from "@/public/assets";
import TypewriterText from "@/animations/TypewriterText";

const Projects = () => {
  const projects = [
    {
      title: "Learning Management System",
      description:
        "A web-based platform for managing and delivering educational courses. It includes features for user authentication, course creation, and progress tracking.",
      image: LMS,
      tech: ["React", "Express", "MongoDb", "Stripe", "NodeJs", "Tailwind CSS"],
      github: "https://github.com/Hridey79/LMS",
      reverse: false,
    },
    {
      title: "Algorithm Visualizer",
      description:
        "A web-based tool for visualizing algorithms and data structures. Users can interactively explore various algorithms and their complexities.",
      image: pathFinder,
      tech: ["HTML", "CSS", "Javascript"],
      github: "https://github.com/Hridey79/Path-Finding-Algo-Visualizer",
      demo: "https://hridey79.github.io/Path-Finding-Algo-Visualizer/",
      reverse: true,
    },
    {
      title: "Spotify Clone",
      description:
        "A web-based application that allows users to stream music, create playlists, and discover new artists. It features user authentication and a responsive design.",
      image: spotify,
      tech: ["Next.js", "Supabase", "TypeScript", "Stripe", "Tailwind CSS"],
      github: "https://github.com/Hridey79/Spotify_Clone",
      reverse: false,
    },
    {
      title: "Oscar's Adventure",
      description:
        "A platformer game where players control Oscar, a character navigating through various levels filled with challenges and enemies. The game features smooth animations and engaging gameplay.",
      image: Oscar,
      tech: ["Python", "Pygame"],
      github: "https://github.com/Hridey79/Oscar-s-Adventure",
      reverse: true,
    },
    {
      title: "PrepWise: Interview Preparation App",
      description:
        "A web application designed to help users prepare for interviews. It uses Vapi's api for talking firebase for backend and google gemini api.",
      image: interview,
      tech: ["NextJS", "Gemini API", "Vapi API", "Firebase"],
      github: "https://github.com/Hridey79/interview_prep_app",
      reverse: false,
    },
  ];

  return (
    <div
      id="projects"
      className="w-[calc(100vw-160px)] mx-auto py-10 mdl:py-24 px-20"
    >
      <SectionTitle title="Some things I have built" titleNo="02" />

      <div className="w-full flex flex-col items-center justify-center xl:gap-28 mt-10 ml-10">
        {projects.map((project, index) => (
          <div
            key={index}
            className={`flex flex-col xl:flex-row gap-6 mb-5 xl:-mb-5 ${
              project.reverse ? "xl:flex-row-reverse" : ""
            }`}
          >
            {/* Image Section */}
            <a
              href={project.github}
              target="_blank"
              className="w-full xl:w-1/2 relative"
            >
              <div className="h-[400px] w-full overflow-hidden">
                <Image
                  className="w-full object-contain cursor-pointer translate-y-0"
                  src={project.image}
                  alt={project.title}
                />
              </div>
            </a>

            {/* Content Section */}
            <div
              className={`w-full xl:w-1/2 flex flex-col gap-6 text-left z-10 ${
                project.reverse
                  ? "items-start xl:-mr-24"
                  : "items-end xl:-ml-24"
              }`}
            >
              <p className="text-textGreen font-inter text-sm tracking-wide">
                Featured Project
              </p>
              <h3 className="text-2xl font-bold">{project.title}</h3>
              <div className="bg-[#112240] md:text-base text-sm p-2 md:p-6 rounded-md">
                <TypewriterText>{project.description}</TypewriterText>
              </div>

              <ul className="text-xs md:text-sm font-inter tracking-wide flex flex-wrap text-textDark gap-2 md:gap-5">
                {project.tech.map((tech, i) => (
                  <li key={i} className="text-textGreen font-semibold">
                    #{tech}
                  </li>
                ))}
              </ul>

              <div className="text-2xl flex gap-3">
                <a
                  href={project.github}
                  target="_blank"
                  className="hover:text-textGreen"
                >
                  <FiGithub />
                </a>
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    className="hover:text-textGreen group relative w-auto"
                  >
                    <RxOpenInNewWindow />
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
