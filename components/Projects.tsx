import React from 'react';
import SectionTitle from './SectionTitle';
import Image from 'next/image';
import { FiGithub } from 'react-icons/fi';
import { RxOpenInNewWindow } from 'react-icons/rx';
import { pew, blog, churn } from '@/public/assets';
import TypewriterText from '@/animations/TypewriterText';

const Projects = () => {
  const projects = [
    {
      title: 'Sports Wear',
      description: 'An e-commerce sports wear website for visualizing personalized Amazon website. View your products, add your account with OAuth, and make purchases using Stripe.',
      image: pew,
      tech: ['Next.js', 'React', 'TypeScript', 'Stripe', 'Tailwind CSS'],
      github: 'https://github.com/GeorgeMuigai',
      demo: '#',
      reverse: false
    },
    {
      title: 'Amd Eats',
      description: 'An Android food delivery app where restaurant owners can add new food items and view orders. Users can browse restaurants, view cuisines, and add food to their cart.',
      image: churn,
      tech: ['Java', 'Retrofit', 'Firebase', 'Google Maps'],
      github: 'https://github.com/GeorgeMuigai',
      demo: '#',
      reverse: true
    },
    {
      title: 'Fashion Wear',
      description: 'An e-commerce fashion wear website similar to Amazon. Users can view products, add accounts with OAuth, and make purchases using Stripe.',
      image: blog,
      tech: ['Next.js', 'React', 'TypeScript', 'Stripe', 'Tailwind CSS'],
      github: 'https://github.com/GeorgeMuigai',
      demo: '#',
      reverse: false
    }
  ];

  return (
    <div id="projects" className="w-[calc(100vw-160px)] mx-auto py-10 mdl:py-24 px-20">
      <SectionTitle title="Some things I have built" titleNo="03" />

      <div className="w-full flex flex-col items-center justify-center xl:gap-28 mt-10 ml-10">
        {projects.map((project, index) => (
          <div
            key={index}
            className={`flex flex-col xl:flex-row gap-6 mb-5 xl:-mb-5 ${project.reverse ? 'xl:flex-row-reverse' : ''}`}
          >
            {/* Image Section */}
            <a href={project.demo} target="_blank" className="w-full xl:w-1/2 relative">
              <div className="h-[400px] w-full overflow-hidden">
                <Image
                  className="w-full object-contain cursor-pointer translate-y-0"
                  src={project.image}
                  alt={project.title}
                />
              </div>
            </a>

            {/* Content Section */}
            <div className={`w-full xl:w-1/2 flex flex-col gap-6 text-left z-10 ${project.reverse ? 'items-start xl:-mr-24' : 'items-end xl:-ml-24'}`}>
              <p className="text-textGreen font-inter text-sm tracking-wide">Featured Project</p>
              <h3 className="text-2xl font-bold">{project.title}</h3>
              <div className="bg-[#112240] md:text-base text-sm p-2 md:p-6 rounded-md">
               <TypewriterText>{project.description}</TypewriterText> 
              </div>
              
              <ul className="text-xs md:text-sm font-inter tracking-wide flex flex-wrap text-textDark gap-2 md:gap-5">
                {project.tech.map((tech, i) => (
                  <li key={i} className='text-textGreen font-semibold'>#{tech}</li>
                ))}
              </ul>

              <div className="text-2xl flex gap-3">
                <a href={project.github} target="_blank" className="hover:text-textGreen">
                  <FiGithub />
                </a>
                <a href={project.demo} target="_blank" className="hover:text-textGreen group relative w-auto">
                  <RxOpenInNewWindow />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
