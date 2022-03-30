import React from "react";
import s from "./Header.module.css";
import { NavLink } from "react-router-dom";
const Header = (props) => {
  return (
    <header className={s.header}>
      <img src="http://www.freelogovector.com/wp-content/uploads/2017/06/01%20-%20PNG%20My%20Company%20copy.jpg" />
      <div className={s.login}>
        {props.isLogined ? props.login : <NavLink to={"/login"}>Login</NavLink>}
      </div>
    </header>
  );
};
export default Header;
