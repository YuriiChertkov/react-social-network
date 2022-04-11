import { usersAPI } from "../api/api";

const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const SET_PROFILE_USER = "SET_PROFILE_USER";

let initialState = {
  posts: [
    { id: 1, message: "Hi!!!", likesCount: 12 },
    { id: 2, message: "It's my first post", likesCount: 25 },
  ],
  newPostText: "default Message",
  profile: null,
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      let newPost = {
        id: 5,
        message: state.newPostText,
        likesCount: 0,
      };
      return {
        ...state,
        posts: [state.posts, newPost],
        newPostText: "",
      };
    }
    case UPDATE_NEW_POST_TEXT: {
      return { ...state, newPostText: action.newText };
    }
    case SET_PROFILE_USER: {
      return { ...state, profile: action.profile };
    }
    default:
      return state;
  }
};

export const addPostActionCreator = () => {
  return {
    type: ADD_POST,
  };
};

export const updateNewPostTextActionCreator = (text) => {
  return {
    type: UPDATE_NEW_POST_TEXT,
    newText: text,
  };
};

export const setProfileUser = (profile) => {
  return {
    type: SET_PROFILE_USER,
    profile,
  };
};

export const getProfileUser = (userId) => (dispatch) => {
  usersAPI.getProfile(userId).then((response) => {
    dispatch(setProfileUser(response.data));
  });
};

export default profileReducer;
