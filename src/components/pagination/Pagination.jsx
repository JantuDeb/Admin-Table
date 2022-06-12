import { useUsers } from "../../context/users/user-context";
import {
  getNextEnabled,
  getPreviousEnabled,
} from "../../utils/pagination-helper";

export const Pagination = () => {
  const {
    currentPage,
    totalPages,
    setNextPage,
    setPreviousPage,
    setPage,
    totalItems,
  } = useUsers();

  const pages = [...Array(totalPages)].map((_, i) => i);
  const isPreviousEnabled = getPreviousEnabled(currentPage);
  const isNextEnabled = getNextEnabled(currentPage, totalPages);

  if (totalItems <= 10) return null;
  return (
    <nav aria-label="page navigation" className="flex m-2 justify-end">
      <ul className="inline-flex items-center -space-x-px">
        <li>
          <button
            disabled={!isPreviousEnabled}
            onClick={()=>setPage(0)}
            className="disabled:cursor-not-allowed block py-2 px-3 ml-0 leading-tight text-gray-500 bg-white rounded-l-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
          >
            <span className="sr-only">First Page</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6 6 6zM6 6h2v12H6z" />
              <path d="M24 24H0V0h24v24z" fill="none" />
            </svg>
          </button>
        </li>
        <li>
          <button
            disabled={!isPreviousEnabled}
            onClick={setPreviousPage}
            className="disabled:cursor-not-allowed block py-2 px-3 ml-0 leading-tight text-gray-500 bg-white rounded-l-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
          >
            <span className="sr-only">Previous</span>
            <svg
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
        </li>
        {pages.map((page) => {
          return (
            <li key={page}>
              <button
                onClick={() => setPage(page)}
                className={`${
                  page === currentPage ? "dark:bg-gray-600" : "dark:bg-gray-800"
                } py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700  dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white`}
              >
                {page + 1}
              </button>
            </li>
          );
        })}

        <li>
          <button
            disabled={!isNextEnabled}
            onClick={setNextPage}
            className="disabled:cursor-not-allowed block py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
          >
            <span className="sr-only">Next</span>
            <svg
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
        </li>
        <li>
          <button
            disabled={!isNextEnabled}
            onClick={() => setPage(totalPages - 1)}
            className="disabled:cursor-not-allowed block py-2 px-3 leading-tight text-gray-500 bg-white rounded-r-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
          >
            <span className="sr-only">Last</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path d="M5.59 7.41L10.18 12l-4.59 4.59L7 18l6-6-6-6zM16 6h2v12h-2z" />
            </svg>
          </button>
        </li>
      </ul>
    </nav>
  );
};
