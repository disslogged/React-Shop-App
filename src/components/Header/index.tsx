import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import Logo from "./Logo";
import { Bars4Icon } from "@heroicons/react/24/outline";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { NavLink } from "react-router-dom";
import calculateScroll from "../../utils/calculateScroll";

const Header = () => {
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const [stickyHeader, setStickyHeader] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPercentage = calculateScroll();
      if (scrollPercentage > 7) setStickyHeader(true);
      if (scrollPercentage < 7) setStickyHeader(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`overflow-hidden bg-bg-primary px-4 py-2 sm:py-3 md:py-4 ${stickyHeader ? "sticky left-0 right-0 top-0 bg-[#101010] transition duration-200" : ""} z-20`}
    >
      <div className="mx-auto flex max-w-[95%] items-center justify-between">
        <Logo />

        {/* medium and above screens  */}
        <motion.nav
          initial={{ opacity: 0, x: "100vw" }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeIn", delay: 1 }}
          className="hidden text-2xl text-purple-300 md:block md:gap-3 md:text-xl"
        >
          <ul className="flex">
            <li>
              <NavLink
                className="px-4 py-1 transition duration-300"
                to="/products"
                onClick={() => setShowMenu(false)}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                className="relative px-4 py-1 transition duration-300"
                to="/checkout"
                onClick={() => setShowMenu(false)}
              >
                Checkout
              </NavLink>
            </li>
            <li>
              <NavLink
                className="px-4 py-1 transition duration-300"
                to="/about"
                onClick={() => setShowMenu(false)}
              >
                About
              </NavLink>
            </li>
          </ul>
        </motion.nav>

        {/* mobile screen */}
        <motion.nav
          initial={{ opacity: 0, x: "100vw" }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeIn", delay: 1 }}
          className="md:hidden"
        >
          <Bars4Icon
            className="h-7 w-7 cursor-pointer text-accent md:hidden"
            onClick={() => setShowMenu(true)}
          />
        </motion.nav>

        <AnimatePresence mode="wait">
          {showMenu && (
            <>
              <div
                className="absolute inset-0 z-10 cursor-pointer bg-black opacity-70"
                onClick={() => setShowMenu(false)}
              ></div>
              <motion.div
                className="absolute bottom-0 left-1/3 right-0 top-0 z-20 bg-bg-primary"
                initial={{ height: 0 }}
                animate={{ height: "auto" }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                layout
              >
                <XMarkIcon
                  className="h-10 w-10 cursor-pointer text-red-300"
                  onClick={() => setShowMenu(false)}
                />
                <nav className="mt-10 text-center text-2xl text-purple-300">
                  <ul className="flex flex-col gap-7">
                    <li>
                      <NavLink
                        className="px-7 py-1 transition duration-300"
                        to="/products"
                        onClick={() => setShowMenu(false)}
                      >
                        Home
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        className="relative px-7 py-1 transition duration-300"
                        to="/checkout"
                        onClick={() => setShowMenu(false)}
                      >
                        checkout
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        className="px-7 py-1 transition duration-300"
                        to="/about"
                        onClick={() => setShowMenu(false)}
                      >
                        About
                      </NavLink>
                    </li>
                  </ul>
                </nav>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Header;
