import { ChangeEvent } from "react";
import { useSearchParams } from "react-router-dom";

const SelectCategory = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const handleSelectCategory = (e: ChangeEvent<HTMLSelectElement>) => {
    const selectedCategory = e.target.value;
    setSearchParams({ category: selectedCategory });

    if (selectedCategory === "all") {
      const newSearchParams = new URLSearchParams(searchParams);
      newSearchParams.delete("category");
      setSearchParams(newSearchParams);
    }
  };

  return (
    <div className="selectWrapper rounded-md border border-purple-900 border-opacity-80 bg-black px-2 sm:px-4">
      <select
        className="block rounded-md border-0 bg-transparent py-1 outline-none sm:px-2 dark:border-gray-600 dark:bg-black dark:bg-opacity-95
             dark:text-cyan-300 "
        onChange={handleSelectCategory}
      >
        <option value="all" className="py-4">
          All
        </option>
        <option value="Electronics" className="py-4">
          Electronics
        </option>
        <option value="Clothes" className="py-4">
          Clothes
        </option>
      </select>
    </div>
  );
};

export default SelectCategory;
