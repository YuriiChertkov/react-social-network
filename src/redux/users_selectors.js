import { createSelector } from "reselect";

const getUsersData = (state) => {
  return state.usersPage.users;
};
export const getIsFetching = (state) => {
  return state.usersPage.isFetching;
};

export const getUsersSuperSelector = createSelector(getUsersData, (users) =>
  users.filter((u) => true)
);

export const getPageSize = (state) => {
  return state.usersPage.pageSize;
};

export const getTotalCountUsers = (state) => {
  return state.usersPage.totalCountUsers;
};

export const getCurrentPage = (state) => {
  return state.usersPage.currentPage;
};

export const getFollowningInProgres = (state) => {
  return state.usersPage.followningInProgres;
};
