"use client";

import ArchiveCard from "./ArchiveCard";
import { motion } from "framer-motion";

const Archive = () => {
  const projects = [
    {
      title: "Real Estate App",
      description:
        "A solo frontend project fully inspired by the Real Estate DTT site on Awwwards. Built using HTML, CSS, JavaScript, GSAP, and Locomotive, it features advanced scroll animations and effects like multiple image fragments forming a larger visual as the user scrolls.",
      tech: ["HTML", "CSS", "JavaScript", "GSAP", "Locomotive Scroll"],
      demo: "https://hridey79.github.io/Real-Estate-DTT/",
      github: "https://github.com/Hridey79/Real-Estate-DTT",
    },
    {
      title: "Zentry Landing Page",
      description:
        "A recreation of the Awwwards-winning Zentry app's landing page. Built with React, Tailwind, and Framer Motion, it mimics the original's clean design and delivers high-end animations and transitions.",
      tech: ["React", "Tailwind", "Vite", "Framer Motion"],
      demo: "https://zentry-landingpage.netlify.app/",
      github:
        "https://github.com/Hridey79/zentry-clone-awwwwwars-clone-/tree/master",
    },
    {
      title: "Blogs App",
      description:
        "A Next.js and MongoDB blog application built for an interview. It leverages Next.js server-side rendering to generate clean, SEO-friendly blog share links enriched with metadata. Focused on minimalism and fast content delivery.",
      tech: ["NextJS", "Tailwind", "MongoDB"],
      github: "https://github.com/Hridey79/Blog_App_Next.js",
    },
    {
      title: "Sign Language Translator",
      description:
        "A desktop application that uses a webcam to detect hand gestures and translates sign language to text. The model was trained using a Kaggle image dataset and XGBoost, while OpenCV handles image processing. Built with Python and Tkinter.",
      tech: ["Python", "OpenCV", "Tkinter", "XGBoost"],
      github: "https://github.com/Hridey79/Sign_Language_Translator",
    },
    {
      title: "Pew News",
      description:
        "A React and Redux news app built with a team of 3. I handled the frontend while others built the scraper and backend. It fetches news from trusted Indian sources like NDTV and presents them cleanly.",
      tech: ["React", "Redux"],
      demo: "http://news-frontend-sooty.vercel.app/",
      github: "https://github.com/Hridey79/Pew-News",
    },
    {
      title: "Customer Churn Prediction",
      description:
        "A banking domain web app that predicts churn using a Random Forest model. Built with Flask backend and a Tailwind CSS frontend. I trained the model and built the full stack solution.",
      tech: [
        "Python",
        "Flask",
        "Tailwind",
        "Machine Learning",
        "Random Forest",
      ],
      github: "https://github.com/Hridey79/Customer_Churn_Prediction",
    },
  ];

  return (
    <div className="w-[calc(100vw-160px)] mx-auto px-4 py-24">
      <div className="flex flex-col items-center">
        <h2 className="text-4xl font-inter font-semibold">
          Other Noteworthy Projects
        </h2>
        <a href="https://github.com/Hridey79" target="_blank">
          <p className="text-md text-textGreen font-inter hover:underline">
            view the archive
          </p>
        </a>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 xl:grid-rows-2 gap-6 mt-10 lgl:px-10">
          {projects.map((project, index) => (
            <ArchiveCard
              key={index}
              title={project.title}
              description={project.description}
              tech={project.tech}
              demo={project?.demo}
              github={project.github}
            />
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Archive;
