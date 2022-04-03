import { applyMiddleware, combineReducers, createStore } from "redux";
import profileReducer from "./profile_reducer";
import dialogsReducer from "./dialogs_reducer";
import usersReducer from "./users_reducer";
import loginReducer from "./login_reducer";
import thunk from "redux-thunk";

let reducers = combineReducers({
    profilePage : profileReducer,
    dialogsPage : dialogsReducer,
    usersPage: usersReducer,
    login: loginReducer, 
}
);


let store = createStore(reducers, applyMiddleware(thunk));
window.store = store;

export default store;