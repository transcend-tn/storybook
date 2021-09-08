import Fade from "react-reveal/Fade";
interface Technology {
  name: string;
  img: {
    url: string;
  };
}
export default function Technologies({
  title,
  data,
}: {
  title: string;
  data: Technology[];
}) {
  return (
    <section
      id="technologies"
      className="bg-gray-50 dark:bg-gray-800 dark:text-gray-300 min-h-screen flex justify-center items-center"
    >
      <div className="transform scale-75 bg-gray-50 dark:bg-gray-800 dark:text-white">
        <div className="text-center">
          <Fade down delay={300} distance="20px">
            <h2 className="mb-12 text-4xl text-gray-700 dark:text-gray-300 font-bold tracking-wide">
              {title.toUpperCase()}
            </h2>
          </Fade>
        </div>
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8 dark:bg-gray-200">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-6 lg:grid-cols-5">
            {data.map((t, delay) => (
              <div key={t.name} className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                <Fade right delay={delay * 300 + 300} distance="20px">
                  <img className="h-12" src={t.img.url} alt={t.name} />
                </Fade>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
