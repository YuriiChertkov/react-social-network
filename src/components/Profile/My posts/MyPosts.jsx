import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import {
  UpdateNewPostTextActionCreator,
  AddPostActionCreator,
} from "../../../redux/profile_reducer";

const MyPosts = (props) => {
  let postsElements = props.posts.map((p) => (
    <Post message={p.message} likesCount={p.likesCount} />
  ));

  let newPostElement = React.createRef();

  let addPost = () => {
    props.dispatch(AddPostActionCreator());
  };

  let onPostChange = () => {
    let text = newPostElement.current.value;
    let action = UpdateNewPostTextActionCreator(text);
    props.dispatch(action);
  };
  return (
    <div className={s.post}>
      My posts
      <div>New post</div>
      <div>
        <textarea
          onChange={onPostChange}
          ref={newPostElement}
          value={props.newPostText}
        />
      </div>
      <div>
        <button className={s.btn} onClick={addPost}>
          {" "}
          Add post
        </button>
      </div>
      <div className={s.posts}>{postsElements}</div>
      <div></div>
    </div>
  );
};
export default MyPosts;
