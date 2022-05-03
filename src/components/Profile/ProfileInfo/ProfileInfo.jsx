import React from "react";
import Preloader from "../../common/preloader";
import s from "./ProfileInfo.module.css";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader />;
  }
  return (
    <div>
      <div className={s.profileinfo}>
        <div>
          <img src={props.profile.photos.large} alt="img" />
        </div>
        <div>
          <ProfileStatusWithHooks
            status={props.status}
            updateStatus={props.updateStatus}
          />
        </div>
        <h3>Contacts:</h3>
        <p>{props.profile.contacts.vk}</p>
        <p>{props.profile.contacts.twitter}</p>
      </div>
    </div>
  );
};

export default ProfileInfo;
