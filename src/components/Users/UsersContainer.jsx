import React from "react";
import { connect } from "react-redux";
import {
  follow,
  setCurrentPage,
  setUsers,
  unfollow,
  setTotalCount,
  isFetching,
  toggleFollowningProgres
} from "../../redux/users_reducer";
import Users from "./Users";

import Preloader from "../common/preloader";
import { usersAPI } from "../../api/api";

class UsersAPIComponent extends React.Component {
  componentDidMount() {
    this.props.toggleIsFetching(true);

    usersAPI
      .getUsers(this.props.currentPage, this.props.pageSize)
      .then((data) => {
        this.props.toggleIsFetching(false);
        this.props.setUsers(data.items);
        this.props.setTotalCount(data.totalCount);
      });
  }

  onPageChanged = (pageNumber) => {
    this.props.setCurrentPage(pageNumber);
    this.props.toggleIsFetching(true);
    usersAPI.getUsers(pageNumber, this.props.pageSize).then((data) => {
      this.props.toggleIsFetching(false);
      this.props.setUsers(data.items);
    });
  };

  render() {
    return (
      <>
        {this.props.isFetching ? <Preloader /> : null}
        <Users
          totalCountUsers={this.props.totalCountUsers}
          pageSize={this.props.pageSize}
          currentPage={this.props.currentPage}
          onPageChanged={this.onPageChanged}
          users={this.props.users}
          follow={this.props.follow}
          unfollow={this.props.unfollow}
          toggleFollowningProgres={this.props.toggleFollowningProgres}
          followningInProgres = {this.props.followningInProgres}
        />
      </>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalCountUsers: state.usersPage.totalCountUsers,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
    followningInProgres: state.usersPage.followningInProgres,
  };
};

const UsersContainer = connect(mapStateToProps, {
  follow,
  unfollow,
  setUsers,
  setCurrentPage,
  setTotalCount,
  toggleIsFetching: isFetching,
  toggleFollowningProgres,
})(UsersAPIComponent);

export default UsersContainer;
