import React from "react";
import { connect } from "react-redux";
import Header from "./Header";
import { setLoginUserData } from "../../redux/login_reducer";
import { usersAPI } from "./../../api/api";
class HeaderContainer extends React.Component {
  componentDidMount() {
    usersAPI.getLoginUser().then((data) => {
      if (data.resultCode === 0) {
        let { id, login, email } = data.data;
        this.props.setLoginUserData(id, login, email);
      }
    });
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
export default connect(mapStateToProps, { setLoginUserData })(HeaderContainer);
