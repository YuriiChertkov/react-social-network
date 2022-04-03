import React from "react";
import s from "./users.module.css";
import userPhoto from "../../assets/images/icon.jpg";
import { NavLink } from "react-router-dom";
import { usersAPI } from "../../api/api";

const Users = (props) => {
  let pagesCount = Math.ceil(props.totalCountUsers / props.pageSize);

  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }
  return (
    <div>
      <div>
        {pages.map((p) => {
          return (
            <span
              className={props.currentPage === p && s.selectedPage}
              onClick={(e) => {
                props.onPageChanged(p);
              }}
            >
              {p}
            </span>
          );
        })}
      </div>
      {props.users.map((u) => (
        <div key={u.id}>
          <span>
            <div>
              <NavLink to={"/profile/" + u.id}>
                <img
                  src={u.photos.small != null ? u.photos.small : userPhoto}
                  className={s.img}
                />
              </NavLink>
            </div>
            <div>
              {u.followed ? (
                <button
                  disabled={props.followningInProgres.some((id) => id === u.id)}
                  onClick={() => {
                    props.unfollowUsers(u.id);
                  }}
                >
                  Unfollow
                </button>
              ) : (
                <button
                  disabled={props.followningInProgres.some((id) => id === u.id)}
                  onClick={() => {
                    props.followUsers(u.id);
                  }}
                >
                  Follow
                </button>
              )}
            </div>
          </span>
          <span>
            <span>
              <div>{u.name}</div>
              <div>{u.status}</div>
            </span>
            <span>
              <div>{"u.location.country"}</div>
              <div>{"u.location.city"}</div>
            </span>
          </span>
        </div>
      ))}
    </div>
  );
};

export default Users;
