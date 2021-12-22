const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const UPDATE_NEW_MESSAGE_BODY = "UPDATE-NEW-MESSAGE-BODY";
const SEND_MESSAGE = "SEND-MESSAGE";
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
    if (action.type === ADD_POST) {
      let newPost = {
        id: 5,
        message: this._state.profilePage.newPostText,
        likesCount: 0,
      };
      this._state.profilePage.posts.push(newPost);
      this._state.profilePage.newPostText = "";
      this._callSubscriber(this._state);
    } else if (action.type === UPDATE_NEW_POST_TEXT) {
      this._state.profilePage.newPostText = action.newText;
      this._callSubscriber(this._state);
    } else if (action.type === UPDATE_NEW_MESSAGE_BODY) {
      this._state.dialogsPage.newMessageBody = action.body;
      this._callSubscriber(this._state);
    } else if (action.type === SEND_MESSAGE) {
      let body = this._state.dialogsPage.newMessageBody;
      this._state.dialogsPage.newMessageBody = "";
      this._state.dialogsPage.messages.push({ id: 6, message: body });
      this._callSubscriber(this._state);
    }
  },
};
export const AddPostActionCreator = () => {
  return {
    type: ADD_POST,
  };
};

export const UpdateNewPostTextActionCreator = (text) => {
  return {
    type: UPDATE_NEW_POST_TEXT,
    newText: text,
  };
};

export const UpdateNewMessageBodyActionCreator = (body) => {
  return {
    type: UPDATE_NEW_MESSAGE_BODY,
    body: body,
  };
};

export const SendMessageActionCreator = () => {
  return {
    type: SEND_MESSAGE,
  };
};

export default store;
window.store = store;
