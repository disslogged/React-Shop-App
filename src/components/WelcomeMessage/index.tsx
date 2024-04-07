import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import reactQuery from "../../assets/library-icons/react-query.png";
import tailwind from "../../assets/library-icons/tailwind.svg";
import redux from "../../assets/library-icons/redux.svg";
import framer from "../../assets/library-icons/framer.webp";
import swiper from "../../assets/library-icons/swiper.svg";
import toast from "../../assets/library-icons/toast.png";

const WelcomeMessage = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(true);
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <div className="z-50">
          <motion.div
            className="fixed bottom-[5%] left-2 right-2 top-[5%] z-40 overflow-y-auto rounded-md bg-green-200 md:bottom-[10%] md:left-[30%] md:right-[30%] md:top-[10%]"
            initial={{
              opacity: 0,
              y: -5000,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 1,
              ease: "circInOut",
            }}
            exit={{
              opacity: 0,
              scale: 0,
            }}
          >
            <div className="flex h-full flex-col items-center justify-center py-2">
              <div>
                <p className="mb-7 font-protest text-2xl md:text-3xl">
                  main purpose is <span className="text-purple-700">RTK</span>
                </p>
              </div>
              <div>
                <p className="mb-9 text-base text-gray-800 md:text-lg">
                  this website is just for testing purpose
                  <br /> tested library:
                </p>

                <ul className="space-y-3 text-blue-900">
                  <li className="flex items-center text-xl md:text-2xl">
                    <img
                      src={reactQuery}
                      alt="react-query"
                      className="mr-7 h-10 w-12 object-contain md:h-14 md:w-16"
                    />
                    React-Query
                  </li>
                  <li className="flex items-center text-xl md:text-2xl">
                    <img
                      src={tailwind}
                      alt="tailwind"
                      className="mr-7 h-10 w-12 object-contain md:h-14 md:w-16"
                    />
                    Tailwind
                  </li>
                  <li className="flex items-center text-xl md:text-2xl">
                    <img
                      src={redux}
                      alt="redux"
                      className="mr-7 h-10 w-12 object-contain md:h-16 md:w-16"
                    />
                    Redux & RTK
                  </li>
                  <li className="flex items-center text-xl md:text-2xl">
                    <img
                      src={swiper}
                      alt="swiper"
                      className="mr-7 h-10 w-12 object-contain md:h-16 md:w-16"
                    />
                    Swiper
                  </li>
                  <li className="flex items-center text-xl md:text-2xl">
                    <img
                      src={framer}
                      alt="motion-framer"
                      className="mr-7 h-10 w-12 object-contain md:h-16 md:w-16"
                    />
                    Motion Framer
                  </li>
                  <li className="flex items-center text-xl md:text-2xl">
                    <img
                      src={toast}
                      alt="hot-toast"
                      className="mr-7 h-10 w-12 object-contain md:h-16 md:w-16"
                    />
                    Hot-Toast
                  </li>
                </ul>
              </div>
              <button
                className="mt-7 w-[300px] cursor-pointer rounded-md bg-red-200 px-3 py-2 text-xl text-red-600 transition duration-300 hover:bg-red-600 hover:text-black"
                onClick={() => setShow(false)}
              >
                Close
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default WelcomeMessage;
