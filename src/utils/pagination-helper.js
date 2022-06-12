export const getPreviousEnabled = (currentPage) => currentPage > 0;

export const getNextEnabled = (currentPage, totalPages) =>
  currentPage + 1 < totalPages;

export const getTotalPages = (totalItems, pageSize) =>{
  return Math.ceil(totalItems / pageSize);
}

export const getStartIndex = (pageSize, currentPage) => pageSize * currentPage;

export const getEndIndex = (pageSize, currentPage, totalItems) => {
  const lastPageEndIndex = pageSize * (currentPage + 1);
  if (lastPageEndIndex > totalItems) {
    return totalItems - 1;
  }

  return lastPageEndIndex - 1;
};
