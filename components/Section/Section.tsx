import Fade from 'react-reveal/Fade';
import ServiceCard from '../ServiceCard/ServiceCard';

interface SectionMeta {
  title: string;
  subtitle: string;
  description: string;
  slug: string;
}
interface Section {
  name: string;
  description: string;
  icon: {
    url: string;
  };
}
export default function Section({
  meta,
  data,
  bg = '',
}: {
  meta: SectionMeta;
  data: Section[];
  bg: string;
}) {
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
        <div className="flex flex-wrap mb-16 ">
          {/* Services item */}
          {data.map((s, delay) => (
            <ServiceCard
              delay={delay}
              key={s.name}
              iconUrl={s.icon.url}
              name={s.name}
              description={s.description}
            />
          ))}
          {/* Services item */}
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
