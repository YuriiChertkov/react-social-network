import React from "react";
import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import { Redirect } from "react-router-dom";
import { Field } from "redux-form";
import { reduxForm } from "redux-form";

const Dialogs = (props) => {
  let state = props.dialogsPage;

  let dialogsElements = state.dialogs.map((d) => (
    <DialogItem name={d.name} key={d.id} id={d.id} />
  ));
  let messagesElements = state.messages.map((m) => (
    <Message message={m.message} id={m.id} key={m.id} />
  ));

  let addNewMessage = (values) => {
    props.sendMessage(values.newMessageBody);
  };

  if (props.isLogined === false) return <Redirect to={"/login"} />;

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>{dialogsElements}</div>
      <div className={s.messages}>
        <div>{messagesElements}</div>
        <MessageFormRedux onSubmit={addNewMessage} />
      </div>
    </div>
  );
};

const MessageForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          component={"textarea"}
          name={"newMessageBody"}
          placeholder="Enter your message"
        />
      </div>
      <div>
        <button className={s.btn}>Send</button>
      </div>
    </form>
  );
};

const MessageFormRedux = reduxForm({
  form: "messageForm",
})(MessageForm);
export default Dialogs;
