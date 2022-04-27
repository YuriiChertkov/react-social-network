import React from "react";
import { connect } from "react-redux";
import Header from "./Header";
import { authUser, logout } from "../../redux/login_reducer";
class HeaderContainer extends React.Component {
  componentDidMount() {
    this.props.authUser();
  }

  render() {
    return <Header {...this.props} />;
  }
}
let mapStateToProps = (state) => {
  return {
    isLogined: state.login.isLogined,
    login: state.login.login,
  };
};
export default connect(mapStateToProps, { authUser, logout })(HeaderContainer);
