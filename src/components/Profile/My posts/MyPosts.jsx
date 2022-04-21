import React from "react";
import { reduxForm } from "redux-form";
import { Field } from "redux-form";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {
  let postsElements = props.posts.map((p) => (
    <Post message={p.message} likesCount={p.likesCount} />
  ));

  let onAddPost = (values) => {
    props.addPost(values.newPostText);
  };
  return (
    <div className={s.post}>
      <h3>My posts </h3>
      <div>New post</div>
      < AddNewPostFormRedux onSubmit={onAddPost} />
      <div className={s.posts}>{postsElements}</div>
      <div></div>
    </div>
  );
};

const AddNewPostForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          component={"textarea"}
          name={"newPostText"}
          placeholder="Enter your post"
        />
      </div>
      <div>
        <button className={s.btn}>Add post</button>
      </div>
    </form>
  );
};

const AddNewPostFormRedux = reduxForm({ form: "ProfileAddNewPostForm" })(AddNewPostForm);
export default MyPosts;
