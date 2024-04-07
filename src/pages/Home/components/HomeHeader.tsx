import PageHeader from "../../../ui/PageHeader";
import SelectCategory from "./SelectCategory";

const HomeHeader = () => {
  return (
    <header className="flex items-center justify-between px-4 sm:px-0">
      <PageHeader>lastshop PRODUCTS</PageHeader>
      <SelectCategory />
    </header>
  );
};

export default HomeHeader;
