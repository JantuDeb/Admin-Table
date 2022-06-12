import { filterActions } from "../actions/filter-actions";

export const initialFilterState = {
  sortBy: {
    colName: "",
    direction: "ascending",
  },
  filterBy: {
    searchQuery: "",
  },
};

export const filterReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case filterActions.SORT:
      return {
        ...state,
        sortBy: {
          colName: payload.colName,
          direction:
            state.sortBy.direction === "ascending" ? "descending" : "ascending",
        },
      };
    case filterActions.RESET:
      return initialFilterState;
    case filterActions.FILTER:
      return {
        ...state,
        filterBy: {
          searchQuery: payload.searchQuery,
        },
      };
    default:
      return state;
  }
};
