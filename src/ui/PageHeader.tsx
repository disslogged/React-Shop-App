import { ReactNode } from "react";

type PageHeaderProps = { children: ReactNode };
const PageHeader = ({ children }: PageHeaderProps) => {
  return (
    <p className="bg-gradient-to-l from-accent to-purple-900 bg-clip-text font-protest text-xl text-transparent sm:text-2xl md:text-3xl">
      {children}
    </p>
  );
};

export default PageHeader;
