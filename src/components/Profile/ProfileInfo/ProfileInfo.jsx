import React from "react";
import s from "./ProfileInfo.module.css";
import Preloader from "../../common/preloader";

const ProfileInfo = (props) => {
  if (!props.profile){
    return <Preloader/>
  }
  return (
    <div>
      <div className={s.img}>
        <img src="https://p.bigstockphoto.com/GeFvQkBbSLaMdpKXF1Zv_bigstock-Aerial-View-Of-Blue-Lakes-And--227291596.jpg"  alt="Background"/>
      </div>
      <div className={s.profileinfo}>
        <div><img src={props.profile.photos.large}/></div>
        <h3>Contacts:</h3>  
       <p>{props.profile.contacts.vk}</p>
       <p>{props.profile.contacts.twitter}</p> 
        </div>
    </div>
  );
};

export default ProfileInfo;
