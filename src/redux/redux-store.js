import { combineReducers, createStore } from "redux";
import profileReducer from "./profile_reducer";
import dialogsReducer from "./dialogs_reducer";
import usersReducer from "./users_reducer";
import loginReducer from "./login_reducer";

let reducers = combineReducers({
    profilePage : profileReducer,
    dialogsPage : dialogsReducer,
    usersPage: usersReducer,
    login: loginReducer, 
}
);


let store = createStore(reducers);
window.store = store;

export default store;