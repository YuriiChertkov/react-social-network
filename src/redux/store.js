import dialogsReducer from "./dialogs_reducer";
import profileReducer from "./profile_reducer";

let store = {
  _state: {
    profilePage: {
      posts: [
        { id: 1, message: "Hi!!!", likesCount: 12 },
        { id: 2, message: "It's my first post", likesCount: 25 },
      ],
      newPostText: "default Message",
    },
    dialogsPage: {
      dialogs: [
        { id: 1, name: "Yurii" },
        { id: 2, name: "Anton" },
        { id: 3, name: "Arthur" },
        { id: 4, name: "Nikita" },
        { id: 5, name: "Yuriy" },
      ],
      messages: [
        { id: 1, message: "HI!!!" },
        { id: 2, message: "What's up?" },
        { id: 3, message: "don't worry!" },
        { id: 4, message: "HI!!" },
        { id: 5, message: "HI!" },
      ],
      newMessageBody: "",
    },
  },
  _callSubscriber() {
    console.log("state changed");
  },

  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },

  addPost() {
    let newPost = {
      id: 5,
      message: this._state.profilePage.newPostText,
      likesCount: 0,
    };
    this._state.profilePage.posts.push(newPost);
    this._state.profilePage.newPostText = "";
    this._callSubscriber(this._state);
  },
  updateNewPostText(newText) {
    this._state.profilePage.newPostText = newText;
    this._callSubscriber(this._state);
  },

  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);

    this._callSubscriber(this._state);
  },
};

export default store;
window.store = store;
