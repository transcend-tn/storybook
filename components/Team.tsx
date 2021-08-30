import React from 'react';
import Fade from 'react-reveal/Fade';
import TeamMemberCard from './TeamMemberCard/TeamMemberCard';
interface TeamMember {
  name: string;
  role: string;
  description: string;
  icon: {
    url: string;
  };
  social: {
    facebook: string;
    twitter: string;
    github: string;
    linkedin: string;
  };
}
export default function Team({ data }: { data: TeamMember[] }) {
  return (
    <section
      id={`team`}
      className={`min-h-screen flex justify-center items-center dark:bg-gray-700`}
    >
      <div className="transform scale-75 mx-auto px-5 max-w-screen-xl bg-white dark:bg-gray-700">
        <Fade down delay={300} distance="20px">
          <p className="text-center text-3xl font-bold text-gray-800 dark:text-white">
            OUR TEAM
          </p>
        </Fade>
        <Fade up delay={600} distance="20px">
          <p className="text-center mt-3 mb-12 text-xl font-normal text-gray-500 dark:text-gray-400">
            We offer a team of veteran developers, technical experts, and
            strategists who know the right questions to ask to get you on track
            with the right features, the perfect platform and the capacity to
            scale up your business.
          </p>
        </Fade>
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
      </div>
    </section>
  );
}
