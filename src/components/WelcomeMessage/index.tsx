import { createPortal } from "react-dom";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

import reactQuery from "../../assets/library-icons/react-query.png";
import tailwind from "../../assets/library-icons/tailwind.svg";
import redux from "../../assets/library-icons/redux.svg";
import framer from "../../assets/library-icons/framer.webp";
import swiper from "../../assets/library-icons/swiper.svg";
import toast from "../../assets/library-icons/toast.png";
import { XMarkIcon } from "@heroicons/react/24/outline";

const modalContainer = document.getElementById("modal")!;

const WelcomeMessage = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      document.body.classList.add("lockScroll");
      setShow(true);
    }, 4000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  const handleClose = () => {
    setShow(false);
    document.body.classList.remove("lockScroll");
  };

  return (
    <>
      {createPortal(
        <>
          {show &&
            createPortal(
              <motion.div
                className="fixed top-0 z-50 flex h-screen w-full items-center justify-center bg-black/60 px-5 backdrop-blur-sm"
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
                <div className="relative z-[77] flex h-[97%] flex-col items-center justify-center overflow-x-hidden overflow-y-scroll rounded-md bg-green-200 p-10">
                  <p className="mb-2 text-center font-protest text-2xl md:text-3xl">
                    Last <span className="text-purple-700">Shop</span>
                  </p>

                  <div>
                    <p className="mb-9 text-base text-gray-800 md:text-lg">
                      this website is just for test and practice this libraries:
                    </p>

                    <ul className="space-y-2 text-blue-900">
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

                  <XMarkIcon
                    className="absolute right-2 top-2 h-12 w-12 cursor-pointer text-red-700 transition hover:rotate-180"
                    onClick={handleClose}
                  />
                </div>
              </motion.div>,
              modalContainer!,
            )}
        </>,
        modalContainer,
      )}
    </>
  );
};

export default WelcomeMessage;
