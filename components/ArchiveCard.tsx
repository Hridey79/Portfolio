import { FaRegFolder } from "react-icons/fa";
import { RxOpenInNewWindow } from "react-icons/rx";

interface propsTypes {
  title: string;
  description: string;
  tech: Array<string>;
  demo?: string;
  github: string;
}

const ArchiveCard = ({
  title,
  description,
  tech,
  demo,
  github,
}: propsTypes) => {
  return (
    <div className="w-full min-h-[290px] h-auto rounded-lg bg-[#112240] p-4 sm:p-7 flex flex-col gap-4 sm:gap-6 hover:-translate-y-2 transition-transform duration-300 group">
      <div className="flex justify-between">
        <a href={github} target="_blank" className="text-3xl text-textGreen">
          <FaRegFolder />
        </a>
        {demo && (
          <a
            href={demo}
            target="_blank"
            className="text-textGreen text-2xl group-hover:text-textGreen/80"
          >
            <RxOpenInNewWindow />
          </a>
        )}
      </div>
      <div>
        <h2 className="text-xl font-inter font-semibold tracking-wide group-hover:text-textGreen">
          {title}
        </h2>
        <p className="mt-3 text-sm ">{description}</p>
      </div>
      <ul className="text-xs mdl:text-sm text-textDark flex items-center gap-2 flex-wrap">
        {tech.map((tech) => (
          <li key={tech}>{tech}</li>
        ))}
      </ul>
    </div>
  );
};

export default ArchiveCard;
