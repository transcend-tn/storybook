import React from 'react';
import Fade from 'react-reveal/Fade';
import TeamMemberCard from './TeamMemberCard/TeamMemberCard';
interface TeamMember {
  name: string;
  role: string;
  description: string;
  img: {
    url: string;
  };
  social: {
    facebook: string;
    twitter: string;
    github: string;
    linkedin: string;
  };
}
interface SectionMeta {
  title: string;
  subtitle: string;
  description: string;
  slug: string;
}
export default function Team({
  meta,
  data,
  bg = '',
}: {
  meta: SectionMeta;
  data: TeamMember[];
  bg: string;
}): JSX.Element {
  return (
    <section
      id={meta.slug}
      className={`${bg}  dark:text-gray-300 min-h-screen flex justify-center items-center`}
    >
      <div className="transform scale-75 mx-auto px-5 max-w-screen-xl">
        <div className="text-center mb-14">
          <Fade down delay={300} distance="20px">
            <h2 className="text-4xl text-gray-700 dark:text-gray-300 font-bold tracking-wide mb-5">
              {meta.title.toUpperCase()}
            </h2>
          </Fade>
          <span className="font-light max-w-2xl mx-auto w-full text-2xl dark:text-gray-400 text-gray-500">
            <Fade left delay={600} distance="20px">
              {' '}
              {meta.subtitle}
            </Fade>
          </span>
        </div>
        <div className="flex justify-center items-center md:flex-row justify evenly">
          {data.map((t, delay) => (
            <TeamMemberCard
              key={t.name}
              delay={delay}
              name={t.name}
              icon={t.img}
              role={t.role}
              description={t.description}
              social={t.social}
            />
          ))}        
          </div>
          <Fade up delay={2400} distance="20px">
            <span className="text-center font-light text-2xl dark:text-gray-500 text-gray-500">
              {meta.description}
            </span>
          </Fade>
        </div>
      </section>
    );
  }