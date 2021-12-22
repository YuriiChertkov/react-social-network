import React from "react";
import s from "./ProfileInfo.module.css";

const ProfileInfo = (props) => {
  return (
    <div>
      <div className={s.img}>
        <img src="https://p.bigstockphoto.com/GeFvQkBbSLaMdpKXF1Zv_bigstock-Aerial-View-Of-Blue-Lakes-And--227291596.jpg"  alt="Background"/>
      </div>
      <div className={s.profileinfo}>ava+descripton</div>
    </div>
  );
};

export default ProfileInfo;
