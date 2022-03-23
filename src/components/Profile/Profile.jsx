import React from "react";
import MyPostsContainer from "./My posts/MyPostsContainer";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
  return (
    <div>
      <ProfileInfo profile= {props.props}  />
      <MyPostsContainer />
    </div>
  );
};
export default Profile;
