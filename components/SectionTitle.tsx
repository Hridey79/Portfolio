"use client";
import dynamic from "next/dynamic";

// Dynamically import TextReveal without SSR
const TextReveal = dynamic(() => import("@/animations/TextReveal"), {
  ssr: false,
});

interface Props {
  title: string;
  titleNo: string;
}

const SectionTitle = ({ title, titleNo }: Props) => {
  return (
    <TextReveal>
      <h2 className="font-inter text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold flex items-center mb-3">
        <span className="inline-block text-lg md:text-4xl text-textGreen mr-5">
          {titleNo}.
        </span>
        {title}
        <span className="hidden md:inline-flex md:w-60 lg:w-72 h-[.5px] bg-gray-700 ml-6"></span>
      </h2>
    </TextReveal>
  );
};

export default SectionTitle;
