import { usersAPI } from "./../api/api";
const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_TOTAL_COUNT = "SET_TOTAL_COUNT";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";
const TOGGLE_IS_FOLLOWING_PROGRESS = "TOGGLE_IS_FOLLOWING_PROGRESS";

let initialState = {
  users: [],
  pageSize: 5,
  totalCountUsers: 0,
  currentPage: 1,
  isFetching: true,
  followningInProgres: [],
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userID) {
            return { ...u, followed: true };
          }
          return u;
        }),
      };

    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userID) {
            return { ...u, followed: false };
          }
          return u;
        }),
      };

    case SET_USERS:
      return {
        ...state,
        users: [...action.users],
      };

    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.currentPage,
      };

    case SET_TOTAL_COUNT:
      return {
        ...state,
        totalCountUsers: action.totalCountUsers,
      };

    case TOGGLE_IS_FETCHING:
      return {
        ...state,
        isFetching: action.isFetching,
      };

    case TOGGLE_IS_FOLLOWING_PROGRESS:
      return {
        ...state,
        followningInProgres: action.isFetching
          ? [...state.followningInProgres, action.userID]
          : state.followningInProgres.filter((id) => id !== action.userID),
      };

    default:
      return state;
  }
};

export const follow = (userID) => ({
  type: FOLLOW,
  userID,
});

export const unfollow = (userID) => ({
  type: UNFOLLOW,
  userID,
});

export const setUsers = (users) => ({
  type: SET_USERS,
  users,
});

export const setCurrentPage = (currentPage) => ({
  type: SET_CURRENT_PAGE,
  currentPage,
});

export const setTotalCount = (totalCountUsers) => ({
  type: SET_TOTAL_COUNT,
  totalCountUsers,
});

export const isFetching = (isFetching) => ({
  type: TOGGLE_IS_FETCHING,
  isFetching,
});

export const toggleFollowningProgres = (isFetching, userID) => ({
  type: TOGGLE_IS_FOLLOWING_PROGRESS,
  isFetching,
  userID,
});

export const getUsers = (page, pageSize) => {
  return (dispatch) => {
    dispatch(isFetching(true));
    dispatch(setCurrentPage(page));

    usersAPI.getUsers(page, pageSize).then((data) => {
      dispatch(isFetching(false));
      dispatch(setUsers(data.items));
      dispatch(setTotalCount(data.totalCount));
    });
  };
};

export const followUsers = (id) => {
  return (dispatch) => {
    dispatch(toggleFollowningProgres(true, id));
    usersAPI.followUsers(id).then((data) => {
      if (data.resultCode === 0) {
        dispatch(follow(id));
      }
      dispatch(toggleFollowningProgres(false, id));
    });
  };
};
export const unfollowUsers = (id) => {
  return (dispatch) => {
    dispatch(toggleFollowningProgres(true, id));
    usersAPI.unfollowUsers(id).then((data) => {
      if (data.resultCode === 0) {
        dispatch(unfollow(id));
      }
      dispatch(toggleFollowningProgres(false, id));
    });
  };
};

export default usersReducer;
