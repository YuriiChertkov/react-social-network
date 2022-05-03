import React from "react";
import { connect } from "react-redux";
import {
  followUsers,
  getUsers,
  setCurrentPage,
  toggleFollowningProgres,
  unfollowUsers,
} from "../../redux/users_reducer";
import Preloader from "../common/preloader";
import {
  getCurrentPage,
  getFollowningInProgres,
  getIsFetching,
  getPageSize,
  getTotalCountUsers,
  getUsersSuperSelector,
} from "./../../redux/users_selectors";
import Users from "./Users";
class UsersAPIComponent extends React.Component {
  componentDidMount() {
    this.props.getUsers(this.props.currentPage, this.props.pageSize);
  }

  onPageChanged = (pageNumber) => {
    this.props.getUsers(pageNumber, this.props.pageSize);
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
    users: getUsersSuperSelector(state),
    pageSize: getPageSize(state),
    totalCountUsers: getTotalCountUsers(state),
    currentPage: getCurrentPage(state),
    isFetching: getIsFetching(state),
    followningInProgres: getFollowningInProgres(state),
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
