import React from "react";

export const ChceckBox = ({ selected, id , handleChange}) => {
  return (
    <div className="flex items-center">
      <input
        id={id}
        type="checkbox"
        onChange={handleChange}
        checked={selected}
        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
      />
      <label htmlFor="checkbox-table-1" className="sr-only">
        checkbox
      </label>
    </div>
  );
};
