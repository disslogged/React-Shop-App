type PaginationProps = {
  currentPage: number;
  setCurrentPage: (page: number) => void;
};

const Pagination = ({ currentPage, setCurrentPage }: PaginationProps) => {
  return (
    <div className="mt-10 flex items-center justify-center gap-4 text-purple-300">
      <span className="block text-xl">page:</span>
      <div className="flex w-max items-center justify-center gap-4 text-xl text-blue-300">
        <span
          className={`block cursor-pointer px-2 ${currentPage === 0 && "border-b border-purple-300"}`}
          onClick={() => {
            setCurrentPage(0);
            window.scroll(0, 0);
          }}
        >
          1
        </span>
        <span
          className={`block cursor-pointer px-2 ${currentPage === 1 && "border-b border-purple-300"}`}
          onClick={() => {
            setCurrentPage(1);
            window.scroll(0, 0);
          }}
        >
          2
        </span>
      </div>
    </div>
  );
};

export default Pagination;
