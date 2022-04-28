import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { compose } from "redux";
import { withLoginRedirect } from "../../hoc/LoginRedirect";
import {
  getStatus,
  getUserProfile,
  updateStatus,
} from "../../redux/profile_reducer";
import Profile from "./Profile";
class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = 2 /* this.props.loginedUserId */;
    }

    this.props.getUserProfile(userId);
    this.props.getStatus(userId);
  }

  render() {
    return (
      <div>
        <Profile
          {...this.props}
          profile={this.props.profile}
          status={this.props.status}
          updateStatus={this.props.updateStatus}
        />
      </div>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    loginedUserId: state.login.userId,
    isLogined: state.login.isLogined,
  };
};

export default compose(
  connect(mapStateToProps, { getUserProfile, getStatus, updateStatus }),
  withRouter,
  withLoginRedirect
)(ProfileContainer);
