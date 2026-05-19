"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionTitle from "./SectionTitle";
import { TiArrowForward } from "react-icons/ti";

const experiences = [
  {
    company: "RuDe Labs",
    title: "System Engineer",
    range: "June 2025 - April 2026",
    url: "https://rudelabs.in",
    points: [
      "AI ESG Platfprm – Architected an AI-driven ESG reporting system using React.js, TypeScript, Firebase, and Gemini API which can generate 10+ ESG documents.",
      "Monitoring \& Emergency Response Platform – Designed a web portal with role-based workflows, managing users, clients, and monitoring centers. Engineered real-time emergency alert handling from mobile apps, enabling centralized monitoring and improved response visibility.",
      "Influencer–Brand Platform – Delivered a full-stack system using Next.js, React Native, Supabase, and Meta API for campaign workflows with 15+ fully responsive screens.",
      "Cricket App – Created a React Native app integrating APIs for real-time scores and player statistics.",
    ],
  },
  {
    company: "RuDe Labs",
    companyLabel: "RuDe Labs (Trainee)",
    title: "System Engineer Trainee",
    range: "Dec 2024 - June 2025",
    url: "https://rudelabs.in",
    points: [
      "Stock based gaming platform – Designed a real-time stock prediction platform using React.js with 10+ screens and more than 20 comparable metrics. Designed and integrated dashboards, leaderboards, and watchlists with live updates.",
      "RuDe Labs Website – Developed and deployed the official company website using Next.js, Tailwind CSS, and Framer Motion, showcasing projects, services, and team members.",
      "Enhanced user experience with responsive design, interactive animations, and performance optimizations, ensuring fast load times and modern UI/UX standards.",
    ],
  },
];

const Experience = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div
      id="experience"
      className="w-full max-w-[calc(100vw-40px)] md:max-w-[calc(100vw-160px)] mx-auto py-10 mdl:py-24 px-2 sm:px-4 md:px-20"
    >
      <SectionTitle title="Where I have worked" titleNo="02" />

      <div className="w-full mt-10 flex flex-col md:flex-row gap-4 md:gap-10 ml-0 md:ml-10">
        {/* Tab List */}
        <div className="relative flex md:flex-col overflow-x-auto md:overflow-x-visible scrollbar-none">
          {experiences.map((exp, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(index)}
              className={`relative whitespace-nowrap text-sm font-inter px-5 py-3 text-left transition-all duration-300 border-b-2 md:border-b-0 md:border-l-2 hover:bg-hoverColor hover:text-textGreen ${
                activeTab === index
                  ? "text-textGreen border-textGreen bg-hoverColor"
                  : "text-textDark border-gray-700"
              }`}
            >
              {(exp as any).companyLabel || exp.company}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="w-full min-h-[250px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
            >
              <h3 className="text-lg md:text-xl font-medium font-inter">
                {experiences[activeTab].title}{" "}
                <a
                  href={experiences[activeTab].url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-textGreen hover:underline"
                >
                  @{experiences[activeTab].company}
                </a>
              </h3>
              <p className="text-sm mt-1 font-medium text-textDark font-inter tracking-wide">
                {experiences[activeTab].range}
              </p>
              <ul className="mt-6 flex flex-col gap-3">
                {experiences[activeTab].points.map((point, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: i * 0.1 }}
                    className="flex gap-3 text-textDark text-sm md:text-base leading-relaxed"
                  >
                    <span className="text-textGreen mt-1 shrink-0">
                      <TiArrowForward />
                    </span>
                    {point}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default Experience;
