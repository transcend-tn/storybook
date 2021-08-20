import Fade from "react-reveal/Fade";

export default function Hero({ title, subtitle, description, slug }) {
  return (
    <section id={slug} className="bg-gray-50 min-h-screen flex justify-center items-center dark:bg-gray-800 dark:text-white">
      <div className="transform scale-75 bg-gray-50 dark:bg-gray-800 flex relative z-20 items-center overflow-hidden">
        <div className="container mx-auto px-6 flex relative py-16">
          <div className="sm:w-2/3 lg:w-2/5 flex flex-col relative z-20">
            <Fade left delay={300} distance="20px">
              {" "}
              <span className="w-20 h-2 bg-gray-800 dark:bg-white mb-12"></span>
            </Fade>
            <h1 className="font-bebas-neue uppercase text-6xl sm:text-8xl font-black flex flex-col leading-none dark:text-white text-gray-800">
              <Fade left delay={300} distance="20px">
                {" "}
                {title}
              </Fade>
              <span className="font-light max-w-2xl mx-auto w-full text-2xl dark:text-white text-gray-500 py-8">
                <Fade left delay={600} distance="20px">
                  {" "}
                  {subtitle}
                </Fade>
              </span>
            </h1>
            <Fade left delay={900} distance="45px">
              <p className="text-sm sm:text-base text-gray-700 dark:text-white">
                {description}
              </p>
            </Fade>
          </div>
          <Fade right delay={300} distance="20px">
            <div className="hidden sm:block sm:w-1/3 lg:w-3/5 relative">
              <img src="/hero.png" className="max-w-xs md:max-w-5xl m-auto" />
            </div>
          </Fade>
        </div>
      </div>
    </section>
  );
}
