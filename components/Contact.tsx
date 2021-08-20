import { useEffect, useRef, useState } from "react";
import Fade from "react-reveal/Fade";

async function sendToApi(data) {
  try {
    await fetch("/api/contact", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    });
    //if sucess do whatever you like, i.e toast notification
  } catch (error) {
    // toast error message. whatever you wish
  }
}
export default function Contact() {
  const [data, setData] = useState(null);
  const emailRef = useRef(null);
  const messageRef = useRef(null);

  const sendMessage = () => {
    if (emailRef.current.value !== "" && messageRef.current.value !== "") {
      setData({
        email: emailRef.current.value,
        message: messageRef.current.value,
        toEmail: process.env.NEXT_PUBLIC_TRANSCEND_EMAIL
      });
    }
  };

  useEffect(() => {
    if (data !== null) {
      sendToApi(data);
      emailRef.current.value = "";
      messageRef.current.value = "";
      setData(null);
    }
  }, [data]);

  return (
    <section
      id="contact"
      className="bg-gray-50 text-gray-600 dark:bg-gray-800 dark:text-gray-300 body-font relative min-h-screen flex justify-center items-center"
    >
      <div className="transform container px-5 mx-auto flex sm:flex-nowrap flex-wrap">
        <Fade right delay={300} distance="20px">
          <div className="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
            <iframe
              width="100%"
              height="100%"
              className="absolute inset-0"
              frameBorder={0}
              title="map"
              marginHeight={0}
              marginWidth={0}
              scrolling="no"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3234.4850421117485!2d10.6294673155539!3d35.83710832901404!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12fd8af50460e8d9%3A0x6f4ef245cb1b4ff7!2sDomiciliation%20Tunisie%20(Agence%20Sousse)!5e0!3m2!1sen!2sus!4v1624965392140!5m2!1sen!2sus"
              style={{ filter: "grayscale(1) contrast(1.2) opacity(0.4)" }}
            />
            <div className="bg-white dark:bg-gray-800 dark:text-gray-300 relative flex flex-wrap py-6 rounded shadow-md">
              <div className="lg:w-1/2 px-6">
                <h2 className="title-font font-semibold text-gray-900 dark:text-gray-300 tracking-widest text-xs">
                  ADDRESS
                </h2>
                <p className="mt-1 text-gray-500">
                  Rue Ribat, Imm Mfarrej 2ème Étage Bureau 201, 4000
                  Sousse-Tunisie
                </p>
              </div>
              <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                <h2 className="title-font font-semibold text-gray-900 dark:text-gray-300 tracking-widest text-xs">
                  EMAIL
                </h2>
                <a className="text-gray-500 leading-relaxed">
                  contact@transcend.tn
                </a>
                <h2 className="title-font font-semibold text-gray-900 dark:text-gray-300 tracking-widest text-xs mt-4">
                  PHONE
                </h2>
                <p className="leading-relaxed text-gray-500">
                  (+216) 96 08 46 56
                </p>
              </div>
            </div>
          </div>
        </Fade>

        <Fade right delay={600} distance="20px">
          <div className="lg:w-1/3 md:w-1/2 bg-gray-50 dark:bg-gray-800 dark:text-gray-300 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
            <h2 className="text-gray-900 dark:text-gray-300 text-lg mb-1 font-medium title-font">
              CONTACT US
            </h2>
            <p className="leading-relaxed mb-5 text-gray-600 dark:text-gray-500">
              Have an idea for an IT solution or looking for inspiration?
              Contact us and together we can create the solution you need.
            </p>

            <div className="relative mb-4">
              <label
                htmlFor="email"
                className="leading-7 text-sm text-gray-600 dark:text-gray-400"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                ref={emailRef}
                placeholder={"We use it to contact you"}
                className="w-full bg-white rounded border border-gray-300 focus:border-gray-500 focus:ring-2 focus:ring-gray-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative mb-4">
              <label
                htmlFor="message"
                className="leading-7 text-sm text-gray-600 dark:text-gray-400"
              >
                How can we help you?
              </label>
              <textarea
                id="message"
                name="message"
                ref={messageRef}
                className="w-full bg-white rounded border border-gray-300 focus:border-gray-500 focus:ring-2 focus:ring-gray-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                defaultValue={""}
                placeholder={
                  "Tell us briefly about your project, or ask us anything"
                }
              />
            </div>
            <button
              onClick={sendMessage}
              className="text-white bg-gray-500 border-0 py-2 px-6 focus:outline-none hover:bg-gray-600 rounded text-lg"
            >
              SEND
            </button>
            <p className="text-xs text-gray-500 mt-3 dark:text-gray-400">
              Fill out the form above and we’ll get in touch within 24 hours
            </p>
          </div>
        </Fade>
      </div>
    </section>
  );
}
