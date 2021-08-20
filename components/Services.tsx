import Fade from "react-reveal/Fade";

interface SectionMeta {
  title: string;
  subtitle: string;
  description: string;
  slug: string;
}
interface Service {
  name: string;
  description: string;
  icon: {
    url: string;
  };
}
export default function Services({
  meta,
  data,
  bg = "",
}: {
  meta: SectionMeta;
  data: Service[];
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
              {" "}
              {meta.subtitle}
            </Fade>
          </span>
        </div>
        <div className="flex flex-wrap mb-16 ">
          {/* Services item */}
          {data.map((s, delay) => (
            <div key={s.name} className="w-full sm:w-1/2 md:w-1/2 lg:w-1/3">
              <div className="m-4">
                <Fade right delay={delay * 300 + 300} distance="20px">
                  <div className="icon text-5xl">
                    {" "}
                    <img
                      className="mb-4 h-20 w-20 p-1 dark:bg-gray-50"
                      src={s.icon.url}
                    />
                  </div>
                  <div>
                    {" "}
                    <h3 className="text-gray-800 dark:text-gray-300 font-semibold text-lg block mb-3 uppercase">
                      {s.name}
                    </h3>{" "}
                    <p className="text-gray-600 dark:text-gray-400">
                      {s.description}
                    </p>
                  </div>
                </Fade>
              </div>
            </div>
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
