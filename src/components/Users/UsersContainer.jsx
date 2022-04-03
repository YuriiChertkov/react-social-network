import React from "react";
import { connect } from "react-redux";
import {
  setCurrentPage,
  toggleFollowningProgres,
  getUsers,
  unfollowUsers,
  followUsers
} from "../../redux/users_reducer";
import Users from "./Users";
import Preloader from "../common/preloader";
class UsersAPIComponent extends React.Component {
  componentDidMount() {
    this.props.getUsers(this.props.currentPage, this.props.pageSize);
  }

  onPageChanged = (pageNumber) => {
    this.props.getUsers(pageNumber, this.props.pageSize);
    /* this.props.setCurrentPage(pageNumber);
    this.props.toggleIsFetching(true);
    usersAPI.getUsers(pageNumber, this.props.pageSize).then((data) => {
      this.props.toggleIsFetching(false);
      this.props.setUsers(data.items);
    }); */
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
          followUsers={this.props.followUsers}
          unfollowUsers={this.props.unfollowUsers}
          toggleFollowningProgres={this.props.toggleFollowningProgres}
          followningInProgres={this.props.followningInProgres}
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
  followUsers,
  unfollowUsers,
  setCurrentPage,
  toggleFollowningProgres,
  getUsers,
})(UsersAPIComponent);

export default UsersContainer;
