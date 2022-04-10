import { usersAPI } from "./../api/api";
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
        ...action.data,
        isLogined: true,
      };

    default:
      return state;
  }
};

export const setLoginUserData = (id, login, email) => ({
  type: SET_USER_DATA,
  data: { id, login, email },
});

export const authUser = () => (dispatch) => {
  usersAPI.getLoginUser().then((data) => {
    if (data.resultCode === 0) {
      let { id, login, email } = data.data;
      dispatch(setLoginUserData(id, login, email));
    }
  });
};

export default loginReducer;
