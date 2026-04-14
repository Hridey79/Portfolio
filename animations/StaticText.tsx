"use client";

import React from "react";

const StaticText = ({
  children,
  small = false,
}: {
  children: string;
  small?: boolean;
}) => {
  return (
    <div className="mb-2.5 text-base text-textDark font-medium whitespace-pre-wrap">
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
                <span
                  className={`${small ? "text-sm" : "text-md 3xl:text-xl"}`}
                >
                  {cleanedWord}
                </span>
              </span>
            );
          })}
        </div>
      ))}
    </div>
  );
};

export default StaticText;
