import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useReducer,
} from "react";
import { getFilteredData, getSortedData } from "../../utils/filter-helper";
import {
  getEndIndex,
  getStartIndex,
  getTotalPages,
} from "../../utils/pagination-helper";
import {
  filterReducer,
  initialFilterState,
} from "../../reducers/filter-reducer";
import { userActions } from "../../actions/user-actions";
import { userReducer } from "../../reducers/user-reducer";

const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [userState, userDispatch] = useReducer(userReducer, {
    users: [],
    pageSize: 10,
    currentPage: 0,
    loading: false,
  });

  const [filterState, filterDispatch] = useReducer(
    filterReducer,
    initialFilterState
  );

  const { pageSize, currentPage,loading } = userState;
  const filteredUsers = getFilteredData(filterState, userState.users);
  const sortedUsers = getSortedData(filterState, filteredUsers);
  const totalItems = sortedUsers.length;
  const totalPages = getTotalPages(totalItems, pageSize);
  const startIndex = getStartIndex(pageSize, currentPage);
  const endIndex = getEndIndex(pageSize, currentPage, totalItems);
  const paginatedUsers = sortedUsers.slice(startIndex, endIndex + 1);

  const setPage = useCallback((page) => {
    userDispatch({
      type: userActions.SET_PAGE,
      payload: { page },
    });
  }, []);

  const setNextPage = useCallback(
    () => userDispatch({ type: userActions.NEXT_PAGE }),
    []
  );

  const setPreviousPage = useCallback(
    () => userDispatch({ type: userActions.PREVIOUS_PAGE }),
    []
  );

  // Select all the rows in currentpage

  const selectAll = () =>
    userDispatch({
      type: userActions.SELECT_ALL,
      payload: {
        paginatedUsers,
      },
    });

  // Remove all selection
  const deSelectAll = () => {
    userDispatch({
      type: userActions.DE_SELECT_ALL,
      payload: {
        paginatedUsers,
      },
    });
  };

  // Select a single user row
  const selectUser = (userId) => {
    userDispatch({
      type: userActions.SELECT_USER,
      payload: {
        userId,
      },
    });
  };

  // Delete all selected user rows
  const deleteSelected = () => {
    userDispatch({
      type: userActions.DELETE_SELECTED,
    });
  };

  const deleteUser = (userId) =>
    userDispatch({ type: userActions.DELETE_USER, payload: { userId } });

  const updateUser = (user) =>
    userDispatch({ type: userActions.UPDATE_USER, payload: { user } });

  // Load user data in APP render
  useEffect(() => {
    userDispatch({ type: userActions.SET_LOADING });
    (async () => {
      try {
        const response = await fetch(process.env.REACT_APP_API_ENDPOINT);
        const data = await response.json();
        if (data) {
          userDispatch({
            type: userActions.SET_USERS,
            payload: {
              users: data.map((user) => ({ ...user, selected: false })),
            },
          });
        }
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return (
    <UserContext.Provider
      value={{
        totalPages,
        totalItems,
        currentPage,
        setNextPage,
        setPreviousPage,
        setPage,
        paginatedUsers,
        selectUser,
        selectAll,
        deSelectAll,
        deleteSelected,
        deleteUser,
        filterDispatch,
        updateUser,
        loading
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
const useUsers = () => useContext(UserContext);

export { useUsers, UserProvider };
