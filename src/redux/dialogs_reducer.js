const SEND_MESSAGE = "SEND_MESSAGE";

let initialState = {
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
};

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEND_MESSAGE:
      let body = action.newMessageBody;

      return {
        ...state,
        messages: [...state.messages, { id: 6, message: body }],
      };

    default:
      return state;
  }
};

export const sendMessageCreator = (newMessageBody) => {
  return {
    type: SEND_MESSAGE,
    newMessageBody: newMessageBody,
  };
};

export default dialogsReducer;
