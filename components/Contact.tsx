import { useEffect, useRef, useState } from 'react';
import Fade from 'react-reveal/Fade';
import ContactMap from './Map/ContactMap';

async function sendToApi(data) {
  try {
    await fetch('/api/contact', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(data),
    });
    //if sucess do whatever you like, i.e toast notification
  } catch (error) {
    // toast error message. whatever you wish
  }
}
export default function Contact(): JSX.Element {
  const [data, setData] = useState(null);
  const emailRef = useRef(null);
  const messageRef = useRef(null);

  const sendMessage = (e) => {
    e.preventDefault();
    if (emailRef.current.value !== '' && messageRef.current.value !== '') {
      setData({
        email: emailRef.current.value,
        message: messageRef.current.value,
        toEmail: process.env.NEXT_PUBLIC_TRANSCEND_EMAIL,
      });
    }
  };

  useEffect(() => {
    if (data !== null) {
      sendToApi(data);
      emailRef.current.value = '';
      messageRef.current.value = '';
      setData(null);
    }
  }, [data]);

  return (
    <section
      id="contact"
      className="bg-gray-50 text-gray-600 dark:bg-gray-800 dark:text-gray-300 body-font relative min-h-screen flex justify-center items-center"
    >
      <form onSubmit={sendMessage}>
        <div className="transform container px-5 mx-auto flex sm:flex-nowrap flex-wrap">
          <Fade right delay={300} distance="20px">
            <div className="lg:1/2 md:w-10/12 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 flex items-end justify-start relative">
              <ContactMap />
            </div>
          </Fade>

          <Fade right delay={600} distance="20px">
            <div className="lg:w-8/12 md:w-1/2 bg-gray-50 dark:bg-gray-800 dark:text-gray-300 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
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
                  placeholder={'We use it to contact you'}
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
                  defaultValue={''}
                  placeholder={
                    'Tell us briefly about your project, or ask us anything'
                  }
                />
              </div>
              <button
                type="submit"
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
      </form>
    </section>
  );
}
