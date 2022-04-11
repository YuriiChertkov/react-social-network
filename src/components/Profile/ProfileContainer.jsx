import React from "react";
import { connect } from "react-redux";
import Profile from "./Profile";
import { getUserProfile } from "../../redux/profile_reducer";
import { withRouter } from "react-router-dom";
import { withLoginRedirect } from "../../hoc/LoginRedirect";
class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = 2;
    }
    this.props.getUserProfile(userId);
  }

  render() {
    return (
      <div>
        <Profile {...this.props} profile={this.props.profile} />
      </div>
    );
  }
}

let LoginRedirectComponent = withLoginRedirect(ProfileContainer);

let mapStateToProps = (state) => {
  return {
    profile: state.profilePage.profile,
  };
};

let withUrlDataCC = withRouter(LoginRedirectComponent);

export default connect(mapStateToProps, { getUserProfile })(withUrlDataCC);
