import { AnimatePresence, motion } from "framer-motion";
import { ReactNode } from "react";

type PageContainerProps = {
  children: ReactNode;
};

const PageContainer = ({ children }: PageContainerProps) => {
  return (
    <AnimatePresence mode="popLayout">
      <motion.section
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        exit={{
          opacity: 0,
          transition: { delay: 0 },
        }}
        transition={{
          duration: 1,
          delay: 1,
        }}
      >
        {children}
      </motion.section>
    </AnimatePresence>
  );
};

export default PageContainer;
