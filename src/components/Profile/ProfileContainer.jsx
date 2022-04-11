import React from "react";
import { connect } from "react-redux";
import Profile from "./Profile";
import { getProfileUser } from "../../redux/profile_reducer";
import { withRouter } from "react-router-dom";
class ProfileContainer extends React.Component {
  componentDidMount() {
  
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = 2;
    }
    this.props.getProfileUser(userId);
  }

  render() {
    return (
      <div>
        <Profile {...this.props} profile={this.props.profile} />
      </div>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    profile: state.profilePage.profile,
  };
};

let withUrlDataCC = withRouter(ProfileContainer);

export default connect(mapStateToProps, { getProfileUser })(withUrlDataCC);
