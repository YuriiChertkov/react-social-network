import { usersAPI } from "./../api/api";
const ADD_POST = "ADD-POST";
const SET_PROFILE_USER = "SET_PROFILE_USER";
const SET_STATUS = "SET_STATUS";

let initialState = {
  posts: [
    { id: 1, message: "Hi!!!", likesCount: 12 },
    { id: 2, message: "It's my first post", likesCount: 25 },
  ],
  profile: null,
  status: "",
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      let newPost = {
        id: 5,
        message: action.newPostText,
        likesCount: 0,
      };
      return {
        ...state,
        posts: [...state.posts, newPost],
        newPostBody: " ",
      };
    }
    case SET_PROFILE_USER: {
      return { ...state, profile: action.profile };
    }
    case SET_STATUS: {
      return { ...state, status: action.status };
    }
    default:
      return state;
  }
};

export const addPostActionCreator = (newPostText) => {
  return {
    type: ADD_POST,
    newPostText: newPostText,
  };
};

export const setProfileUser = (profile) => {
  return {
    type: SET_PROFILE_USER,
    profile,
  };
};

export const setStatus = (status) => {
  return {
    type: SET_STATUS,
    status,
  };
};

export const getUserProfile = (userId) => (dispatch) => {
  usersAPI.getProfile(userId).then((response) => {
    dispatch(setProfileUser(response.data));
  });
};

export const getStatus = (userId) => (dispatch) => {
  usersAPI.getStatus(userId).then((response) => {
    dispatch(setStatus(response.data));
  });
};

export const updateStatus = (status) => (dispatch) => {
  usersAPI.updateStatus(status).then((response) => {
    if (response.data.resultCode === 0) {
      dispatch(setStatus(status));
    }
  });
};

export default profileReducer;
