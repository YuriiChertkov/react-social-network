export const getUsersData = (state) => {
  return state.usersPage.users;
};

export const getPageSize = (state) => {
  return state.usersPage.pageSize;
};

export const getTotalCountUsers = (state) => {
  return state.usersPage.totalCountUsers;
};

export const getCurrentPage = (state) => {
  return state.usersPage.currentPage;
};

export const getIsFetching = (state) => {
    return state.usersPage.isFetching;
  };

  export const getFollowningInProgres = (state) => {
    return state.usersPage.followningInProgres;
  };  

