export const getSortedData = (state, data) => {
  const { sortBy } = state;
  const dataToSort = [...data];
  if (sortBy.colName !== "") {
    return dataToSort.sort((a, b) => {
      if (sortBy.direction === "ascending") {
        return a[sortBy.colName].localeCompare(b[sortBy.colName]);
      } else {
        return b[sortBy.colName].localeCompare(a[sortBy.colName]);
      }
    });
  }
  return data;
};

export const getFilteredData = (state, data) => {
  const { filterBy } = state;
  if (filterBy.searchQuery === "") return data;
  return data.filter(
    (user) =>
      user.name.includes(filterBy.searchQuery) ||
      user.email.includes(filterBy.searchQuery) ||
      user.role.includes(filterBy.searchQuery)
  );
};
