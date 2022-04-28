import React from "react";
import { connect } from "react-redux";
import { logout } from "../../redux/login_reducer";
import Header from "./Header";
class HeaderContainer extends React.Component {
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
export default connect(mapStateToProps, { logout })(HeaderContainer);
