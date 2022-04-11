import React from "react";
import MyPostsContainer from "./My posts/MyPostsContainer";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import { Redirect } from 'react-router-dom';

const Profile = (props) => {
  
  return (
    <div>
      <ProfileInfo profile= {props.profile}  />
      <MyPostsContainer />
    </div>
  );
};
export default Profile;
