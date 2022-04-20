import React from "react";
import s from "./ProfileInfo.module.css";
import Preloader from "../../common/preloader";
import ProfileStatus from "./ProfileStatus";

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
          <ProfileStatus
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
