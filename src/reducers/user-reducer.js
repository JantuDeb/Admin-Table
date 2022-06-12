import { getTotalPages } from "../utils/pagination-helper";
import { userActions } from "../actions/user-actions";

const getUpdatedUser = (state, payload, value) => {
  return state.users.map((user) => ({
    ...user,
    selected: payload.paginatedUsers.some((_user) => _user.id === user.id)
      ? value
      : user.selected,
  }));
};

export const userReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case userActions.SET_USERS:
      return {
        ...state,
        users: payload.users,
      };
    case userActions.SELECT_USER:
      return {
        ...state,
        users: state.users.map((user) =>
          user.id === payload.userId
            ? { ...user, selected: !user.selected }
            : user
        ),
      };
    case userActions.SELECT_ALL:
      return {
        ...state,
        users: getUpdatedUser(state, payload, true),
      };
    case userActions.DE_SELECT_ALL:
      return {
        ...state,
        users: getUpdatedUser(state, payload, false),
      };
    case userActions.DELETE_SELECTED:
      const newUsers = state.users.filter((user) => !user.selected);
      return {
        ...state,
        users: newUsers,
        currentPage:
          getTotalPages(newUsers.length, 10) === state.currentPage &&
          state.currentPage !== 0
            ? state.currentPage - 1
            : state.currentPage,
      };

    case userActions.DELETE_USER:
      return {
        ...state,
        users: state.users.filter((user) => user.id !== payload.userId),
      };
    case userActions.SET_PAGE:
      return { ...state, currentPage: payload.page };

    case userActions.NEXT_PAGE:
      return { ...state, currentPage: state.currentPage + 1 };
    case userActions.PREVIOUS_PAGE:
      return { ...state, currentPage: state.currentPage - 1 };
    case userActions.UPDATE_USER:
      return {
        ...state,
        users: state.users.map((user) =>
          user.id === payload.user.id ? { ...payload.user } : user
        ),
      };
    default:
      return state;
  }
};
