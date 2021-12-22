import React from "react";
import s from "./Post.module.css";
const Post = (props) => {

  return (
    <div className={s.item}>
      <img src="https://img1.freepng.ru/20180403/qxw/kisspng-computer-icons-symbol-avatar-logo-clip-art-person-with-helmut-5ac354968f08a9.0046040315227506145859.jpg" alt="Avatar" />
      {props.message}
      <div>
        <span>Likes: {props.likesCount}</span>
      </div>
    </div>
  );
};
export default Post;
