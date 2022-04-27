import { usersAPI } from "./../api/api";
import { stopSubmit } from "redux-form";
const SET_USER_DATA = "SET_USER_DATA";

let initialState = {
  id: null,
  login: null,
  email: null,
  isLogined: false,
};

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        ...action.payload,
        
      };

    default:
      return state;
  }
};

export const setLoginUserData = (id, login, email, isLogined) => ({
  type: SET_USER_DATA,
  payload: { id, login, email, isLogined },
});

export const authUser = () => (dispatch) => {
  usersAPI.getLoginUser().then((data) => {
    if (data.resultCode === 0) {
      let { id, login, email } = data.data;
      dispatch(setLoginUserData(id, login, email, true));
    }
  });
};

export const login = (email, password, rememberMe) => (dispatch) => {
  usersAPI.login(email, password, rememberMe).then((data) => {
    if (data.resultCode === 0) {
      dispatch(authUser());
    }
    else{
      let action = stopSubmit();
    }
  });
};
export const logout = () => (dispatch) => {
  usersAPI.logout().then((data) => {
    if (data.resultCode === 0) {
      dispatch(setLoginUserData(null, null, null, false));
    }
  });
};

export default loginReducer;
